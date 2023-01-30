import { Bot } from "grammy";
import express from "express";
import cors from "cors";

const token = "5916581638:AAE3EL7MDymbr-aUShiv5FgCv8F3whtx3To";
const webAppUrl = "https://keepcorn-front-x4vw.vercel.app/";
const bot = new Bot(token);
const app = express();

app.use(express.json());
app.use(cors());
bot.start();
bot.command("start", async (ctx) => {
  await ctx.reply("Зарегистрироваться", {
    reply_markup: {
      keyboard: [[{ text: "Начать регистрацию", web_app: { url: webAppUrl } }]],
    },
  });
  await ctx.reply("В Keepcorn", {
    reply_markup: {
      inline_keyboard: [[{ text: "Начать регистрацию", web_app: { url: webAppUrl } }]],
    },
  });
});

const PORT = 8000;

app.listen(PORT, () => console.log("server started on PORT " + PORT));
