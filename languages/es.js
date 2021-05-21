import { theme } from 'tailwind.config.js';

export default {
  actions: {
    close: `Cerrar`,
  },
  cookies: {
    main: `Esta página usa cookies para mejorar tu experiencia de usuario.`,
    list: `Utilizamos Google Analytics para permitirnos mejorar el rendimiento de la página.`,
    accept: `Aceptar`,
    reject: `Rechazar`
  },
  meta: {
    "404": {
      image_url: `https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`,
      title: `404 | No se encontró la página.`,
      description: `No se pudo encontrar la página.`
    },
    "500": {
      image_url: `https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`,
      title: `500 | Algo salió mal.`,
      description: `Hubo un error irrecuperable.`
    },
    me: {
      keywords: `personal, cv, sobre, mí, website`,
      image_url: `https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`,
      title: `Sobre mí | Fran Moya`,
      description: `Página personal con datos relevantes sobre mi perfil profesional.`
    },
    posts: {
      image_url: ``,
      title: `Blog | Fran Moya`,
      description: `Blog personal.`
    },
    auth: {
      image_url: ``,
      title: `Autorización`,
      description: `Autorización.`
    }
  },
  thanks: {
    media: `Imagen del sitio por <a href="https://unsplash.com/@vingtcent?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vincent Guth</a> en <a href="https://unsplash.com/s/photos/aurora?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    favicon: `Favicon por <a href="https://www.flaticon.es/autores/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> de <a href="https://www.flaticon.es/" title="Flaticon">Flaticon</a>`
  },
  loader: {
    title: `Cargando`,
    text: `Esto puede llevar unos segundos, por favor espere.`
  },
  profile_image_url: "https://drive.google.com/file/d/1_PEQK-Gk3-tKVN_TYZ9p_l45TA217Fnf/view?usp=sharing",
  header: {
    links: {
      home: 'Home',
      blog: 'Blog',
      about: 'Sobre mi',
      contact: 'Contacto'
    },
    back: `Atrás`,
    dark: `Modo oscuro`,
    light: `Modo brillo`,
  },
  landing: {
    title: `Rock developer and web guitarist,`,
    description: `o algo parecido`,
    profile: `Mi perfil`
  },
  cv: {
    download: `Descargar CV`,
    download_url: `https://drive.google.com/file/d/1mvCOgEZGjt1RFN0v04izGYkWlmKqlLTV/view?usp=sharing`,
    description: `<h1 class="text-accent">Hola, soy Fran.</h1><br><p>Soy desarrollador web y siempre ando buscando nuevos retos y proyectos en los que participar.</p><p>Tengo m&aacute;s de 6 a&ntilde;os de experiencia trabajando en el sector y durante todo este tiempo he ido adquiriendo y perfeccionando conocimientos y habilidades. Me gusta estar en constante aprendizaje y lo intento transmitir a las personas que me rodean.</p><p>&Eacute;chale un ojo m&aacute;s abajo a algunos de los lenguajes y tecnologías con las que suelo trabajar y no dudes en <a title="Mail" href=mailto:${process.env.NEXT_PUBLIC_GMAIL_ACCOUNT}?subject=${encodeURIComponent('Hi Fran!')}><strong>contactar conmigo</strong></a>.</p>`,
    favorites: `Mis favoritos`,
    myJobs: `Mis trabajos`,
    mySkills: `Mi stack`,
    jobs: {
      "People Who": {
        subtitle: `Mar. 2015 - Nov. 2016`,
        description: `Comencé como desarrollador en People Who en 2015. Desarrollamos una aplicación web sobre salud con Ruby on Rails, Jquery y MySQL, posteriormente evolucionamos el producto con React y Redis lo que nos permitió mejorar la UI y el rendimiento de nuestros procesos. Aprendí muchísimo gracias al equipo que conformábamos.`,
        bgColor: theme.extend.colors.peoplewho,
        textColor: theme.extend.colors.light.gray.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C4D0BAQEoyccqrZx0VQ/company-logo_100_100/0/1519919804321?e=1624492800&v=beta&t=OrDbH-dMb1MB6tUqnYTwH7OcgJBn62PRPItHSwoU15s`
      },
      "Never Empty": {
        subtitle: `Nov. 2016 - Feb. 2017`,
        description: `Fue una experiencia fugaz debido a la situación de la empresa, pero a la vez fue enriquecedor. Dediqué mi tiempo a trabajar de nuevo con Ruby on Rails y PostgreSQL, con los servidores ejecutándose en Heroku y migrando la parte frontal actual dentro de la aplicación monolítica a un nuevo y elegante entorno de React.`,
        bgColor: theme.extend.colors.neverempty,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C560BAQF2upItXUvRdA/company-logo_100_100/0/1519883525533?e=1624492800&v=beta&t=ARiad6HntQa1-zWQJU3pJr1zC0zUtRwfIfDpa9uSpSs`
      },
      "Informa": {
        subtitle: `Feb. 2017 - Jun. 2017`,
        description: `Después de un par de años de experiencia laboral decidí dar una oportunidad al sector de la consultoría. Me incorporé a Informa D&B como consultor externo y comencé a trabajar en un pequeño equipo enfocado en migrar una herramienta interna construida en Ruby on Rails a una nueva aplicación React / Redux / Saga. También ayudé a migrar la API actual construída en Ruby on Rails a Clojure y optimizar el rendimiento del frontend con Elastic Search.`,
        bgColor: theme.extend.colors.informa,
        textColor: theme.extend.colors.light.gray.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C4E0BAQH3gp0iUJvNsg/company-logo_100_100/0/1604592579477?e=1624492800&v=beta&t=oJfGjJHu9ZRu8NsZ95tJCizDEPISeqj9iLL9GBAFU84`
      },
      "Glownet": {
        subtitle: `Jun. 2017 - Nov. 2019`,
        description: `En Glownet desarrollamos un sistema RFID para ejecutar múltiples eventos con o sin Internet. Sònar, Coachella, MadCool y muchos otros confiaron en Glownet. El equipo de Android desarrolló la aplicación móvil para controlar 'in situ' todo lo relativo al evento y el equipo de 'Cloud' desarrolló las API necesarias, la herramienta de administración y el sistema de analíticas asociadas al evento. Ruby on Rails fue la tecnología elegida para hacer esto, con un potente sistema de base de datos en PostgreSQL y servidores corriendo en Amazon AWS.`,
        bgColor: theme.extend.colors.glownet,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C4E0BAQHX6Esf0YxpbQ/company-logo_100_100/0/1544181711423?e=1624492800&v=beta&t=_efdQaHCD79ELzINHh34WKCpfKvXYqdAqwDIsfA7tpI`
      },
      "String Projects": {
        subtitle: `Feb. 2020 - Nov. 2020`,
        description: `Tras mi aventura en Glownet comencé a trabajar en String Projects, una pequeña consultora de software pero con clientes bastante potentes. Desarrollé en diferentes tecnologías y lenguajes, según las necesidades del cliente. React Native era la elegida para desarollar apps movile y Ruby on Rails el framework perfecto para construir robustos y rápidos 'backends'.`,
        bgColor: theme.extend.colors.string_,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C4E0BAQFCzBwzOtOEIQ/company-logo_100_100/0/1542713726550?e=1624492800&v=beta&t=vty3gTBvqL0NDMblanPb3-pF_RGSq_3UAl4WwrwUq4w`
      }
    }
  },
  footer: {
    follow: `Sigueme en: `,
    handmade: `<span class="whitespace-pre">Diseñado y desarrollado por </span><span class="whitespace-pre"><a class="ml-1" title="Personal Site" href=https://${process.env.NEXT_PUBLIC_GITHUB_ACCOUNT}/personal-site>&nbsp;Fran Moya</a></span>`
  },
  404: {
    text: `No se encontró la página`
  },
  500: {
    text: `Algo salió mal`
  }
}
