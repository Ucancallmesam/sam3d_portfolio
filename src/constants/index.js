import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threeJS,
    honeywell,
    curvologyAtl,
    saaS,
    jobit,
    tripguide,
    threejs,
    deborah,
    leroyKester,
    favor
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Web Designer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Junior React.js Developer",
      company_name: "Honeywell",
      icon: honeywell,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Responsibe for implementing front-end functionality and logic within web applications.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front-End Web Developer",
      company_name: "CurvologAtl",
      icon: curvologyAtl,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Analyzing and optimizing application performance to ensure smooth navigation and reduced load time.",
        "Using version control systems like Git to manage code changes and collaborate effectively with other team members.",
        "Keeping abreast of the lastest updates and features in the React Native ecosystem to leverage new functionalities and libraries in their projects.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Designer",
      company_name: "CurvologAtl",
      icon: curvologyAtl,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Created intuitive and user-friendly interfaces that enhanced the overall user experience for the client",
        "Developed branding elements like logos, icons, and color palettes that represent the brand's identity consistently across the website and other marketing materials.",
        "Kept up-to-date with the latest design trends, tools, and techniques to create modern and innovative designs.",
        "Conducted design testing to verify that the website functions as intended and appears correctly across different browsers and devices",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Ogatosin",
      icon: threeJS,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Designing and implementing user interfaces using HTML, CSS, and JavaScript.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Building and maintaining the server-side logic and databases.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Samuel was very detailed-oriented and listens to feedback. He truly cares about his clients",
      name: "Deborah Salami",
      designation: "COO",
      company: "Kingsworld Cargo & Travels",
      image: deborah,
    },
    {
      testimonial:
        "Without a doubt, I highly recommend Samuel for any development project. His skills, creativity, and professionalism are unmatched, and we look forward to working with them again in the future.",
      name: "Leroy Kester",
      designation: "CEO",
      company: "Maximus Inc",
      image: leroyKester,
    },
    {
      testimonial:
        "Thanks to Samuel, our online prescence has been elevated to new heights. The positive feedbacks from our customers about the website's user-friendliness and aesthetic appeals speaks volumes about his talent and dedication.",
      name: "Favor Ajayi",
      designation: "CTO",
      company: "Favs Clothing Line",
      image: favor,
    },
  ];
  
  const projects = [
    {
      name: "3D Custom Tool",
      description:
        "Web-based SaaS platform that allows users to design and create unique shirt with a 3D customization tool that is fused by AI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: saaS,
      source_code_link: "https://github.com//Ucancallmesam/concept_threejs_ai",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };