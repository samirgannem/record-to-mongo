import { FormEvent, useState } from 'react'
import { Flex, Image, Button, Text } from '@chakra-ui/core'
import Input from '../components/Input'
import axios from 'axios';

export default function Home() {
  const [email, setEmail] = useState('');
  
  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault();
    axios.post('/api/subscribe', { email });
  }

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.900"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="400px"
      >
        <Image marginBottom={8} src="/informaticaSG.png" alt="Informática SG" />

        <Text textAlign="center" fontSize="sm" color="gray.300" marginBottom={2}>
          Assine a Informática SG e receba os melhores serviços de TI!
        </Text>

        <Input
          placeholder="Seu melhor e-mail"
          marginTop={2}
          value={email}
          background="white"
          color="black"
          onChange={e => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="white"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          color='black'
          _hover={{ backgroundColor: 'gray.500' }}
        >
          INSCREVER
        </Button>
      </Flex>
    </Flex>
  )
}
