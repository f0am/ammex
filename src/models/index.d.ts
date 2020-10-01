import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Role {
  EMPLOYEE = "Employee",
  MANAGER = "Manager",
  ADMIN = "Admin"
}

export enum JobType {
  BOOKKEEPING = "Bookkeeping",
  TAXES = "Taxes",
  PAYROLL = "Payroll"
}



export declare class User {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly email: string;
  readonly role: Role | keyof typeof Role;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Client {
  readonly id: string;
  readonly name: string;
  readonly contact: string;
  readonly phone: string;
  readonly address: string;
  readonly email: string;
  readonly jobs?: Job[];
  constructor(init: ModelInit<Client>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

export declare class Job {
  readonly id: string;
  readonly client?: Client;
  readonly type: JobType | keyof typeof JobType;
  readonly dueDate: string;
  constructor(init: ModelInit<Job>);
  static copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}