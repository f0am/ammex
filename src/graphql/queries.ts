/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      createdAt
      updatedAt
      version
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
        createdAt
        updatedAt
        version
      }
      nextToken
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      clientNumber
      name
      contact
      phone
      address
      province
      city
      postalCode
      email
      owners
      status
      contracts {
        items {
          clientID
          type
          startDate
          endDate
          gst
          qst
          period
          corporation
          corporationYearEndDate
          payrollNumber
          payrollFrequency
          remittancePeriod
          remittancePeriodQc
          cheques
          wsib
          wsibRemittance
          wsibRate
          wsibCode
          csst
          csstRemittance
          csstRate
          csstCode
          t4Deadline
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      createdAt
      updatedAt
      version
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
        contact
        phone
        address
        province
        city
        postalCode
        email
        owners
        status
        contracts {
          nextToken
        }
        createdAt
        updatedAt
        version
      }
      nextToken
    }
  }
`;
export const getContract = /* GraphQL */ `
  query GetContract($clientID: ID!, $type: String!) {
    getContract(clientID: $clientID, type: $type) {
      clientID
      client {
        id
        clientNumber
        name
        contact
        phone
        address
        province
        city
        postalCode
        email
        owners
        status
        contracts {
          nextToken
        }
        createdAt
        updatedAt
        version
      }
      type
      startDate
      endDate
      gst
      qst
      period
      corporation
      corporationYearEndDate
      payrollNumber
      payrollFrequency
      remittancePeriod
      remittancePeriodQc
      cheques
      wsib
      wsibRemittance
      wsibRate
      wsibCode
      csst
      csstRemittance
      csstRate
      csstCode
      t4Deadline
      jobs {
        items {
          id
          clientID
          type
          deadline
          assigneeID
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      createdAt
      updatedAt
      version
    }
  }
`;
export const listContracts = /* GraphQL */ `
  query ListContracts(
    $clientID: ID
    $type: ModelStringKeyConditionInput
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listContracts(
      clientID: $clientID
      type: $type
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        clientID
        client {
          id
          clientNumber
          name
          contact
          phone
          address
          province
          city
          postalCode
          email
          owners
          status
          createdAt
          updatedAt
          version
        }
        type
        startDate
        endDate
        gst
        qst
        period
        corporation
        corporationYearEndDate
        payrollNumber
        payrollFrequency
        remittancePeriod
        remittancePeriodQc
        cheques
        wsib
        wsibRemittance
        wsibRate
        wsibCode
        csst
        csstRemittance
        csstRate
        csstCode
        t4Deadline
        jobs {
          nextToken
        }
        createdAt
        updatedAt
        version
      }
      nextToken
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
      id
      clientID
      type
      contract {
        clientID
        client {
          id
          clientNumber
          name
          contact
          phone
          address
          province
          city
          postalCode
          email
          owners
          status
          createdAt
          updatedAt
          version
        }
        type
        startDate
        endDate
        gst
        qst
        period
        corporation
        corporationYearEndDate
        payrollNumber
        payrollFrequency
        remittancePeriod
        remittancePeriodQc
        cheques
        wsib
        wsibRemittance
        wsibRate
        wsibCode
        csst
        csstRemittance
        csstRate
        csstCode
        t4Deadline
        jobs {
          nextToken
        }
        createdAt
        updatedAt
        version
      }
      deadline
      assigneeID
      createdAt
      updatedAt
      version
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
        clientID
        type
        contract {
          clientID
          type
          startDate
          endDate
          gst
          qst
          period
          corporation
          corporationYearEndDate
          payrollNumber
          payrollFrequency
          remittancePeriod
          remittancePeriodQc
          cheques
          wsib
          wsibRemittance
          wsibRate
          wsibCode
          csst
          csstRemittance
          csstRate
          csstCode
          t4Deadline
          createdAt
          updatedAt
          version
        }
        deadline
        assigneeID
        createdAt
        updatedAt
        version
      }
      nextToken
    }
  }
`;
