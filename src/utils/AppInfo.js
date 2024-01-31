// ESM
import { faker } from "@faker-js/faker";

const AppInfo = {
  logo: faker.person.fullName({
    firstName: "Vorname",
    lastName: "Nachname",
    sex: "female" | "male",
  }),
};

export default AppInfo;
