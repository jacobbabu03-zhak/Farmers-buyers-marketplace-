// ============ ACTIVE NAV LINK ============
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Set home as active on page load
document.querySelector('.nav-link').classList.add('active');

// ============ LIKE BUTTON FUNCTIONALITY ============
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('liked');
        
        if (this.classList.contains('liked')) {
            this.innerHTML = '<i class="fas fa-heart"></i>';
            this.style.color = '#e74c3c';
            
            // Show like animation
            const rect = this.getBoundingClientRect();
            const heart = document.createElement('div');
            heart.innerHTML = '<i class="fas fa-heart"></i>';
            heart.style.position = 'fixed';
            heart.style.left = rect.left + 'px';
            heart.style.top = rect.top + 'px';
            heart.style.color = '#e74c3c';
            heart.style.fontSize = '24px';
            heart.style.pointerEvents = 'none';
            heart.style.animation = 'floatUp 1s ease-out forwards';
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 1000);
        } else {
            this.innerHTML = '<i class="far fa-heart"></i>';
            this.style.color = '';
        }
    });
});

// ============ ADD TO CART FUNCTIONALITY ============
document.querySelectorAll('.btn-small').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const productName = this.closest('.product-card').querySelector('.product-info h3').textContent;
        showNotification(`${productName} added to cart!`);
    });
});

// ============ FOLLOW BUTTON FUNCTIONALITY ============
document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.textContent === 'Follow') {
            this.textContent = 'Following';
            this.style.backgroundColor = '#001d3d';
            this.style.color = '#ffffff';
            showNotification('Now following this farmer!');
        } else {
            this.textContent = 'Follow';
            this.style.backgroundColor = '';
            this.style.color = '';
            showNotification('Unfollowed');
        }
    });
});

// ============ NOTIFICATION SYSTEM ============
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#001d3d';
    notification.style.color = '#ffffff';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';
    notification.style.animation = 'slideIn 0.3s ease-out';
    notification.style.maxWidth = '300px';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ============ SMOOTH SCROLL FOR NAV LINKS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ SEARCH FUNCTIONALITY ============
document.querySelector('.nav-icons')?.addEventListener('click', function(e) {
    if (e.target.closest('.fa-search')) {
        e.preventDefault();
        openSearchModal();
    }
});

function openSearchModal() {
    const modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.innerHTML = `
        <div class="search-modal-content">
            <input type="text" placeholder="Search products, farmers..." class="search-input">
            <button class="close-search">&times;</button>
        </div>
    `;
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;
    
    const content = modal.querySelector('.search-modal-content');
    content.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 12px;
        width: 90%;
        max-width: 500px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    `;
    
    const input = modal.querySelector('.search-input');
    input.style.cssText = `
        width: 100%;
        padding: 12px 15px;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        font-size: 16px;
        outline: none;
    `;
    
    const closeBtn = modal.querySelector('.close-search');
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: #65676b;
    `;
    
    document.body.appendChild(modal);
    input.focus();
    
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// ============ ANIMATIONS ============
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============ PAGE LOAD ANIMATION ============
window.addEventListener('load', () => {
    document.querySelectorAll('.product-card, .farmer-card').forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
    });
});

// Add fadeInUp animation to styles
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeInStyle);

// ============ INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .farmer-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

console.log('FarmBuy Marketplace loaded successfully!');
