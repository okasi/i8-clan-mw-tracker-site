import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import WinRatio from '../components/WinRatio'
import TimeAlive from '../components/TimeAlive'
import KillRatio from '../components/KillRatio'
import WolfIcon from '../components/icons/WolfIcon'
import TurtleIcon from '../components/icons/TurtleIcon'
import LionIcon from '../components/icons/LionIcon'
import {
  Container,
  Flex,
  Box,
  Heading,
  SimpleGrid,
  Wrap,
  WrapItem,
} from '@chakra-ui/layout'
import TotalWins from '../components/TotalWins'
import ChickenIcon from '../components/icons/ChickenIcon'

export default function Leaderboard() {
  return (
    <>
      <Head>
        <title>i8 - Leaderboards</title>
      </Head>

      <header>
        <Container maxW="xl" centerContent color="black">
          <Link href="/">
            <Box my={4} _hover={{ cursor: 'pointer' }}>
              <Image src="/i8_black.png" alt="i8" width={128} height={128} />
            </Box>
          </Link>
        </Container>
      </header>

      <section role="hero">
        <Container maxW="xl" centerContent color="black">
          <Box textAlign="center">
            <Heading variant="h1">i8 Clan</Heading>
            <Heading variant="h2">Leaderboards</Heading>
          </Box>
        </Container>
      </section>

      <section role="leaderboards">
        {/* <SimpleGrid columns={{ sm: 1, xl: 3 }} spacing={8} my={8} mx={8}> */}
        <Wrap spacing={16} my={8} justify="center">
          <WrapItem>
            <Box>
              <Flex align="center">
                <WolfIcon></WolfIcon>
                <Heading as="h3" size="lg" fontWeight="bold" ml="4">
                  Win ratio
                </Heading>
              </Flex>
              <WinRatio></WinRatio>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box>
              <Flex align="center">
                <TurtleIcon></TurtleIcon>
                <Heading as="h3" size="lg" fontWeight="bold" ml="4">
                  Time alive
                </Heading>
              </Flex>
              <TimeAlive></TimeAlive>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box>
              <Flex align="center">
                <LionIcon></LionIcon>
                <Heading as="h3" size="lg" fontWeight="bold" ml="4">
                  Kill ratio
                </Heading>
              </Flex>
              <KillRatio></KillRatio>
            </Box>
          </WrapItem>

          <WrapItem>
            <Box>
              <Flex align="center">
                <ChickenIcon></ChickenIcon>
                <Heading as="h3" size="lg" fontWeight="bold" ml="4">
                  Total wins
                </Heading>
              </Flex>
              <TotalWins></TotalWins>
            </Box>
          </WrapItem>
        </Wrap>
        {/* </SimpleGrid> */}
      </section>
    </>
  )
}
