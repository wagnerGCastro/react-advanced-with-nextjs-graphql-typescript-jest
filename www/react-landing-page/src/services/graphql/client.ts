import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.HOST_GRAPHQL)

export default client
