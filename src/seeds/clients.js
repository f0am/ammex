import Faker from 'faker'
import { API } from 'aws-amplify';

import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

async function createClient(c) {
    try {
        await API.graphql({
            query: mutations.createClient,
            variables: {
                input: c,
            },
        });
    } catch (error) {
        console.log(error)
    }
}

export default async function clientSeeds() {
    for (let i = 0; i < 15; i++) {
        const client = {
            clientNumber: `1000${i}`,
            name: Faker.company.companyName(),
            contact: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
            phone: Faker.phone.phoneNumber('(###) ###-####'),
            address: Faker.address.streetAddress(),
            province: Faker.address.stateAbbr(),
            city: Faker.address.city(),
            postalCode: Faker.address.zipCode(),
            email: Faker.internet.email(),
            owners: [`${Faker.name.firstName()} ${Faker.name.lastName()}`, `${Faker.name.firstName()} ${Faker.name.lastName()}`],
            status: 'PENDING',
        }

        await createClient(client)
    }

}