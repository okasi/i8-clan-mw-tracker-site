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

export default function WinRatioPage() {
  return (
    <>
      <Head>
        <title>i8 - Win Ratio Leaderboard</title>
      </Head>

      <NavBar />

      <main>
        <section role="hero">
          <Container maxW="xl" centerContent color="black">
            <Box textAlign="center">
              <Heading variant="h1">i8 Clan</Heading>
              <Heading variant="h2"><WolfIcon style={{display: "inline", verticalAlign: "baseline", marginRight: "8px"}}></WolfIcon>Win Ratio Leaderboard</Heading>
            </Box>
          </Container>
        </section>

        <section>
        <Box maxW="lg" margin="auto" my={6}>
          <WinRatio />
          </Box>
        </section>
      </main>
    </>
  )
}
