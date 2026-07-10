// =======================================
// Mobile Menu
// =======================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        menuBtn.innerHTML = navLinks.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });
}

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        if (menuBtn) {
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }

    });

});


// =======================================
// Sticky Navbar
// =======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "#090909";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.4)";
        navbar.style.padding = "15px 9%";

    } else {

        navbar.style.background = "rgba(0,0,0,.45)";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "20px 9%";

    }

});


// =======================================
// Scroll Reveal Animation
// =======================================

const reveals = document.querySelectorAll(
".service-card,.creator-card,.why-card,.category-card,.step,.testimonial-card,.stat-box,.feature,.about-image,.about-text");

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            item.classList.add("active");
            item.classList.add("reveal");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =======================================
// Counter Animation
// =======================================

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text.replace(/\D/g, ""));

            const suffix = text.replace(/[0-9]/g, "");

            let current = 0;

            const increment = Math.ceil(number / 80);

            const timer = setInterval(() => {

                current += increment;

                if (current >= number) {

                    current = number;

                    clearInterval(timer);

                }

                counter.innerText = current + suffix;

            }, 20);

        });

    }

}

window.addEventListener("scroll", startCounter);

startCounter();


// =======================================
// FAQ Accordion
// =======================================

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {

    const answer = faq.querySelector("p");

    if (!answer) return;

    answer.style.display = "none";

    faq.addEventListener("click", () => {

        const open = answer.style.display === "block";

        faqs.forEach(item => {

            const p = item.querySelector("p");

            if (p) p.style.display = "none";

        });

        answer.style.display = open ? "none" : "block";

    });

});


// =======================================
// Smooth Scroll
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// =======================================
// Active Navigation
// =======================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =======================================
// Contact Form
// =======================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your inquiry has been received.");

        form.reset();

    });

}


// =======================================
// Scroll Progress Bar
// =======================================

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.background = "#c4001d";
progress.style.width = "0%";
progress.style.zIndex = "99999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progressWidth =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressWidth + "%";

});


// =======================================
// Hero Buttons Demo
// =======================================

document.querySelectorAll(".creator-btn.red").forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        alert("Booking feature will be available in the next version.");

    });

});


// =======================================
// Console Message
// =======================================

console.log("%cSARJAK",
"color:#ff0033;font-size:28px;font-weight:bold;");

console.log("Designed with ❤️ using HTML, CSS & JavaScript.");