import {
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
  kujiale,
  ineat,
  threejs,
  xgate,
  unisys,
  gl,
  fred,
  aiPostersCover,
  aiProposalCover,
  aiTextCover,
  iceberg,
  palace,
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
    icon: '',
  },
  // {
  //   title: 'React Native Developer',
  //   icon: mobile,
  // },
  {
    title: 'Frontend Developer',
    icon: '',
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

const projects = [
  {
    name: 'Avoid the Icebergs',
    description:
      'A Web-based VR game that allows user to move left and right to avoid the icebergs',
    tags: [
      {
        name: 'A-frame',
        color: 'blue-text-gradient',
      },
      {
        name: 'Web-VR',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: iceberg,
    source_code_link: 'https://elva-shen-avoid-the-iceburg-vr.glitch.me',
    id: 1,
  },
  {
    name: 'VR in Palace Museum',
    description:
      'A Web-based VR viewing experience that allows user to see the exhibits from the Palace Museum in an engaging way.',
    tags: [
      {
        name: 'A-frame',
        color: 'blue-text-gradient',
      },
      {
        name: 'Web-VR',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: palace,
    source_code_link: 'https://elva329.github.io/palace-museum-vr/',
    id: 2,
  },
];

const miniprograms = [
  {
    name: 'Galeries Lafayette WeChat Mini-Program',
    description:
      'A WeChat Mini-Program for the Galeries Lafayette Department Store in France to let the user get the latest promotion news,  check the tax refund status, and reserve an in-store course through the WeChat mini-program. ',
    tags: [
      {
        name: 'WeChat SDK',
        color: 'blue-text-gradient',
      },
      {
        name: 'WeChat Component',
        color: 'green-text-gradient',
      },
      {
        name: 'WeChat Payment',
        color: 'pink-text-gradient',
      },
    ],
    image: gl,
    source_code_link: '',
    id: 'gl',
  },
  {
    name: 'FRED WeChat Mini-Program',
    description:
      'A WeChat mini-program for the France luxury brand Fred, including a brand story introduction, product collection display as well as store locator function.',
    tags: [
      {
        name: 'WeChat SDK',
        color: 'blue-text-gradient',
      },
      {
        name: 'WeChat Component',
        color: 'green-text-gradient',
      },
      {
        name: 'WeChat Payment',
        color: 'pink-text-gradient',
      },
    ],
    image: fred,
    source_code_link: '',
    id: 'fred',
  },
];

const aiApplications = [
  {
    name: 'AI Generating Proposals',
    description:
      'Generated the proposal based on templates, then AI will apply the selected template to existing design with some  preview images displayed. When click the the next step, the user will be guided to the edit page to update the text or images. When click “generating the proposal” button, the webpage will be redirected to the Meijan Tool for advanced editing.',
    tags: [
      {
        name: 'friday API',
        color: 'blue-text-gradient',
      },
      {
        name: 'React',
        color: 'green-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: aiProposalCover,
    source_code_link: '/ai-proposal.mp4',
    id: 1,
  },
  {
    name: 'AI Generating Posters',
    description:
      'Generate the posters based on keyword, description or user input. User can also upload the image to replace the template image and specify the amount of posters to be generated. After the posters are generated, user can select one poster to edit.',
    tags: [
      {
        name: 'friday API',
        color: 'blue-text-gradient',
      },
      {
        name: 'React',
        color: 'green-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: aiPostersCover,
    source_code_link: '/ai-posters.mp4',
    id: 2,
  },
  {
    name: 'AI Generating Text',
    description:
      'Generate the text based on keyword, description or user input. Each time will generate two paragraphs for user to choose. User can add more input to generate more contexts.',
    tags: [
      {
        name: 'friday API',
        color: 'blue-text-gradient',
      },
      {
        name: 'React',
        color: 'green-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: aiTextCover,
    source_code_link: '/ai-text.mp4',
    id: 3,
  },
];
export {
  services,
  technologies,
  experiences,
  projects,
  miniprograms,
  aiApplications,
};
