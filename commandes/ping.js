const { france } = require("../framework/france");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


france({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'general',
    reaction: '🚘', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre('*Pong████████████*\n ```' + ${pingValue} + '``` *ms*') 
    const { end } = new Date().getTime()
    await zok.sendMessage('*Pong████████████*\n ```' + (end - start) + '``` *ms*')
  }
)
