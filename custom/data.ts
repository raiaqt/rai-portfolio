const columnSides = {
  build: {
    sideLabel: "the nerd side",
    title: "Build",
    titleAccent: "ild",
    badge: "developer",
    platform: "LinkedIn",
  },
  move: {
    sideLabel: "the movement side",
    title: "Move",
    titleAccent: "ve",
    badge: "sidequester",
    platform: "Instagram",
  },
};

const introduction = {
  title: "Raia",
  nerdSide: {
    label: "the nerd side",
    badge: "developer",
    tagline: "tech nerd by day",
    hint: "LinkedIn-style profile, activity feed, and featured projects.",
  },
  movementSide: {
    label: "the movement side",
    badge: "sidequester",
    tagline: "chronic sidequester · @raiaqt",
    hint: "Instagram-style profile, sidequest highlights, and post feed.",
  },
};

const description = {
  developer: "I ship code, personal projects, tools, and experiments.",
  movement:
    "Off the clock sidequests and the stories that come with them.",
  aside: "CTO at My Powerhouse · coderai.app",
};

const movementPillars = ["Pilates", "Bouldering", "Freediving", "Hiking", "Aerial"];

const movementStory = {
  feed: ["Pilates", "Aerial"],
  highlights: ["Bouldering", "Freediving", "Hiking"],
};

const sidequests = [
  {
    title: "Pilates",
    symbol: "◐",
    text: "Reformer strength and control, a regular thread on the feed.",
    gradient: "pilates",
    image: "feed-pilates.jpg",
    likes: 142,
    comments: 8,
    started: "2021",
    progress: "2–3x/week · reformer + mat",
    aspect: "portrait",
  },
  {
    title: "Bouldering",
    symbol: "△",
    text: "Boulder problems and chalky hands. Problem-solving, different medium.",
    gradient: "climbing",
    image: "feed-climbing.jpg",
    likes: 96,
    comments: 5,
    started: "2023",
    progress: "V4–V5 bouldering · still sending",
    aspect: "square",
  },
  {
    title: "Freediving",
    symbol: "∿",
    text: "Open water, breath holds, and falling in love with the ocean.",
    gradient: "freediving",
    image: "feed-freediving.jpg",
    likes: 218,
    comments: 14,
    started: "2024",
    progress: "30m+ depth · breath hold training",
    aspect: "portrait",
  },
  {
    title: "Hiking",
    symbol: "∧",
    text: "Trails, summits, and the quiet between steps.",
    gradient: "hiking",
    image: "feed-hiking.jpg",
    likes: 173,
    comments: 11,
    started: "2018",
    progress: "Weekend trails · chasing summits",
    aspect: "square",
  },
  {
    title: "Aerial",
    symbol: "◆",
    text: "Silks, hoops, and finding new ways to hang around.",
    gradient: "aerial",
    image: "feed-aerial.jpg",
    likes: 131,
    comments: 9,
    started: "2022",
    progress: "Silks + hoop · still learning",
    aspect: "square",
  },
];

const experience = [
  { role: "Software Engineer", company: "Samsung Electronics" },
  { role: "Lead Engineer", company: "Samsung Electronics" },
  { role: "Technical Lead", company: "UBX" },
  { role: "Chief Technology Officer", company: "Powerhouse", link: "https://mypowerhouse.ph" },
];

const projects = [
  {
    title: "Nightlearn",
    text: "Learn to Code at Night. Change Your Future by Morning.",
    link: "http://nightlearn.org",
    year: "2025",
    github: false,
    image: "nightlearn.png",
  },
  {
    title: "Sortify",
    text: "Turn your inbox into a smart, focused to-do list.",
    link: "https://sortify.coderai.app/",
    year: "2025",
    github: false,
    image: "sortify.png",
  },
];

const background = [
  {
    title: "Chief Technology Officer",
    subtitle: "My Powerhouse · Aboitiz Power",
  },
  {
    title: "BS Biochemistry",
    subtitle: "University of the Philippines Manila · Cum Laude · 2012–2016",
  },
];

const links = {
  instagram: "https://www.instagram.com/raiaqt/",
  github: "https://github.com/raiaqt",
  linkedin: "https://www.linkedin.com/in/raia-quitoriano/",
  gmail: "mailto:rsquitoriano@gmail.com",
  website: "https://coderai.app",
};

const instagram = {
  elfsightAppId: "5971e482-ded4-45ac-a1b2-00e0f817334f",
  username: "raiaqt",
  profileLabel: "Raia Quitoriano",
  profilePhoto: "raia-instagram-profile.jpg",
  tagline: "Pilates · Bouldering · Freediving · Hiking · Aerial",
  seeMoreLabel: "See more on Instagram",
};

const linkedinFeed = {
  elfsightAppId: "7164089b-08f0-4ed2-b781-2dda8601af89",
  profileLabel: "Raia Quitoriano",
  profilePhoto:
    "https://media.licdn.com/dms/image/v2/D5603AQEPxM8HehUShg/profile-displayphoto-shrink_800_800/B56ZZXgdxCGQAc-/0/1745224852722?e=1785974400&v=beta&t=V8I0qgTrYqDtC6IlkyRduxrFvZ_6YQE6g-XcCje_UtE",
  headline: "Chief Technology Officer at My Powerhouse · Aboitiz Power",
  tagline: "Tech nerd by day · shipping code & leading teams",
  seeMoreLabel: "See more on LinkedIn",
};

export default {
  introduction,
  columnSides,
  description,
  movementPillars,
  movementStory,
  sidequests,
  experience,
  projects,
  background,
  links,
  instagram,
  linkedinFeed,
};
