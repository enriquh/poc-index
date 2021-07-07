import * as React from "react";
import { Search } from "./containers/Search";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Search />
    </ChakraProvider>
  );
};
