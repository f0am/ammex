// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContractType = {
  "TAXES": "TAXES",
  "PAYROLL": "PAYROLL",
  "BOOKKEEPING": "BOOKKEEPING"
};

const UserStatus = {
  "PENDING": "PENDING",
  "ACTIVE": "ACTIVE",
  "DISABLED": "DISABLED"
};

const UserRole = {
  "ADMIN": "ADMIN",
  "MANAGER": "MANAGER",
  "USER": "USER"
};

const { Job, Contract, Client, User } = initSchema(schema);

export {
  Job,
  Contract,
  Client,
  User,
  ContractType,
  UserStatus,
  UserRole
};