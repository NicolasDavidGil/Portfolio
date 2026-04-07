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
        'intro.job': 'Software Implementer - RD-ITS',
        
        // About
        'about.title': 'About Me',
        'about.greeting': "Hello, I'm Nicolas David Gil.",
        'about.description': "I'm a student of the University Technical Degree in Programming at the National Technological University. I'm a proactive person, constantly seeking learning, detail-oriented, with good interpersonal skills. After many years of working in logistics, I began exploring the IT world and decided to stay, hoping to find my future in it. Currently, I work as a Software Implementer for RD-ITS.",
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
        'exp.ownBusiness': 'Own Business',
        'exp.freelancerDesc': 'Application development with C# on .NET',
        'exp.maintenance': 'PC Maintenance and Repair',
        'exp.maintenanceDesc': 'Formatting, data recovery, upgrades, troubleshooting, hardware changes.',
        
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
        'intro.job': 'Implementador de Software - RD-ITS',
        
        // About
        'about.title': 'Sobre Mi',
        'about.greeting': 'Hola, soy Nicolas David Gil.',
        'about.description': 'Soy estudiante de la carrera Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional. Soy una persona proactiva, en busca de aprendizaje constante, detallista, buenas relaciones interpersonales. Tras muchos años de trabajos en el área de logística, comencé a explorar el mundo IT y decidí quedarme en él con la esperanza de poder encontrar en el mismo mi futuro. Actualmente me desempeño como Implementador de Software para la empresa RD-ITS.',
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
        'exp.implementerDesc': 'Desarrollo e implementación de Software privado',
        'exp.ownBusiness': 'Negocio propio',
        'exp.freelancerDesc': 'Desarrollo de aplicaciones con C# en .NET',
        'exp.maintenance': 'Mantenimiento y reparación de PC',
        'exp.maintenanceDesc': 'Formateos, salvado de datos, actualizaciones, depuraciones, cambios de hardware.',
        
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