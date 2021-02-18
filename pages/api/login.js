// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// https://lierrmm.github.io/capi-docs/#/

const API = require('call-of-duty-api')()

export default async (req, res) => {
  try {
    const data = await API.login(process.env.USERNAME, process.env.PASSWORD)
    res.statusCode = 200
    res.json(data)
  } catch (e) {
    //Handle Exception
    console.log(e)
    res.statusCode = 500
    res.json(e)
  }
}
