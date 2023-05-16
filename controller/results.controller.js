const db = require('../db')
class ResultsController {
    async createResults(req, res) {
        const {id_organizer, id_tournament, number_matches, id_player_winner} = req.body
        //console.log(id_organizer, id_tournament, number_matches, id_player_winner)
        //res.json('ok')
        const newResults = await db.query(
            `INSERT INTO results (id_organizer, id_tournament, number_matches, id_player_winner) values ($1, $2, $3, $4) RETURNING *`,
            [id_organizer, id_tournament, number_matches, id_player_winner])
        res.json(newResults.rows[0])
    }
    async getResults(req, res) {
        const results = await db.query(
            `SELECT * FROM results`)
        res.json(results.rows)
    }
    async getOneResults(req, res) {
        const id = req.params.id
        const results = await db.query(
            `SELECT organizer.lastname, organizer.firstname, organizer.address_organizer, tournament.name_tournament, tournament.date_start, tournament.prize_fund, player.lastname, player.firstname, player.patronymic, player.game_nickname FROM results INNER JOIN organizer ON results.id_organizer = organizer.id INNER JOIN tournament ON results.id_tournament = tournament.id INNER JOIN player ON results.id_player_winner = player.id WHERE results.id = $1`,
            [id])
        res.json(results.rows[0])
    }
    async updateResults(req, res) {
        const {id, id_organizer, id_tournament, number_matches, id_player_winner} = req.body
        const results = await db.query(
            `UPDATE results set id = $1, id_organizer = $2, id_tournament = $3, number_matches = $4, id_player_winner = $5 RETURNING *`,
            [id, id_organizer, id_tournament, number_matches, id_player_winner])
        res.json(results.rows[0])
    }
    async deleteResults(req, res) {
        const id = req.params.id
        const results = await db.query(
            `DELETE FROM results WHERE id = $1`,
            [id])
        res.json(results.rows[0])
    }
}

module.exports = new ResultsController()