/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePocInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  url?: string | null,
  diagram?: string | null,
  templateURL?: string | null,
  estimatedCosts?: number | null,
  rating?: number | null,
  provider?: string | null,
  tags?: Array< string | null > | null,
};

export type ModelPocConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  url?: ModelStringInput | null,
  diagram?: ModelStringInput | null,
  templateURL?: ModelStringInput | null,
  estimatedCosts?: ModelFloatInput | null,
  rating?: ModelIntInput | null,
  provider?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelPocConditionInput | null > | null,
  or?: Array< ModelPocConditionInput | null > | null,
  not?: ModelPocConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Poc = {
  __typename: "Poc",
  id: string,
  name: string,
  description?: string | null,
  url?: string | null,
  diagram?: string | null,
  templateURL?: string | null,
  estimatedCosts?: number | null,
  rating?: number | null,
  provider?: string | null,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePocInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  url?: string | null,
  diagram?: string | null,
  templateURL?: string | null,
  estimatedCosts?: number | null,
  rating?: number | null,
  provider?: string | null,
  tags?: Array< string | null > | null,
};

export type DeletePocInput = {
  id: string,
};

export type ModelPocFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  url?: ModelStringInput | null,
  diagram?: ModelStringInput | null,
  templateURL?: ModelStringInput | null,
  estimatedCosts?: ModelFloatInput | null,
  rating?: ModelIntInput | null,
  provider?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelPocFilterInput | null > | null,
  or?: Array< ModelPocFilterInput | null > | null,
  not?: ModelPocFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPocConnection = {
  __typename: "ModelPocConnection",
  items?:  Array<Poc | null > | null,
  nextToken?: string | null,
};

export type CreatePocMutationVariables = {
  input: CreatePocInput,
  condition?: ModelPocConditionInput | null,
};

export type CreatePocMutation = {
  createPoc?:  {
    __typename: "Poc",
    id: string,
    name: string,
    description?: string | null,
    url?: string | null,
    diagram?: string | null,
    templateURL?: string | null,
    estimatedCosts?: number | null,
    rating?: number | null,
    provider?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePocMutationVariables = {
  input: UpdatePocInput,
  condition?: ModelPocConditionInput | null,
};

export type UpdatePocMutation = {
  updatePoc?:  {
    __typename: "Poc",
    id: string,
    name: string,
    description?: string | null,
    url?: string | null,
    diagram?: string | null,
    templateURL?: string | null,
    estimatedCosts?: number | null,
    rating?: number | null,
    provider?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePocMutationVariables = {
  input: DeletePocInput,
  condition?: ModelPocConditionInput | null,
};

export type DeletePocMutation = {
  deletePoc?:  {
    __typename: "Poc",
    id: string,
    name: string,
    description?: string | null,
    url?: string | null,
    diagram?: string | null,
    templateURL?: string | null,
    estimatedCosts?: number | null,
    rating?: number | null,
    provider?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPocQueryVariables = {
  id: string,
};

export type GetPocQuery = {
  getPoc?:  {
    __typename: "Poc",
    id: string,
    name: string,
    description?: string | null,
    url?: string | null,
    diagram?: string | null,
    templateURL?: string | null,
    estimatedCosts?: number | null,
    rating?: number | null,
    provider?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPocsQueryVariables = {
  filter?: ModelPocFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPocsQuery = {
  listPocs?:  {
    __typename: "ModelPocConnection",
    items?:  Array< {
      __typename: "Poc",
      id: string,
      name: string,
      description?: string | null,
      url?: string | null,
      diagram?: string | null,
      templateURL?: string | null,
      estimatedCosts?: number | null,
      rating?: number | null,
      provider?: string | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePocSubscription = {
  onCreatePoc?:  {
    __typename: "Poc",
    id: string,
    name: string,
    description?: string | null,
    url?: string | null,
    diagram?: string | null,
    templateURL?: string | null,
    estimatedCosts?: number | null,
    rating?: number | null,
    provider?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePocSubscription = {
  onUpdatePoc?:  {
    __typename: "Poc",
    id: string,
    name: string,
    description?: string | null,
    url?: string | null,
    diagram?: string | null,
    templateURL?: string | null,
    estimatedCosts?: number | null,
    rating?: number | null,
    provider?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePocSubscription = {
  onDeletePoc?:  {
    __typename: "Poc",
    id: string,
    name: string,
    description?: string | null,
    url?: string | null,
    diagram?: string | null,
    templateURL?: string | null,
    estimatedCosts?: number | null,
    rating?: number | null,
    provider?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
