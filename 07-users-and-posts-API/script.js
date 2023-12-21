let postsContianer = document.querySelector(".posts-container")
let usersContainer = document.querySelector(".users-container")

function getPostsOfUser(userId){
    postsContianer.innerHTML = ""
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    request.responseType = "json"
    request.send()
    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response
            for (post of posts) {
                let postInHtml = `<p class="post">
                <span class="post-title">
                    ${post.title}
                </span> 
                ${post.body} 
            </p>`
            postsContianer.innerHTML += postInHtml
            }
            
        } else {
            alert ("error, status " + request.status)
        }
    }
}

function getUsers(){
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            usersContainer.innerHTML = ""
            let users = request.response
            for (user of users) {
                let userInHtml = 
                `<div class="user" onclick="userClicked(${user.id}, this)">
                    <h3>${user.name}</h3>
                    <h5>${user.email}</h5>
                </div>`
                if (user.id == 1) {
                    userInHtml = 
                    `<div class="user selected-user" onclick="userClicked(${user.id}, this)">
                        <h3>${user.name}</h3>
                        <h5>${user.email}</h5>
                    </div>`
                }
                usersContainer.innerHTML += userInHtml
            }
            
        } else {
            alert ("error, status " + request.status)
        }
    }
}

getPostsOfUser(1)
getUsers()

function userClicked(userId, userElement) {
    getPostsOfUser(userId)
    document.querySelectorAll(".selected-user").forEach(element => element.classList.remove("selected-user"))
    userElement.classList.add("selected-user")
}