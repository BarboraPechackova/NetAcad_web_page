const translations = {
    cz: {
        home: "<i class=\"fas fa-home mr-2\"></i> Domů",
        courses: "<i class=\"fas fa-book mr-2\"></i> Kurzy",
        labs: "<i class=\"fas fa-flask mr-2\"></i> Laboratoře",
        profile: "<i class=\"fas fa-user mr-2\"></i> Můj profil",
        support: "<i class=\"fas fa-headset mr-2\"></i> Podpora",
        title: "NetAcad <br> FEL ČVUT",
        title_desc: "Úvodní stránka s odkazy na servery a služby  <br> Centra informační a komunikační bezpečnosti FEL ČVUT.",
        button_1: "Stránky NetAcad",
        button_2: "Rozcestník služeb",
        service_title: "Servery a služby",
        registration: "Registrace a správa uživatele",
        registration_desc: "NLAM pro vytvoření a správu uživatelského účtu včetně změny hesla",
        virtualLab: "Virtuální <br> laboratoře",
        virtualLab_desc: "Přístup k virtuálním laboratořím prostřednictvím Kasm portal",
        virtualLabGuide: "Návod pro Virtuální laboratoře",
        virtualLabGuide_desc: "Dokumentace k obsluze a připojení k virtuálním laboratořím",
        moodle: "Výukové materiály",
        moodle_desc: "Výukové materiály dostupné na portálu Moodle pro podporu našich kurzů",
        discord: "Discord",
        discord_desc: "Discord server NetAcad pro komunikaci mezi studenty a lektory",
        mainPage: "Hlavní stránka",
        mainPage_desc: "Hlavní stránka NetAcad s informacemi o kurzech a aktivitách",
        redirect: "Přesměrovat <i class=\"fa fa-long-arrow-right\"></i>",
        copyright: "&copy; <span id=\"displayYear\"></span> Všechna práva vyhrazena <br> <a> NetLAB - NetACAD Centrum síťové a informační bezpečnosti FEL ČVUT</a>",
        footer_title_location: "Kde nás najdete",
        address_line1: '<i class="fas fa-chalkboard-teacher mr-1"></i> Místnost č. 505, blok 4A, 5. patro',
        address_line2: '<i class="fas fa-university mr-1"></i> Technická 2, 166 27 Praha 6 – Dejvice'
    },
    en: {
        home: "<i class=\"fas fa-home mr-2\"></i> Home",
        courses: "<i class=\"fas fa-book mr-2\"></i> Courses",
        labs: "<i class=\"fas fa-flask mr-2\"></i> Labs",
        profile: "<i class=\"fas fa-user mr-2\"></i> My Profile",
        support: "<i class=\"fas fa-headset mr-2\"></i> Support",
        title: "NetAcad <br> CTU FEE",
        title_desc: "Landing page with links to services and servers of the <br> Center for Information and Communication Security at CTU FEE.",
        button_1: "NetAcad Website",
        button_2: "Services page",
        service_title: "Servers and Services",
        registration: "User Registration & Management",
        registration_desc: "NLAM for creating and managing a user account, including password change",
        virtualLab: "Virtual <br> Labs",
        virtualLab_desc: "Access to NetLab virtual labs through Kasm portal",
        virtualLabGuide: "Virtual Lab Guide",
        virtualLabGuide_desc: "Documentation for connecting to and using the virtual labs",
        moodle: "Course Materials",
        moodle_desc: "Learning materials available on Moodle to support our courses",
        discord: "Discord",
        discord_desc: "NetAcad Discord server for communication between students and instructors",
        mainPage: "Main Page",
        mainPage_desc: "Main NetAcad page with information about courses and activities",
        redirect: "Redirect <i class=\"fa fa-long-arrow-right\"></i>",
        copyright: "&copy; <span id=\"displayYear\"></span> All rights reserved <br> <a> NetLAB - NetACAD Center for Network and Information Security at CTU FEE</a>",
        footer_title_location: "Where to find us",
        address_line1: '<i class="fas fa-chalkboard-teacher mr-1"></i> Room 505, Block 4A, 5th Floor',
        address_line2: '<i class="fas fa-university mr-1"></i> Technická 2, 166 27 Prague 6 – Dejvice'
    }
};


function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations();
    highlightActiveLang();
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


function applyTranslations() {
    const lang = localStorage.getItem('lang') || 'cz';
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Set the current year if the element exists
    const displayYearEl = document.querySelector("#displayYear");
    if (displayYearEl) {
        displayYearEl.textContent = new Date().getFullYear();
    }
}