import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Nome do Usuário</Text>
        <Text color="gray.300" fontSize="small">
          email@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Nome do Usuário" />
    </Flex>
  );
}
