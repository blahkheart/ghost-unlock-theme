// author: "dannithomx"
// purpose: "call ghost admin and add a new member"
// technologies: {
//  ["axios", "fetch"],["ethers"],["JWT"]
// }


require('dotenv').config()
const ghostAdminAPI = require('@tryghost/admin-api')
// console.log("G Admin API", ghostAdminAPI)
const ethers = require("ethers")
const adminAPIKey = process.env.ADMIN_API_KEY
const signinWithUnlock = new URL(process.env.UNLOCK_APP_CHECKOUT)
const redirectURI = new URL(process.env.GHOST_BLOG_REDIRECT_URI)
const clientId = redirectURI.hostname
signinWithUnlock.searchParams.append('client_id',clientId )
signinWithUnlock.searchParams.append('redirect_uri', redirectURI)
const signInURL = signinWithUnlock.toString()


const stringWithSignature = "https://e6d9-102-36-149-129.eu.ngrok.io/?code=eyJkIjoiYXBwLnVubG9jay1wcm90b2NvbC5jb20gd2FudHMgeW91IHRvIHNpZ24gaW4gd2l0aCB5b3VyIEV0aGVyZXVtIGFjY291bnQ6XG4weDA5MDNDRjJCRGExMDMxN0EzZDc4NWY1ODE4ODc0Q0NhZjM2ZTY0YTlcblxuXG5VUkk6IGh0dHBzOi8vYXBwLnVubG9jay1wcm90b2NvbC5jb21cblZlcnNpb246IDFcbkNoYWluIElEOiAxXG5Ob25jZTogWkx0ajZnaFk0cXpQcm5GdWVcbklzc3VlZCBBdDogMjAyMi0xMi0xOVQxMDozMDozMC43NDdaXG5FeHBpcmF0aW9uIFRpbWU6IDIwMjItMTItMjZUMTA6MzA6MzAuNzQ2WlxuUmVzb3VyY2VzOlxuLSBodHRwczovL2U2ZDktMTAyLTM2LTE0OS0xMjkuZXUubmdyb2suaW8vIiwicyI6IjB4N2I2ZmZiYzgyOTFhZjExOTdjN2JjZjBiOWVmNDkzNmE3YTJiNjI2ZmVjNjQ1MTc2MTk2YmIxOTY5MWNiZDdlMzAwNTNhZmE0MmFmMjg1ZTBmMDNkZjk3ZWIxNzBlNWRjOGEwZmI4MzYzNDc3OTZhMmZhYjcxNTIyMmQ1OThiNzQxYiJ9&state=undefined"
const [hostname, searchParams] = stringWithSignature.split('?')

const signinWithEthereum = function (searchParams) {
  // const urlSearchParams = new URLSearchParams(window.location.search)
  const urlSearchParams = new URLSearchParams(searchParams)
  const params = Object.fromEntries(urlSearchParams.entries())
  const code = JSON.parse(Buffer.from(params.code, "base64"))
  // return json with signature and signed message string
  return code
}


const jsonWithSignature = signinWithEthereum(searchParams)
const signature = jsonWithSignature.s
// console.log("signature: ", signature)
const address = ethers.utils.verifyMessage(jsonWithSignature.d, jsonWithSignature.s)
console.log("address: ", address)

// TODOs
// create JWT with signature + API key

// const [id, secret] = process.env.ADMIN_API_KEY.split(':')

// const api = new ghostAdminAPI({
//   url: process.env.GHOST_BLOG_REDIRECT_URI,
//   key: process.env.ADMIN_API_KEY,
//   version: 'v5.0'
// })
// console.log("api ", api)

// api.posts.add({ title: "Hello world" })
//   .then(response => console.log("api call response: ",response))
//   .catch(error => console.log("error with api call: ", error))

// api.users
//   .edit({ id: "1"})
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// make request to ghost admin
// display on ghost blog


// console.log("test testt twat`",ethers.utils.parseEther('1.5'))
console.log("test testt twat`")
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")