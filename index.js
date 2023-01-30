const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

const token = '6184633194:AAFrbd33gnIGFFTKlpgleLPYkGuJzA8isrA';
const webAppUrl = 'https://keepcorn-front-x4vw.vercel.app/';
const bot = new TelegramBot(token, {polling: true});
const app = express();

app.use(express.json());
app.use(cors());

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    console.log(text)
    if(text === '/start') {
        await bot.sendMessage(chatId, 'Нажми кнопку чтобы начать', {
            reply_markup: {
                keyboard: [
                    [{text: 'Начать регистрацию', web_app: {url: webAppUrl}}]
                ]
            }
        })

        await bot.sendMessage(chatId, 'Нажми кнопку чтобы начать', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Начать регистрацию', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
})

const PORT = 8000;

app.listen(PORT, () => console.log('server started on PORT ' + PORT))
