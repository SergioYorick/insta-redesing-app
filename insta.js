const BASE_API = 'https://graph.instagram.com/me'
const ACCESS_TOKEN = "IGQVJWVGJvQnJuWE0wY1RDMVdTYXhLNGtiemw4Ny1mV1hjemcxbnJWSXNBNHNkRlk0N1pwdVp6N3MwNEVPVkViRTdTemRhYXd1MWZASR2NEN0NfeWdmMFBSV0hCSWxQZAW40eG56WWdhak9LU0s5bnFNUVJlTHVTdVllMThN"

async function getUserInfo() {
  const response = await fetch(`${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`)
  const userInfo = await response.json()
  console.log(userInfo)
  username.innerHTML = userInfo.username
  posts.innerHTML = userInfo.media_count
  return userInfo
}

getUserInfo()


async function getUserMediaInfo() {
  const response = await fetch(`${BASE_API}/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`)
  const userMediaInfo = await response.json()
  console.log(userMediaInfo)
  return userMediaInfo
}

getUserMediaInfo()

const username = document.getElementById('username')
const posts = document.getElementById('posts')
const photos = document.getElementById('photos')