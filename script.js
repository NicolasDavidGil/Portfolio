//Menu Responsivo

let menuVisible = false;

function mostrarOcultarMenu()
{
    if(menuVisible)
    {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else
    {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar()
{
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Language System
let currentLanguage = 'en';

const translations = {
    en: {
        // Navigation
        'nav.home': 'HOME',
        'nav.about': 'ABOUT ME',
        'nav.skills': 'SKILLS',
        'nav.resume': 'RESUME',
        'nav.portfolio': 'PORTFOLIO',
        'nav.contact': 'CONTACT',
        
        // Intro
        'intro.student': 'Programming Student - UTN',
        'intro.job': 'Full Stack Developer - RD-ITS',
        'intro.job2': 'Full Stack Developer - Cheyenne Organization',
        
        // About
        'about.title': 'About Me',
        'about.greeting': "Hello, I'm Nicolas David Gil.",
        'about.description': "A Full Stack Developer specialized in .NET, with over 5 years of experience building, modernizing, and implementing software solutions in production environments. I specialize in code refactoring and SQL query and stored procedure optimization, with a strong focus on improving performance, efficiency, and response times in critical applications. Currently, I work as a Full Stack Developer at RD-ITS, using .NET 10, Blazor, and SQL Server to design and develop scalable, business-oriented applications.<br> Previously, I led the implementation team in Argentina for 2 years, coordinating deployments, system integrations, and production rollouts, which allowed me to develop a strong end-to-end understanding of software delivery. In parallel, I have been working for over 3 years as a Full Stack Developer at Cheyenne Organization, maintaining and evolving legacy systems built with .NET Framework 4.5, ASP.NET Web Forms (ASPX), Bootstrap, and SQL Server. This experience strengthened my ability to handle legacy codebases, perform refactoring, and drive continuous improvements.<br>My profile combines strong technical expertise, hands-on experience with both modern and legacy technologies, and leadership capabilities. I focus on delivering robust, maintainable, and high-performance solutions aligned with business needs.",
        'about.personalData': 'Personal Data',
        'about.birth': 'Birth Date',
        'about.phone': 'Phone',
        'about.location': 'Location',
        'about.interests': 'Interests',
        'about.downloadCV': 'Download CV ',
        
        // Interests
        'interest.books': 'Books',
        'interest.games': 'Games',
        'interest.travel': 'Travel',
        'interest.music': 'Music',
        
        // Skills
        'skills.title': 'Skills',
        'skills.programming': 'Programming',
        'skills.professional': 'Professional',
        'skill.communication': 'Communication',
        'skill.teamwork': 'Teamwork',
        'skill.creativity': 'Creativity',
        'skill.dedication': 'Dedication',
        'skill.projectManagement': 'Project Management',
        
        // Resume
        'resume.title': 'Resume',
        'resume.education': 'Education',
        'resume.experience': 'Work Experience',
        'date.present': 'Present',
        
        // Education
        'edu.tup': 'University Technical Degree in Programming',
        'edu.utn': 'National Technological University',
        'edu.tupDesc': 'In progress, over 50% completion',
        'edu.ingenieria': 'Computer Engineering',
        'edu.undav': 'National University of Avellaneda',
        'edu.ingDesc': 'Completed first two years.',
        'edu.english': 'English',
        'edu.fisk': 'FISK Language Institute',
        'edu.englishDesc': 'Completed up to fourth year.',
        
        // Experience
        'exp.implementer': 'Software Implementer',
        'exp.implementerDesc': 'Development and implementation of private Software',
        'exp.ownBusiness': 'Full Stack Developer',
        'exp.freelancerDesc': 'Application development with C# on .NET10 and Blazor Web Assembly',
        'exp.maintenance': 'Full Stack Developer',
        'exp.maintenanceDesc': 'CRM innovation and maintenance, with C# .NET4.5, bootstrap and SQL',
        
        // Portfolio & Contact
        'portfolio.notice': 'All projects are available in my GitHub repository.',
        'contact.title': 'CONTACT'
    },
    es: {
        // Navigation
        'nav.home': 'INICIO',
        'nav.about': 'SOBRE MI',
        'nav.skills': 'SKILLS',
        'nav.resume': 'CURRICULUM',
        'nav.portfolio': 'PORTFOLIO',
        'nav.contact': 'CONTACTO',
        
        // Intro
        'intro.student': 'Estudiante de Programación - UTN',
        'intro.job': 'Desarrollador Full Stack - RD-ITS',
        'intro.job2': 'Desarrollador Full Stack - Cheyenne Organization',
        
        // About
        'about.title': 'Sobre Mi',
        'about.greeting': 'Hola, soy Nicolas David Gil.',
        'about.description': 'Desarrollador Full Stack especializado en .NET, con más de 5 años de experiencia construyendo, modernizando e implementando soluciones de software en entornos de producción. Me especializo en refactorización de código y optimización de procedimientos almacenados y consultas SQL, con un fuerte enfoque en mejorar el rendimiento, la eficiencia y los tiempos de respuesta en aplicaciones críticas.Actualmente trabajo como Desarrollador Full Stack en RD-ITS, utilizando .NET 10, Blazor y SQL Server para diseñar y desarrollar aplicaciones escalables y orientadas a los negocios. Anteriormente, dirigí el equipo de implementación en Argentina durante 2 años, coordinando implementaciones, integraciones de sistemas e implementaciones de producción, lo que me permitió desarrollar una sólida comprensión de extremo a extremo de la entrega de software. Paralelamente, he trabajado durante más de 3 años como desarrollador Full Stack en Cheyenne Organization, manteniendo y evolucionando sistemas heredados creados con .NET Framework 4.5, ASP.NET Web Forms (ASPX), Bootstrap y SQL Server. Esta experiencia fortaleció mi capacidad para manejar bases de código heredadas, realizar refactorizaciones e impulsar mejoras continuas. Mi perfil combina una sólida experiencia técnica, experiencia práctica con tecnologías modernas y heredadas y capacidades de liderazgo. Me concentro en ofrecer soluciones sólidas, mantenibles y de alto rendimiento alineadas con las necesidades del negocio.',
        
        'about.personalData': 'Datos Personales',
        'about.birth': 'Nacimiento',
        'about.phone': 'Teléfono',
        'about.location': 'Ubicación',
        'about.interests': 'Intereses',
        'about.downloadCV': 'Descargar CV ',
        
        // Interests
        'interest.books': 'Libros',
        'interest.games': 'Juegos',
        'interest.travel': 'Viajes',
        'interest.music': 'Música',
        
        // Skills
        'skills.title': 'Conocimientos',
        'skills.programming': 'Programación',
        'skills.professional': 'Profesionales',
        'skill.communication': 'Comunicación',
        'skill.teamwork': 'Trabajo en equipo',
        'skill.creativity': 'Creatividad',
        'skill.dedication': 'Dedicación',
        'skill.projectManagement': 'Manejo de Proyectos',
        
        // Resume
        'resume.title': 'Curriculum',
        'resume.education': 'Educación',
        'resume.experience': 'Experiencia Laboral',
        'date.present': 'Actualidad',
        
        // Education
        'edu.tup': 'Tecnicatura Universitaria en Programación',
        'edu.utn': 'Universidad Tecnológica Nacional',
        'edu.tupDesc': 'En curso, aprobación superior al 50%',
        'edu.ingenieria': 'Ingeniería Informática',
        'edu.undav': 'Universidad Nacional de Avellaneda',
        'edu.ingDesc': 'Cursados primeros dos años.',
        'edu.english': 'Inglés',
        'edu.fisk': 'Instituto de idiomas FISK',
        'edu.englishDesc': 'Cursado hasta cuarto año.',
        
        // Experience
        'exp.implementer': 'Implementador de Software',
        'exp.implementerDesc': 'Desarrollo e Implementación de software privado',
        'exp.ownBusiness': 'Desarrollador Full Stack',
        'exp.freelancerDesc': 'Desarrollo de aplicaciones con C# en .NET10 y Blazor Web Assembly',
        'exp.maintenance': 'Desarrollador Full Stack',
        'exp.maintenanceDesc': 'Innovación y mantenimiento de CRM, con C# .NET4.5, bootstrap y SQL',
        
        // Portfolio & Contact
        'portfolio.notice': 'Todos los proyectos se encuentran en mi repositorio de GitHub.',
        'contact.title': 'CONTACTO'
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    updateLanguage();
    
    // Update button text
    document.getElementById('lang-text').textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    
    // Update html lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Save preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            // For elements that have icons inside, preserve them
            const icon = element.querySelector('i');
            if (icon) {
                element.innerHTML = translations[currentLanguage][key] + icon.outerHTML;
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        updateLanguage();
        document.getElementById('lang-text').textContent = currentLanguage === 'en' ? 'ES' : 'EN';
        document.documentElement.lang = currentLanguage;
    }
});


//Porcentajes Conocimientos

function efectoConocimientos()
{
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().width;
    if(distancia_skills >= 300)
    {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("csharp");
        habilidades[3].classList.add("c");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("php");
        habilidades[6].classList.add("sql"); 
        habilidades[7].classList.add("comunicacion"); 
        habilidades[8].classList.add("trabajoEnEquipo"); 
        habilidades[9].classList.add("creatividad"); 
        habilidades[10].classList.add("dedicacion"); 
        habilidades[11].classList.add("manejoProyectos");        
    }
}


window.onscroll = function()
{
    efectoConocimientos();
}