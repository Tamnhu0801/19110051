const model = require('../models/Post');

const getAllPosts = (req, res) => {
    res.render('home', {
        title: "Sameyy Blog", 
        posts: model.posts
    });
};

const addPost = (req, res) => {
    if(req.method === 'GET'){
        res.render('addPost', {
            title: 'Add Post'
        });
    }
    else if(req.method === 'POST'){
        if(req.body){
            const {title, content} = req.body;
            model.addPost(title, content);
            res.redirect('/');
        }
    }
}

const getPostById = (req, res) => {
    const {id} = req.params;
    const result = model.getPostById(id);
    if(result){
        res.render('postDetail', {
            title: result.title,
            post: result
        });
    }
}

const deletePost = (req, res) => {
    const { id } = req.params;
    const result = model.deletePost(id);
    if(result){
        res.redirect('/');
    }
    else{
        res.render('error', {
            title: 'Error',
            message: 'Error: Cannot delete this post. Please try again'
        });
    }
}

const editPost = (req, res) => {
    const {id} = req.params;
    if(req.method === 'GET'){
        const result = model.getPostById(id);
        res.render('editPost', {
            title: 'Edit Post',
            post: result
        });
    }
    else if (req.method === 'POST'){
        if(req.body){
            const {title, content} = req.body;
            const result = model.editPost(id, title, content);
            if(result){
                res.redirect('http://localhost:5000/' + id);
            }
            else{
                res.render('error', {
                    title: 'Error',
                    message: 'Error: Cannot edit this post. Please try again'
                });
            }
        }
    } 
}

const addComment = (req, res) => {
    const id = req.params.id;
    const comment = req.body.comment;
    if(model.addComment(id,comment)){
        res.redirect('http://localhost:5000/' + id);
    }
    else{
        res.render('error', {
            title: 'Error',
            message: 'Error: Cannot comment on this post'
        });
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    addPost,
    deletePost,
    editPost,
    addComment
}