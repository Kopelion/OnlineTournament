const db = require('../db')
class OrganizerController {
    async createOrganizer(req, res) {
        const {lastname, firstname, patronymic, address_organizer, telephone, mail} = req.body
        //console.log(lastname, firstname, patronymic, address_organizer, telephone, mail)
        //res.json('ok')
        const newOrganizer = await db.query(
            `INSERT INTO organizer (lastname, firstname, patronymic, address_organizer, telephone, mail) values ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [lastname, firstname, patronymic, address_organizer, telephone, mail])
        res.json(newOrganizer.rows[0])
    }
    async getOrganizer(req, res) {
        const organizers = await db.query(
            `SELECT * FROM organizer`)
        res.json(organizers.rows)
    }
    async getOneOrganizer(req, res) {
        const id = req.params.id
        const organizer = await db.query(
            `SELECT * FROM organizer WHERE id = $1`,
            [id])
        res.json(organizer.rows[0])
    }
    async updateOrganizer(req, res) {
        const {id, lastname, firstname, patronymic, address_organizer, telephone, mail} = req.body
        const organizer = await db.query(
            `UPDATE organizer set id = $1, lastname = $2, firstname = $3, patronymic = $4, address_organizer = $5, telephone = $6, mail = $7 RETURNING *`,
            [id, lastname, firstname, patronymic, address_organizer, telephone, mail])
        res.json(organizer.rows[0])
    }
    async deleteOrganizer(req, res) {
        const id = req.params.id
        const organizer = await db.query(
            `DELETE FROM organizer WHERE id = $1`,
            [id])
        res.json(organizer.rows[0])
    }
}

module.exports = new OrganizerController()