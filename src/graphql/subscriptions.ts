/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract {
    onCreateContract {
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
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract {
    onUpdateContract {
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
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract {
    onDeleteContract {
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
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