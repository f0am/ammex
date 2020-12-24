/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createContract = /* GraphQL */ `
  mutation CreateContract(
    $input: CreateContractInput!
    $condition: ModelContractConditionInput
  ) {
    createContract(input: $input, condition: $condition) {
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
export const updateContract = /* GraphQL */ `
  mutation UpdateContract(
    $input: UpdateContractInput!
    $condition: ModelContractConditionInput
  ) {
    updateContract(input: $input, condition: $condition) {
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
export const deleteContract = /* GraphQL */ `
  mutation DeleteContract(
    $input: DeleteContractInput!
    $condition: ModelContractConditionInput
  ) {
    deleteContract(input: $input, condition: $condition) {
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
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
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
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
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
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
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
