import { theme } from 'tailwind.config.js';

export default {
  loader: {
    title: `Cargando`,
    text: `Esto puede llevar unos segundos, por favor espere.`
  },
  profile_image_url: "https://media-exp1.licdn.com/dms/image/C4D03AQFuztupZbxN4w/profile-displayphoto-shrink_200_200/0/1589194942040?e=1621468800&v=beta&t=fcl-tExT68fxIOtgLDO-JNZDo_F0lqysRQyyyYCYS94",
  header: {
    links: {
      blog: 'Blog',
      about: 'Sobre mi',
      contact: 'Contacto'
    }
  },
  cv: {
    description: `<h1 class="text-accent">Hola, soy Fran.</h1><br><p>Soy desarrollador web que siempre ando buscando nuevos retos y proyectos en los que participar.</p><p>Tengo m&aacute;s de 6 a&ntilde;os de experiencia trabajando en el sector y durante todo este tiempo he ido adquiriendo y perfeccionando conocimientos y habilidades. Me gusta estar en constante aprendizaje y lo intento transmitir a las personas que me rodean.</p><p>&Eacute;chale un ojo m&aacute;s abajo a algunos de los lenguages y tecnologías con las que suelo trabajar y no dudes en <a title="Mail" href=mailto:${process.env.NEXT_PUBLIC_GMAIL_ACCOUNT}?subject=${encodeURIComponent('Hi Fran!')}><strong>contactar conmigo</strong></a>.</p>`,
    favorites: `Mis favoritos`,
    myJobs: `Mis trabajos`,
    mySkills: `Mi stack`,
    jobs: {
      "People Who": {
        description: `Comencé como desarrollador en People Who in 2015. Desarrollamos una aplicación web sobre salud con Ruby on Rails, Jquery y MySQL, posteriormente evolucionamos el producto con React y Redis lo que nos permitió mejorar la UI y el rendimiento de nuestros procesos. Aprendí muchísimo gracias al equipo que conformábamos.`,
        bgColor: theme.extend.colors.peoplewho,
        textColor: theme.extend.colors.light.gray.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C4D0BAQEoyccqrZx0VQ/company-logo_100_100/0/1519919804321?e=1624492800&v=beta&t=OrDbH-dMb1MB6tUqnYTwH7OcgJBn62PRPItHSwoU15s`
      },
      "Never Empty": {
        description: `Fue una experiencia fugaz debido a la situación de la empresa, pero a la vez fue enriquecedor. Dediqué mi tiempo a trabajar de nuevo con Ruby on Rails y PostgreSQL, con los servidores ejecutándose en Heroku y migrando la parte frontal actual dentro de la aplicación monolítica a un nuevo y elegante entorno de React.`,
        bgColor: theme.extend.colors.neverempty,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C560BAQF2upItXUvRdA/company-logo_100_100/0/1519883525533?e=1624492800&v=beta&t=ARiad6HntQa1-zWQJU3pJr1zC0zUtRwfIfDpa9uSpSs`
      },
      "Informa": {
        description: `Después de un par de años de experiencia laboral decidí dar una oportunidad al sector de la consultoría. Me incorporé a Informa D&B como consultor externo y comencé a trabajar en un pequeño equipo enfocado en migrar una herramienta interna construida en Ruby on Rails a una nueva aplicación React / Redux / Saga. También ayudé a migrar la API actual construída en Ruby on Rails a Clojure y optimizar el rendimiento del frontend con Elastic Search.`,
        bgColor: theme.extend.colors.informa,
        textColor: theme.extend.colors.light.gray.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C4E0BAQH3gp0iUJvNsg/company-logo_100_100/0/1604592579477?e=1624492800&v=beta&t=oJfGjJHu9ZRu8NsZ95tJCizDEPISeqj9iLL9GBAFU84`
      },
      "Glownet": {
        description: `No disfruté tanto de mi experiencia de consultor como esperaba, así que pasé a un nuevo y sorprendente proyecto. En Glownet desarrollamos un sistema RFID para ejecutar múltiples eventos sin necesidad de conexión a Internet. Sònar, Coachella, MadCool y muchos otros confiaron en Glownet para llevar a cabo sus festivales. El sistema fue construido por dos equipos diferentes. El equipo de Android desarrolló la aplicación móvil para controlar 'in situ' todo lo que sucedía dentro del evento y el equipo de backend desarrolló las API necesarias para hacerlo y la herramienta de administración para controlar todo desde allí y verificar todas las analíticas creadas durante los eventos. Una vez más Ruby on Rails fue la tecnología elegida para hacer esto, con un potente sistema de base de datos basado en PostgreSQL y los servidores corriendo en Amazon AWS.`,
        bgColor: theme.extend.colors.glownet,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C4E0BAQHX6Esf0YxpbQ/company-logo_100_100/0/1544181711423?e=1624492800&v=beta&t=_efdQaHCD79ELzINHh34WKCpfKvXYqdAqwDIsfA7tpI`
      },
      "String Projects": {
        description: `After my last adventure I started working on String Projects, a tiny tech consultory but with heavy clients. We worked with many different technologies and languages, depending of what client needed. React Native was the ideal to develop mobile apps and Ruby on Rails the ideal to develop strong and powefull backends. But as I said, it changed depending on the needs.`,
        bgColor: theme.extend.colors.string_,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C4E0BAQFCzBwzOtOEIQ/company-logo_100_100/0/1542713726550?e=1624492800&v=beta&t=vty3gTBvqL0NDMblanPb3-pF_RGSq_3UAl4WwrwUq4w`
      }
    }
  },
  footer: {
    follow: `Sigueme en: `,
    handmade: `Diseñado y desarrollado por <a class="ml-1" title="Personal Site" href=${process.env.NEXT_PUBLIC_GITHUB_ACCOUNT}/personal-site>Fran Moya</a>`
  },
  404: {
    text: `No se encontró la página`
  },
  500: {
    text: `Algo salió mal`
  }
}
