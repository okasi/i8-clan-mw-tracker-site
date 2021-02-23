import {
  Box,
  Button,
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
import got from 'got'
import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'
import * as R from 'ramda'
import { v4 as uuidv4 } from 'uuid'

export default function Home({ playersStats }) {
  const sortByMostWins = R.sortBy(R.path(['stats', 'wins', 'value']))
  const sortedByWins = sortByMostWins(playersStats).reverse()

  const sortByHighestKdRatio = R.sortBy(R.path(['stats', 'kdRatio', 'value']))
  const sortedByKdRatio = sortByHighestKdRatio(playersStats).reverse()

  const sortByHighestWLRatio = R.sortBy(R.path(['stats', 'wlRatio', 'value']))
  const sortedByWLRatio = sortByHighestWLRatio(playersStats).reverse()

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
        <h1 style={{ fontSize: '48px' }}>i8</h1>
      </header>

      <main className={styles.main} style={{ overflow: 'scroll' }}>
        <Table size="sm" style={{ overflow: 'scroll' }}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              {Object.entries(playersStats[0].stats).map(([key, value]) => {
                if (!key.includes('weekly')) {
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
            {playersStats.map((player) => (
              <Tr key={uuidv4()}>
                <Td key={uuidv4()}>{player.name}</Td>
                {Object.keys(player.stats).map((stat) => {
                  if (!stat.includes('weekly')) {
                    return (
                      <Td key={uuidv4()}>
                        {player.stats[`${stat}`].displayValue}
                      </Td>
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
                {sortedByWins.map((player) => (
                  <Tr key={uuidv4()}>
                    <Td key={uuidv4()}>{player.name}</Td>
                    <Td key={uuidv4()}>{player.stats.wins.displayValue}</Td>
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
                {sortedByKdRatio.map((player) => (
                  <Tr key={uuidv4()}>
                    <Td key={uuidv4()}>{player.name}</Td>
                    <Td key={uuidv4()}>{player.stats.kdRatio.displayValue}</Td>
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
                {sortedByWLRatio.map((player) => (
                  <Tr key={uuidv4()}>
                    <Td key={uuidv4()}>{player.name}</Td>
                    <Td key={uuidv4()}>{player.stats.wlRatio.displayValue}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </SimpleGrid>
      </main>

      {/* <pre>{JSON.stringify(playersStats, 0, 2)}</pre> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Majnoonu Enterprises
        </a>
      </footer>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from Trello
  const data = await got(`https://trello.com/b/ut3lDK3c/i8.json`).json()

  // Get card names
  const names = data.cards
    .map((card) => {
      if (!card.closed) {
        return card.name
      }
    })
    .filter(Boolean)
  // Map through names
  const playersStatsPromises = names.map(async (name) => {
    const url = `https://api.tracker.gg/api/v2/warzone/standard/profile/atvi/${encodeURI(
      name.toLowerCase()
    ).replace('#', '%23')}`

    try {
      const data = await got(url).json()
      return { name, ...data }
    } catch (error) {
      console.log('Error: ', url, name, error.response.body)
    }
  })

  const playersStatsResolved = await Promise.all(playersStatsPromises)

  const battleRoyaleStats = playersStatsResolved.map(
    (playerStats) =>
      playerStats.data.segments.filter(
        (segment) => segment.attributes.mode == 'br'
      )[0]
  )

  names.map((name, index) => {
    battleRoyaleStats[index] = { name, ...battleRoyaleStats[index] }
  })

  console.log(battleRoyaleStats)

  // Pass data to the page via props
  return { props: { playersStats: battleRoyaleStats } }
}
