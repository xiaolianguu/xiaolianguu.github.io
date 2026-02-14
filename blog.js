// 博客文章数据
let allPosts = [];
let filteredPosts = [];

// 加载文章列表
async function loadPosts() {
    try {
        const response = await fetch('posts.json');
        allPosts = await response.json();
        filteredPosts = [...allPosts];
        renderPosts(filteredPosts);
        renderCategories();
        renderTagsCloud();
    } catch (error) {
        console.error('加载文章列表失败:', error);
        document.getElementById('blog-list').innerHTML = 
            '<p class="error">抱歉，文章加载失败。请稍后再试。</p>';
    }
}

// 渲染文章列表
function renderPosts(posts) {
    const blogList = document.getElementById('blog-list');
    
    if (posts.length === 0) {
        blogList.innerHTML = '<p class="loading">没有找到相关文章</p>';
        return;
    }
    
    const postsHtml = posts.map(post => `
        <article class="blog-card" onclick="window.location.href='post.html?id=${post.id}'">
            <div class="blog-card-header">
                <div>
                    <h2 class="blog-card-title">${post.title}</h2>
                    <div class="blog-card-meta">
                        <span>📅 ${post.date}</span>
                        <span>⏱️ ${post.readTime || '5 分钟阅读'}</span>
                    </div>
                </div>
            </div>
            <p class="blog-card-description">${post.description}</p>
            <div class="blog-card-footer">
                <div class="blog-card-tags">
                    ${post.tags.map(tag => `<span class="tag-small">${tag}</span>`).join('')}
                </div>
                <span class="read-more">
                    阅读更多
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
        </article>
    `).join('');
    
    blogList.innerHTML = postsHtml;
}

// 渲染分类
function renderCategories() {
    const categories = [...new Set(allPosts.flatMap(post => post.category || []))];
    const categoriesContainer = document.getElementById('categories');
    
    const categoriesHtml = categories.map(category => 
        `<span class="category-tag" data-category="${category}">${category}</span>`
    ).join('');
    
    categoriesContainer.innerHTML = 
        '<span class="category-tag active" data-category="all">全部</span>' + categoriesHtml;
    
    // 添加点击事件
    document.querySelectorAll('.category-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            document.querySelectorAll('.category-tag').forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            filterByCategory(tag.dataset.category);
        });
    });
}

// 渲染标签云
function renderTagsCloud() {
    const tags = [...new Set(allPosts.flatMap(post => post.tags))];
    const tagsContainer = document.getElementById('tags-cloud');
    
    const tagsHtml = tags.map(tag => 
        `<span class="tag-cloud-item" data-tag="${tag}">${tag}</span>`
    ).join('');
    
    tagsContainer.innerHTML = tagsHtml;
    
    // 添加点击事件
    document.querySelectorAll('.tag-cloud-item').forEach(tag => {
        tag.addEventListener('click', () => {
            filterByTag(tag.dataset.tag);
        });
    });
}

// 按分类过滤
function filterByCategory(category) {
    if (category === 'all') {
        filteredPosts = [...allPosts];
    } else {
        filteredPosts = allPosts.filter(post => post.category === category);
    }
    renderPosts(filteredPosts);
}

// 按标签过滤
function filterByTag(tag) {
    filteredPosts = allPosts.filter(post => post.tags.includes(tag));
    renderPosts(filteredPosts);
}

// 搜索功能
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query === '') {
            filteredPosts = [...allPosts];
        } else {
            filteredPosts = allPosts.filter(post => 
                post.title.toLowerCase().includes(query) ||
                post.description.toLowerCase().includes(query) ||
                post.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }
        
        renderPosts(filteredPosts);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
    setupSearch();
});
