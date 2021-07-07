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
} from "@chakra-ui/react";
import { pocDataObject } from "../types";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  data: pocDataObject;
}

export const MainModal: React.FC<ModalProps> = (props) => {
  const { onClose, isOpen, data } = props;
  return (
    <Modal size="xl" onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent maxW="50rem">
        <ModalHeader>{data?.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>{data?.description}</Box>
          <Button mt={10} colorScheme="green" onClick={onClose}>
            View architecture
          </Button>
          <Button ml={5} mt={10} colorScheme="green" onClick={onClose}>
            View in Designer
          </Button>
          <Button ml={5} mt={10} colorScheme="green" onClick={onClose}>
            Launch Stack
          </Button>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
