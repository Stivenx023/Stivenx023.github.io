function toggleTheme() {
      const body = document.body;
      const btn = document.querySelector('.btn-outline-success');

      if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        btn.textContent = 'Modo oscuro';
      } else {
        body.setAttribute('data-theme', 'dark');
        btn.textContent = 'Modo claro';
      }
    }

  document.querySelectorAll('.skill-circle').forEach(circle => {
    const level = circle.getAttribute('data-level');
    circle.style.setProperty('--percent', level);
  });



  //traducir
  let currentLang = "es";

  const translations = {
    es: {
      "nav.home": "Inicio",
      "nav.projects": "Proyectos",
      "nav.about": "Acerca de mí",
      "nav.skills": "Skills",
      "nav.contact": "Contáctame",

      "hero.title": "Hola, Soy ",
      "hero.subtitle": "Desarrollador Web Junior | Apasionado por la tecnología y la programación",
      "hero.intro":  "Bienvenido a mi portafolio, esta pagina esta diseñada con el fin de dar a conocer todos los proyectos en lo que he trabajado, ademas de dar a conocer un poco de mi. Soy un profesional en formación, con sólido conocimiento en desarrollo web y programación. Mi experiencia académica en Ingeniería en Sistemas y Técnico en Programación de Software, combinada con mis proyectos personales,me permite diseñar y desarrollar soluciones web, asi como aplicativos eficientes y adaptadas a las necesidades del mercado.",
      "hero.download": "Descargar mi HDV",

      "sections.projects": "Proyectos",
      "project.AWG": " Adding Whatsapp Groups (AWG) es un aplicativo cuya función es crear grupos de WhatsApp a traves de un aplicativo web, este proyecto fue implementado en una empresa con el fin de reducir los tiempos en los procesos de uso WhatsApp-Web.",
      "project.btn1":"Saber más",
      "project.portfolio":"Portafolio personal desarrollado con el fin de mostrar mis habilidades, los diferentes proyectos como desarrollador web junior, asi como un poco de contexto de mi perfil profesional.",
      "project.btn2":"Inicio",
      "project.ZQFY":"Reproductor de música web desarrollado como proyecto personal, este permite a los usuarios escuchar sus canciones favoritas en línea con una interfaz intuitiva",
      "project.btn3":"En desarrollo",
      "project.MazerSnake":"Juego de serpiente con laberintos generados dinámicamente. Come 10 frutas para ganar, esquiva las paredes que crecen con cada fruta y supera tu mejor tiempo.",

      "sections.about": "Acerca de mí",
      "about.intro":  "Soy un Desarrollador FullStack Junior en formación, actualmente cursando la carrera de Ingeniería de Sistemas y con formación técnica en Programación de Software. Mi stack principal incluye tecnologías como JavaScript, y Node.js, C#, HTMl, etc. Junto con experiencia en bases de datos SQL y NoSQL. Tengo sólidos conocimientos en desarrollo web, abarcando tanto la creación de interfaces de usuario dinámicas y responsivas (Frontend) como la lógica del servidor, APIs y arquitectura de datos (Backend).",
      "about.intro2":  "Lo que me define es mi capacidad de aprendizaje acelerado y mi adaptabilidad para integrar nuevas tecnologías y metodologías ágiles en proyectos reales. Poseo una fuerte ética de trabajo, orientación al detalle y una mentalidad analítica para descomponer y resolver problemas complejos de manera eficiente. He aplicado estas competencias en proyectos académicos, personales y profesionales, como es el caso de AWG, considero este proyecto uno de mis logros personales principales, pues me adentre al mundo de las APIs y brinde una solución a un problema real, como lo era la creación de grupos de Whatsapp.",
      
      "about.skills": "Habilidades Blandas",
      "about.skill1": "Tolerancia a la presión",
      "about.skill2": "Trabajo en equipo",
      "about.skill3": "Proactividad",
      "about.skill4": "Liderazgo",

      "sections.contact": "Contáctame",
      "contact.phone": "Teléfono",



      "contact.phone": "Teléfono",

      "footer": "© 2026 – Portafolio personal - Todos los derechos reservados a Juan Stiven Mendoza Romero"
    },

    en: {
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.about": "About me",
      "nav.skills": "Skills",
      "nav.contact": "Contact",

      "hero.title": "Hi, I'm ",
      "hero.subtitle": "Junior Web Developer | Passionate about technology and programming",
      "hero.intro":  "Welcome to my portfolio, this page is designed to showcase all the projects I have worked on, as well as to introduce myself. I am a professional in training, with solid knowledge in web development and programming. My academic experience in Systems Engineering and Software Programming Technician, combined with my personal projects, allows me to design and develop web solutions, as well as efficient applications adapted to market needs.",
      "hero.download": "Download my CV",

      "sections.projects": "Projects",
      "project.AWG":" Adding Whatsapp Groups (AWG) is an application whose function is to create WhatsApp groups through a web application. This project was implemented in a company to reduce the time in the processes of using WhatsApp-Web.",
      "project.btn1":"Learn more",
      "project.portfolio":"Personal portfolio developed to showcase my skills, the different projects as a junior web developer, as well as some context of my professional profile.",
      "project.btn2":"Home",
      "project.ZQFY":"Web music player developed as a personal project, this allows users to listen to their favorite songs online with an intuitive interface",
      "project.btn3":"In development",
      "project.MazerSnake":"Snake game with dynamically generated mazes. Eat 10 fruits to win, dodge walls that grow with each fruit and beat your best time.",


      "sections.about": "About me",
      "about.intro":  "I am a Junior FullStack Developer in training, currently studying Systems Engineering and with technical training in Software Programming. My main stack includes technologies such as JavaScript, Node.js, C#, HTML, etc. Along with experience in SQL and NoSQL databases. I have solid knowledge in web development, covering both the creation of dynamic and responsive user interfaces (Frontend) as well as server logic, APIs, and data architecture (Backend).",
      "about.intro2":  "What defines me is my accelerated learning ability and adaptability to integrate new technologies and agile methodologies into real projects. I possess a strong work ethic, attention to detail, and an analytical mindset to break down and solve complex problems efficiently. I have applied these skills in academic, personal, and professional projects, such as AWG, which I consider one of my main personal achievements, as I delved into the world of APIs and provided a solution to a real problem, which was the creation of WhatsApp groups.",

      "about.skills": "Soft Skills",
      "about.skill1": "Tolerance to pressure",
      "about.skill2": "Teamwork",
      "about.skill3": "Proactivity",
      "about.skill4": "Leadership",

      "sections.contact": "Contact to me",
      "contact.phone": "Phone",

      "footer": "© 2026 – Personal portfolio - All rights reserved to Juan Stiven Mendoza Romero"
    }
  };

  function toggleLanguage() {
    currentLang = currentLang === "es" ? "en" : "es";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });
  }

  var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});