import * as React from "react";
import { Icon } from "@chakra-ui/react";

interface StarProps {
  rating: number;
}

export const StarIcons: React.FC<StarProps> = (props) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((n) => {
        const color = props.rating >= n ? "yellow.500" : "gray.500";
        return (
          <Icon viewBox="0 0 200 200" fill={color}>
            <polygon points="100,10 40,180 190,60 10,60 160,180" />
          </Icon>
        );
      })}
    </>
  );
};
