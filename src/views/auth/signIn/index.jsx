import React, { useContext } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import DefaultAuth from "layouts/auth/Default";
import illustration from "assets/img/auth/auth.png";
import { useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import Secrets from "../../../Secrets";
import Toast from "operations/toaster";
import { createUser } from "stateManager/staticsCall";
import { DataContext } from "stateManager/StateProvider";

function SignIn() {
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const history = useHistory();
  const { apis } = useContext(DataContext);

  const handleSuccess = async (resp) => {
    try {
      console.log(resp);
      createUser({ authCode: resp.code }).then((data) => {
        if (data.accessToken) {
          apis.webIndex().then((isValid) => {
            if (!isValid) {
              history.replace("/admin");
            }
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleFailure = (error) => {
    Toast({ message: error.message, type: "error" });
  };
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const textColor = useColorModeValue("navy.700", "white");
  const login = useGoogleLogin({
    onSuccess: handleSuccess,
    flow: "auth-code",
    onError: handleFailure,
    scope: Secrets.GOOGLE_SCOPES,
  });

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="center"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <div style={{ justifyContent: "center" }}>
          <Box me="auto">
            <Heading color={textColor} fontSize="36px" mb="10px">
              Sign In
            </Heading>
          </Box>
          <Flex
            zIndex="2"
            direction="column"
            w={{ base: "100%", md: "420px" }}
            maxW="100%"
            background="transparent"
            borderRadius="15px"
            mx={{ base: "auto", lg: "unset" }}
            me="auto"
            mb={{ base: "20px", md: "auto" }}
          >
            <Button
              fontSize="sm"
              me="0px"
              mb="26px"
              py="15px"
              h="50px"
              borderRadius="16px"
              bg={googleBg}
              color={googleText}
              fontWeight="500"
              _hover={googleHover}
              _active={googleActive}
              _focus={googleActive}
              onClick={login}
            >
              <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
              Sign in with Google
            </Button>
          </Flex>
        </div>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
