
import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 8000
app.use(express.json());

let userId = 1;
let companyId = 1;

// Function to create a new User
const createUser = () => ({
  _id: userId++,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  email: faker.internet.email(),
  password: faker.internet.password()
});

// Function to create a new Company
const createCompany = () => ({
  _id: companyId++,
  name: faker.company.name(),
  address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country()
  }
});

// Route: Return new user
app.get('/api/users/new', (req, res) => {
  const user = createUser();
  res.json(user);
});

// Route: Return new company
app.get('/api/companies/new', (req, res) => {
  const company = createCompany();
  res.json(company);
});

// Route: Return both user and company
app.get('/api/user/company', (req, res) => {
  const user = createUser();
  const company = createCompany();
  res.json({ user, company });
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
