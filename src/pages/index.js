import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Portal,
  Select,
  SimpleGrid,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useRef, useState } from 'react'
import useSWR from 'swr'
import * as R from 'ramda'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'

import { default as allStats } from '../../data/allStats.json'
import Players from '../components/Players'
import KillRatio from '../components/KillRatio'
import TimeAlive from '../components/TimeAlive'
import WinRatio from '../components/WinRatio'

export default function Home() {
  const ref = useRef()

  return (
    <div>
      <Head>
        <title>i8</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <header>
        <Container maxW="xl" centerContent color="black">
          <Box m={4}>
            <Image src="/i8_black.png" alt="i8" width={128} height={128} />
          </Box>
        </Container>
      </header>

      <main>
        <section role="hero">
          <Container maxW="xl" centerContent color="black">
            <Box textAlign="center">
              <Heading variant="h1">i8 Clan</Heading>
              <Heading variant="h2">Pure Toxic Gamers</Heading>
            </Box>
          </Container>
        </section>
        <article>
          <section role="summary">
            <Box
              w="256px"
              p={4}
              mt={6}
              mb={8}
              mx="auto"
              rounded="lg"
              shadow="xl"
              background="#D9D9D6"
            >
              <Heading variant="h3" size="lg" textAlign="center">
                Clan stats
              </Heading>
              <Flex mt={2}>
                <Text>Players:</Text>
                <Spacer />
                <Text fontWeight="bold">{allStats.totalPlayers}</Text>
              </Flex>
              <Flex mt={2}>
                <Text>W/L ratio:</Text>
                <Spacer />
                <Text fontWeight="bold">
                  {Math.round(allStats.averageWinRatio * 100) / 100}%
                </Text>
              </Flex>
              <Flex mt={2}>
                <Text>Time alive:</Text>
                <Spacer />
                <Text fontWeight="bold">
                  {Math.round(allStats.averageLife * 100) / 100} min
                </Text>
              </Flex>
              <Flex mt={2}>
                <Text>K/D ratio:</Text>
                <Spacer />
                <Text fontWeight="bold">
                  {Math.round(allStats.averageKdRatio * 100) / 100}
                </Text>
              </Flex>
            </Box>
          </section>

          <section role="all player stats">
            <Box mx={8}>
              <Heading as="h3" size="lg" fontWeight="bold">
                All players
              </Heading>
              <Players></Players>
            </Box>
          </section>

          <section role="leaderboards">
            <SimpleGrid columns={3} spacing={8} my={8} mx={8}>
              <Box>
                <Heading as="h3" size="lg" fontWeight="bold">
                  Wolf (Win ratio)
                </Heading>
                <WinRatio></WinRatio>
              </Box>

              <Box>
                <Heading as="h3" size="lg" fontWeight="bold">
                  Tortoise (Time alive)
                </Heading>
                <TimeAlive></TimeAlive>
              </Box>

              <Box>
                <Heading as="h3" size="lg" fontWeight="bold">
                  Lion (Kill ratio)
                </Heading>
                <KillRatio></KillRatio>
              </Box>
            </SimpleGrid>
          </section>
        </article>
      </main>
      <footer>
        <Container maxW="xl" centerContent color="black">
          <i>Last updated: {new Date(allStats.lastUpdated).toLocaleString()}</i>
        </Container>
      </footer>
    </div>
  )
}
