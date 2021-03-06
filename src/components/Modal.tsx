import * as React from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Link,
  HStack,
  Image,
} from "@chakra-ui/react";
import { pocDataObject } from "../types";
import { StarIcons } from "./StarIconPanel";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  data: pocDataObject;
}

export const MainModal: React.FC<ModalProps> = (props) => {
  const { onClose, isOpen, data } = props;

  return (
    <Modal
      size="xl"
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior="inside"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent maxW="50rem">
        <ModalHeader>{data?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>{data?.description}</Box>
          <HStack mt={2} justifyContent="space-between">
            <Box>Estimated Cost ($ monthly): {data?.estimatedCosts}</Box>
            <Box>
              <StarIcons rating={data?.rating} />
            </Box>
          </HStack>
          <Box mb={5}>
            {data?.templateURL && (
              <Link
                href={`${data?.provider}${data?.templateURL}`}
                isExternal={true}
              >
                <Button mt={5} mr={3} colorScheme="green">
                  Launch Template
                </Button>
              </Link>
            )}
            {data?.url && (
              <Link href={data?.url} isExternal={true}>
                <Button mt={5} colorScheme="blue">
                  Open Solution
                </Button>
              </Link>
            )}
          </Box>
          {data?.diagram && <Image src={data.diagram} />}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
