// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Role = {
  "EMPLOYEE": "EMPLOYEE",
  "MANAGER": "MANAGER",
  "ADMIN": "ADMIN"
};

const JobType = {
  "BOOKKEEPING": "BOOKKEEPING",
  "TAXES": "TAXES",
  "PAYROLL": "PAYROLL"
};

const { User, Client, Job } = initSchema(schema);

export {
  User,
  Client,
  Job,
  Role,
  JobType
};