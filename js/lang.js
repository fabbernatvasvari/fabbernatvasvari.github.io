document.addEventListener('DOMContentLoaded', () => {
    // Determine initial language
    const storedLang = localStorage.getItem('gy_lang');
    let lang = storedLang || (navigator.language.startsWith('hu') ? 'hu' : 'en');

    // Function to apply the language to all elements
    const applyLang = (l) => {
        lang = l;
        localStorage.setItem('gy_lang', l);
        document.documentElement.lang = l;

        document.querySelectorAll('.lang').forEach(el => {
            const en = el.getAttribute('data-en');
            const hu = el.getAttribute('data-hu');
            if (!en || !hu) return;
            el.textContent = (l === 'hu') ? hu : en;
        });
    };

    // Apply the preferred language on page load
    applyLang(lang);

    // Set up the toggle button
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            applyLang(lang === 'en' ? 'hu' : 'en');
        });
    }
});
