import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";

import users from "./seeds/users.js"

const seedResource = async (createMutation, query, items) => {
    items.map(async (item) => {
        try {
            await API.graphql({
                query: createMutation,
                variables: {
                    input: item,
                },
            });
        } catch (error) {
            console.log(error)
        }
    })
}

seedResource(mutations.createUser, queries.listUsers, users).then((r) => (r))
