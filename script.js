gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const mainImageWrapper = document.getElementById('product-main-image-wrapper');
const mainImage = document.getElementById('product-main-image');
const lens = document.getElementById('zoom-lens');
const resultWindow = document.getElementById('zoom-result-window');
const zoomClonedImg = document.getElementById('zoom-cloned-img');
const thumbnails = document.querySelectorAll('.thumbnail-btn');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');

const validThumbnails = Array.from(thumbnails).filter(btn => btn.hasAttribute('data-src'));
const images = validThumbnails.map(btn => btn.getAttribute('data-src'));
let currentIndex = 0;

function updateMainImage(index) {
    if (images.length === 0) return;
    
    mainImage.style.opacity = '0.7';
    setTimeout(() => {
        mainImage.src = images[index];
        if (zoomClonedImg) zoomClonedImg.src = images[index];
        mainImage.style.opacity = '1';
    }, 150);

    validThumbnails.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('border-brandBlue');
            btn.classList.remove('border-transparent');
        } else {
            btn.classList.remove('border-brandBlue');
            btn.classList.add('border-transparent');
        }
    });
}

validThumbnails.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
        updateMainImage(currentIndex);
    });
});

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateMainImage(currentIndex);
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateMainImage(currentIndex);
});

// Custom Zoom Lens Logic
const ZOOM_LEVEL = 2.5; // Magnification scale

mainImageWrapper.addEventListener('mouseenter', () => {
    if (window.innerWidth < 1024) return; // Disable zoom popup on mobile
    
    lens.classList.remove('hidden');
    resultWindow.classList.remove('hidden');
    
    // Slight delay for fade transition
    requestAnimationFrame(() => {
        resultWindow.classList.remove('opacity-0');
        resultWindow.classList.add('opacity-100');
    });

    if (zoomClonedImg.src !== mainImage.src) {
        zoomClonedImg.src = mainImage.src;
    }
});

mainImageWrapper.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 1024) return;
    
    const rect = mainImageWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const resultWidth = resultWindow.offsetWidth;
    const resultHeight = resultWindow.offsetHeight;
    
    const lensWidth = resultWidth / ZOOM_LEVEL;
    const lensHeight = resultHeight / ZOOM_LEVEL;

    lens.style.width = `${lensWidth}px`;
    lens.style.height = `${lensHeight}px`;

    let lensX = x - lensWidth / 2;
    let lensY = y - lensHeight / 2;

    if (lensX < 0) lensX = 0;
    if (lensY < 0) lensY = 0;
    if (lensX > rect.width - lensWidth) lensX = rect.width - lensWidth;
    if (lensY > rect.height - lensHeight) lensY = rect.height - lensHeight;

    lens.style.left = `${lensX}px`;
    lens.style.top = `${lensY}px`;

    // Scale up the cloned image to match wrapper * zoom level
    const clonedImgWidth = rect.width * ZOOM_LEVEL;
    const clonedImgHeight = rect.height * ZOOM_LEVEL;
    
    zoomClonedImg.style.width = `${clonedImgWidth}px`;
    zoomClonedImg.style.height = `${clonedImgHeight}px`;
    
    // Translate the cloned image inverse to the lens position
    zoomClonedImg.style.transform = `translate(${-lensX * ZOOM_LEVEL}px, ${-lensY * ZOOM_LEVEL}px)`;
});

mainImageWrapper.addEventListener('mouseleave', () => {
    lens.classList.add('hidden');
    resultWindow.classList.remove('opacity-100');
    resultWindow.classList.add('opacity-0');
    
    setTimeout(() => {
        if (resultWindow.classList.contains('opacity-0')) {
            resultWindow.classList.add('hidden');
        }
    }, 300);
});
