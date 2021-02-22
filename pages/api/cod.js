// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import got from 'got'

// https://lierrmm.github.io/capi-docs/#/

// https://github.com/patrickclover/kd-stats/blob/main/src/components/app.tsx

const API = require('call-of-duty-api')()

export default async (req, res) => {
  

  

  try {
    // const data = await API.login(process.env.USERNAME, process.env.PASSWORD)
    const data = await got(`https://api.tracker.gg/api/v2/warzone/standard/profile/atvi/iiii%20d3lta%20iiii%237664583`).json()
    res.statusCode = 200
    res.json(data)
  } catch (e) {
    //Handle Exception
    console.log(e)
    res.statusCode = 500
    res.json(e)
  }
}
