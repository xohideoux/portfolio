export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'M2A Afisha - Events Catalog And Ticketing Service.',
    desc: 'Web service that helps you discover and attend events in Armenia. Users can easily browse a variety of events, subscribe to their interests, and purchase tickets online, including the option to select seats on venue maps.',
    subdesc: 'Designed with user experience in mind, M2A Afisha uses modern technologies like Next.js and Tailwind CSS to provide a smooth and simple interface. Stay connected with the local cultural scene while enjoying the convenience of online ticketing.',
    href: 'https://afisha.move2armenia.am/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#3A2A16',
      border: '0.2px solid #5B3A2D',
      boxShadow: '0px 0px 60px 0px #D16D4B4D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
  {
    title: '3D T-Shirt Customization App',
    desc: 'App allows users to create unique virtual style by customizing colors, adding logos, and experimenting with AI designs. This interactive platform offers a personalized experience, enabling everyone to express their individual style.',
    subdesc: 'Built with React.js, Three.js, and OpenAI, the app showcases the capabilities of 3D visualization and artificial intelligence. Supporting dynamic 3D object generation and user-uploaded logos and textures, it ensures a high level of customization. Framer Motion animations provide smooth transitions, creating an engaging experience across all devices.',
    href: '',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Three.js',
        path: '/assets/threejs.png',
      },
      {
        id: 5,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Fizzi - E-Commerce Product Landing Page',
    desc: 'Fizzi is a web service designed to showcase a fictional soda brand, allowing users to explore product features and interact with stunning 3D models. The platform offers a smooth and engaging experience, guiding users from discovery to purchase effortlessly.',
    subdesc: 'Created with Next.js and Tailwind CSS, Fizzi prioritizes user experience with a sleek design and responsive interface. The integration of Three.js and react-three-fiber enhances the site with captivating 3D animations, while GSAP is utilized for smooth scroll effects and transitions, making the browsing experience both enjoyable and visually impressive.',
    href: '',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Three.js',
        path: '/assets/threejs.png',
      },
      {
        id: 4,
        name: 'GSAP',
        path: '/assets/gsap.jpg',
      },
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Move2Armenia',
    pos: 'Web Developer',
    duration: '2023 - Present',
    title: "In this role, I maintained and troubleshot a WordPress site, resolving issues and implementing new features using PHP, HTML, CSS, and JavaScript. I developed web applications from scratch with React and Next.js, creating components from design mockups. I collaborated with stakeholders and designers to enhance user experience (UX) and worked with the QA team to ensure functionality and quality before deployment.",
    icon: '/assets/work-logo1.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'League A',
    pos: 'React Developer',
    duration: '2022 - 2023',
    title: "Specialized on creating and enhancing components within React applications. My responsibilities included writing unit tests, collaborating with team members to gather requirements, participating in code reviews, and assisting in the integration of new features and improvements.",
    icon: '/assets/work-logo2.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Freelance',
    pos: 'Web Designer',
    duration: 'Before 2022',
    title: "As a freelance web designer, I created custom design mockups and developed responsive websites from scratch. I specialized in crafting logos, designing user interfaces, and implementing layouts with HTML, CSS, and JavaScript. I worked closely with clients to deliver complete websites tailored to their needs, ensuring a cohesive and visually appealing user experience.",
    icon: '/assets/work-logo3.svg',
    animation: 'salute',
  },
];