class Cards {
  constructor(
    name,
    description,
    url,
    technology,
    techClass,
    languages,
    live,
    source,
    popup,
  ) {
    this.name = name;
    this.description = description;
    this.url = url;
    this.technology = technology;
    this.techClass = techClass;
    this.languages = languages;
    this.live = live;
    this.source = source;
    this.popup = popup;
  }
}

export const card1 = new Cards(
  'Music Festival',
  `Experience the ultimate Wizkid Musical Festival journey through our digital platform.
   Get in-depth insights into the upcoming festival in Lagos, Nigeria.
    Discover featured artistes, event schedules, and venue details. Seamlessly book your tickets, explore interactive maps,
   and share the excitement with friends. Elevate your festival experience with our all-inclusive hub.`,
  "'./images/card-images/mil.png'",
  ['CANOPY', 'Front End Dev', '2015'],
  ['"canopy"', '"bed"', '"year"'],
  ['JavaScript','HTML', 'CSS','Git','GitHub'],
  '"https://david-lanzz.github.io/My-First-Capstone/"',
  '"https://github.com/David-Lanzz/My-First-Capstone"',
  {
    header: 'MIL Music Festival',
    stack1: 'CANOPY',
    stack2: 'Front End Dev',
    stack3: '2023',
    url: './images/card-images/mil.png',
    description: `This capstone project is about a music festival in my country.
   I created it in honor of my favorite artiste, Wizkid. The project has many features including of performing artiste cards
   using javascript, speed and responsiveness on all devices and many more.To preview, use the live link below`,
  },
);
export const card2 = new Cards(
  'ToDo List',
  `This project is containing a ToDo list which i used to sharpen my skills in
   JavaScript and also to learn how to use webpacks efficiently.`,
  '"./images/card-images/todo.png"',
  ['TODO', 'Lead Developer', '2018'],
  ['"canopy"', '"bed"', '"year"'],
  ['JavaScript','Webpack','HTML', 'CSS','Git','GitHub'],
  '"https://david-lanzz.github.io/My-ToDo-List/dist/"',
  '"https://github.com/David-Lanzz/My-ToDo-List"',
  {
    description: `This project is containing a ToDo list which i used to sharpen my skills in JavaScript and also to learn how to use webpacks efficiently. The project consists of different features
         including adding, editing, deleting and creating of tasks dynamically using javascript.Multiple tasks can also be cleared at once.`,
    url: './images/card-images/todo.png',
    header: 'ToDo List',
    stack1: 'TODO',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
export const card3 = new Cards(
  'Book Store',
  `This is a project which allows users add books to an API for other users to read and vice versa.
  `,
  '"./images/bookstore.jpg"',
  ['TODO', 'Lead Developer', '2018'],
  ['"canopy"', '"bed"', '"year"'],
  ['JavaScript','React','Redux','API','CSS','React-Router','Git','GitHub'],
  '"https://bookstore-pfc6.onrender.com/"',
  '"https://github.com/David-Lanzz/Bookstore/"',
  {
    description: `This is a project which allows users add books to an API for other users to read and vice versa.
    All books are displayed dynamically using Object Oriented programming`,
    url: './images/bookstore.jpg',
    header: 'Book Store CMS',
    stack1: 'BOOKS',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
export const card4 = new Cards(
  'COVID STATS',
  `This is a project which allows users have access to the data statistics of COVID cases per country.
  `,
  '"./images/card-images/covid.png"',
  ['METRICS', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['JavaScript','React','Redux','API','React-Router','CSS','Git','GitHub'],
  '"https://mapmetrics.onrender.com/"',
  '"https://github.com/David-Lanzz/map-metrics/"',
  {
    description: `With all due respect to lives lost during the COVID 19 pandemic,This project allows users zccross the globe have access to
    the data statistics of COVID cases per country. The project displays the names of countries and he states data of confirmed cases and deaths recorded.`,
    url: './images/card-images/covid.png',
    header: 'COVID 19 MAP METRICS',
    stack1: 'METRICS',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
export const card5 = new Cards(
  'CALCULATOR',
  `This is a project which allows users perform basic calculations in mathematics while also displaying quotes given by an API.
  `,
  '"./images/card-images/math.png"',
  ['MATHS', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['JavaScript','React','React-Router','API','HTML','CSS','Git','GitHub'],
  '"https://mathmagicians-4omq.onrender.com/"',
  '"https://github.com/David-Lanzz/math-magicians/"',
  {
    description: 'Ever used a calculator with quotes before? I guess not...This is a project which allows users perform basic calculations in mathematics while also displaying quotes given by an API',
    url: './images/card-images/math.png',
    header: 'MATH MAGICIANS',
    stack1: 'MATHS',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
export const card6 = new Cards(
  'KONAGRILL',
  `This is a project which different delicacies offered by a beef restaurant.
  `,
  '"./images/card-images/kona.png"',
  ['COMMERCE', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['JavaScript','API','Webpack','HTML','CSS','Git','GitHub'],
  '"https://david-lanzz.github.io/Kanban/dist/"',
  '"https://github.com/David-Lanzz/Kanban"',
  {
    description: `This is a project which different delicacies offered by a beef restaurant.
      All meals data are gotten from the company's API and displayed using Object Oriented programming.
      Engagements like comments and reactions are also allowed`,
    url: './images/card-images/kona.png',
    header: 'KONAGRILL MEALS',
    stack1: 'BEEF',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
export const card7 = new Cards(
  'LEADERBOARD',
  `This is a project which displays a user leaderboard in a particular game.Users can store scores and view scores of other users.
  `,
  '"./images/card-images/leaderboard.png"',
  ['SCORES', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['JavaScript','API','Webpack','HTML','CSS','Git','GitHub'],
  '"https://david-lanzz.github.io/Leaderboard-Project/dist/"',
  '"https://github.com/David-Lanzz/Leaderboard-Project"',
  {
    description: 'This is a project which displays a user leaderboard in a particular game.Users can store scores and view scores of other users',
    url: './images/card-images/leaderboard.png',
    header: 'LEADERBOARD',
    stack1: 'SCORES',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
export const card8 = new Cards(
  'E-COMMERCE',
  `UNDER CONSTRUCTION!.
  `,
  '"./images/card-images/commerce.png"',
  ['COMMERCE', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['JavaScript','React','Redux','Vite','React Router','API','Git','GitHub','Figma'],
  '"https://myecommerceapp-1nbf.onrender.com/"',
  '"https://github.com/David-Lanzz/ecommerceapp/"',
  {
    description: 'UNDER CONSTRUCTION!',
    url: './images/card-images/commerce.png',
    header: 'E-COMMERCE',
    stack1: 'SCORES',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
export const card9 = new Cards(
  'BOOK a DOC',
  `This is a project built by me and my team of developers to help users all
  around the world book doctors according to their availability and convenience.
  `,
  '"./images/card-images/doc.png"',
  ['HEALTH', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['Ruby on Rails','React','Redux','API','JavaScript','TailWindCSS','React Router','Git','GitHub'],
  '"https://reserve-me-a-doc.onrender.com/"',
  '"https://github.com/ilyassatlassi/final-capstone-project-frontend"',
  {
    description: 'This is a project built by me and my team of developers to help users all around the world book doctors according to their availability and convenience.',
    url: './images/card-images/doc.png',
    header: 'HEALTH',
    stack1: 'BOOKING',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
