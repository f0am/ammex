// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ClientStatus = {
  "PENDING": "PENDING",
  "ACTIVE": "ACTIVE",
  "DISABLED": "DISABLED"
};

const ContractType = {
  "PAYROLL": "PAYROLL",
  "BOOKKEEPING": "BOOKKEEPING",
  "TAXES": "TAXES"
};

const ContractStatus = {
  "PENDING": "PENDING",
  "ACTIVE": "ACTIVE",
  "DISABLED": "DISABLED"
};

const UserRole = {
  "EMPLOYEE": "EMPLOYEE",
  "MANAGER": "MANAGER",
  "ADMIN": "ADMIN"
};

const UserStatus = {
  "PENDING": "PENDING",
  "ACTIVE": "ACTIVE",
  "DISABLED": "DISABLED"
};

const JobStatus = {
  "PENDING": "PENDING",
  "ACTIVE": "ACTIVE",
  "IN_PROGRESS": "IN_PROGRESS",
  "BLOCKED": "BLOCKED",
  "COMPLETED": "COMPLETED"
};

const { Client, Contract, Job, User, Comment } = initSchema(schema);

export {
  Client,
  Contract,
  Job,
  User,
  Comment,
  ClientStatus,
  ContractType,
  ContractStatus,
  UserRole,
  UserStatus,
  JobStatus
};