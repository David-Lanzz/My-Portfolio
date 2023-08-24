// Peoject Cards Creation
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
  `Embark on an exclusive journey with the Wizkid Musical Festival via
   our digital platform. Gain in-depth insights into the upcoming Lagos event,
    explore featured artistes, schedules, and venue details. Seamlessly book your tickets,
     engage with event highlights, and share the excitement.
  Elevate your festival experience with our comprehensive hub.`,
  "'./images/card-images/mil.png'",
  ['CANOPY', 'Front End', '2015'],
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
  `This project unveils an innovative todo list application,
   equipping users with the ability to adeptly prioritize, edit, and remove tasks.
    Notably, the application's seamless persistence of task data ensures a fluid and uninterrupted
     experience for users throughout their interactions.
   This technological feat aims to streamline task management and enhance user productivity.
  `,
  '"./images/card-images/todo.png"',
  ['TODO', 'Front End', '2018'],
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
  `This forward-thinking bookstore application simplifies access to meticulously
   curated course materials for Nigerian students. Users can contribute books, enhancing the
    collaborative library, and access author information, enriching the academic resource hub's comprehensiveness.
   Additionally, users can track their reading progress, further enhancing their engagement.`,
  '"./images/bookstore.jpg"',
  ['LIBRARY', 'Full Stack', '2018'],
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
  `Amid the intricate challenges posed by the pandemic,
   this initiative stands as a beacon of compassion, empowering global users
    with vital COVID-19 data. By offering meticulous country-specific case and fatality
     details, it fosters a comprehensive
   awareness of the pandemic's far-reaching impact and its significance on a global scale.`,
  '"./images/card-images/covid.png"',
  ['METRICS', 'Front End', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['JavaScript','React','Redux','API','React-Router','CSS','Git','GitHub'],
  '"https://mapmetrics.onrender.com/"',
  '"https://github.com/David-Lanzz/map-metrics/"',
  {
    description: `Amid the challenges posed by the pandemic, this
     compassionate initiative empowers global users with essential COVID-19 data.
      By offering country-specific case and fatality details, it
     facilitates a comprehensive awareness of the pandemic's widespread impact and significance.`,
    url: './images/card-images/covid.png',
    header: 'COVID 19 MAP METRICS',
    stack1: 'METRICS',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
export const card5 = new Cards(
  'CALCULATOR',
  `This project introduces users to the capability of performing fundamental
   mathematical calculations while concurrently providing inspirational quotes sourced
   from an API. By seamlessly amalgamating mathematics and motivational content,
   the project aims to infuse an element of enjoyment into the realm of math, enhancing the overall user experience.`,
  '"./images/card-images/math.png"',
  ['MATHS', 'Front End', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['JavaScript','React','CSS','React-Router','API','HTML','Git','GitHub'],
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
  `This project showcases the diverse range of delectable delicacies
  available at a beef restaurant. Leveraging the company's API, the application employs Object-Oriented
   programming to effectively present meal information. Furthermore, users can actively
  engage through comments and reactions, enhancing the interactive dining experience.
  `,
  '"./images/card-images/kona.png"',
  ['COMMERCE', 'Front End', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['JavaScript','API','Webpack','HTML','CSS','Git','GitHub'],
  '"https://david-lanzz.github.io/Kanban/dist/"',
  '"https://github.com/David-Lanzz/Kanban"',
  {
    description: `This project showcases the diverse range of delectable delicacies
     available at a beef restaurant. Leveraging the company's API, the application employs Object-Oriented
      programming to effectively present meal information. Furthermore, users can actively
     engage through comments and reactions, enhancing the interactive dining experience.`,
    url: './images/card-images/kona.png',
    header: 'KONAGRILL MEALS',
    stack1: 'BEEF',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
export const card7 = new Cards(
  'LEADERBOARD',
  `This project serves as a user leaderboard for a specific game,
   enabling participants to store their scores and access the scores achieved
    by other users. Through this implementation, users can easily track their
     progress and compare their performance with fellow participants,
   fostering a sense of competition and engagement within the gaming community.
  `,
  '"./images/card-images/leaderboard.png"',
  ['SCORES', 'Front End', '2023'],
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
  ['COMMERCE', 'Full Stack', '2023'],
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
  `This collaborative project, crafted by my team of developers and me,
   offers a global user base the convenience of booking doctors based on their individual
    availability and preferences. By providing a seamless platform for scheduling appointments,
   we aim to enhance the accessibility and comfort of healthcare services for users worldwide.
  `,
  '"./images/card-images/doc.png"',
  ['HEALTH', 'Full Stack', '2023'],
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

// About cards creation
class Language {
  constructor(name,classname,image){
 this.name = name;
 this.classname = classname;
 this.image = image;
  }
}

// languages creation
export const lang1 = new Language('JavaScript','pLangs javaScript','./images/Ellipse 1 (1).png')
export const lang2 = new Language('HTML', 'pLangs markup','./images/Ellipse 1 (2).png')
export const lang3 = new Language('CSS','pLangs cascade','./images/Ellipse 1 (3).png')
export const lang4 = new Language('Ruby','pLangs cascade','./images/ruby.jpg')
export const lang5 = new Language('SQL','pLangs cascade','./images/sql.jpg')
export const lang6 = new Language('Tailwind CSS','pLangs cascade','./images/tailwind.png')
export const lang7 = new Language('TypeScript','pLangs javaScript','./images/typescript.png')

// library/framework creation
export const lib1 = new Language('React','pLangs javaScript','./images/react.png')
export const lib2 = new Language('Redux','pLangs javaScript','./images/redux.png')
export const lib3 = new Language('React Router','pLangs javaScript','./images/router.png')
export const lib4 = new Language('Vite','pLangs javaScript','./images/vite.jpg')
export const lib5 = new Language('Ruby on Rails','pLangs javaScript','./images/ror.png')

// skills creation
export const skill1 = new Language('Pair Programming','pLangs javaScript','./images/pair.png')
export const skill2 = new Language('Communication','pLangs javaScript','./images/communication.jpg')
export const skill3 = new Language('Git','pLangs javaScript','./images/git.png')
export const skill4 = new Language('GitHub','pLangs javaScript','./images/github.png')
export const skill5 = new Language('postgreSQL','pLangs javaScript','./images/postgre.png')
export const skill6 = new Language('Time Management','pLangs javaScript','./images/time.png')
export const skill7 = new Language('Leadership','pLangs javaScript','./images/leadership.jpg')
