"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "test", reaction: "⏳", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝘽𝙊𝙏 𝙄𝙎 𝙊𝙉𝙇𝙄𝙉𝙀 \n\n ' + "║❒ 𝙏𝙔𝙋𝙀 𝙈𝙀𝙉𝙐 𝙏𝙊 𝙎𝙀𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎";
    let d = '                                            ║❒ 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐂𝐡𝐚𝐧𝐧𝐞𝐥: https://whatsapp.com/channel/0029VaZChvyLY6d8PnO4x61B';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/0ee91b720ace7c6ef5485.png';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => 
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *FlyGoat-MD-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *FlyGoat-MD-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/4284fda5d1d436d0f9012.png'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
