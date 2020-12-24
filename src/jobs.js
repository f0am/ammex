// const Faker = require('faker')

import Faker from 'faker'
import Amplify, { API } from 'aws-amplify';

import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

Amplify.configure(awsconfig);

async function createJob(c) {
    try {
        await API.graphql({
            query: mutations.createJob,
            variables: {
                input: c,
            },
        });
    } catch (error) {
        console.log(error)
    }
    // console.log(c)
}

async function getClients() {
    try {
        const resp = await API.graphql({ query: queries.listClients });
        const clients = resp.data.listClients.items;
        return clients
    } catch (error) {
        console.log(error)
    }
}

export default async function contractJob() {

    const clients = await getClients()

    clients.forEach(client => {
        console.log(client.contracts)


    })

    // for (let i = 0; i < 15; i++) {
    //     const types = ['TAXES', 'PAYROLL', 'BOOKKEEPING']
    //     const contractCount = Faker.random.number(3)
    //     for (let j = 0; j < contractCount; j++) {
    //         const cIndex = Faker.random.number(3 - j)
    //         const contract = {
    //             clientID: i > 9 ? `100${i}` : `1000${i}`,
    //             type: types.pop(cIndex),
    //         }
    //         await createJob(contract)
    //     }
    }
