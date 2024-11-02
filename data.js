// Need an array object for Repositories

const repos = [

  { 
    id: 0,
    name: "test-repo000",
    description: "Lorem ipsum",
    primaryLanguage: "javascript",
    publicOrPrivate: "public",
    isStarred: true,
   },

   { 
    id: 1,
    name: "test-repo001",
    description: "Lorem ipsum",
    primaryLanguage: "html",
    publicOrPrivate: "public",
    isStarred: true,
   },

   { 
    id: 2,
    name: "test-repo002",
    description: "Lorem ipsum",
    primaryLanguage: "python",
    publicOrPrivate: "public",
    isStarred: true,
   },

   { 
    id: 3,
    name: "test-repo003",
    description: "Lorem ipsum",
    primaryLanguage: "rust",
    publicOrPrivate: "public",
    isStarred: true,
   },

   { 
    id: 4,
    name: "test-repo004",
    description: "Lorem ipsum",
    primaryLanguage: "javascript",
    publicOrPrivate: "public",
    isStarred: true,
   },

   { 
    id: 5,
    name: "test-repo005",
    description: "Lorem ipsum",
    primaryLanguage: "c++",
    publicOrPrivate: "public",
    isStarred: true,
   },

   { 
    id: 6,
    name: "test-repo006",
    description: "Lorem ipsum",
    primaryLanguage: "javascript",
    publicOrPrivate: "public",
    isStarred: false,
   },

   { 
    id: 7,
    name: "test-repo007",
    description: "Lorem ipsum",
    primaryLanguage: "html",
    publicOrPrivate: "private",
    isStarred: false,
   },

   { 
    id: 8,
    name: "test-repo008",
    description: "Lorem ipsum",
    primaryLanguage: "javascript",
    publicOrPrivate: "public",
    isStarred: false,
   },

   { 
    id: 9,
    name: "test-repo009",
    description: "Lorem ipsum",
    primaryLanguage: "c#",
    publicOrPrivate: "private",
    isStarred: false,
   },

   { 
    id: 10,
    name: "test-repo010",
    description: "Lorem ipsum",
    primaryLanguage: "javascript",
    publicOrPrivate: "public",
    isStarred: false,
   },

]



// Need an array object for Projects

const projects = [

  { 
    id: 0,
    name: "test-project000",
    description: "Lorem ipsum",
    primaryLanguage: "javascript",
    publicOrPrivate: "public",
    isOpen: true,
   },

   { 
    id: 1,
    name: "test-project001",
    description: "Lorem ipsum",
    primaryLanguage: "html",
    publicOrPrivate: "public",
    isOpen: true,
   },

   { 
    id: 2,
    name: "test-project002",
    description: "Lorem ipsum",
    primaryLanguage: "python",
    publicOrPrivate: "public",
    isOpen: true,
   },

   { 
    id: 3,
    name: "cat-tracker-app",
    description: "Lorem ipsum",
    primaryLanguage: "rust",
    publicOrPrivate: "public",
    isOpen: true,
   },

   { 
    id: 4,
    name: "cookie-recipe-generator",
    description: "Lorem ipsum",
    primaryLanguage: "javascript",
    publicOrPrivate: "public",
    isOpen: true,
   },

   { 
    id: 5,
    name: "get-the-weather",
    description: "Lorem ipsum",
    primaryLanguage: "c++",
    publicOrPrivate: "public",
    isOpen: true,
   },

   { 
    id: 6,
    name: "news-scraper",
    description: "Lorem ipsum",
    primaryLanguage: "javascript",
    publicOrPrivate: "public",
    isOpen: false,
   },

   { 
    id: 7,
    name: "word-press-killer",
    description: "Lorem ipsum",
    primaryLanguage: "html",
    publicOrPrivate: "private",
    isOpen: false,
   },

   { 
    id: 8,
    name: "choose-your-own-adventure-game",
    description: "Lorem ipsum",
    primaryLanguage: "javascript",
    publicOrPrivate: "public",
    isOpen: false,
   },

   { 
    id: 9,
    name: "book-organizer",
    description: "Lorem ipsum",
    primaryLanguage: "c#",
    publicOrPrivate: "private",
    isOpen: false,
   },

   { 
    id: 10,
    name: "todo-list",
    description: "Lorem ipsum",
    primaryLanguage: "javascript",
    publicOrPrivate: "public",
    isOpen: false,
   },

]





// Need an array object for Packages


const packages = [

  { 
    id: 0,
    name: "test-package000",
    description: "Lorem ipsum",
    publicOrPrivate: "public",
    isOpen: true,
   },

   { 
    id: 1,
    name: "test-package001",
    description: "Lorem ipsum",
    publicOrPrivate: "public",
    isOpen: true,
   },

   { 
    id: 2,
    name: "test-package002",
    description: "Lorem ipsum",
    publicOrPrivate: "public",
    isOpen: true,
   },

   { 
    id: 3,
    name: "Apple Kernel Corer",
    description: "Lorem ipsum",
    publicOrPrivate: "public",
    isOpen: true,
   },

   { 
    id: 4,
    name: "Banana Peel Scraper",
    description: "Lorem ipsum",
    publicOrPrivate: "public",
    isOpen: true,
   },

   { 
    id: 5,
    name: "Grape Bundler",
    description: "Lorem ipsum",
    publicOrPrivate: "public",
    isOpen: true,
   },

   { 
    id: 6,
    name: "Orange Code Juicer",
    description: "Lorem ipsum",
    publicOrPrivate: "public",
    isOpen: false,
   },

   { 
    id: 7,
    name: "Chocolate Bar Segmenter",
    description: "Lorem ipsum",
    publicOrPrivate: "private",
    isOpen: false,
   },

   { 
    id: 8,
    name: "Peppermint Log Logger",
    description: "Lorem ipsum",
    publicOrPrivate: "public",
    isOpen: false,
   },

   { 
    id: 9,
    name: "Caramel Carrier",
    description: "Lorem ipsum",
    publicOrPrivate: "private",
    isOpen: false,
   },

   { 
    id: 10,
    name: "Mystery Meat",
    description: "Lorem ipsum",
    publicOrPrivate: "public",
    isOpen: false,
   },

]

// array object for pinned repos

const pinnedRepos = [
  { 
    id: 0,
    name: "pinned-repo-test000",
    description: "Lorem ipsum",
    primaryLanguage: "react",
    publicOrPrivate: "public",
    isStarred: true,
  },

  { 
    id: 1,
    name: "pinned-repo-test001",
    description: "Lorem ipsum",
    primaryLanguage: "css",
    publicOrPrivate: "public",
    isStarred: true,
  },

  { 
    id: 2,
    name: "pinned-repo-test002",
    description: "Lorem ipsum",
    primaryLanguage: "python",
    publicOrPrivate: "public",
    isStarred: true,
  },

  { 
    id: 3,
    name: "pinned-repo-test003",
    description: "Lorem ipsum",
    primaryLanguage: "rust",
    publicOrPrivate: "public",
    isStarred: true,
  },
]




// Complex data object 

export {repos, projects, packages, pinnedRepos};
