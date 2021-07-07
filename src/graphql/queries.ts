/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPoc = /* GraphQL */ `
  query GetPoc($id: ID!) {
    getPoc(id: $id) {
      id
      name
      description
      url
      diagram
      tags
      createdAt
      updatedAt
    }
  }
`;
export const listPocs = /* GraphQL */ `
  query ListPocs(
    $filter: ModelPocFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        url
        diagram
        tags
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
