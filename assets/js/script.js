// Smooth scrolling for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    
    // Function to handle anchor link clicks
    function handleAnchorClick(e) {
        const href = e.currentTarget.getAttribute('href');
        
        // Only handle internal anchor links
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: Math.max(0, targetPosition),
                    behavior: 'smooth'
                });
            }
        }
    }
    
    // Add click listeners to all anchor links
    function addAnchorListeners() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.removeEventListener('click', handleAnchorClick); // Remove existing listener
            link.addEventListener('click', handleAnchorClick);
        });
    }
    
    // Initial setup
    addAnchorListeners();
    
    // Re-run if content changes (for dynamically loaded content)
    const mutationObserver = new MutationObserver(function() {
        addAnchorListeners();
    });
    
    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
    
    // Add transition to header
    header.style.transition = 'transform 0.3s ease-in-out';
    
    // Animate brief cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe brief cards
    const briefCards = document.querySelectorAll('.brief-card');
    briefCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const navList = document.querySelector('nav ul');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                const menuToggle = document.createElement('button');
                menuToggle.className = 'mobile-menu-toggle';
                menuToggle.innerHTML = '☰';
                menuToggle.style.cssText = `
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    display: block;
                `;
                
                nav.appendChild(menuToggle);
                
                menuToggle.addEventListener('click', () => {
                    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
                });
            }
        }
    };
    
    // Check on load and resize
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
});
