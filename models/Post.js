const { post } = require('../index');

const posts = [];
const Post = (title, content) => {
    const id = Math.floor(Math.random() * Date.now());
    return {
        id, 
        title, 
        content, 
        comments: []
    };
};

const getPostById = (postId) => {
    return posts.find(post => post.id == postId);
};

const addPost = (title, content) => {
    let post = Post(title,content);
    posts.push(post);
};

const deletePost = (postId) => {
    const index = posts.findIndex(post => post.id == postId)
    if( index >= 0){
        posts.splice(index,1);
        return true;
    }
    else return false;
};

const editPost = (postId, title, content) => {
    const post = getPostById(postId);
    if(post){
        post.title = title;
        post.content = content;
        return true;
    }
    else return false;
};

const addComment = (postId, comment) => {
    const result = posts.find(post => post.id == postId);
    if(result){
        result.comments.push(comment);
        return true;
    }
    else return false;
}

module.exports = {
    posts,
    getPostById,
    addPost,
    deletePost,
    editPost,
    addComment
}

function main(){
    addPost('Công nghệ phần mềm mới', 'Xây dựng blog đơn giản sử dụng ExpressJS với HBS template');
    addPost('Kiểm thử phần mềm', 'Kỹ thuật thiết kế test case');
    console.log(posts);
}

main();