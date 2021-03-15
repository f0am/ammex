/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createContract = /* GraphQL */ `
  mutation CreateContract(
    $input: CreateContractInput!
    $condition: ModelContractConditionInput
  ) {
    createContract(input: $input, condition: $condition) {
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
export const updateContract = /* GraphQL */ `
  mutation UpdateContract(
    $input: UpdateContractInput!
    $condition: ModelContractConditionInput
  ) {
    updateContract(input: $input, condition: $condition) {
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
export const deleteContract = /* GraphQL */ `
  mutation DeleteContract(
    $input: DeleteContractInput!
    $condition: ModelContractConditionInput
  ) {
    deleteContract(input: $input, condition: $condition) {
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
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
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
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
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
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
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
