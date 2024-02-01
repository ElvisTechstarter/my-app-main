// ESM
import { faker } from "@faker-js/faker";

const AppData = {
  logo: faker.image.abstract(),
  image: faker.image.avatar(),
  name: faker.person.fullName(),
};

export default AppData;
