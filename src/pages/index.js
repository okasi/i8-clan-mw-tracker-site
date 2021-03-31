import {
  Box,
  Button,
  Center,
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
  theme,
  Tr,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useRef, useState } from 'react'
import useSWR from 'swr'
import * as R from 'ramda'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'

import { default as allStats } from '../../data/allStats.json'
import AllPlayers from '../components/AllPlayers'
import KillRatio from '../components/KillRatio'
import TimeAlive from '../components/TimeAlive'
import WinRatio from '../components/WinRatio'
import UserIcon from '../components/icons/UserIcon'
import TrophyIcon from '../components/icons/TrophyIcon'
import TimeIcon from '../components/icons/TimeIcon'
import AimIcon from '../components/icons/AimIcon'
import PeopleIcon from '../components/icons/PeopleIcon'
import LeaderBoardIcon from '../components/icons/LeaderboardIcon'
import DonateIcon from '../components/icons/DonateIcon'
import ChickenIcon from '../components/icons/ChickenIcon'
import NavBar from '../components/NavBar'

export default function Home() {
  const ref = useRef()

  return (
    <>
      <Head>
        <title>i8 - Home</title>
      </Head>

      <NavBar />

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
              shadow="lg"
              // background="#D9D9D6"
              bgColor={theme.colors.gray[200]}
            >
              <Heading variant="h3" size="lg" textAlign="center">
                Clan stats
              </Heading>

              {/* Total players */}
              <Flex mt={2}>
                <UserIcon height={24} width={24}></UserIcon>
                <Text ml={2}>Players:</Text>
                <Spacer />
                <Text fontWeight="bold">{allStats.totalPlayers}</Text>
              </Flex>

              {/* Total wins */}
              <Flex mt={2}>
                <ChickenIcon height={24} width={24}></ChickenIcon>
                <Text ml={2}>Wins:</Text>
                <Spacer />
                <Text fontWeight="bold">{allStats.totalWins}</Text>
              </Flex>

              {/* Win ratio */}
              <Flex mt={2}>
                <TrophyIcon height={24} width={24}></TrophyIcon>
                <Text ml={2}>W/L ratio:</Text>
                <Spacer />
                <Text fontWeight="bold">
                  {Math.round(allStats.averageWinRatio * 100) / 100}%
                </Text>
              </Flex>

              {/* KD Ratio */}
              <Flex mt={2}>
                <AimIcon height={24} width={24}></AimIcon>
                <Text ml={2}>K/D ratio:</Text>
                <Spacer />
                <Text fontWeight="bold">
                  {Math.round(allStats.averageKdRatio * 100) / 100}
                </Text>
              </Flex>

              {/* Time Alive */}
              <Flex mt={2}>
                <TimeIcon height={24} width={24}></TimeIcon>
                <Text ml={2}>Time alive:</Text>
                <Spacer />
                <Text fontWeight="bold">
                  {Math.round(allStats.averageLife * 100) / 100} min
                </Text>
              </Flex>
            </Box>
          </section>

          <section role="navigation">
            <Center>
              <SimpleGrid
                columns={{ sm: 1, lg: 3 }}
                spacing={4}
                my={4}
                mx={4}
                maxW="640px"
                color="white"
              >
                <Link href="/players">
                  <Button
                    backgroundColor="#BE7F00"
                    _hover={{ opacity: '0.6' }}
                    size="lg"
                    shadow="lg"
                    leftIcon={<PeopleIcon />}
                  >
                    All players
                  </Button>
                </Link>

                <Link href="/leaderboards">
                  <Button
                    backgroundColor="#BE7F00"
                    _hover={{ opacity: '0.6' }}
                    size="lg"
                    shadow="lg"
                    leftIcon={<LeaderBoardIcon />}
                  >
                    Leaderboards
                  </Button>
                </Link>
              </SimpleGrid>
            </Center>
          </section>
        </article>
      </main>
      <footer>
        <Container maxW="xl" centerContent color="black">
          <i>Last updated: {new Date(allStats.lastUpdated).toLocaleString()}</i>
        </Container>
      </footer>
    </>
  )
}
