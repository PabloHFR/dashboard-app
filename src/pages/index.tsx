import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        backgroundColor={"gray.800"}
        p="8"
        borderRadius="8px"
        flexDir="column"
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>

            <Input
              name="email"
              type="email"
              focusBorderColor="purple.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>

            <Input
              name="password"
              type="password"
              focusBorderColor="purple.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
            ></Input>
          </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="purple" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
