let params = new URLSearchParams(location.search)

let id = params.get('id') -1

const cardCont = document.querySelector('#card-container')
const commentCont = document.querySelector('#comment-container')
let posts = []

window.onload = () => {
    fetchPosts()
    fetchComments()
}

async function fetchPosts() {
    await fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
        return response.json()
    }).then(data => {
        posts = data
        addBlogData(posts)
    }).catch(error => console.log(error))
}

async function fetchComments() {
    await fetch('https://jsonplaceholder.typicode.com/comments').then(response => {
        return response.json()
    }).then(data => {
        comments = data
        addBlogComments(comments)
    }).catch(error => console.log(error))
}

function addBlogData() {
    let card_data = `
    <div id="card-container">
        <div class="col s12">
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <h4>${posts[id].title}</h4>
                        <p>${posts[id].body}</p>
                    </div>
                    <div class="card-action">
                        <a href="/">Terug</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    cardCont.innerHTML += card_data
}

function addBlogComments() {
    let comment_data = `
    <div id="card-container">
        <div class="col s12">
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <p>${comments[id].email}</p>
                        <p>${comments[id].body}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    commentCont.innerHTML += comment_data
}