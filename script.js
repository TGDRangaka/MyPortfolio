import projects from "./data/projects.js";

// preloader close
const closePreloader = () => {
    $(".preloader").css("opacity", "0%");
    setTimeout(function () {
        $(".preloader").css("display", "none");
    }, 2000);

    let letterAniDur = .8;
    let heroSectionAniDur = 1;

    $(".letter").css("animation", `heartBeat ${letterAniDur}s linear .5s`);

    $(".hello").css("animation", `flipInY ${heroSectionAniDur}s linear .2s`);
    $(".square").css("animation", `bounceInLeft ${heroSectionAniDur}s linear .2s`);
    $(".line").css("animation", `bounceInLeft ${heroSectionAniDur}s linear .3s`);
    $(".i-am").css("animation", `bounceInLeft ${heroSectionAniDur}s linear .3s`);
    $("#home>section>h4").css("animation", `bounceInLeft ${heroSectionAniDur}s linear .4s`);
    $("#home>section>button").css("animation", `bounceInLeft ${heroSectionAniDur}s linear .4s`);
    $(".btn-ani").css("animation", `zoomIn ${heroSectionAniDur - 0.5}s linear .5s`)

    $(".hero_img").css("animation", `bounceInUp 1s linear`);
    $(".hero_img_body").css("animation", `bounceIn 1s linear`);

    $(".social_medias li").css("animation", `zoomIn .6s`);

    setTimeout(blinkLetters, 1300);
}

window.onload = () => {
    setTimeout(closePreloader, 500);
};

// mobile navigation menu
let isMenuOpened = false;
const openMenu = () => {
    isMenuOpened = true;
    $(".mob-nav").css("display", "flex");
    setTimeout(() => {
        $(".mob-nav-bg").css("transform", "scale(40)");
        $(".mob-nav a").css("filter", "blur(0px)");
    }, 100);
}
const closeMenu = () => {
    isMenuOpened = false;
    $(".mob-nav a").css("filter", "blur(100px)");
    setTimeout(() => {
        $(".mob-nav-bg").css("transform", "scale(0)");
        setTimeout(() => {
            $(".mob-nav").css("display", "none");
        }, 500);
    }, 400);
}

$(".menu").on('click', () => {
    if (isMenuOpened) {
        closeMenu();
    } else {
        openMenu();
    }
});

$(".mob-nav").on('click', () => {
    closeMenu();
});

// aboutme heartBtn action
let isHeartBtnClicked = false;
$("#heartBtn").on('click', () => {
    if (isHeartBtnClicked) {
        isHeartBtnClicked = false;
        $(".heart-animation").css('display', 'none');
    } else {
        isHeartBtnClicked = true;
        $(".heart-animation").css('display', 'flex');
    }
});


// aboutme imgs swiper pane
var swiper = new Swiper(".aboutme-imgs-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".aboutme-imgs-swiper-pagination",
    },
});

// home latters animation
function blinkLetters() {
    let letters = $(".letter");
    let dur = 5;
    letters.each(i => {
        $(".letter").eq(i).css("animation", `blink-letter ${dur}s ease infinite ${dur / 6 * i}s`);
    })
}

// projects
const setProjectCards = () => {
    // projects.map(project => {
    //     $('.projects').append(`
    //     <div class="prj-card glass_pane">
    //         <div class="prj-title">
    //             <span class="prj-year">${project.year}</span>
    //             <span class="prj-name">${project.name}</span>
    //         </div>
    //         <div class="prj-info">
    //             <div class="prj-langs">
    //                 <span>${project.languages.join('</span><span>')}</span>
    //             </div>
    //             <p class="prj-desc">${project.description}</p>
    //             <div class="links">
    //                 <a href="${project.github}" >Github</a>
    //                 ${project.livelink && `<a href="${project.livelink}" >Github</a>`}
    //             </div>
    //         </div>

    //         <div class="prj-imgs ${project.imageView}">
    //             <img src="${project.image}" alt="">
    //         </div>
    //     </div>
    // `)
    // });
    projects.map(project => {
        $('.project_section').append(`
        <div data-aos="fade-right" data-aos-delay="200" class="project_card glass_pane web">
            <div class="absolute-full">
                <div class="absolute-full shine"></div>
            </div>

            <div class="gradient-h-line"></div>
            <div class="gradient-v-line"></div>
            <!-- <div class="project_icon">
                <i class="fa-solid fa-globe"></i>
            </div> -->
            <div class="project_body">
                <p>${project.year}</p>
                <h1>${project.name}</h1>
                <p>${project.description}</p>
                <div class="project_langs">
                    <span>${project.languages.join('</span><span>')}</span>
                </div>
                <a href="${project.github}" target="_blank">Github <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                ${project.livelink && `<a href="${project.livelink}" target="_blank">View <i class="fa-solid fa-globe"></i></a>`}
            </div>
            <div class="project_img">
                <img src="${project.image}" alt="">
                <div class="project_img_glow"></div>
            </div>
        </div>
    `)
    })
}

setProjectCards();