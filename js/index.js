const cardCont = document.querySelector('#card-container')
let posts = []

window.onload = () => {
    fetchPosts()
}

async function fetchPosts() {
    await fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
        return response.json()
    }).then(data => {
        posts = data
        addPostToCards(posts)
    }).catch(error => {
        console.log(error)
        let err_msg = `
        <div class="col s12">
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <h4>Er is een fout opgetreden bij de server</h4>
                        <p>${error}</p>
                    </div>
                </div>
            </div>
        </div>
        `
        cardCont.innerHTML += err_msg
    })
}

function addPostToCards() {
    posts.forEach( post => {
        let card_data = `
            <div class="col s12">
                <div class="card horizontal">
                    <div class="card-stacked">
                        <div class="card-content">
                            <h4>${post.title}</h4>
                            <p>${post.body}</p>
                        </div>
                        <div class="card-action">
                            <a href="blog-page.html?id=${post.id}">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        `
        cardCont.innerHTML += card_data
    })
}

// Type "debug_error_mode" in console to show error msg
function debug_error_mode() {
    let err_msg = `
        <div class="col s12">
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <h4>Er is een fout opgetreden bij de server</h4>
                        <p>ERROR</p>
                        <div class="card-action" style="margin-top:50px">
                            <a onclick="debug_off()">Debug Off</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    cardCont.innerHTML = err_msg
}

// Type "debug_off" in console to hide error msg
function debug_off() {
    cardCont.innerHTML = ""
    fetchPosts()
}