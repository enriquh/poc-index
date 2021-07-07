import * as React from "react";
import { Box, Tag } from "@chakra-ui/react";
import { pocDataObject } from "../types";

interface ResultCardProps {
  data: pocDataObject;
  onClick: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = (props) => {
  const { data, onClick } = props;
  return (
    <Box
      textAlign="left"
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      cursor="pointer"
      onClick={onClick}
      width={[300, 400, 800, 800]}
    >
      <Box>{data.title}</Box>
      <Box fontSize="sm">{data.description}</Box>
      <Box textAlign="right" fontSize="sm">
        {data.tags.map((d, i) => {
          return (
            <Tag key={i} ml={2}>
              {d}
            </Tag>
          );
        })}
      </Box>
    </Box>
  );
};
