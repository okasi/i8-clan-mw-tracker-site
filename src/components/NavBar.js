import { Link } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import Image from 'next/image'
import React from 'react'

export default function NavBar() {
  return (
    <header>
      <Container maxW="xl" centerContent color="black">
        <nav>
          <Link href="/">
            <Box m={4}>
              <Image src="/i8_black.png" alt="i8" width={128} height={128} />
            </Box>
          </Link>
        </nav>
      </Container>
    </header>
  )
}
