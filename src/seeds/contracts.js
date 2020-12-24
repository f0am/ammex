// const Faker = require('faker')

import Faker from 'faker'
import { API } from 'aws-amplify';

import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

async function createContract(c) {
    try {
        await API.graphql({
            query: mutations.createContract,
            variables: {
                input: c,
            },
        });
    } catch (error) {
        console.log(error)
    }
    // console.log(c)
}


export default async function contractSeeds() {
    const resp = await API.graphql({ query: queries.listClients });
    const clients = resp.data.listClients.items;

    clients.forEach(async client => {
        const types = ['TAXES', 'PAYROLL', 'BOOKKEEPING']
        const contractCount = Faker.random.number(3)
        for (let j = 0; j < contractCount; j++) {
            const cIndex = Faker.random.number(3 - j)
            const contract = {
                clientID: client.id,
                type: types.pop(cIndex),
            }
            await createContract(contract)
        }
    })
}