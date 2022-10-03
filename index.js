const { Telegraf } = require('telegraf')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const bot = new Telegraf(process.env.BOT_TOKEN)

const botFunctions = (chat) => {
  const id = chat.message.id
  const text = chat.message.text
  if (text == 'hello') {
    bot.telegram.sendMessage(id, 'hello', {})
  }

  if (text == 'salam') {
    bot.telegram.sendMessage(id, 'wasalam', {})
  }

}

app.post('/', (req, res) => {
  botFunctions(req.body)

  console.log('webhook received')
  res.status(200).json('webhook received')
})

const port = process.env.PORT || 443 || 80 || 88 || 8443
app.listen(port, () => {
  console.log(`webhook listening on ${port}`)
})
