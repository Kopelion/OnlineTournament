const express = require('express')
const playerRouter = require('./routes/player.routes')
const tournamentRouter = require('./routes/tournament.routes')
const matchRouter = require('./routes/match.routes')
const organizerRouter = require('./routes/organizer.routes')
const resultsRouter = require('./routes/results.routes')

const PORT = process.env.PORT || 3000


const app = express()

app.use(express.json())
app.use('/api', playerRouter)
app.use('/api', tournamentRouter)
app.use('/api', matchRouter)
app.use('/api', organizerRouter)
app.use('/api', resultsRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))