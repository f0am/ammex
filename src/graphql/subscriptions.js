/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract {
    onCreateContract {
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
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract {
    onUpdateContract {
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
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract {
    onDeleteContract {
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
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
