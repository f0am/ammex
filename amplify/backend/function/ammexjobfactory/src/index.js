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

const listContracts = gql`
  query listTodos {
    listContracts {
      items {
        clientID
        type
        name
        description
      }
    }
  }
`



exports.handler = async (event) => {
  try {
    const graphqlData = await axios({
      url: process.env.API_URL,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_AMMEX_GRAPHQLAPIKEYOUTPUT,
      },
      data: {
        query: print(listContracts),
      },
    })
    const body = {
        graphqlData: graphqlData.data.data.listContracts,
    }
    return {
        statusCode: 200,
        body: JSON.stringify(body),
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    }
  } catch (err) {
    console.log('error posting to appsync: ', err)
  }
}
