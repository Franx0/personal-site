import { theme } from 'tailwind.config.js';

export default {
  meta: {
    me: `Personal page with relevant data about my professional career.`
  },
  thanks: {
    favicon: `<div>Favicon by <a href="https://www.flaticon.es/autores/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.es/" title="Flaticon">Flaticon</a></div>`
  },
  loader: {
    title: `Loading`,
    text: `This may take a few seconds, please don't close this page.`
  },
  profile_image_url: "https://media-exp1.licdn.com/dms/image/C4D03AQFuztupZbxN4w/profile-displayphoto-shrink_200_200/0/1589194942040?e=1621468800&v=beta&t=fcl-tExT68fxIOtgLDO-JNZDo_F0lqysRQyyyYCYS94",
  header: {
    links: {
      blog: 'Blog',
      about: 'About me',
      contact: 'Contact'
    }
  },
  cv: {
    download: `Download CV`,
    download_url: `https://drive.google.com/file/d/1tgceN-ovk6v0b_Vtr4Q7rfBwNB0GwUWr/view?usp=sharing`,
    description: `<h1 class="text-accent">Hi, I'm Fran.</h1><br><p>I am a web developer who is always looking for new challenges and projects to be part of.</p><p>During the last 6 years, I have been working as a developer, learning and improving my knowledge and skills. I love to keep learning and sharing it with all people around me</p><p>Take a look to some of the languages and technologies I usually work to and <a title="Mail" href=mailto:${process.env.NEXT_PUBLIC_GMAIL_ACCOUNT}?subject=${encodeURIComponent('Hi Fran!')}><strong>contact me</strong></a>.</p>`,
    favorites: `My favorites`,
    myJobs: `My jobs`,
    mySkills: `My stack`,
    jobs: {
      "People Who": {
        description: `I started as a Junior developer on People Who in 2015. We developed a health web application with Ruby on Rails, Jquery and MySQL and later evolved it with React and Redis to improve our UI and processes performance. I learnt a lot thanks to the team we were.`,
        bgColor: theme.extend.colors.peoplewho,
        textColor: theme.extend.colors.light.gray.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C4D0BAQEoyccqrZx0VQ/company-logo_100_100/0/1519919804321?e=1624492800&v=beta&t=OrDbH-dMb1MB6tUqnYTwH7OcgJBn62PRPItHSwoU15s`
      },
      "Never Empty": {
        description: `It was a fleeting experience because of the company status but also a enrichment time to me. I worked again with Ruby on Rails and PostgreSQL, with the servers running on Heroku and migrating the current frontside inside the monolithic application to a new and fancy React environment.`,
        bgColor: theme.extend.colors.neverempty,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C560BAQF2upItXUvRdA/company-logo_100_100/0/1519883525533?e=1624492800&v=beta&t=ARiad6HntQa1-zWQJU3pJr1zC0zUtRwfIfDpa9uSpSs`
      },
      "Informa": {
        description: `After a couple of years of working experience  I decided to give a chance to the consultancy sector. I became part of Informa D&B as an external consultory. I started working in a small team focused on migrate an internal tool built on Ruby on Rails to a new React/Redux/Saga application, I also helped to migrate the current Ruby on Rails API to Clojure and optimize the frontend performance with Elastic Search.`,
        bgColor: theme.extend.colors.informa,
        textColor: theme.extend.colors.light.gray.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C4E0BAQH3gp0iUJvNsg/company-logo_100_100/0/1604592579477?e=1624492800&v=beta&t=oJfGjJHu9ZRu8NsZ95tJCizDEPISeqj9iLL9GBAFU84`
      },
      "Glownet": {
        description: `In Glownet we developed a RFID system to run multiple events with no need of internet connection. Sònar, Coachella, MadCool and many others trusted on Glownet to run their festivals. The Android team developed the Mobile App to control onsite everything that happened inside the events and the 'Cloud' team developed the neccesary APIs, administration tool and the events analytics system. Ruby on Rails was the chosen technology to do that, with a powerfull database system based on PostgreSQL and the servers running in Amazon AWS.`,
        bgColor: theme.extend.colors.glownet,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C4E0BAQHX6Esf0YxpbQ/company-logo_100_100/0/1544181711423?e=1624492800&v=beta&t=_efdQaHCD79ELzINHh34WKCpfKvXYqdAqwDIsfA7tpI`
      },
      "String Projects": {
        description: `After my last adventure I started working on String Projects, a tiny tech consultory but with heavy clients. We worked with many different technologies and languages, depending of what client needed. React Native was the ideal to develop mobile apps and Ruby on Rails the ideal to develop strong and powefull backends. But as I said, it changed depending on the client needs.`,
        bgColor: theme.extend.colors.string_,
        textColor: theme.extend.colors.light.white.secondary,
        imageUrl: `https://media-exp1.licdn.com/dms/image/C4E0BAQFCzBwzOtOEIQ/company-logo_100_100/0/1542713726550?e=1624492800&v=beta&t=vty3gTBvqL0NDMblanPb3-pF_RGSq_3UAl4WwrwUq4w`
      }
    }
  },
  footer: {
    follow: `Follow me on: `,
    handmade: `Designed & Developed by <a class="ml-1" title="Personal Site" href=https://${process.env.NEXT_PUBLIC_GITHUB_ACCOUNT}/personal-site>&nbsp;Fran Moya</a>`
  },
  404: {
    text: `Page not found`
  },
  500: {
    text: `Something went wrong`
  }
}
