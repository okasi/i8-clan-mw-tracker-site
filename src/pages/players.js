import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import AllPlayers from '../components/AllPlayers'
import { Box, Container, Heading } from '@chakra-ui/layout'
import NavBar from '../components/NavBar'
import { default as allStats } from '../../data/allStats.json'
import { Center } from '@chakra-ui/layout'
import PlaystationIcon from '../components/icons/PlaystationIcon'
import XboxIcon from '../components/icons/XboxIcon'
import ComputerIcon from '../components/icons/ComputerIcon'
import { SimpleGrid } from '@chakra-ui/layout'
import theme from '@chakra-ui/theme'
import NextPageIcon from '../components/icons/NextPageIcon'
import { getPlatformIcon } from '../utils/getPlatformIcon'

export default function Players() {
  return (
    <>
      <Head>
        <title>i8 - Players</title>
      </Head>

      <NavBar />

      <main>
        <section role="hero">
          <Container maxW="xl" centerContent color="black">
            <Box textAlign="center">
              <Heading variant="h1">i8 Clan</Heading>
              <Heading variant="h2">All players</Heading>
            </Box>
          </Container>
        </section>

        <section role="all players">
          <Center>
            <SimpleGrid columns={[1, 2, 3]} spacing={8} mt={4}>
              {allStats.players.map((player) => (
                <Link
                  href={`/player/${encodeURIComponent(player.name)}`}
                >
                  <Box
                    maxW="xs"
                    borderWidth="1px"
                    borderRadius="lg"
                    borderColor="#D9D9D6"
                    p="3"
                    textAlign="center"
                    _hover={{cursor: "pointer", shadow: "2xl"}}
                    bgColor={theme.colors.gray[50]}
                    transition="all 0.18s"
                    shadow="lg"
                  >
                    <Heading variant="h2" fontSize="md" my="2" mb="4">
                      {player.name}
                    </Heading>
                    <Center my="2">
                      {getPlatformIcon(player.platform)}
                      </Center>
                    <Heading
                      variant="h3"
                      fontSize="sm"
                      fontWeight="normal"
                      mb="2"
                    >
                      {player.platform}
                    </Heading>
                    <Center mt="4" mb="2" opacity="0.75"><NextPageIcon width={22.5} height={22.5}></NextPageIcon></Center>
                  </Box>
                </Link>
              ))}
            </SimpleGrid>
          </Center>
        </section>

        <section role="all player stats">
          <Box mx={8} my={8}>
            <Heading as="h3" size="lg" fontWeight="bold">
              All players stats
            </Heading>
            <AllPlayers></AllPlayers>
          </Box>
        </section>
      </main>
    </>
  )
}
