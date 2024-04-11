"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "abu", reaction: "🚗", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝗢𝘇𝗮𝗮𝗵👊 𝗧𝗵𝗶𝘀 𝗶𝘀 *𝗕𝗠𝗪-𝗠𝗗*  𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 *𝗜𝗕𝗥𝗔𝗛𝗜𝗠 𝗔𝗗𝗔𝗠𝗦*🥷 𝗣𝗹𝗲𝗮𝘀𝗲 𝗚𝗶𝘃𝗲 𝗮 𝗦𝘁𝗮𝗿 ✨ 𝗢𝗻 𝗧𝗵𝗲 𝗥𝗲𝗽𝗼 𝗔𝗻𝗱 𝗙𝗼𝗿𝗸 𝗜𝘁 🚗 \n\n ' + "║❒ 𝗥𝗲𝗽𝗼 https://github.com/ibrahimaitech/IBRAHIM-AI-10.10";
    let d = '       ║❒ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 https://www.youtube.com/@ibrahimmdgpt';
    let varmess = z + d;
    var mp3 = 'https://s31.aconvert.com/convert/p3r68-cdx67/7uiwm-6zr16.mp3'';
    await zk.sendMessage(dest, { audio: { url: mp3 }, caption: varmess });
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
