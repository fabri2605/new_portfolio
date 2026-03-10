/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fabricio Di Paolo",
  title: "Hi, I'm Fabricio",
  subTitle: emoji(
    "A Full-Stack Developer 🚀 with 4+ years of experience building and deploying scalable web applications. Specialized in Python/Svelte back-ends and React front-ends, with hands-on expertise in Docker, server administration (Nginx, Apache2, Ubuntu), and CI/CD workflows."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/fabricio-di-paolo/", // Update with your real LinkedIn URL
  gmail: "fabridp77@gmail.com",
  // github: "https://github.com/yourUsername", // Uncomment and set your GitHub URL
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK DEVELOPER SPECIALIZED IN PYTHON, SVELTE & REACT WITH DEVOPS EXPERTISE",
  skills: [
    emoji(
      "⚡ Build scalable back-end services with Python and Node.js, and modern front-ends with React, Next.js and Svelte"
    ),
    emoji(
      "⚡ Containerize and deploy production applications with Docker, Nginx and Apache2 on Ubuntu servers"
    ),
    emoji(
      "⚡ Lead CI/CD workflows, mentor developers, and drive measurable improvements in team delivery speed"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Server",
      fontAwesomeClassname: "fas fa-server"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UTN – Universidad Tecnológica Nacional",
      logo: require("./assets/images/UTN_logo.jpg"),
      subHeader: "JavaScript with jQuery",
      duration: "2020 – 2021",
      desc: "Completed a JavaScript and jQuery development course.",
      descBullets: []
    },
    {
      schoolName: "Egg Academy",
      logo: require("./assets/images/egg_logo.png"),
      subHeader: "Java Spring Boot",
      duration: "2020 – 2021",
      desc: "Completed a Java Spring Boot back-end development course.",
      descBullets: []
    },
    {
      schoolName: "Colegio ICEI",
      logo: require("./assets/images/icei_logo.jpeg"),
      subHeader: "Bilingual High School",
      duration: "2007 – 2017",
      desc: "Graduated from bilingual high school with English and Spanish education.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Front-End (React / Svelte / Next.js)",
      progressPercentage: "90%"
    },
    {
      Stack: "Back-End (Python / Node.js / Laravel)",
      progressPercentage: "85%"
    },
    {
      Stack: "DevOps (Docker / Linux / CI/CD)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Web Developer",
      company: "Analyte SRL",
      companylogo: require("./assets/images/analyte_logo.png"),
      date: "Mar 2025 – Present",
      desc: "Architecting and developing the front-end of Qualify v6 (SvelteKit + Python) — a next-gen LIMS with real-time analytics, offline mobile support, and blockchain-based certification.",
      descBullets: [
        "Drove a significant reduction in production bugs through systematic code reviews and enforcement of best practices within a 3-person dev team.",
        "Accelerated team delivery speed by establishing reusable component patterns and shared conventions."
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Tremé",
      companylogo: require("./assets/images/treme_logo.jpeg"),
      date: "Feb 2024 – Present",
      desc: "Engineered full-stack features (Svelte + Python), cutting page load time ~25% through component optimization and lazy loading.",
      descBullets: [
        "Containerized the app with Docker and managed production Linux deployments, achieving zero-downtime across 3 major releases.",
        "Onboarded and mentored 2 developers, cutting their ramp-up time ~30% via structured documentation and pair-programming."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Socialcap",
      companylogo: require("./assets/images/socialcap_logo.png"),
      date: "Feb 2024 – Oct 2024",
      desc: "Built reusable component libraries (Svelte, React, TypeScript), reducing UI development time for new features by ~35%.",
      descBullets: [
        "Integrated 5+ REST APIs and implemented responsive design patterns, improving mobile usability across all targeted screens."
      ]
    },
    {
      role: "Technology Teacher",
      company: "ICEI School",
      companylogo: require("./assets/images/icei_logo.jpeg"),
      date: "Feb 2024 – Mar 2025",
      desc: "Designed and delivered a full-semester programming curriculum (HTML, CSS, JS ES6) for 20+ students with no prior coding background.",
      descBullets: [
        "Achieved 85%+ project completion rate with measurable improvement in students' logical reasoning assessments."
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Ministry of Transport (Mendoza)",
      companylogo: require("./assets/images/secretaria_logo.jpg"),
      date: "Feb 2023 – Jan 2024",
      desc: "Developed and maintained 3 government platforms (Mendotran, SUBE, RTO Forms) serving thousands of citizens — stack: Docker, Laravel, JS, MySQL, Ubuntu.",
      descBullets: [
        "Managed Apache2/Linux infrastructure, cutting downtime incidents by 50% through proactive monitoring and standardized deployments."
      ]
    },
    {
      role: "Web Developer",
      company: "Freelance",
      companylogo: require("./assets/images/saayaHealthLogo.webp"), // Replace with a suitable logo
      date: "2021 – 2022",
      desc: "Delivered 6+ client websites (React / Next.js / TypeScript) optimized for performance and SEO.",
      descBullets: [
        "Built 2 cross-platform mobile apps with React Native."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set to true if you have a GitHub configured
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME COMPANIES AND PRODUCTS I HELPED BUILD",
  projects: [
    {
      image: require("./assets/images/socialcaplanding.jpeg"),
      projectName: "Socialcap Landing",
      projectDesc: "Built the landing page for SocialCap, a platform focused on credential validation through community consensus. Implemented a modern, responsive, conversion-oriented interface to communicate its core features: anonymous voting, random elector selection, internal auditing, and no-code credential customization. Strong focus on performance, user experience, and product clarity.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://socialcap.app"
        }
      ]
    },
    {
      image: require("./assets/images/wave.jpeg"),
      projectName: "Wave",
      projectDesc: "Developed a Twitter-inspired microblogging web app featuring a post system, user interactions, and dynamic content updates. Project focused on front-end architecture, state management, and user experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://social-wave.netlify.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications and courses completed",

  achievementsCards: [
    {
      title: "JavaScript with jQuery",
      subtitle: "Completed JavaScript and jQuery development course at UTN – Universidad Tecnológica Nacional.",
      image: require("./assets/images/pwaLogo.webp"), // Replace with UTN logo
      imageAlt: "UTN Logo",
      footerLink: []
    },
    {
      title: "Java Spring Boot",
      subtitle: "Completed Java Spring Boot back-end development course at Egg Academy.",
      image: require("./assets/images/googleAssistantLogo.webp"), // Replace with Egg Academy logo
      imageAlt: "Egg Academy Logo",
      footerLink: []
    }
  ],
  display: false // Set to true if you want to show this section
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With love for developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set to true if you have blogs to show
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE AND EXPERIENCE 😅"),
  talks: [],
  display: false // Set to true if you have talks to show
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set to true if you have podcasts to show
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "", // Add your phone number if desired
  email_address: "fabridp77@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false // Set to true if you have a Twitter account
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
