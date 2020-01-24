module.exports = (app, db) => {
    app.get('/', (req, res) => {
        db.cocktail.findAll({
            include: [
                {
                    model: db.images
                }
            ]
        }).then(cocktail => {
            const resObj = cocktail.map(user => {

                //tidy up the user data
                return Object.assign(
                    {},
                    {
                        drink: cocktail.drink,
                        images: cocktail.images.map(images => {

                            //tidy up the post data
                            return Object.assign(
                                {},
                                {
                                    images: images.images,
                                })
                        })
                    }
                )
            });
            res.json(resObj)
        });

// app.post('/users', (req, res) => {
//     const created_at = new Date();
//     const newUser = req.body.user;
//     db.users.create({
//         username: newUser.username,
//         role: newUser.role,
//         created_at: created_at
//     })
//         .then(user => {
//             res.json(user);
//         });
// });

// app.post('/post', (req, res) => {
//     const created_at = new Date();
//     const newPost = req.body.post;
//     db.posts.create({
//         user_id: newPost.user_id,
//         content: newPost.content,
//         created_at: created_at
//     })
//         .then(post => {
//             res.json(post);
//         });
// });

// app.post('/comment', (req, res) => {
//     const created_at = new Date();
//     const newComment = req.body.comment;
//     db.comments.create({
//         post_id: newComment.post_id,
//         content: newComment.content,
//         commenter_username: newComment.commenter_username,
//         commenter_email: newComment.commenter_email,
//         created_at: created_at
//     })
//         .then(comment => {
//             res.json(comment);
//         });
// });
