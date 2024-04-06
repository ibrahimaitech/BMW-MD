const { france } = require("../framework/france");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


france({ nomCom: 'ping',
    pattern: "ping",
    desc: "To check ping",
    category: "general",
    filename: __filename,
},
async (Void, citel) => {
    var initial = new Date().getTime();
    const { key } = await Void.sendMessage(citel.chat, { text: '```Pinging from server```' });
    var final = new Date().getTime();

    // Calculate the ping value in milliseconds
    const pingValue = final - initial;

    // Create a loading bar
    const loadingBarLength = 20;
    const loadedBlocks = loadingBarLength;
    const loadingBar = '█'.repeat(loadedBlocks);

    // Send the loading bar first
    await Void.sendMessage(citel.chat, { text: `*Pong*\nLoading: [${loadingBar}] 100%`, edit: key });

    // Wait for a brief moment (you can customize this delay)
    await france.sleep(1000);

    // Send the final ping message
    return await Void.sendMessage(citel.chat, { text: `*Ping: ${pingValue} ms*` });
});
