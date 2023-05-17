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
  `This capstone project is about a music festival in my country.
  I created it in honor of my favorite artiste, Wizkid.`,
  "'./images/mil.jpg'",
  ['CANOPY', 'Front End Dev', '2015'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'CSS', 'JavaScript'],
  '"https://david-lanzz.github.io/My-First-Capstone/"',
  '"https://github.com/David-Lanzz/My-First-Capstone"',
  {
    header: 'MIL Music Festival',
    stack1: 'CANOPY',
    stack2: 'Front End Dev',
    stack3: '2023',
    url: './images/mil.jpg',
    description: `This capstone project is about a music festival in my country.
   I created it in honor of my favorite artiste, Wizkid. The project has many features including of performing artiste cards
   using javascript, speed and responsiveness on all devices and many more.To preview, use the live link below`,
  },
);
export const card2 = new Cards(
  'ToDo List',
  `This project is containing a ToDo list which i used to sharpen my skills in
   JavaScript and also to learn how to use webpacks efficiently.`,
  '"./images/todo.jpg"',
  ['TODO', 'Lead Developer', '2018'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'Webpack', 'CSS', 'JavaScript'],
  '"https://david-lanzz.github.io/My-ToDo-List/dist/"',
  '"https://github.com/David-Lanzz/My-ToDo-List"',
  {
    description: `This project is containing a ToDo list which i used to sharpen my skills in JavaScript and also to learn how to use webpacks efficiently. The project consists of different features
         including adding, editing, deleting and creating of tasks dynamically using javascript.Multiple tasks can also be cleared at once.`,
    url: './images/todo.jpg',
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
  ['HTML', 'React', 'CSS', 'JavaScript'],
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
  '"./images/covid.jpg"',
  ['METRICS', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'React', 'CSS', 'JavaScript'],
  '"https://mapmetrics.onrender.com/"',
  '"https://github.com/David-Lanzz/map-metrics/"',
  {
    description: `With all due respect to lives lost during the COVID 19 pandemic,This project allows users zccross the globe have access to
    the data statistics of COVID cases per country. The project displays the names of countries and he states data of confirmed cases and deaths recorded.`,
    url: './images/covid.jpg',
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
  '"./images/math_magicians.jpg"',
  ['MATHS', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'React', 'CSS', 'JavaScript'],
  '"https://github.com/David-Lanzz/math-magicians/"',
  '"https://mathmagicians-4omq.onrender.com/"',
  {
    description: 'Ever used a calculator with quotes before? I guess not...This is a project which allows users perform basic calculations in mathematics while also displaying quotes given by an API',
    url: './images/math_magicians.jpg',
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
  '"./images/konagrill.jpg"',
  ['COMMERCE', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'Webpack', 'CSS', 'JavaScript'],
  '"https://david-lanzz.github.io/Kanban/dist/"',
  '"https://github.com/David-Lanzz/Kanban"',
  {
    description: `This is a project which different delicacies offered by a beef restaurant.
      All meals data are gotten from the company's API and displayed using Object Oriented programming.
      Engagements like comments and reactions are also allowed`,
    url: './images/konagrill.jpg',
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
  '"./images/leaderboard.jpg"',
  ['SCORES', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'Webpack', 'CSS', 'JavaScript'],
  '"https://david-lanzz.github.io/Leaderboard-Project/dist/"',
  '"https://github.com/David-Lanzz/Leaderboard-Project"',
  {
    description: 'This is a project which displays a user leaderboard in a particular game.Users can store scores and view scores of other users',
    url: './images/leaderboard.jpg',
    header: 'LEADERBOARD',
    stack1: 'SCORES',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
export const card8 = new Cards(
  'E-COMMERCE',
  `UNDERexport constRUCTION!.
  `,
  '"./images/e_commerce.jpg"',
  ['COMMERCE', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['CSS', 'React', 'Vite', 'JavaScript'],
  '"https://myecommerceapp-1nbf.onrender.com/"',
  '"https://github.com/David-Lanzz/ecommerceapp/"',
  {
    description: 'UNDERexport constRUCTION!',
    url: './images/e_commerce.jpg',
    header: 'E-COMMERCE',
    stack1: 'SCORES',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
