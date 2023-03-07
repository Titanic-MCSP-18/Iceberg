const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const postgres = require('postgres')

const app = express()

dotenv.config()

app.use(cors('*'))
app.use(express.static('../iceberg/dist'))
app.use(morgan('tiny'))

const PORT = process.env.PORT
const sql = postgres(process.env.DATABASE_URL)


app.get('/all', async (req, res) => {
   try {
      const data = await sql`SELECT * FROM skill`
      res.json(data)
   } catch (error) {
      res.status(500).json({error})
   }
})

app.listen(PORT, () => {
   console.log(`listening on port: ${PORT}`);
})