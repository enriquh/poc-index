import * as React from "react";
import { Search } from "./containers/Search";
import { ChakraProvider, theme } from "@chakra-ui/react";
export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Search />
    </ChakraProvider>
  );
};
