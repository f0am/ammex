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

const Remittance = {
  "MONTHLY": "MONTHLY",
  "QUATERLY": "QUATERLY",
  "YEARLY": "YEARLY"
};

const Frequency = {
  "WEEKLY": "WEEKLY",
  "BI_WEEKLY": "BI_WEEKLY",
  "SEMI_MONTHLY": "SEMI_MONTHLY",
  "MONTHLY": "MONTHLY"
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

const CommentStatus = {
  "DRAFT": "DRAFT",
  "PUBLISHED": "PUBLISHED"
};

const JobStatus = {
  "PENDING": "PENDING",
  "ACTIVE": "ACTIVE",
  "IN_PROGRESS": "IN_PROGRESS",
  "BLOCKED": "BLOCKED",
  "REVIEW": "REVIEW",
  "APPROVAL": "APPROVAL",
  "WAITING_FOR_PAYMENT": "WAITING_FOR_PAYMENT",
  "COMPLETED": "COMPLETED"
};

const { Client, Contract, Job, User, Comment, Person, AccessCodes, MetaData, BookkeepingMeta, TaxesMeta, PayrollMeta } = initSchema(schema);

export {
  Client,
  Contract,
  Job,
  User,
  Comment,
  ClientStatus,
  ContractType,
  ContractStatus,
  Remittance,
  Frequency,
  UserRole,
  UserStatus,
  CommentStatus,
  JobStatus,
  Person,
  AccessCodes,
  MetaData,
  BookkeepingMeta,
  TaxesMeta,
  PayrollMeta
};