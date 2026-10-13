const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const footer = document.querySelector('footer');
const typingText = document.querySelector('#typing-text');

if (footer) {
    footer.innerHTML = footer.innerHTML.replace(/© \d{4}/, `© ${new Date().getFullYear()}`);
}

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            navLinks.forEach((link) => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === `#${entry.target.id}`
                );
            });
        });
    },
    { rootMargin: '-30% 0px -60% 0px' }
);

sections.forEach((section) => sectionObserver.observe(section));

if (typingText) {
    const phrases = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'];
    let phraseIndex = 0;
    let characterIndex = phrases[phraseIndex].length;
    let isDeleting = true;

    const typeLoop = () => {
        const phrase = phrases[phraseIndex];
        typingText.textContent = phrase.slice(0, characterIndex);

        if (isDeleting && characterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        } else if (!isDeleting && characterIndex === phrases[phraseIndex].length) {
            isDeleting = true;
        } else {
            characterIndex += isDeleting ? -1 : 1;
        }

        setTimeout(typeLoop, isDeleting ? 70 : 120);
    };

    setTimeout(typeLoop, 1400);
}
