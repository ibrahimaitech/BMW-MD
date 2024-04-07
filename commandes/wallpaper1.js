"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "wallpaper1", reaction: "🎞", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '🚘𝗥𝗮𝗻𝗱𝗼𝗺 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 \n\n ' + "🚘Download it and set it to your wallpaper 𝗙𝗿𝗼𝗺 (𝗕𝗠𝗪-𝗠𝗗)";
    let d =                '🚘MADE BY 𝗜𝗕𝗥𝗔𝗛𝗜𝗠 𝗔𝗗𝗔𝗠𝗦';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/a99074213b1bf1351a9d8.jpg';
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
