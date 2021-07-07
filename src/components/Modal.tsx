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
  Image,
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
          <Box mb={5}>
            {/* <Button ml={5} mt={10} colorScheme="green" onClick={onClose}>
              View in Designer
            </Button> */}
            {data?.templateURL && (
              <Link href={`${data?.provider}${data?.templateURL}`} isExternal={true}>
                <Button mt={5} colorScheme="green" onClick={onClose}>
                  Launch Template
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
