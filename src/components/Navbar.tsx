import React from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import { VscGithub } from 'react-icons/vsc'

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <Box shadow="lg">
      <Container maxW="7xl">
        <Flex align="center" justify="space-between" py="4" px="4" w="full">
          <Heading
            as="h1"
            display="flex"
            alignItems="center"
            columnGap={{
              base: 1,
              sm: 2,
              md: 3,
            }}
          >
            <Image
              src="/images/logo.svg"
              h={{
                base: 2,
                sm: '5',
                md: '10',
              }}
              mt={{
                base: 3,
                sm: 0,
              }}
              alt=""
            />
            <Link href="https://blog.gdsckwasu.club">
              <Text
                flexShrink={0}
                as="span"
                fontSize={{
                  base: 'xs',
                  sm: 'lg',
                  md: '2xl',
                }}
              >
                GDSC KWASU
              </Text>
            </Link>
            <Text
              as="span"
              fontSize="xs"
              alignSelf="end"
              mb={{
                base: 1,
                md: 2,
              }}
              display={{
                base: 'none',
                sm: 'inline-block',
              }}
            >
              Logo generator
            </Text>
          </Heading>

          <IconButton
            aria-label="View source"
            colorScheme="whiteAlpha"
            fontSize="xl"
            rounded="3xl"
            href="https://github.com/gdsc-kwasu/gdsc-logo-generator"
            as="a"
            icon={<VscGithub />}
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
