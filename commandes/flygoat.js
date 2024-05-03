"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "flygoat", reaction: "🐐", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝒀𝒆𝒔😉𝐈'𝐦 𝐅𝐥𝐲𝐆𝐨𝐚𝐭 𝐌𝐃 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 𝐄𝐚𝐬𝐭𝐞𝐫𝐧 𝐆𝐮𝐫𝐮\n\n ' + "𝗧𝘆𝗽𝗲 𝗺𝗲𝗻𝘂 𝘁𝗼 𝗱𝗶𝘀𝗽𝗹𝗮𝘆 𝗮𝗹𝗹 𝘁𝗵𝗲 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀!";
    let d = '                                          𝐄𝐧𝐬𝐮𝐫𝐞 𝐭𝐨𝐝𝐚𝐲 𝐲𝐨𝐮 𝐛𝐮𝐲 𝐦𝐞 𝐚 𝐛𝐫𝐞𝐚𝐝😁!';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/d98532bb4aa4569e92afb.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
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
   let z ='Salut je m\'appelle *FlyGoat-MD-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *FlyGoat-MD-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/0ee91b720ace7c6ef5485.png'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
