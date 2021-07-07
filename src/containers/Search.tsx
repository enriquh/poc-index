import React, { useEffect } from "react";
import {
  Box,
  Text,
  VStack,
  Code,
  Grid,
  useColorModeValue,
  useColorMode,
  IconButton,
  Input,
  Tag,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { ResultCard } from "../components/ResultCard";
import { MainModal } from "../components/Modal";
import { FaMoon, FaSun } from "react-icons/fa";
import { pocDataObject } from "../types";
import { API, graphqlOperation } from "aws-amplify";
import { listPocs } from "../graphql/queries";

const pocData: pocDataObject[] = require("../data/poc-data.json");
type changeType = (event: React.ChangeEvent<HTMLInputElement>) => void;

const hasDataMatch = (search: string, data: pocDataObject) => {
  return (
    data.title.includes(search) ||
    data.description.includes(search) ||
    data.tags.includes(search)
  );
};

export const Search = () => {
  const [value, setValue] = React.useState("");
  const [selectedPOC, setSelectedPOC] = React.useState<pocDataObject | null>(
    null
  );
  const handleChange: changeType = (event) => setValue(event.target.value);
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const filteredData = pocData.filter((d) => hasDataMatch(value, d));

  useEffect(() => {
    fetchPocs();
  }, []);

  async function fetchPocs() {
    try {
      const pocData = await API.graphql(graphqlOperation(listPocs));
      console.log("test: ", pocData);
    } catch (err) {
      console.log("error fetching pocs");
    }
  }

  return (
    <div>
      <MainModal
        onClose={() => setSelectedPOC(null)}
        isOpen={selectedPOC !== null}
        data={selectedPOC}
      />
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <HStack justifyContent="space-between" mb={5}>
            <Tag ml="2" size="lg">
              <Avatar
                src="https://bit.ly/sage-adebayo"
                size="xs"
                name="Segun Adebayo"
                ml={-1}
                mr={2}
              />
              POC Hub
            </Tag>
            <IconButton
              size="md"
              fontSize="lg"
              variant="ghost"
              color="current"
              ml="2"
              onClick={toggleColorMode}
              icon={<SwitchIcon />}
              aria-label={`Switch to ${text} mode`}
              justifySelf="flex-end"
            />
          </HStack>
          <VStack spacing={8}>
            <Input
              placeholder="Search POC"
              size="lg"
              onChange={handleChange}
              width={[300, 400, 800, 800]}
            />
            <Text>
              <Code fontSize="xl">
                Showing results {filteredData.length} of {pocData.length}...
              </Code>
            </Text>
            {filteredData.map((d) => {
              return (
                <ResultCard
                  key={d.id}
                  data={d}
                  onClick={() => setSelectedPOC(d)}
                />
              );
            })}
          </VStack>
        </Grid>
      </Box>
    </div>
  );
};
