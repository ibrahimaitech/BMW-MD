const { france } = require("../framework/france");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


france({ nomCom: 'repo''sc''script',
    desc: 'To check bot link',
    Categorie: 'General',
    reaction: '📂', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre('*𝗢𝘇𝗮𝗮𝗵👊 𝗧𝗵𝗶𝘀 𝗶𝘀 *𝗕𝗠𝗪-𝗠𝗗*  𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 *𝗜𝗕𝗥𝗔𝗛𝗜𝗠 𝗔𝗗𝗔𝗠𝗦*🥷 𝗣𝗹𝗲𝗮𝘀𝗲 𝗚𝗶𝘃𝗲 𝗮 𝗦𝘁𝗮𝗿𝘁 ✨ 𝗢𝗻 𝗧𝗵𝗲 𝗥𝗲𝗽𝗼 𝗔𝗻𝗱 𝗙𝗼𝗿𝗸 𝗜𝘁 🚗
!!*\n ```' + ║❒ *Repo*
https://github.com/ibrahimaitech/IBRAHIM-AI-10.10

║❒ *Scan*
https://ibrahim-tech-1-4a7321f212d3.herokuapp.com/

║❒ *Youtube*
https://www.youtube.com/@ibrahimmdgpt

║❒ *Instagram*
https://www.instagram.com/ibrahim_tech_official + '``` *✅*') 
    const { end } = new Date().getTime()
    await zok.sendMessage('*Pong!*\n ```' + (end - start) + '``` *ms*')
  }
)
