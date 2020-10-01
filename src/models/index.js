// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Role = {
  "EMPLOYEE": "Employee",
  "MANAGER": "Manager",
  "ADMIN": "Admin"
};

const JobType = {
  "BOOKKEEPING": "Bookkeeping",
  "TAXES": "Taxes",
  "PAYROLL": "Payroll"
};

const { User, Client, Job } = initSchema(schema);

export {
  User,
  Client,
  Job,
  Role,
  JobType
};