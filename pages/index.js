import {
  Button,
  Input,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import got from 'got'
import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'

export default function Home({ playersStats }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>i8</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 style={{ fontSize: '48px' }}>i8</h1>
      </header>

      <main className={styles.main} style={{ overflow: 'scroll' }}>
        <Table size="sm" style={{ overflow: 'scroll' }}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              {Object.entries(playersStats[0].stats).map(
                ([key, value], index) => {
                  if (!key.includes('weekly')) {
                    return (
                      <Th key={key + index}>
                        {(key.charAt(0).toUpperCase() + key.slice(1)).replace(
                          /([A-Z])/g,
                          ' $1'
                        )}
                      </Th>
                    )
                  }
                }
              )}
            </Tr>
          </Thead>

          <Tbody>
            {playersStats.map((player, index) => (
              <Tr key={index}>
                <Td key={index}>{player.name}</Td>
                {Object.keys(player.stats).map((stat, index) => {
                  if (!stat.includes('weekly')) {
                    return (
                      <Td key={index}>
                        {player.stats[`${stat}`].displayValue}
                      </Td>
                    )
                  }
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>
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

  // Pass data to the page via props
  return { props: { playersStats: battleRoyaleStats } }
}
