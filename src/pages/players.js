import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import AllPlayers from '../components/AllPlayers'
import { Box, Container, Heading } from '@chakra-ui/layout'

export default function Players() {
  return (
    <>
      <Head>
        <title>i8 - Players</title>
      </Head>

      <header>
        <Container maxW="xl" centerContent color="black">
          <Link href="/">
            <Box m={4}>
              <Image src="/i8_black.png" alt="i8" width={128} height={128} />
            </Box>
          </Link>
        </Container>
      </header>

      <section role="hero">
        <Container maxW="xl" centerContent color="black">
          <Box textAlign="center">
            <Heading variant="h1">i8 Clan</Heading>
            <Heading variant="h2">All players</Heading>
          </Box>
        </Container>
      </section>

      <section role="all player stats">
        <Box mx={8}>
          <Heading as="h3" size="lg" fontWeight="bold">
            All players
          </Heading>
          <AllPlayers></AllPlayers>
        </Box>
      </section>
    </>
  )
}
