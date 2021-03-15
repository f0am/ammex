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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
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
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
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
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
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
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
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
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
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
                version
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
                version
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
              version
            }
            nextToken
            startedAt
          }
          comments {
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
                version
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
                version
              }
              content
              status
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        status
        comments {
          items {
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
                version
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
                version
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
              version
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
              version
            }
            content
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
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
          items {
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        comments {
          items {
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
                version
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
                version
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
              version
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
              version
            }
            content
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
      }
      content
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
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
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
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
                version
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
                version
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
              version
            }
            nextToken
            startedAt
          }
          comments {
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
                version
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
                version
              }
              content
              status
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        status
        comments {
          items {
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
                version
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
                version
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
              version
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
              version
            }
            content
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
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
          items {
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        comments {
          items {
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
                version
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
                version
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
              version
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
              version
            }
            content
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
      }
      content
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
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
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
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
                version
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
                version
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
              version
            }
            nextToken
            startedAt
          }
          comments {
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
                version
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
                version
              }
              content
              status
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        status
        comments {
          items {
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
                version
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
                version
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
              version
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
              version
            }
            content
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
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
          items {
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        comments {
          items {
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
                version
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
                version
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
              version
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
              version
            }
            content
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
      }
      content
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      version
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
          items {
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
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
          contract {
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          status
          comments {
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
                version
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
                version
              }
              content
              status
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      version
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
          items {
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
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
          contract {
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          status
          comments {
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
                version
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
                version
              }
              content
              status
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      version
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
          items {
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
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
          contract {
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          status
          comments {
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
                version
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
                version
              }
              content
              status
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
      contract {
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
                version
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
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
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
          items {
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        comments {
          items {
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
                version
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
                version
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
              version
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
              version
            }
            content
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
      }
      status
      comments {
        items {
          id
          job {
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          content
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
      contract {
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
                version
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
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
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
          items {
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        comments {
          items {
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
                version
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
                version
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
              version
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
              version
            }
            content
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
      }
      status
      comments {
        items {
          id
          job {
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          content
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
      contract {
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
                version
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
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
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
          items {
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        comments {
          items {
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
                version
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
                version
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
              version
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
              version
            }
            content
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        version
      }
      status
      comments {
        items {
          id
          job {
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          content
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      version
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
          contract {
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          status
          comments {
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
                version
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
                version
              }
              content
              status
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      comments {
        items {
          id
          job {
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          content
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
      jobs {
        items {
          id
          contract {
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          status
          comments {
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
                version
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
                version
              }
              content
              status
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      comments {
        items {
          id
          job {
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          content
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
      jobs {
        items {
          id
          contract {
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          status
          comments {
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
                version
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
                version
              }
              content
              status
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              version
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      comments {
        items {
          id
          job {
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
                version
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
              version
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
              version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
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
                version
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
                version
              }
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            version
          }
          content
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      version
    }
  }
`;
