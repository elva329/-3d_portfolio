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
  meta,
  starbucks,
  kujiale,
  ineat,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  xgate,
  unisys,
  ar,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  // {
  //   title: 'React Native Developer',
  //   icon: mobile,
  // },
  {
    title: 'Frontend Developer',
    icon: backend,
  },
  // {
  //   title: 'Content Creator',
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Senior Software Engineer',
    company_name: 'Kujiale',
    icon: kujiale,
    iconBg: '#383E56',
    date: 'Nov 2020 - June 2023',
    points: [
      'Led the project of Meijian Intelligent Generating, architecting, and developing various web pages using React, and set development standards for the team to help guide engineering vision.',
      'Optimized the CI/CD solutions to extract the Kigma framework as a standalone npm package, and released 20+ npm packages for the business side to use.',
      'Participated in the UI library development, implemented several reusable UI components, and applied them to other projects.',
      'Mentored junior developers and interns, enabling them to achieve professional growth and personal goals.',
    ],
  },
  {
    title: 'Senior Frontend Engineer',
    company_name: 'INEAT Group',
    icon: ineat,
    iconBg: '#E6DEDD',
    date: 'Jul 2018 - Oct 2020',
    points: [
      'Using React, and Redux to create responsive web applications that work across desktops, tablets, and mobile devices.',
      'Automated image optimization using Webpack, minified JS, and CSS modules, optimized 30+ key content pages for SEO objectives, improving FP and FCP by 30%.',
      'Implemented a WeChat campaign boilerplate for WeChat H5 projects to improve the development efficiency, and reduced the release cycle of the project. Released 5+ WeChat H5 campaigns in 6 months after employment.',
      'Developed and released two WeChat mini-programs, which acquired 10, 000 PV within 3 months after release.',
      'Served as the point of contact for client stakeholders throughout all phases of the development lifecycle, fielded quality concerns, identified solutions, and aligned deliverables with customer business specifications.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'XGATE (Hong Kong) Corporation Ltd',
    icon: xgate,
    iconBg: '#383E56',
    date: 'Apr 2017 - Jun 2018',
    points: [
      'Implemented backend functionalities as well as front-end features for external and internal websites, specializing in backend development using PHP.',
      'Corporate with web designers to update the UI of the CRM platform using standard HTML/CSS/JavaScript/jQuery practices.',
      'Carried out quality assurance tests to discover errors, optimize usabilities, and bug fixing.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Unisys (Shanghai) Information Technology Co., Ltd',
    icon: unisys,
    iconBg: '#E6DEDD',
    date: 'Jun 2011 - Jun 2015',
    points: [
      'Implemented the Robot automation test framework, and automated manual test cases to reduce regression test duration from one week to 4 hours.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Performed various types of tests, and optimized test plans and test cases according to the software design and functional requirements, which improved the test coverage to over 85%.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  // {
  //   name: 'AR Edutainment Application',
  //   description: 'xxx',
  //   tags: [
  //     {
  //       name: 'AR',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'Edutainment',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'Unity',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: ar,
  //   source_code_link: '',
  //   id: 1,
  // },
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
    id: 2,
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
    id: 3,
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
    id: 4,
  },
];

export { services, technologies, experiences, testimonials, projects };
