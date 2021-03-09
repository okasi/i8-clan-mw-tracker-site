import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'
import * as R from 'ramda'
import { v4 as uuidv4 } from 'uuid'

import { default as allStats } from '../../data/allStats.json'

export default function Home() {
  allStats

  return (
    <div className={styles.container}>
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
        {/* <h1 style={{ fontSize: '48px' }}>i8</h1> */}
        <Image src="./i8_black.png" alt="i8" my="4"></Image>
      </header>

      <main className={styles.main} style={{ overflow: 'scroll' }}>
        <Box w="50%" p={4} color="black" shadow="lg" rounded="lg" m={16}>
          The Team The OG's, The Toxic Players
        </Box>

        <Box w="50%" p={4} color="black" shadow="lg" rounded="lg" m={16}>
          <Heading variant="h4">Clan stats</Heading>
          <Box>
            Total players: <b>{allStats.totalPlayers}</b>
          </Box>
          <Box>
            Total wins: <b>{allStats.totalWins}</b>
          </Box>
          <Box>
            Total time: <b>{allStats.totalTime}</b>
          </Box>
          <Box>
            Total kills: <b>{allStats.totalKills}</b>
          </Box>
          <Box>
            Total contracts: <b>{allStats.totalContracts}</b>
          </Box>
          <Box>
            Total score: <b>{allStats.totalScore}</b>
          </Box>
        </Box>

        <Table size="sm" style={{ overflow: 'scroll' }}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              {Object.entries(allStats.players[0]).map(([key, value]) => {
                console.log('key', key)
                console.log('value', value)
                if (
                  !key.includes('weekly') &&
                  !key.includes('name') &&
                  !key.includes('top25')
                ) {
                  return (
                    <Th key={uuidv4()}>
                      {(key.charAt(0).toUpperCase() + key.slice(1)).replace(
                        /([A-Z])/g,
                        ' $1'
                      )}
                    </Th>
                  )
                }
              })}
            </Tr>
          </Thead>

          <Tbody>
            {allStats.players.map((player) => (
              <Tr key={uuidv4()}>
                <Td key={uuidv4()}>{player.name}</Td>
                {Object.keys(player).map((stat) => {
                  if (
                    !stat.includes('weekly') &&
                    !stat.includes('name') &&
                    !stat.includes('top25')
                  ) {
                    return (
                      <Td key={uuidv4()}>{player[`${stat}`].displayValue}</Td>
                    )
                  }
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>

        <SimpleGrid columns={3} spacing={8}>
          <Box p={4} color="black">
            <Text fontSize="lg" fontWeight="bold">
              THE WINNER BOARD
            </Text>

            <Table size="sm" style={{ overflow: 'scroll' }}>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Total Wins</Th>
                </Tr>
              </Thead>

              <Tbody>
                {allStats.winnerLeaderboard.map((player) => (
                  <Tr key={uuidv4()}>
                    <Td key={uuidv4()}>{player.name}</Td>
                    <Td key={uuidv4()}>{player.wins.displayValue}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>

          <Box p={4} color="black">
            <Text fontSize="lg" fontWeight="bold">
              THE KILLER BOARD
            </Text>
            <Table size="sm" style={{ overflow: 'scroll' }}>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Kill / Death Ratio</Th>
                </Tr>
              </Thead>

              <Tbody>
                {allStats.killerLeaderboard.map((player) => (
                  <Tr key={uuidv4()}>
                    <Td key={uuidv4()}>{player.name}</Td>
                    <Td key={uuidv4()}>{player.kdRatio.displayValue}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>

          <Box p={4} color="black">
            <Text fontSize="lg" fontWeight="bold">
              THE GROUND COMMANDER
            </Text>
            <Table size="sm" style={{ overflow: 'scroll' }}>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Win / Loss Ratio</Th>
                </Tr>
              </Thead>

              <Tbody>
                {allStats.winRatioLeaderboard.map((player) => (
                  <Tr key={uuidv4()}>
                    <Td key={uuidv4()}>{player.name}</Td>
                    <Td key={uuidv4()}>{player.wlRatio.displayValue}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </SimpleGrid>
      </main>

      {/* <pre>{JSON.stringify(stats, 0, 2)}</pre> */}

      <footer className={styles.footer}>
        <a href="https://okasi.me/" target="_blank" rel="noopener noreferrer">
          Powered by Majnoonu Enterprises
        </a>
      </footer>
    </div>
  )
}
