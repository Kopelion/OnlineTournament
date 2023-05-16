const db = require('../db')
class PlayerController {
    async createPlayer(req, res) {
        const {lastname, firstname, patronymic, age, game_nickname} = req.body
        //console.log(lastname, firstname, patronymic, age, game_nickname)
        //res.json('ok')
        const newPlayer = await db.query(
            `INSERT INTO player (lastname, firstname, patronymic, age, game_nickname) values ($1, $2, $3, $4, $5) RETURNING *`,
            [lastname, firstname, patronymic, age, game_nickname])
        res.json(newPlayer.rows[0])
    }
    async getPlayer(req, res) {
        const players = await db.query(
            `SELECT * FROM player`)
        res.json(players.rows)
    }
    async getOnePlayer(req, res) {
        const id = req.params.id
        const player = await db.query(
            `SELECT * FROM player WHERE id = $1`,
            [id])
        res.json(player.rows[0])
    }
    async updatePlayer(req, res) {
        const {id, lastname, firstname, patronymic, age, game_nickname} = req.body
        const player = await db.query(
            `UPDATE player set id = $1, lastname = $2, firstname = $3, patronymic = $4, age = $5, game_nickname = $6 RETURNING *`,
            [id, lastname, firstname, patronymic, age, game_nickname])
        res.json(player.rows[0])
    }
    async deletePlayer(req, res) {
        const id = req.params.id
        const player = await db.query(
            `DELETE FROM player WHERE id = $1`,
            [id])
        res.json(player.rows[0])
    }
}

module.exports = new PlayerController()