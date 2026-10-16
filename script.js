const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const footer = document.querySelector('footer');

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
