// add a file write to save the JSON configuration
const posts = [
    {environment: 'PRE', conn: 'pre.connection/string'},
    {environment: 'POST', conn: 'post.connection/string'}
];

function createPost(post) {
    return new Promise(function (resolve, reject) {
        posts.push(post)

        const error = false;

        if (!error) {
            resolve()
        } else {
            reject('Error: unable to add post')
        }
    })
}

function getPosts() {
    let output = ''
    posts.forEach(function (post) {
        output += `<li>${post.environment}: ${post.conn}</li>`
    })
    document.body.innerHTML = output
}

createPost({environment:'SIT', conn: 'sit.connection/string'})
    .then(getPosts)
    .catch(function(err){
        console.log(err)
    })