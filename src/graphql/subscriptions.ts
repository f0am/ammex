/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstName
      lastName
      phone
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      phone
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      phone
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
      id
      name
      contact
      phone
      address
      email
      jobs {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
      id
      name
      contact
      phone
      address
      email
      jobs {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
      id
      name
      contact
      phone
      address
      email
      jobs {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
      id
      clientID
      client {
        id
        name
        contact
        phone
        address
        email
        createdAt
        updatedAt
      }
      type
      dueDate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
      id
      clientID
      client {
        id
        name
        contact
        phone
        address
        email
        createdAt
        updatedAt
      }
      type
      dueDate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
      id
      clientID
      client {
        id
        name
        contact
        phone
        address
        email
        createdAt
        updatedAt
      }
      type
      dueDate
      createdAt
      updatedAt
    }
  }
`;
