const {Comment} = require('../models');

const CommentController = {
    async createComment(req, res) {
        const {user} = req.session;
        const {description, postId} = req.body;

        try {
            const comment = await Comment.createComment({
                user_id: user.id,
                publication_id: postId,
                content: description,
                created_at: new Date().toISOString(),
            });
            return res.redirect('/home');
        }catch (error){
            console.log(error);
            return res.redirect('/home');
        }
    },
};
module.exports = CommentController;