document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                targetSection.scrollIntoView({
                    behaviour: 'smooth'
                });
            });
        });

        const viewProjectsBtn = document.getElementById('view-projects-btn');
        if(viewProjectsBtn) {
            viewProjectsBtn.addEventListener('click', () =>{
                document.getElementById('projects').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }

        const contactMeBtn = document.getElementById('contact-me-btn');
        if(contactMeBtn) {
            contactMeBtn.addEventListener('click', () => {
                document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
});