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
    },
    getPosts:(req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {filter, userposts} = req.query

        console.log(typeof req.query.userposts)

        if(userposts === "true" && filter !== ''){
            db.filtered_posts_with_user([filter + '%'])
            .then( (posts) => res.status(200).send(posts))
            .catch( () => res.status(500).send())
        } else if(userposts === "false" && filter === ''){
            db.all_posts_without_user([id])
            .then( (posts) => res .status(200).send(posts))
            .catch( () => res.status(500).send())
        } else if(userposts === "false" && filter !== ''){
            db.filtered_posts_without_user([id, filter + '%'])
            .then( (posts) => res.status(200).send(posts))
            .catch( () => res.status(500).send())
        } else if(userposts === "true" && filter === ''){
            db.all_posts_with_user()
            .then( (posts) => res.status(200).send(posts))
            .catch( () => res.status(500).send())
        }
    }
}