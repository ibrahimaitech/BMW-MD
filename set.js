const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5WL282TzNveHpyYVpVYWtsdDBMckFCa2MwSzZyVlYwVCs4aVBPNlBHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUFFdXg1enRRWkxlald1allqWjRDS3NFLzVHd2VZeXp5T3BPK3k4R1R4ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQlp1MUxQNWNTeWVWdWRpYktMMG43RWM0dEppMEZ1MXJrZlRpUngwbG1FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhZ096TmJabFhuWTdDeldQU2lxMjB5TXZjYkJTaWxleHhCVEdNMG5VcEJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNIczZ5bXpBcUhUT1FTMzJKK0JMTlRjVzBnbW8zeG1aeVFWOW55NEo1VlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdoMm9wVGluY2lwUUlUU2hZU1I1RnNwempQUWUrQUlKTjA2WmtqZVZuSGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE0xc2RCaFFQV3BXbUJxaFhGV1NhRk1UUTE0cFFCYnNqK2VZeHN6Vm1ITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTJtRTQ5clF3b2p2L2xpd24vcVoyQUlra3BPajJRKy9CT0QzRGhkb0F5ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhDTUVpY3p3NDdUZjA2RGdVK2d1SHY2KzNjMk15L2tYK3hCcXpOR3N2N1JmMFIyNDlYa0R0WGtGZ09PcytaRjVjSVg5cU5YSERMeVhNT1dGOTk4Nml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6ImpTMElIa1M3d3hYUU1uOVhvYnBvbkd4SXQzWEVHZ1Z1cXdXTVAvdGhRdWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJKMmZZd1FtU0FTb1pXYWM3dE9acFEiLCJwaG9uZUlkIjoiYjJkNGU1OGQtNGEwYy00YmYxLWJiNjUtY2IzODI0YmU2MzE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEzWVdrRDVHc204ajhsUTVHMzRFbTRWdGpyZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvZDVlcE1xV3JzbTh3ZXRKc3FsQkdYajhqU0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVjhWOFQ5M04iLCJtZSI6eyJpZCI6IjI1NDcxMDc3MjY2Njo5NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJJYnJhaGltIEFkYW1zIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQS2VoYWNERU5pZDQ3UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsK0t1TVFQUysyQjZpNmZCUmxRU0QzbmhUcGdPV3l0YjVLTGFUUkFyOFcwPSIsImFjY291bnRTaWduYXR1cmUiOiJISkEwS2VnQjVmZkpEcWE2OU5kU1Nkb3NtSmNLeXFQdExHeDJiWktQN09rM2d4N3JXZjUrdXFiaitqS2hGMWt4K3JZMlhsbmVYK3dISVduZFZwYm5BUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMnFJY1k0ajVtbWxrcjBHZDE0cTQxSTBKdjBWQ1dpZHBLS2RoWVBrcm1Oc3F3WDFPaXcvRDlvTnN1Ri9ESW9NOTVmanpNNkpJUEx6dVEvTHEwdDZ3aXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MTA3NzI2NjY6OTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWmZpcmpFRDB2dGdlb3Vud1VaVUVnOTU0VTZZRGxzclcrU2kyazBRSy9GdCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTI5MDQ5OH0=',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BMW_XMD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/fd124f7e9271111c3bcc1.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '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',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
