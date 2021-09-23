/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncClients = /* GraphQL */ `
  query SyncClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        clientNumber
        name
        contact {
          firstName
          lastName
          phone
          email
        }
        address
        province
        city
        postalCode
        status
        owners {
          firstName
          lastName
          phone
          email
        }
        codes {
          cliqsecr
          cra
          wsib
          csst
        }
        cheques
        contracts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      clientNumber
      name
      contact {
        firstName
        lastName
        phone
        email
      }
      address
      province
      city
      postalCode
      status
      owners {
        firstName
        lastName
        phone
        email
      }
      codes {
        cliqsecr
        cra
        wsib
        csst
      }
      cheques
      contracts {
        items {
          id
          type
          status
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientNumber
        name
        contact {
          firstName
          lastName
          phone
          email
        }
        address
        province
        city
        postalCode
        status
        owners {
          firstName
          lastName
          phone
          email
        }
        codes {
          cliqsecr
          cra
          wsib
          csst
        }
        cheques
        contracts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        job {
          id
          name
          description
          deadline
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        user {
          id
          email
          firstName
          lastName
          phone
          role
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        content
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      job {
        id
        contract {
          id
          type
          status
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        name
        description
        deadline
        assignee {
          id
          email
          firstName
          lastName
          phone
          role
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        status
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
        id
        email
        firstName
        lastName
        phone
        role
        status
        jobs {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      content
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        job {
          id
          name
          description
          deadline
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        user {
          id
          email
          firstName
          lastName
          phone
          role
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        content
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncContracts = /* GraphQL */ `
  query SyncContracts(
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContracts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        client {
          id
          clientNumber
          name
          address
          province
          city
          postalCode
          status
          cheques
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        type
        status
        date
        jobs {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getContract = /* GraphQL */ `
  query GetContract($id: ID!) {
    getContract(id: $id) {
      id
      client {
        id
        clientNumber
        name
        contact {
          firstName
          lastName
          phone
          email
        }
        address
        province
        city
        postalCode
        status
        owners {
          firstName
          lastName
          phone
          email
        }
        codes {
          cliqsecr
          cra
          wsib
          csst
        }
        cheques
        contracts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      type
      status
      date
      meta {
        bookkeeping {
          startDate
          endDate
          gst
          gstRemittance
          qst
          qstRemittance
        }
        taxes {
          year
          corporation
          corporationYearEndDate
        }
        payroll {
          startDate
          endDate
          payrollNumber
          frequency
          remittance
          remittanceQc
          wsib
          wsibRemittance
          wsibRate
          csst
          csstRemittance
          csstRate
        }
      }
      jobs {
        items {
          id
          name
          description
          deadline
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listContracts = /* GraphQL */ `
  query ListContracts(
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContracts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        client {
          id
          clientNumber
          name
          address
          province
          city
          postalCode
          status
          cheques
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        type
        status
        date
        jobs {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncJobs = /* GraphQL */ `
  query SyncJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncJobs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        contract {
          id
          type
          status
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        name
        description
        deadline
        assignee {
          id
          email
          firstName
          lastName
          phone
          role
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        status
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
      id
      contract {
        id
        client {
          id
          clientNumber
          name
          address
          province
          city
          postalCode
          status
          cheques
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        type
        status
        date
        jobs {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      name
      description
      deadline
      assignee {
        id
        email
        firstName
        lastName
        phone
        role
        status
        jobs {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      status
      comments {
        items {
          id
          content
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contract {
          id
          type
          status
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        name
        description
        deadline
        assignee {
          id
          email
          firstName
          lastName
          phone
          role
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        status
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        firstName
        lastName
        phone
        role
        status
        jobs {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      firstName
      lastName
      phone
      role
      status
      jobs {
        items {
          id
          name
          description
          deadline
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      comments {
        items {
          id
          content
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        lastName
        phone
        role
        status
        jobs {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
