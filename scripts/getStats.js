const path = require('path')
const fs = require('fs')
const got = require('got')
const R = require('ramda')

const Airtable = require('airtable')

require('dotenv').config()
;(async () => {
  try {
    // // Fetch data from Trello
    // const data = await got('https://trello.com/b/ut3lDK3c/i8.json').json()

    // // Get card names
    // const names = data.cards
    //   .map((card) => {
    //     if (!card.closed) {
    //       return card.name
    //     }
    //   })
    //   .filter(Boolean)

    // console.log('Names from Trello', names)

    Airtable.configure({ apiKey: process.env.AIRTABLE_ACCESS_TOKEN })
    const base = Airtable.base(process.env.AIRTABLE_BASE_ID)

    let players = []

    console.log('Fetching Airtable Data ...')
    await base('Table 1')
      .select({
        view: 'Grid view',
        fields: ['Name', 'Platform', 'Country', 'Play Style']
      })
      .all()
      .then((records) => {
        records.map((record) => {
          players.push({
            name: record.fields.Name,
            platform: record.fields.Platform,
            country: record.fields.Country,
            playStyle: record.fields['Play Style']
          })
        })
      })

    // Map through names
    console.log('Fetching Tracker.gg Data ...')
    const playersStatsPromises = players.map(async (player) => {
      const url = `https://api.tracker.gg/api/v2/warzone/standard/profile/atvi/${encodeURI(
        player.name.toLowerCase()
      ).replace('#', '%23')}`

      try {
        const response = await got(url).json()
        return { ...player, ...response }
      } catch (error) {
        players = players.filter((item) => item.name !== player.name)
        console.log(
          'Player stats e: ',
          url,
          player.name,
          error && error.response && error.response.body
        )
      }
    })

    const playersStatsResolved = await (
      await Promise.all(playersStatsPromises)
    ).filter(Boolean)

    const battleRoyaleStats = playersStatsResolved.map((playerStats) => {
      return playerStats.data.segments.filter(
        (segment) => segment.attributes.mode == 'br'
      )[0]
    })

    players.map((player, index) => {
      player.name = player.name.split('#')[0]

      battleRoyaleStats[index] = {
        ...player,
        ...battleRoyaleStats[index].stats
      }
    })

    const allAveageLife = R.map(
      (player) => R.pick(['name', 'averageLife'], player),
      battleRoyaleStats
    )
    const sortByAverageLife = R.sortBy(R.path(['averageLife', 'value']))
    const sortedByAverageLife = sortByAverageLife(allAveageLife).reverse()

    const allKdRatio = R.map(
      (player) => R.pick(['name', 'kdRatio'], player),
      battleRoyaleStats
    )
    const sortByHighestKdRatio = R.sortBy(R.path(['kdRatio', 'value']))
    const sortedByKdRatio = sortByHighestKdRatio(allKdRatio).reverse()

    const allWlRatio = R.map(
      (player) => R.pick(['name', 'wlRatio'], player),
      battleRoyaleStats
    )
    const sortByHighestWLRatio = R.sortBy(R.path(['wlRatio', 'value']))
    const sortedByWLRatio = sortByHighestWLRatio(allWlRatio).reverse()

    const allWins = R.map(
      (player) => R.pick(['name', 'wins'], player),
      battleRoyaleStats
    )
    const sortByMostWins = R.sortBy(R.path(['wins', 'value']))
    const sortedByWins = sortByMostWins(allWins).reverse()

    const totalPlayers = R.map(
      (player) => R.pick(['name'], player),
      battleRoyaleStats
    ).length

    // https://ramdajs.com/0.9/docs/#foldr

    let averageWinRatio = 0
    R.map(
      (player) => (averageWinRatio += player.wlRatio.value),
      battleRoyaleStats
    )
    averageWinRatio = averageWinRatio / totalPlayers

    let averageLife = 0
    R.map(
      (player) => (averageLife += player.averageLife.value),
      battleRoyaleStats
    )
    averageLife = averageLife / totalPlayers / 60

    let averageKdRatio = 0
    R.map(
      (player) => (averageKdRatio += player.kdRatio.value),
      battleRoyaleStats
    )
    averageKdRatio = averageKdRatio / totalPlayers

    let totalWins = 0
    R.map((player) => (totalWins += player.wins.value), battleRoyaleStats)

    // let totalTime = 0
    // R.map((player) => (totalTime += player.timePlayed.value), battleRoyaleStats)
    // totalTime = totalTime / 60 / 60

    // let totalKills = 0
    // R.map((player) => (totalKills += player.kills.value), battleRoyaleStats)

    // let totalContracts = 0
    // R.map(
    //   (player) => (totalContracts += player.contracts.value),
    //   battleRoyaleStats
    // )

    // let totalScore = 0
    // R.map((player) => (totalScore += player.score.value), battleRoyaleStats)

    const allStats = {
      players: R.sortBy(
        R.path(['gamesPlayed', 'value']),
        battleRoyaleStats
      ).reverse(),
      totalPlayers,
      averageWinRatio,
      averageLife,
      averageKdRatio,
      totalWins,
      wlRatioLeaderboard: sortedByWLRatio,
      averageLifeLeaderboard: sortedByAverageLife,
      kdRatioLeaderboard: sortedByKdRatio,
      winsLeaderboard: sortedByWins,
      lastUpdated: new Date()
    }

    console.log('allStats', allStats)

    return await fs.writeFileSync(
      path.resolve(__dirname, '../src/data/allStats.json'),
      JSON.stringify(allStats),
      function (err, data) {
        if (err) {
          return console.log(err)
        }
      }
    )
  } catch (error) {
    return console.log('getStats error: ', error)
  }
})()
