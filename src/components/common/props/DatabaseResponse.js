import { faker } from "@faker-js/faker";

const DatabaseResponse = {
  profile: {
    name: faker.name.firstName(undefined),
    age: faker.number.int(99),
    adress: faker.location.city(),

    followerCount: faker.number.int(10000),
    followingCount: faker.number.int(100),
    postCount: faker.number.int(20),
  },
  posts: [
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
  ],
};

export default DatabaseResponse;
