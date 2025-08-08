// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

// date picker
$(function () {
    $("#inputDate").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});

// // owl carousel slider js
// $('.team_carousel').owlCarousel({
//     loop: true,
//     margin: 15,
//     dots: true,
//     autoplay: true,
//     navText: [
//         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//         '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//     ],
//     autoplayHoverPause: true,
//     responsive: {
//         0: {
//             items: 1,
//             margin: 0
//         },
//         576: {
//             items: 2,
//         },
//         992: {
//             items: 3
//         }
//     }
// })

const translations = {
    cz: {
        home: "Domů",
        courses: "Kurzy",
        profile: "Můj profil",
        support: "Podpora",
        title: "NetAcad <br> FEL ČVUT",
        title_desc: "Úvodní stránka s odkazy na servery a služby  <br> Centra informační a komunikační bezpečnosti FEL ČVUT.",
        button_1: "Stránky NetAcad",
        button_2: "Rozcestník služeb",
        service_title: "Servery a služby",
        registration: "Registrace a správa uživatele",
        registration_desc: "NLAM pro vytvoření a správu uživatelského účtu včetně změny hesla",
        virtualLab: "Virtuální <br> laboratoře",
        virtualLab_desc: "Přístup k virtuálním laboratořím NetLab jaký link a jaký popis???",
        virtualLabGuide: "Návod pro Virtuální laboratoře",
        virtualLabGuide_desc: "Dokumentace k obsluze a připojení k virtuálním laboratořím",
        moodle: "Výukové materiály",
        moodle_desc: "Výukové materiály dostupné na portálu Moodle pro podporu našich kurzů",
        discord: "Discord",
        discord_desc: "Discord server NetAcad pro komunikaci mezi studenty a lektory",
        mainPage: "Hlavní stránka",
        mainPage_desc: "Hlavní stránka NetAcad s informacemi o kurzech a aktivitách",
        redirect: "Přesměrovat <i class=\"fa fa-long-arrow-right\"></i>",
        copyright: "&copy; 2025 Všechna práva vyhrazena <a> NetLAB - NetACAD Centrum síťové a informační bezpečnosti FEL ČVUT</a>"
    },
    en: {
        home: "Home",
        courses: "Courses",
        profile: "My Profile",
        support: "Support",
        title: "NetAcad <br> CTU FEE",
        title_desc: "Landing page with links to services and servers of the <br> Center for Information and Communication Security at CTU FEE.",
        button_1: "NetAcad Website",
        button_2: "Services page",
        service_title: "Servers and Services",
        registration: "User Registration & Management",
        registration_desc: "NLAM for creating and managing a user account, including password change",
        virtualLab: "Virtual <br> Labs",
        virtualLab_desc: "Access to NetLab virtual labs (link and description TBD)",
        virtualLabGuide: "Virtual Lab Guide",
        virtualLabGuide_desc: "Documentation for connecting to and using the virtual labs",
        moodle: "Course Materials",
        moodle_desc: "Learning materials available on Moodle to support our courses",
        discord: "Discord",
        discord_desc: "NetAcad Discord server for communication between students and instructors",
        mainPage: "Main Page",
        mainPage_desc: "Main NetAcad page with information about courses and activities",
        redirect: "Redirect <i class=\"fa fa-long-arrow-right\"></i>",
        copyright: "&copy; 2025 All rights reserved <a> NetLAB - NetACAD Center for Network and Information Security at CTU FEE</a>"
    }
};


function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations();
    highlightActiveLang();
}


function applyTranslations() {
    const lang = localStorage.getItem('lang') || 'cz';
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

function highlightActiveLang() {
    const lang = localStorage.getItem('lang') || 'cz';
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // fallback to CZ if not set
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', 'cz');
    }

    applyTranslations();
    highlightActiveLang();
});