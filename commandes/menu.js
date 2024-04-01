const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    
 cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('EAT');

// Créer une date et une heure en EAT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭────《 💠𝗕𝗠𝗪-𝗠𝗗💠 》────✵
┃  ╭────────────────────✵
┃☣ ┃*User* : ${s.OWNER_NAME}
┃☣ ┃*Mode* : ${mode}
┃☣ ┃*Commands* : ${cm.length} 
┃☣ ┃*Time* : ${temps} 
┃☣ ┃*Ram* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃☣ ┃*Developer* : 𝗜𝗕𝗥𝗔𝗛𝗜𝗠 𝗔𝗗𝗔𝗠𝗦
┃☣ ┃*Platform* : 𝗛𝗘𝗥𝗢𝗞𝗨
┃☣ ┃ *speed* : 609876ᵐˢ
┃☣ ┃*Uptime* : 4𝗛 : 20𝗠
╰───────────────────✵ \n\n`;
 
    let menuMsg=`  
 ┃✵┃✵┃✵┃✵┃✵┃✵┃✵┃✵┃✵┃✵┃
✵🝪🝪🝪🝪🝪🝪🝪🝪🝪🝪🝪🝪🝪🝪🝪✵
`;

    for (const cat in coms) {
        menuMsg += `*╭────✵* *${cat}* *☣⊷*`;
        for (const cmd of coms[cat]) {
            menuMsg += `  
*┃✵* ${cmd}`;
        }
        menuMsg += `
*╰═════════════✵* \n`
    }

    menuMsg += `
◇            ◇
*—————  🝪  —————*

  *𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗜𝗯𝗿𝗮𝗵𝗶𝗺 💠 *                                         
*╰═════════════✵*
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Zokou-MD*, développé par Djalega++" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "*Ibrahim-tech*" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
