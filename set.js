const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NrclFQbk1IUE5oT3JjNDMzbExJT3hiM055TVdmbjVsTklMWitkMG5rQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0dCK2NPQktPQjhER3hsUUE5dHJPbGV5WFJ1RGdBdHI5VTdoNmg4NUh3OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRDF6c1FyM3F0Wi9Iai9EZGMwaHVMeFNnK0Y0YnpnWVh2bzJjRGE2bjJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJleU5lSUdXOFp6b2x4dWF6ZW51V0VGQ2p2ZUpwZmhiRFVlWUxXM2VCSVZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFQRmoraUV5alZaNGZHQlFCUHhEZU54VDEzT0pGaFBQWUF6NG1aNXZ4RVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl0OUZhMlYzT1FLajYxNEJCM1diZ0lvV29wczRpeGt1YlhBVkdGaVZZMlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0cwVkxPV2tSR0VmdG93RWxRY2hWeUhGWndNY3QrbFE5MTNvU3BnRmxFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHpkby9TKzA5VDZpVm14R0ZkaWIreDloQUpqNHJuSi85ZXBsWVpyT3ppTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9zeU5TaVNFdnlQZnBVb0FySGRhbTg2amVab3JLUG9OZnNFUjVCUHNnaHpTQmJiKzZKY3MrL0pQYmVDSDZPQS9wYkZMNzVleGg4N0hPYjd5Y3oyYUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6InZ5azJZblVMZjBoMDVuaXV5TC83QVhNNUNYQXE4cDV4TWo5RmVSaXdYRms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhjNFJJb2lGUTV1S1BWcXE4czFfdFEiLCJwaG9uZUlkIjoiN2Y4ODI4NjAtYmI4Zi00ZjRiLTk4YjEtMDA4MWQ4ZTFiY2JhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill5cXFHMG0vcGtodHpIK1Brb05qTnRBL1Rqaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRHBoSTVIV2M5aXZGWDJURUE4c2huWnJWZGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWFBDMTJCNkQiLCJtZSI6eyJpZCI6IjIzMzU1NzAxMTg4MjoxNUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS25Ya2RRQkVPdlJyclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiajN2WXVKUENicU1UbXFNYXZ1Z2NqZmh0M2c1UVZJbHpiVFRJazI1cEpXWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidnBuNTBteURrZVEwSzExTk1GNlZWVzRucHliVk4zenFua21RWGU5cW9IQjI2MnZjVEdyemRRUVpWY0RKeUt4NlRyZDNnYUFFTllqajYway9kaHJmQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Im11QU9tOWx1SVpxNTUyWmVpbkNzcDlGNGtsRGdCUW9PV3o1cVo5L2ZqMElHZEdVRDUvSDM2WDBGVm1FOHQxZjNid3FsVlZIMDNYaGVjVGV4MXhVMENnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTU3MDExODgyOjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk5NzJMaVR3bTZqRTVxakdyN29ISTM0YmQ0T1VGU0pjMjAweUpOdWFTVm0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA0Mjg3OTF9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Mcben",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "233591856630",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BMW MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '',
    URL : process.env.BOT_MENU_LINKS || 'https://wa.me/+233591856630',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'online,
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
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

