"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "repo", reaction: "🚗", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝗪𝗛𝗔𝗧"𝗦 𝗨𝗣 𝗠𝗬 𝗚𝙀𝙀 𝗧𝗛𝗜𝗦 𝗜𝗦 𝗜𝗕𝗥𝗔𝗛𝗜𝗠-𝗧𝗘𝗖𝗛  \n\n ' + "𝗙𝗢𝗥𝗞 𝗧𝗛𝗘 𝗥𝗘𝗣𝗢 𝗧𝗢 𝗗𝗘𝗣𝗟𝗢𝗬 𝗬𝗢𝗨𝗥 𝗢𝗪𝗡 𝗕𝗢𝗧 *𝗜𝗕𝗥𝗔𝗛𝗜𝗠-𝗧𝗘𝗖𝗛 𝗥𝗘𝗣𝗢.*";
    let d = ' https://github.com/ibrahimaitech/IBRAHIM-AI-10.10/tree/main';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/a238340352ed8841782a7.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *BMW-MD-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *BMW-MD-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/13d63c21c1a665bfd8324.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
