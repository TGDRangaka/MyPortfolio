import projects from "./data/projects.js";

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


// projects

const getProjectCard = (project) => {
    return `
        <div data-aos="fade-right" data-aos-delay="200" class="project_card glass_pane">
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
    `;
}

const setProjectCards = () => {
    $('.project_section').html("");
    
    projects.map(project => {
        $('.project_section').append(getProjectCard(project))
    })
}

setProjectCards();

$("#all").on('click', () => {
    setProjectCards();
    removeBorder();
    $("#all").css('borderBottom', '5px solid #30FF68')
});

$("#java").on('click', () => {
    showProjects('java');
    removeBorder();
    $("#java").css('borderBottom', '5px solid #30FF68')
});

$("#web").on('click', () => {
    showProjects('web');
    removeBorder();
    $("#web").css('borderBottom', '5px solid #30FF68')
});

$("#games").on('click', () => {
    showProjects('game');
    removeBorder();
    $("#games").css('borderBottom', '5px solid #30FF68')
});

$("#mobile").on('click', () => {
    showProjects('mobile');
    removeBorder();
    $("#mobile").css('borderBottom', '5px solid #30FF68')
});

$("#other").on('click', () => {
    showProjects('other');
    removeBorder();
    $("#other").css('borderBottom', '5px solid #30FF68')
});

function showProjects(type) {
    $(".project_section").html("");

    projects.map(project => {
        project.type.includes(type) && $('.project_section').append(getProjectCard(project))
    })
}

function removeBorder() {
    $(".btn_container button").css('border', 'none');
}

$("#all").click();