module.exports = {
    register:(req, res) => {
        const db = req.app.get('db')
        const {username, password, profile_pic} = req.body

        db.create_user([username, password, profile_pic])
        .then( (user) => res.status(200).send(user))
        .catch( () => res.status(500).send())
    },
    login:(req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        db.find_user([username, password])
        .then( (user) => res.status(200).send(user))
        .catch( () => res.status(500).send())   
    }
}