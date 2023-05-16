const db = require('../db')
class MatchController {
    async createMatch(req, res) {
        const {date_match, time_match, idplayer1, idplayer2, idplayer3, idplayer4, idplayer5} = req.body
        //date_match, time_match, idplayer1, idplayer2, idplayer3, idplayer4, idplayer5)
        //res.json('ok')
        const newMatch = await db.query(
            `INSERT INTO match (date_match, time_match, idplayer1, idplayer2, idplayer3, idplayer4, idplayer5) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [date_match, time_match, idplayer1, idplayer2, idplayer3, idplayer4, idplayer5])
        res.json(newMatch.rows[0])
    }
    async getMatch(req, res) {
        const matchs = await db.query(
            `SELECT * FROM match`)
        res.json(matchs.rows)
    }
    async getMatchPlayer(req, res) {
        const id = req.params.id
        const player = await db.query(
            `SELECT player.game_nickname FROM match INNER JOIN player ON match.idplayer1 = player.id OR match.idplayer2 = player.id OR match.idplayer3 = player.id OR match.idplayer4 = player.id OR match.idplayer5 = player.id WHERE match.id = $1`,
            [id])
        res.json(player.rows)
    }
    async getOneMatch(req, res) {
        const id = req.params.id
        const match = await db.query(
            `SELECT * FROM match WHERE id = $1`,
            [id])
        res.json(match.rows[0])
    }
    async updateMatch(req, res) {
        const {id, date_match, time_match, idplayer1, idplayer2, idplayer3, idplayer4, idplayer5} = req.body
        const match = await db.query(
            `UPDATE match set id = $1, date_match = $2, time_match = $3, idplayer1 = $4, idplayer2 = $5, idplayer3 = $6, idplayer4 = $7, idplayer5 =$8 RETURNING *`,
            [id, date_match, time_match, idplayer1, idplayer2, idplayer3, idplayer4, idplayer5])
        res.json(match.rows[0])
    }
    async deleteMatch(req, res) {
        const id = req.params.id
        const match = await db.query(
            `DELETE FROM match WHERE id = $1`,
            [id])
        res.json(match.rows[0])
    }
}

module.exports = new MatchController()