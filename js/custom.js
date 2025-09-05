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
        address_line2: '<i class="fas fa-university mr-1"></i> Technická 2, 166 27 Praha 6 – Dejvice',


        about_title: "Příručka k používání online NetLAB prostředí",

        about_whatIsNetlab_title: "Co je to NetLab?",
        about_whatIsNetlab_body: "Netlab je prostředí pro vzdálenou virtualizaci a virtualizaci síťových zařízení. Nazýváme jej také jako virtuální laboratoř. Primárně slouží jako výukové prostředí pro studenty našich kurzů a naše partnery. V tomto prostředí lze experimentovat s tvorbou vlastních sítí a scénářů a získat praktické zkušenosti s konfigurací základních síťových prvků.",

        about_account_title: "K čemu slouží založení uživatelského účtu?",
        about_account_body1: "Abyste mohli využívat všechny služby prostředí Netlab, je zapotřebí si založit uživatelský účet. Tímto účtem se lze přihlásit do Moodlu, kde naleznete veškeré výukové materiály, a zároveň do prostředí virtuální laboratoře, kde budete plnit úlohy zadané lektorem.",
        about_account_body2: "Podrobný proces registrace krok za krokem si můžete prohlédnout v našem video-tutoriálu.",

        about_nlam_title: "Uživatelský portál NLAM",
        about_nlam_body: "Uživatelský portál NLAM slouží ke správě vašeho uživatelského účtu. <br> Zde lze změnit přístupové heslo či si ho nechat obnovit.",
        about_nlam_button: "NLAM",

        about_kasm_title: "Jak se přihlásit do virtuálního podu?",
        about_kasm_body1: "V prostředí Kasm Portalu je zapotřebí si vybrat dostupný vzdálený počítač, ke kterému se přihlásíte. Jakmile si rezervujete jeden z dostupných virtuálních podů, stačí se jen přihlásit a můžete již naplno využívat prostředí virtuální laboratoře.",
        about_kasm_button: "KASM Portal",
        about_kasm_body2: "Podrobný postup přihlášení na virtuální pod si můžete prohlédnout v našem video-tutoriálu.",

        about_video_title: "Videonávod",

        faq_title: "FAQ - Často kladené otázky",

        faq_regLink_title: "Jak získám jedinečný odkaz pro registraci uživatelského jména a hesla?",
        faq_regLink_part1: "Tento odkaz je Vám zaslán z emailu",
        faq_regLink_email: "kurzy@itu.fel.cvut.cz",
        faq_regLink_part2: ", nebo jedním z našich lektorů. Odkaz je platný po omezenou dobu.",

        faq_afterRegister_title: "Proč se nemohu přihlásit do některé služby hned po registraci?",
        faq_afterRegister_body: "Naše prostředí je dostupné pouze pro partnery a studenty kurzů a vybraných předmětů. Registraci tak jednotlivě schvalují administrátoři, a z toho důvodu je možná časová prodleva.",

        faq_evePod_title: "Nefunguje mi virtuální pod EVE…",
        faq_evePod_body1: "Zde může být několik problémů. Primárně je potřeba zkontrolovat, zdali je spuštěna VPN. Lze jednoduše ověřit přes terminál při zadání příkazu – ip a . Ve výpisu se objeví interface tun0. (pokud je zde více interface tun – jedná se o chybu, a lze je aplikací stop VPN zavřít.",
        faq_evePod_body2_prefix: "Problém může být také ve špatně vytvořené rezervaci. Zkontrolujte tedy rezervaci znovu, případně zkuste vytvořit novou. Pokud i přesto bude prostředí nedostupné, je potřeba kontaktovat",
        faq_support_email: "support@itu.fel.cvut.cz",
        faq_evePod_body2_suffix: ".",

        faq_bookingPortal_title: "Mám potíže se dostat na rezervační portál pro rezervaci podu",
        faq_bookingPortal_body1: "Zde může být několik problémů. Primárně je potřeba zkontrolovat, zdali je spuštěna VPN. Lze jednoduše ověřit přes terminál při zadání příkazu – ip a . Ve výpisu se objeví interface tun0. (pokud je zde více interface tun – jedná se o chybu a lze je aplikací stop VPN zavřít.",
        faq_bookingPortal_body2_prefix: "Pokud se portál načte ale nelze se přihlásit, je možné, že heslo pro přihlášení je jiné, než zadáváte, nebo je uživatel deaktivovaný. Změnu hesla lze pro účet provést na portále NLAM –",
        faq_nlam_linkText: "access.netacad.fel.cvut.cz",
        faq_bookingPortal_body2_suffix: ". Pokud je účet deaktivovaný, napište na náš support účet",
        faq_support_email2: "support@itu.fel.cvut.cz",
        faq_bookingPortal_body2_dot: ".",

        faq_unstableConnection_title: "Při práci v laboratoři není připojení stabilní, připojení chvíli funguje a následně chvíli ne",
        faq_unstableConnection_body: "V takovém případě je na vině současná instance VPN na stejném, nebo jiném pracovním podu. V tomto případě doporučujeme navštívit stejnou pracovní stanici, kterou jste ten den používali a ukončit VPN spojení. Každý den se automaticky v noci všechny spojení ukončují.",

        faq_frozenPod_title: "Při laboratorní úloze se mi pracovní pod zasekl a nelze znovu načíst",
        faq_frozenPod_body_prefix: "To se může stát zejména v případě zaplnění diskového prostoru, nebo manipulace se síťovými spojeními za běhu zařízení. V této situaci je potřeba zásah lektora a administrátora a pod opravit. Nahlaste prosím tuto skutečnost na podpoře",
        faq_support_email3: "support@itu.fel.cvut.cz",
        faq_frozenPod_body_suffix: "a rezervujte si jiný pod.",

        faq_eveImport_title: "Nelze naimportovat laboratoř do EVE podu",
        faq_eveImport_body: "Tato chyba je většinou způsobena stejným názvem importovaného labu. V adresáři již úloha se stejným názvem existuje a import neproběhne. Pro nápravu stačí vytvořit novou složku a do ní lab importovat. Následně lze i v případě potřeby lab přejmenovat. Nerozbalujte a neupravujte .zip soubor.",

        faq_moodle_title: "Nemohu najít svůj kurz na moodle",
        faq_moodle_body: "Každý kurz má svoje ID, které je jedinečné. Na začátku kurzu Vám je zaslán odkaz na konkrétní kurz a na něm lze vždy kurz najít. Po zapsání kurzu uvidíte kurz na hlavní stránce."
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
        address_line2: '<i class="fas fa-university mr-1"></i> Technická 2, 166 27 Prague 6 – Dejvice',

        about_title: "Guide to using the online NetLAB environment",

        about_whatIsNetlab_title: "What is NetLab?",
        about_whatIsNetlab_body: "NetLab is an environment for remote virtualization and for virtualized network devices. We also refer to it as a virtual laboratory. It is primarily an educational environment for students of our courses and partners. Here you can experiment with building your own networks and scenarios and gain hands-on experience configuring basic network elements.",

        about_account_title: "Why create a user account?",
        about_account_body1: "To use all NetLab services, you need to create a user account. With this account you can sign in to Moodle, where you’ll find all course materials, and to the virtual laboratory where you complete tasks assigned by the instructor.",
        about_account_body2: "You can view the step-by-step registration process in our video tutorial.",

        about_nlam_title: "NLAM user portal",
        about_nlam_body: "The NLAM user portal is used to manage your account. Here you can change your password or request a reset.",
        about_nlam_button: "NLAM",

        about_kasm_title: "How do I sign in to a virtual pod?",
        about_kasm_body1: "In the Kasm Portal you need to select an available remote computer to connect to. Once you reserve one of the available virtual pods, just sign in and you can fully use the virtual lab environment.",
        about_kasm_button: "KASM Portal",
        about_kasm_body2: "You can watch a detailed video tutorial showing how to sign in to a virtual pod.",

        about_video_title: "Video tutorial",

        faq_title: "FAQ – Frequently Asked Questions",

        faq_regLink_title: "How do I get the unique link to register a username and password?",
        faq_regLink_part1: "This link is sent to you from the email",
        faq_regLink_email: "kurzy@itu.fel.cvut.cz",
        faq_regLink_part2: ", or by one of our instructors. The link is valid for a limited time.",

        faq_afterRegister_title: "Why can’t I sign in to some services right after registration?",
        faq_afterRegister_body: "Our environment is available only to partners and students of courses and selected subjects. Registrations are approved individually by administrators, which may cause a delay.",

        faq_evePod_title: "My EVE virtual pod doesn’t work…",
        faq_evePod_body1: "There may be several issues. First, check whether the VPN is running. You can easily verify this in the terminal by running the command ‘ip a’. The output should show the interface tun0. (If there are multiple tun interfaces, that’s an error and you can close them using the stop VPN app.)",
        faq_evePod_body2_prefix: "The problem may also be an incorrect reservation. Check the reservation again, or try creating a new one. If the environment is still unavailable, please contact",
        faq_support_email: "support@itu.fel.cvut.cz",
        faq_evePod_body2_suffix: ".",

        faq_bookingPortal_title: "I’m having trouble accessing the reservation portal for booking a pod",
        faq_bookingPortal_body1: "There may be several issues. First, check whether the VPN is running. You can easily verify this in the terminal by running the command ‘ip a’. The output should show the interface tun0. (If there are multiple tun interfaces, that’s an error and you can close them using the stop VPN app.)",
        faq_bookingPortal_body2_prefix: "If the portal loads but you can’t sign in, your password may be different from what you’re entering, or the user may be deactivated. You can change the password on the NLAM portal –",
        faq_nlam_linkText: "access.netacad.fel.cvut.cz",
        faq_bookingPortal_body2_suffix: ". If the account is deactivated, please write to our support at",
        faq_support_email2: "support@itu.fel.cvut.cz",
        faq_bookingPortal_body2_dot: ".",

        faq_unstableConnection_title: "The connection in the lab is unstable; it works for a while and then stops",
        faq_unstableConnection_body: "This is usually caused by another running VPN instance on the same or a different workstation. We recommend visiting the same workstation you used that day and closing the VPN connection. All connections are automatically closed every night.",

        faq_frozenPod_title: "My pod froze during a lab task and won’t reload",
        faq_frozenPod_body_prefix: "This can happen when the disk space is full or when network links are manipulated while devices are running. In this situation an instructor/administrator intervention is needed to fix the pod. Please report this to",
        faq_support_email3: "support@itu.fel.cvut.cz",
        faq_frozenPod_body_suffix: "and reserve another pod.",

        faq_eveImport_title: "I can’t import a lab into the EVE pod",
        faq_eveImport_body: "This error is usually caused by the imported lab having the same name as an existing one. The directory already contains a lab with the same name, so the import fails. To fix it, create a new folder and import the lab there. You can rename the lab afterwards if needed. Do not unpack or modify the .zip file.",

        faq_moodle_title: "I can’t find my course on Moodle",
        faq_moodle_body: "Each course has its own unique ID. At the start of the course you receive a link to the specific course and you can always find it there. After enrolling, you will see the course on the main page."
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