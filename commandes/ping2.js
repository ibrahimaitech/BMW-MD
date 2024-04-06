const { france } = require("../framework/france");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


france({ nomCom: 'ping2',
    desc: 'To check ping',
    Categorie: 'general',
    reaction: '🚘', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre zok.sendMessage(text: '```ᴘɪɴɢ..```') 
       // await sleep(1000) 
    const { end } = new Date().getTime()
    await zok.sendMessage(text: '_𝙥𝙤𝙣𝙜_\n *' + (end - start) + ' ms* ', edit: key)
  }
)
