 AOS.init();

//header logic
const header = document.getElementById('header');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileSearchBtn = document.getElementById('mobileSearchBtn');
const mobileSearch = document.getElementById('mobileSearch');
const searchIcon = document.getElementById('searchIcon');
const closeIcon = document.getElementById('closeIcon');
const burgerIcon = document.getElementById('hamburgerIcon');
const burgerIcon2 = document.getElementById('hamburgerIcon2');

let lastScrollY = window.scrollY;

// window.addEventListener('scroll', () => {
//   const currentScrollY = window.scrollY;

//   if (currentScrollY > lastScrollY && currentScrollY > 80) {
//     // scrolling DOWN
//     header.classList.add(
//       'fixed',
//       'top-0',
//       'left-0',
//       'w-full',
//       'z-50',
//       'shadow-1'
//     );
//   } else {
//     // scrolling UP
//     header.classList.remove(
//       'fixed',
//       'top-0',
//       'left-0',
//       'w-full',
//       'z-50',
//       'shadow-1'
//     );
//   }

//   lastScrollY = currentScrollY;
// });

// 1. ADD LISTENERS ONCE (Top level)
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Swap hamburger icons
    burgerIcon.classList.toggle('hidden');
    burgerIcon2.classList.toggle('hidden');
});

mobileSearchBtn.addEventListener('click', () => {
    if (isMobile.matches) {
        mobileSearch.classList.toggle('hidden');
        searchIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    } else {
        console.log("Desktop search clicked - icons will not swap.");
    }
});

function toggleSubMenu(id, button) {
    const subMenu = document.getElementById(id);

    // Check if the element actually exists
    if (subMenu) {
        subMenu.classList.toggle('hidden');
        button.classList.toggle('active');
    } else {
        console.error(`Menu error: No element found with ID "${id}"`);
    }
}

// 2. MEDIA QUERY LOGIC
const isMobile = window.matchMedia("(max-width: 991px)");

function handleScreenChange(e) {
    if (e.matches) {
        mobileSearch.classList.add('hidden');

        searchIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    } else {
        mobileSearch.classList.remove('hidden');
        mobileMenu.classList.add('hidden');
        searchIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// 3. INITIALIZE & LISTEN
handleScreenChange(isMobile); // Run once on load
isMobile.addEventListener('change', handleScreenChange); // Listen for resize



// swiper 

const swiper = new Swiper('.bannerSwiper', {
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


const swiper2 = new Swiper('.doctorsSwiper', {
    slidesPerView: 1.3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});


const swiper3 = new Swiper('.anyAgeSwiper', {
    slidesPerView: 1.3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});

const swiper4 = new Swiper('.reviewSwiper', {
    slidesPerView: 1.3,
    spaceBetween: 30,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.3,
            spaceBetween: 20,
            centeredSlides: true,
        },
        992: {
            slidesPerView: 1.6,
            spaceBetween: 30,
            centeredSlides: false,
        },
    }
});



const swiper5 = new Swiper('.treatmentSwiper', {
    slidesPerView: 1.3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});


// Read More Button Logic
const readMoreBtn = document.getElementById('ReadMoreIcon');
const extraContent = document.getElementById('extraContent');

readMoreBtn.addEventListener('click', () => {
    extraContent.classList.toggle('hidden');
    readMoreBtn.textContent = extraContent.classList.contains('hidden') ? 'Read More' : 'Read Less';
});


//before after slider logic
const imgAfter = document.querySelector('.img-wrapper:nth-of-type(2)');
const line = document.getElementById('line');
const slider = document.getElementById('slider');

slider.addEventListener('input', () => {
    line.style.left = `${slider.value}%`;
    imgAfter.style.clipPath = `inset(0px 0px 0px ${slider.value}%)`;
});

// Reset on double-click
slider.addEventListener('dblclick', () => {
    slider.value = 50;
    line.style.left = '50%';
    imgAfter.style.clipPath = 'inset(0px 0px 0px 50%';
});