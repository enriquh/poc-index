/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPoc = /* GraphQL */ `
  mutation CreatePoc(
    $input: CreatePocInput!
    $condition: ModelPocConditionInput
  ) {
    createPoc(input: $input, condition: $condition) {
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
export const updatePoc = /* GraphQL */ `
  mutation UpdatePoc(
    $input: UpdatePocInput!
    $condition: ModelPocConditionInput
  ) {
    updatePoc(input: $input, condition: $condition) {
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
export const deletePoc = /* GraphQL */ `
  mutation DeletePoc(
    $input: DeletePocInput!
    $condition: ModelPocConditionInput
  ) {
    deletePoc(input: $input, condition: $condition) {
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
