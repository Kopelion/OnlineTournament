const db = require('../db')
class TournamentController {
    async createTournament(req, res) {
        const {name_tournament, date_start, date_end, prize_fund, sponsor} = req.body
        //console.log(name_tournament, date_start, date_end, prize_fund, sponsor)
        //res.json('ok')
        const newTournament = await db.query(
            `INSERT INTO tournament (name_tournament, date_start, date_end, prize_fund, sponsor) values ($1, $2, $3, $4, $5) RETURNING *`,
            [name_tournament, date_start, date_end, prize_fund, sponsor])
        res.json(newTournament.rows[0])
    }
    async getTournament(req, res) {
        const tournaments = await db.query(
            `SELECT * FROM tournament`)
        res.json(tournaments.rows)
    }
    async getOneTournament(req, res) {
        const id = req.params.id
        const tournament = await db.query(
            `SELECT * FROM tournament WHERE id = $1`,
            [id])
        res.json(tournament.rows[0])
    }
    async updateTournament(req, res) {
        const {id, name_tournament, date_start, date_end, prize_fund, sponsor} = req.body
        const tournament = await db.query(
            `UPDATE tournament set id = $1, name_tournament = $2, date_start = $3, date_end = $4, prize_fund = $5, sponsor = $6 RETURNING *`,
            [id, name_tournament, date_start, date_end, prize_fund, sponsor])
        res.json(tournament.rows[0])
    }
    async deleteTournament(req, res) {
        const id = req.params.id
        const tournament = await db.query(
            `DELETE FROM tournament WHERE id = $1`,
            [id])
        res.json(tournament.rows[0])
    }
}

module.exports = new TournamentController()