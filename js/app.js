/* FILE: app.js */
(function () {
    // Lightweight language switcher
    const preferred = localStorage.getItem('gy_lang') || (navigator.language && navigator.language.startsWith('hu') ? 'hu' : 'en');
    let lang = preferred;


    const applyLang = (l) => {
        lang = l;
        localStorage.setItem('gy_lang', l);
        document.documentElement.lang = (l === 'hu') ? 'hu' : 'en';
        document.querySelectorAll('.lang').forEach(el => {
            const en = el.getAttribute('data-en');
            const hu = el.getAttribute('data-hu');
            if (!en || !hu) return;
            el.textContent = (l === 'hu') ? hu : en;
        });
    }


    // init
    applyLang(lang);


    document.getElementById('langToggle').addEventListener('click', () => {
        applyLang(lang === 'en' ? 'hu' : 'en');
    });


    // small contact demo behaviour
    document.getElementById('copyBtn').addEventListener('click', () => {
        const text = 'GySoft — Szeged | contact@gysoft.example';
        navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(text).then(() => {
            alert((lang === 'hu') ? 'Elérhetés másolva a vágólapra.' : 'Contact copied to clipboard.');
        }).catch(() => {
            prompt((lang === 'hu') ? 'Másold ki az elérhetést:' : 'Copy contact:', text);
        }) : prompt((lang === 'hu') ? 'Másold ki az elérhetést:' : 'Copy contact:', text);
    });
})();