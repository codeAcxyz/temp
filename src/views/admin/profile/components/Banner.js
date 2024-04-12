// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React, { useContext } from "react";
import Upload from "./Upload";
import { DataContext } from "stateManager/StateProvider";

export default function Banner(props) {
  const { states } = useContext(DataContext);
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <Box
        bg={`url(${
          states["profile"]?.supplierImages
            ? states["fileBaseUrl"] + states["profile"]?.supplierImages[0]
            : ""
        })`}
        bgSize="cover"
        borderRadius="16px"
        h="131px"
        w="100%"
      >
        <Flex alignItems="flex-start" justifyContent="flex-end">
          <Upload type={"Cover"} />
        </Flex>
      </Box>
      <Avatar
        mx="auto"
        src={states["profile"]?.image}
        h="87px"
        w="87px"
        mt="-43px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {states["profile"].name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {states["profile"].supplierAbout?.map((item, index) => (
          <React.Fragment key={index}>
            {`${item?.heading + " : " || ""} ${item?.text || ""}`}
            <br />
          </React.Fragment>
        ))}
      </Text>
      <Flex w="max-content" mx="auto" mt="26px">
        <Flex mx="auto" me="60px" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {states["profile"]?.totalServices || 0}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Services
          </Text>
        </Flex>
        <Flex mx="auto" me="30px" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {states["profile"]?.completedOrders || 0}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Completed Orders
          </Text>
        </Flex>
        <Flex mx="auto" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {states["profile"]?.pendingOrders || 0}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Pending Orders
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
