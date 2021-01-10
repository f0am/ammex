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

export enum JobStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  IN_PROGRESS = "IN_PROGRESS",
  BLOCKED = "BLOCKED",
  COMPLETED = "COMPLETED"
}



export declare class Client {
  readonly id: string;
  readonly clientNumber: string;
  readonly name: string;
  readonly contact: string;
  readonly phone: string;
  readonly address: string;
  readonly province?: string;
  readonly city: string;
  readonly postalCode: string;
  readonly email: string;
  readonly owners: (string | null)[];
  readonly status?: ClientStatus | keyof typeof ClientStatus;
  readonly contracts: (Contract | null)[];
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

export declare class Contract {
  readonly id: string;
  readonly client: Client;
  readonly type: ContractType | keyof typeof ContractType;
  readonly status?: ContractStatus | keyof typeof ContractStatus;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly gst?: string;
  readonly qst?: string;
  readonly period?: string;
  readonly corporation?: boolean;
  readonly corporationYearEndDate?: string;
  readonly payrollNumber?: string;
  readonly payrollFrequency?: string;
  readonly remittancePeriod?: string;
  readonly remittancePeriodQc?: string;
  readonly cheques?: number;
  readonly wsib?: string;
  readonly wsibRemittance?: string;
  readonly wsibRate?: string;
  readonly wsibCode?: string;
  readonly csst?: string;
  readonly csstRemittance?: string;
  readonly csstRate?: string;
  readonly csstCode?: string;
  readonly t4Deadline?: string;
  readonly jobs?: (Job | null)[];
  constructor(init: ModelInit<Contract>);
  static copyOf(source: Contract, mutator: (draft: MutableModel<Contract>) => MutableModel<Contract> | void): Contract;
}

export declare class Job {
  readonly id: string;
  readonly contract: Contract;
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
  readonly job?: Job;
  readonly user?: User;
  readonly content: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}