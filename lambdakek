/* Amplify Params - DO NOT EDIT
	API_AMMEX_GRAPHQLAPIENDPOINTOUTPUT
	API_AMMEX_GRAPHQLAPIIDOUTPUT
	API_AMMEX_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const axios = require('axios')
const gql = require('graphql-tag')
const graphql = require('graphql')
const { print } = graphql

// const listContracts = gql`
//   query ListContracts {
//     listContracts {
//       items {
//         clientID
//         type
//         corporation
//         corporationYearEndDate
//         createdAt
//         csstRemittance
//         endDate
//         payrollFrequency
//         period
//         remittancePeriod
//         remittancePeriodQc
//         startDate
//         t4Deadline
//         wsibRemittance
//         jobs {
//           items {
//             clientID
//             type
//             deadline
//           }
//         }
//       }
//     }
//   }
// `

const createJobMutation = gql`
  mutation CreateJob($input: CreateJobInput!) {
    createJob(input: $input) {
      clientID
      type
      deadline
      name
      description
    }
  }
`

// async function fetchContracts () {
//   try {
//     const graphqlData = await axios({
//       url: process.env.API_AMMEX_GRAPHQLAPIENDPOINTOUTPUT,
//       method: 'post',
//       headers: {
//         'x-api-key': process.env.API_AMMEX_GRAPHQLAPIKEYOUTPUT,
//       },
//       data: {
//         query: print(listContracts),
//       },
//     })

//     return graphqlData.data.data.listContracts
//   } catch (err) {
//     console.log('error posting to appsync: ', err)
//   }
// }

async function getContract (clientID, type) {
  const getContract = gql`
    query GetContract($clientID: ID!, $type: String!) {
      getContract(clientID: $clientID, type: $type) {
        clientID
        client{
          clientNumber
        }
        type
        corporation
        corporationYearEndDate
        createdAt
        csstRemittance
        endDate
        payrollFrequency
        period
        remittancePeriod
        remittancePeriodQc
        startDate
        t4Deadline
        wsibRemittance
      }
    }
  `

  try {
    const graphqlData = await axios({
      url: process.env.API_AMMEX_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_AMMEX_GRAPHQLAPIKEYOUTPUT,
      },
      data: {
        query: print(getContract),
        variables: {
          clientID: clientID,
          type: type,
        },
      },
    })

    return graphqlData.data.data.getContract
  } catch (err) {
    console.log('error posting to appsync: ', err)
  }
}

async function createJob (clientID, type, deadline, name, description) {
  try {
    const s = await axios({
      url: process.env.API_AMMEX_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_AMMEX_GRAPHQLAPIKEYOUTPUT,
      },
      data: {
        query: print(createJobMutation),
        variables: {
          input: {
            clientID,
            deadline,
            type,
            name,
            description,
          },
        },
      },
    })
    return s
  } catch (err) {
    console.log('error posting to appsync: ', err)
  }
}

async function processTaxesContract (contract) {
  const startDate = new Date(contract.startDate)
  const endDate = new Date(contract.endDate)

  let deadline
  for (let year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
    if (contract.corporation) {
      deadline = new Date(contract.corporationYearEndDate)
      deadline.setFullYear(year)
    } else {
      deadline = new Date(year, 3, 30)
    }

    await createJob(
      contract.clientID,
      contract.type,
      deadline.toISOString(),
      `${contract.client.clientNumber} | T4 - ${year}`,
      'T4 stuff',
    )
  }
}

async function processBookkeepingContract (contract) {
  const startDate = new Date(contract.startDate)
  const endDate = new Date(contract.endDate)

  for (let year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
    let deadline
    if (contract.corporation) {
      deadline = new Date(contract.corporationYearEndDate)
      deadline.setFullYear(year)
    } else {
      deadline = new Date(year, 3, 30)
    }

    await createJob(
      contract.clientID,
      contract.type,
      deadline.toISOString(),
      `${contract.client.clientNumber} | T4 - ${year}`,
      'T4 stuff',
    )
  }
}

async function processPayrollContract (contract) {
  await createJob(contract.clientID, contract.type)
}

exports.handler = async ({ clientID, type }) => {
  const contract = await getContract(clientID, type)

  if (type === 'TAXES') {
    await processTaxesContract(contract)
  } else if (type === 'BOOKKEEPING') {
    await processBookkeepingContract(contract)
  }

  // const contracts = await fetchContracts()

  // const taxesContracts = contracts.items.filter(c => c.type === 'TAXES')

  // contracts.items.forEach(async c => {
  //   if (c.type === 'TAXES') {
  //     const s = await processTaxesContract(c)
  //     console.log(s)
  //   }
  // })

  return {
    statusCode: 200,
    body: JSON.stringify(contract),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}
