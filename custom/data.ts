import { faker } from '@faker-js/faker';

const introduction = {
  title: "YOUR NAME",
  text: "And a brief description of you",
};

const description = {
  text: faker.lorem.paragraph(),
};

const projects = [
  {
    title: faker.lorem.words(2),
    text: faker.lorem.words(5),
    works: [
      {
        title: faker.word.noun(),
        text: faker.lorem.sentence(),
        link: "/",
        year: "2024",
        github: true,
      },
    ],
  },
  {
    title: faker.lorem.words(3),
    text: faker.lorem.words(4),
    works: [
      {
        title: faker.word.noun(),
        text: faker.lorem.sentence(),
        link: "/",
        year: "2024",
        github: true,
      },
      {
        title: faker.word.noun(),
        text: faker.lorem.sentence(),
        link: "/",
        year: "2024",
        github: true,
      },
    ],
  },
  {
    title: faker.lorem.words(3),
    text: faker.lorem.words(4),
    works: [
      {
        title: faker.word.noun(),
        text: faker.lorem.sentence(),
        link: "/",
        year: "2024",
        github: true,
      },
      {
        title: faker.word.noun(),
        text: faker.lorem.sentence(),
        link: "/",
        year: "2024",
        github: true,
      },
      {
        title: faker.word.noun(),
        text: faker.lorem.sentence(),
        link: "/",
        year: "2024",
        github: false,
      },
    ],
  },
];

const background = [
  {
    title: "Current work",
    data: {
      title: faker.word.verb(),
      subtitle: faker.lorem.words(3),
      text: [
        faker.lorem.words(10),
        faker.lorem.words(15)
      ]
    },
  },
  {
    title: "Education",
    data: {
      title: faker.word.verb(),
      subtitle: faker.lorem.words(3),
      text: [
        faker.lorem.words(1),
        '2012-2016',
      ]
    },
  },
];

const links = {
  instagram: "https://www.instagram.com/",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/",
  gmail: "mailto:sample@gmail.com",
};

export default { introduction, description, projects, background, links };
