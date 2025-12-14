// ============================================
// Language Toggle System
// ============================================
let currentLanguage = 'zh';

const langToggle = document.getElementById('langToggle');
const htmlElement = document.documentElement;

// 初始化语言偏好
function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'zh';
    setLanguage(savedLang);
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    htmlElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    htmlElement.setAttribute('data-language', lang);
    
    // 更新所有带有data属性的元素
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
        const text = lang === 'zh' ? element.getAttribute('data-zh') : element.getAttribute('data-en');
        
        // 对于有子元素的标签，更新文本节点
        if (element.children.length === 0) {
            element.textContent = text;
        } else {
            // 对于按钮和表单标签，更新第一个文本节点
            const textNode = Array.from(element.childNodes).find(node => node.nodeType === 3);
            if (textNode) {
                textNode.textContent = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // 更新按钮文本
    langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLanguage === 'zh' ? 'en' : 'zh';
        setLanguage(newLang);
    });
}

// 页面加载时初始化语言
window.addEventListener('DOMContentLoaded', initLanguage);


// 添加合作伙伴按钮事件监听器
const partnerButton = document.getElementById('partnerButton');
if (partnerButton) {
    partnerButton.addEventListener('click', () => {
        scrollToSection('contact');
    });
}

// 添加错误处理
window.addEventListener('error', (e) => {
    console.error('发生错误:', e.error);
});

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ============================================
// Smooth Scrolling
// ============================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active');
    }
}

// ============================================
// Navbar Background on Scroll
// ============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.borderBottomColor = 'rgba(212, 175, 55, 0.4)';
    } else {
        navbar.style.borderBottomColor = 'rgba(212, 175, 55, 0.2)';
    }
});


// ============================================
// Mobile Menu Toggle
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Update language button interaction
if (langToggle) {
    const originalClickHandler = langToggle.onclick;
    langToggle.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
}

// ============================================
// Intersection Observer for Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // 给每个卡片添加延迟，实现级联闪出效果
            setTimeout(() => {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-in');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe cards and sections for fade-in animation
document.querySelectorAll('.value-card, .pillar-card, .section-title, .section-intro, .why-image, .why-text').forEach(element => {
    element.style.animationPlayState = 'paused';
    observer.observe(element);
});

// ============================================
// Add Accessibility Features
// ============================================
// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
    }
});

// Focus management for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('focus', function() {
        this.style.outline = `2px solid var(--accent-gold)`;
        this.style.outlineOffset = '2px';
    });
    
    btn.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// ============================================
// Parallax Effect (Optional - Light Implementation)
// ============================================
const heroSection = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
        const scrollPosition = window.scrollY;
        if (heroSection) {
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    }
});


// ============================================
// Page Load Animation
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// Service Worker Registration (Optional - for PWA)
// ============================================
if ('serviceWorker' in navigator) {
    // Uncomment in production to register service worker
    // navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed'));
}

// 输入验证函数
function sanitizeInput(input) {
    // 移除潜在危险字符
    if (typeof input === 'string') {
        return input.replace(/<[^>]*>?/gm, '');
    }
    return input;
}

// 更严格的错误处理
window.addEventListener('error', function(e) {
    console.error('发生错误:', e.error);
    // 可以发送错误报告到服务器
});

console.log('✨ Nanyang Global Asset Management - Website Loaded');
