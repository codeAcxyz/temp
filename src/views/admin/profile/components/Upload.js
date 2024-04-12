// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import React from "react";
// Assets
import { MdUpload } from "react-icons/md";
import Dropzone from "views/admin/profile/components/Dropzone";

export default function Upload(props) {
  const { type } = props;
  const brandColor = useColorModeValue("brand.500", "white");
  return (
    <Dropzone
      w={{ base: "140px" }}
      maxH={{ base: "60%", lg: "50%", "2xl": "100%" }}
      minH={{ base: "40px", lg: "40px", "2xl": "40px" }}
      content={
        <Box>
          <Flex alignItems="center" direction="row">
            <Icon as={MdUpload} w="30px" h="30px" color={brandColor} />
            <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
              Change {type}
            </Text>
          </Flex>
        </Box>
      }
    />
  );
}
