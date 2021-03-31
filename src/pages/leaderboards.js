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
import NavBar from '../components/NavBar'
import { Button } from '@chakra-ui/button'

export default function Leaderboard() {
  return (
    <>
      <Head>
        <title>i8 - Leaderboards</title>
      </Head>

      <NavBar />

      <main>
        <section role="hero">
          <Container maxW="xl" centerContent color="black">
            <Box textAlign="center">
              <Heading variant="h1">i8 Clan</Heading>
              <Heading variant="h2">Leaderboards</Heading>
            </Box>
          </Container>
        </section>

        <section role="leaderboards">
          <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing={6} my={8} mx={8} color="white" maxW="5xl" margin="auto">

            <Link href="/totalwins">
              <Button
                backgroundColor="#BE7F00"
                _hover={{ opacity: '0.6' }}
                size="lg"
                shadow="lg"
                leftIcon={<ChickenIcon />}
                m={4}
              >
                Total Wins
              </Button>
            </Link>

            <Link href="/winratio">
              <Button
                backgroundColor="#BE7F00"
                _hover={{ opacity: '0.6' }}
                size="lg"
                shadow="lg"
                leftIcon={<WolfIcon />}
                m={4}
              >
                Win Ratio
              </Button>
            </Link>

            <Link href="/killratio">
              <Button
                backgroundColor="#BE7F00"
                _hover={{ opacity: '0.6' }}
                size="lg"
                shadow="lg"
                leftIcon={<LionIcon />}
                m={4}
              >
                Kill Ratio
              </Button>
            </Link>

            <Link href="/timealive">
              <Button
                backgroundColor="#BE7F00"
                _hover={{ opacity: '0.6' }}
                size="lg"
                shadow="lg"
                leftIcon={<TurtleIcon />}
                m={4}
              >
                Time Alive
              </Button>
            </Link>
 
          </SimpleGrid>
        </section>
      </main>
    </>
  )
}
