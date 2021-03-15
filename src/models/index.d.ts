import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ClientStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED"
}

export enum ContractType {
  PAYROLL = "PAYROLL",
  BOOKKEEPING = "BOOKKEEPING",
  TAXES = "TAXES"
}

export enum ContractStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED"
}

export enum Remittance {
  MONTHLY = "MONTHLY",
  QUATERLY = "QUATERLY",
  YEARLY = "YEARLY"
}

export enum Frequency {
  WEEKLY = "WEEKLY",
  BI_WEEKLY = "BI_WEEKLY",
  SEMI_MONTHLY = "SEMI_MONTHLY",
  MONTHLY = "MONTHLY"
}

export enum UserRole {
  EMPLOYEE = "EMPLOYEE",
  MANAGER = "MANAGER",
  ADMIN = "ADMIN"
}

export enum UserStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED"
}

export enum CommentStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED"
}

export enum JobStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  IN_PROGRESS = "IN_PROGRESS",
  BLOCKED = "BLOCKED",
  REVIEW = "REVIEW",
  APPROVAL = "APPROVAL",
  WAITING_FOR_PAYMENT = "WAITING_FOR_PAYMENT",
  COMPLETED = "COMPLETED"
}

export declare class Person {
  readonly firstName: string;
  readonly lastName: string;
  readonly phone?: string;
  readonly email?: string;
  constructor(init: ModelInit<Person>);
}

export declare class AccessCodes {
  readonly cliqsecr?: string;
  readonly cra?: string;
  readonly wsib?: string;
  readonly csst?: string;
  constructor(init: ModelInit<AccessCodes>);
}

export declare class MetaData {
  readonly bookkeeping?: BookkeepingMeta;
  readonly taxes?: TaxesMeta;
  readonly payroll?: PayrollMeta;
  constructor(init: ModelInit<MetaData>);
}

export declare class BookkeepingMeta {
  readonly startDate?: string;
  readonly endDate?: string;
  readonly gst?: string;
  readonly gstRemittance?: Remittance | keyof typeof Remittance;
  readonly qst?: string;
  readonly qstRemittance?: Remittance | keyof typeof Remittance;
  constructor(init: ModelInit<BookkeepingMeta>);
}

export declare class TaxesMeta {
  readonly year?: string;
  readonly corporation?: boolean;
  readonly corporationYearEndDate?: string;
  constructor(init: ModelInit<TaxesMeta>);
}

export declare class PayrollMeta {
  readonly startDate?: string;
  readonly endDate?: string;
  readonly payrollNumber?: string;
  readonly frequency?: Frequency | keyof typeof Frequency;
  readonly remittance?: Remittance | keyof typeof Remittance;
  readonly remittanceQc?: Remittance | keyof typeof Remittance;
  readonly wsib?: string;
  readonly wsibRemittance?: Remittance | keyof typeof Remittance;
  readonly wsibRate?: string;
  readonly csst?: string;
  readonly csstRemittance?: Remittance | keyof typeof Remittance;
  readonly csstRate?: string;
  constructor(init: ModelInit<PayrollMeta>);
}

export declare class Client {
  readonly id: string;
  readonly clientNumber: string;
  readonly name: string;
  readonly contact: Person;
  readonly address: string;
  readonly province?: string;
  readonly city: string;
  readonly postalCode: string;
  readonly status?: ClientStatus | keyof typeof ClientStatus;
  readonly owners: (Person | null)[];
  readonly codes?: AccessCodes;
  readonly cheques?: number;
  readonly contracts: (Contract | null)[];
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

export declare class Contract {
  readonly id: string;
  readonly client?: Client;
  readonly type?: ContractType | keyof typeof ContractType;
  readonly status?: ContractStatus | keyof typeof ContractStatus;
  readonly date?: string;
  readonly meta?: MetaData;
  readonly jobs?: (Job | null)[];
  constructor(init: ModelInit<Contract>);
  static copyOf(source: Contract, mutator: (draft: MutableModel<Contract>) => MutableModel<Contract> | void): Contract;
}

export declare class Job {
  readonly id: string;
  readonly contract?: Contract;
  readonly name: string;
  readonly description?: string;
  readonly deadline: string;
  readonly assignee?: User;
  readonly status?: JobStatus | keyof typeof JobStatus;
  readonly comments?: (Comment | null)[];
  constructor(init: ModelInit<Job>);
  static copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly role: UserRole | keyof typeof UserRole;
  readonly status?: UserStatus | keyof typeof UserStatus;
  readonly jobs: (Job | null)[];
  readonly comments: (Comment | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Comment {
  readonly id: string;
  readonly job: Job;
  readonly user: User;
  readonly content: string;
  readonly status?: CommentStatus | keyof typeof CommentStatus;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}