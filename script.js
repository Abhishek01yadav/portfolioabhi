// =======================
// Active Navigation
// =======================

const sections = document.querySelectorAll("div[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =======================
// Smooth Scroll
// =======================

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =======================
// Reveal Animation
// =======================

const projects = document.querySelectorAll(".project");
const skills = document.querySelectorAll(".item");

function reveal(){

    projects.forEach(project=>{

        const top = project.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            project.classList.add("show");

        }

    });

    skills.forEach(skill=>{

        const top = skill.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            skill.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// =======================
// Project Hover
// =======================

projects.forEach(project=>{

    project.addEventListener("mouseenter",()=>{

        project.style.transform = "translateY(-10px)";
    });

    project.addEventListener("mouseleave",()=>{

        project.style.transform = "translateY(0)";
    });

});


// =======================
// Profile Image Animation
// =======================

const profile = document.querySelector(".profile img");

profile.addEventListener("mouseenter",()=>{

    profile.style.transform = "scale(1.08)";
});

profile.addEventListener("mouseleave",()=>{

    profile.style.transform = "scale(1)";
});


// =======================
// Console Message
// =======================

console.log("Welcome to Abhishek's Portfolio 🚀");

/*

✨ Typing animation
✨ Smooth scrolling
✨ Active navigation highlight
✨ Scroll reveal animations
✨ Scroll progress bar
*/