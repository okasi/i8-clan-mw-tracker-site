import { Box, Container, Heading , Center , SimpleGrid , Text } from '@chakra-ui/layout'
import Head from 'next/head'
import React from 'react'
import NavBar from '../../components/NavBar'
import { default as allStats } from '../../data/allStats.json'


import theme from '@chakra-ui/theme'
import { getPlatformIcon } from '../../utils/getPlatformIcon'

import LionIcon from '../../components/icons/LionIcon'
import DeathIcon from '../../components/icons/DeathIcon'
import GunIcon from '../../components/icons/GunIcon'
import AimIcon from '../../components/icons/AimIcon'
import FallingIcon from '../../components/icons/FallingIcon'
import TrophyIcon from '../../components/icons/TrophyIcon'
import ChickenIcon from '../../components/icons/ChickenIcon'
import TimeIcon from '../../components/icons/TimeIcon'
import TopFiveIcon from '../../components/icons/TopFiveIcon'
import TopTenIcon from '../../components/icons/TopTenIcon'
import ContractIcon from '../../components/icons/ContractIcon'
import FilledStarIcon from '../../components/icons/FilledStarIcon'
import SemiFilledStarIcon from '../../components/icons/SemiFilledStarIcon'
import NonFilledStarIcon from '../../components/icons/NonFilledStarIcon'
import HourglassIcon from '../../components/icons/HourglassIcon'
import GameIcon from '../../components/icons/GameIcon'

export default function Player ({ player }) {
  console.log(player)

  const boxStyle = {
    w: '3xs',
    borderWidth: '1px',
    borderRadius: 'lg',
    p: '3',
    textAlign: 'center',
    bgColor: theme.colors.gray[50]
  }

  return (
    <>
      <Head>
        <title>i8 - {player.name}</title>
      </Head>

      <NavBar />

      <main>
        <section role='hero'>
          <Container maxW='xl' centerContent color='black'>
            <Box textAlign='center'>
              <Heading variant='h1'>i8 Clan</Heading>
              <Heading variant='h2' fontSize='2xl' mt='4' fontWeight='medium'>
                {player.name}
              </Heading>
            </Box>
          </Container>
        </section>

        <section role='content'>
          <Center>
            <SimpleGrid columns={[1, 2, 3]} spacing={8} my={4}>
              <Box {...boxStyle}>
                <Heading fontSize='lg'>Platform</Heading>
                <Center mt='4' mb='2'>
                  {getPlatformIcon(player.platform)}
                </Center>
                <Text>{player.platform}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>K/D Ratio</Heading>
                <Center mt='4' mb='2'>
                  <AimIcon />
                </Center>
                <Text>{player.kdRatio.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Kills</Heading>
                <Center mt='4' mb='2'>
                  <GunIcon />
                </Center>
                <Text>{player.kills.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Deaths</Heading>
                <Center mt='4' mb='2'>
                  <DeathIcon />
                </Center>
                <Text>{player.deaths.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Downs</Heading>
                <Center mt='4' mb='2'>
                  <FallingIcon />
                </Center>
                <Text>{player.downs.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Average Life</Heading>
                <Center mt='4' mb='2'>
                  <TimeIcon />
                </Center>
                <Text>{player.averageLife.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>W/L Ratio</Heading>
                <Center mt='4' mb='2'>
                  <TrophyIcon />
                </Center>
                <Text>{player.wlRatio.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Wins</Heading>
                <Center mt='4' mb='2'>
                  <ChickenIcon />
                </Center>
                <Text>{player.wins.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Top 5</Heading>
                <Center mt='4' mb='2'>
                  <TopFiveIcon />
                </Center>
                <Text>{player.top5.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Top 10</Heading>
                <Center mt='4' mb='2'>
                  <TopTenIcon />
                </Center>
                <Text>{player.top10.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Contracts</Heading>
                <Center mt='4' mb='2'>
                  <ContractIcon />
                </Center>
                <Text>{player.contracts.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Score Per Minute</Heading>
                <Center mt='4' mb='2'>
                  <NonFilledStarIcon />
                </Center>
                <Text>{player.scorePerMinute.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Score Per Game</Heading>
                <Center mt='4' mb='2'>
                  <SemiFilledStarIcon />
                </Center>
                <Text>{player.scorePerGame.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Total Score</Heading>
                <Center mt='4' mb='2'>
                  <FilledStarIcon />
                </Center>
                <Text>{player.score.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Time Played</Heading>
                <Center mt='4' mb='2'>
                  <HourglassIcon />
                </Center>
                <Text>{player.timePlayed.displayValue}</Text>
              </Box>

              <Box {...boxStyle}>
                <Heading fontSize='lg'>Games Played</Heading>
                <Center mt='4' mb='2'>
                  <GameIcon />
                </Center>
                <Text>{player.gamesPlayed.displayValue}</Text>
              </Box>
            </SimpleGrid>
          </Center>
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps ({ params }) {
  const player = allStats.players.filter((item) => item.name === params.name)

  return { props: { player: player[0] } }
}
