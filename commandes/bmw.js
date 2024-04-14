"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "bmw", reaction: "🚗", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'CALL ME BMW A WHATSAPP BOT CREATED BY IBRAHIM ADAMS \n\n ' + "TYPE MENU TO SEE MY COMMAND LIST";
    let d = '       BMW THE FASTEST BOT';
    let varmess = z + d;
    var mp3 = '/bmw.mp4';
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
