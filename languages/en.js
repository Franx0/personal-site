import { theme } from 'tailwind.config.js';

export default {
  actions: {
    close: `Close`,
  },
  cookies: {
    main: `This website uses cookies to enhance your user experience.`,
    list: `We use Google Analytics to allow us to improve page performance.`,
    accept: `Agree`,
    reject: `Reject`
  },
  meta: {
    "404": {
      image_url: `https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`,
      title: `404 | Page not found.`,
      description: `We could not find the page requested.`
    },
    "500": {
      image_url: `https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`,
      title: `500 | Something went wrong.`,
      description: `An error occurred.`
    },
    me: {
      keywords: `personal, about, me, cv, website`,
      image_url: `https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`,
      title: `About me | Fran Moya`,
      description: `Personal page with relevant data about my professional career.`
    },
    posts: {
      image_url: ``,
      title: `Blog | Fran Moya`,
      description: `Personal blog page.`
    },
    auth: {
      image_url: ``,
      title: `Authorization.`,
      description: `Authorization.`
    }
  },
  thanks: {
    media: `Site image by <a href="https://unsplash.com/@vingtcent?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vincent Guth</a> on <a href="https://unsplash.com/s/photos/aurora?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
    favicon: `Favicon by <a href="https://www.flaticon.es/autores/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.es/" title="Flaticon">Flaticon</a>`
  },
  loader: {
    title: `Loading`,
    text: `This may take a few seconds, please don't close this page.`
  },
  profile_image_url: "https://drive.google.com/thumbnail?id=1VvS8hsWKHVrdYzFoCl--5bx5gLkTq4aS",
  header: {
    links: {
      home: 'Home',
      blog: 'Blog',
      about: 'About me',
      contact: 'Contact'
    },
    back: `Back`,
    dark: `Dark mode`,
    light: `Light mode`,
  },
  landing: {
    title: `Rock developer and web guitarist`,
    description: `Fran Moya`,
    profile: `My profile`
  },
  cv: {
    download: `Download CV`,
    download_url: `https://drive.google.com/thumbnail?id=1Gs-c8MC3u9vDtaqz1VVNc-IjxPq9XlA8&sz=w700`,
    description: `<h1 class="text-accent">Hi, I'm Fran.</h1><br><p>I am a web developer who is always looking for new challenges and projects to be part of.</p><p>During the last ${ new Date().getFullYear() - 2015 } years, I have been working as a developer, learning and improving my knowledge and skills. I love to keep learning and sharing it with all people around me.</p><p>Take a look to some of the languages and technologies I usually work to and <a title="Mail" href=mailto:${process.env.NEXT_PUBLIC_GMAIL_ACCOUNT}?subject=${encodeURIComponent('Hi Fran!')}><strong>contact me</strong></a>.</p>`,
    favorites: `My favorites`,
    myJobs: `My jobs`,
    mySkills: `My stack`,
    jobs: {
      "People Who": {
        subtitle: `Mar. 2015 - Nov. 2016`,
        description: `I started as a Junior developer on People Who in 2015. We developed a health web application with Ruby on Rails, Jquery and MySQL and later evolved it with React and Redis to improve our UI and processes performance. I learnt a lot thanks to the team we were.`,
        bgColor: theme.extend.colors.peoplewho,
        textColor: theme.extend.colors.light.gray.secondary,
        imageUrl: `https://drive.google.com/thumbnail?id=1c3LycjoOWWZHaeVXHXDE-6J2OZUcy3ze`
      },
      "Never Empty": {
        subtitle: `Nov. 2016 - Feb. 2017`,
        description: `It was a fleeting experience because of the company status but also a enrichment time to me. I worked again with Ruby on Rails and PostgreSQL, with the servers running on Heroku and migrating the current frontside inside the monolithic application to a new and fancy React environment.`,
        bgColor: theme.extend.colors.neverempty,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://drive.google.com/thumbnail?id=1gk_cx9Gf2jN-QPA5ekPcYcl2PUBRtmWV`
      },
      "Informa": {
        subtitle: `Feb. 2017 - Jun. 2017`,
        description: `After a couple of years of working experience  I decided to give a chance to the consultancy sector. I became part of Informa D&B as an external consultory. I started working in a small team focused on migrate an internal tool built on Ruby on Rails to a new React/Redux/Saga application, I also helped to migrate the current Ruby on Rails API to Clojure and optimize the frontend performance with Elastic Search.`,
        bgColor: theme.extend.colors.informa,
        textColor: theme.extend.colors.light.gray.secondary,
        imageUrl: `https://drive.google.com/thumbnail?id=1dyOOHyVuHhmh7tGDRt-S8dG84LmtF0iC`
      },
      "Glownet": {
        subtitle: `Jun. 2017 - Nov. 2019`,
        description: `In Glownet we developed a RFID system to run multiple events with no need of internet connection. Sònar, Coachella, MadCool and many others trusted on Glownet to run their festivals. The Android team developed the Mobile App to control onsite everything that happened inside the events and the 'Cloud' team developed the neccesary APIs, administration tool and the events analytics system. Ruby on Rails was the chosen technology to do that, with a powerfull database system based on PostgreSQL and the servers running in Amazon AWS.`,
        bgColor: theme.extend.colors.glownet,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://drive.google.com/thumbnail?id=1h8YbddSVzHYbKaheXA1mW92gO6lx1x82`
      },
      "String Projects": {
        subtitle: `Feb. 2020 - Nov. 2020`,
        description: `After my last adventure I started working on String Projects, a tiny tech consultory but with heavy clients. We worked with many different technologies and languages, depending of what client needed. React Native was the ideal to develop mobile apps and Ruby on Rails the ideal to develop strong and powefull backends. But as I said, it changed depending on the client needs.`,
        bgColor: theme.extend.colors.string_,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://drive.google.com/thumbnail?id=1VX8vLt6jeG6i8zaNGpOobewLLF7-PV6X`
      },
      "Devengo": {
        subtitle: `From Jul. 2021`,
        description: `Trully immersed in the 'Fintech' sector, at Devengo we do things very well, it is all about finesse. Not every day can say that you work for an instant payment orchestrator.`,
        bgColor: theme.extend.colors.devengo,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://drive.google.com/thumbnail?id=1xFnD-xnPMy-VDTVVuazlxZzLrKh75b2A`
      }
    }
  },
  footer: {
    follow: `Follow me on: `,
    handmade: `<span class="whitespace-pre">Designed & Developed by</span><span><a title="Personal Site" href=https://${process.env.NEXT_PUBLIC_GITHUB_ACCOUNT}/personal-site>&nbsp;Fran Moya</a></span>`
  },
  404: {
    text: `Page not found`
  },
  500: {
    text: `Something went wrong`
  }
}
