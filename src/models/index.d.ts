import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ContractType {
  TAXES = "TAXES",
  PAYROLL = "PAYROLL",
  BOOKKEEPING = "BOOKKEEPING"
}

export enum UserStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED"
}

export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  USER = "USER"
}



export declare class Job {
  readonly id: string;
  readonly contractID: string;
  readonly deadline?: string;
  readonly userID: string;
  readonly name?: string;
  constructor(init: ModelInit<Job>);
  static copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}

export declare class Contract {
  readonly id: string;
  readonly type?: ContractType | keyof typeof ContractType;
  readonly clientID: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly Jobs?: Job[];
  readonly contractInfo?: string;
  readonly Client?: Client;
  constructor(init: ModelInit<Contract>);
  static copyOf(source: Contract, mutator: (draft: MutableModel<Contract>) => MutableModel<Contract> | void): Contract;
}

export declare class Client {
  readonly id: string;
  readonly name?: string;
  readonly contact?: string;
  readonly phone?: string;
  readonly address?: string;
  readonly province?: string;
  readonly city?: string;
  readonly postalCode?: string;
  readonly email?: string;
  readonly owners?: string[];
  readonly Contracts?: Contract[];
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly phone?: string;
  readonly role?: UserRole | keyof typeof UserRole;
  readonly status?: UserStatus | keyof typeof UserStatus;
  readonly Jobs?: Job[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}