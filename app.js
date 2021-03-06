const express = require('express')
const app = express()
const router = express.Router()
const config = require('./config.js')
const Twit = require('twit')
const T = new Twit({
  consumer_key:         config.consumer_key,
  consumer_secret:      config.consumer_secret,
  access_token:         config.access_token,
  access_token_secret:  config.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

router.get('/search',function(req,res){
  var tweeter = req.query.q

  T.get('search/tweets',{q: tweeter}, function(err, data, response) {
    res.send(data)
  })
})

app.use('/',router)
app.listen(3000)
