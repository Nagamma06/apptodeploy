require('dotenv').config()
const express = require('express')
const app = express()

const port =process.env.PORT

const gitHubObj = {
    "login": "Nagamma06",
    "id": 64766095,
    "node_id": "MDQ6VXNlcjY0NzY2MDk1",
    "avatar_url": "https://avatars.githubusercontent.com/u/64766095?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Nagamma06",
    "html_url": "https://github.com/Nagamma06",
    "followers_url": "https://api.github.com/users/Nagamma06/followers",
    "following_url": "https://api.github.com/users/Nagamma06/following{/other_user}",
    "gists_url": "https://api.github.com/users/Nagamma06/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Nagamma06/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Nagamma06/subscriptions",
    "organizations_url": "https://api.github.com/users/Nagamma06/orgs",
    "repos_url": "https://api.github.com/users/Nagamma06/repos",
    "events_url": "https://api.github.com/users/Nagamma06/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Nagamma06/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": "Wiznet India",
    "blog": "",
    "location": "Bangalore",
    "email": null,
    "hireable": null,
    "bio": "Software Engineer ",
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2020-05-04T04:46:17Z",
    "updated_at": "2024-01-29T16:28:00Z"
  }
app.get('/', (req, res) => {
    res.send('Welcome to the node server')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at node server</h1>')
})

app.get('/github',(req,res)=>{
    res.json(gitHubObj)
})

app.listen(port,() => {
    console.log('listening on port ', port)
    console.log('http://localhost/',port)
})