const {

	Function,

	ringtone,

	isPublic,

	prefix,

	parsedUrl

} = require("../lib/");

const t = "```";

Function({

	pattern: 'ringtone ?(.*)',

	fromMe: isPublic,

	desc: 'download ringtone',

	type: 'download'

}, async (message, match) => {

	if (!match) return await message.reply('_Example : ringtone the box_')

	const result = await ringtone(match)

	if (result) {

	const list = [];

	let no = 1;

	let msg = `${t}Search results for ${match}:${t}\n_To download, please reply with the desired ringtone number._\n\n`;

		const indices = new Set();

		for (var main = 0; main < result.length; main++) {

		const randomIndex = Math.floor(Math.random() * result.length);

		if (!indices.has(randomIndex)) {

			indices.add(randomIndex);

			msg += `${no++}. *${result[randomIndex].title}*\n*link* : ${result[randomIndex].source}\n*mp3* : ${result[randomIndex].audio}\n\n`

			}

		}

	await message.send(msg, { quoted: m.data })

	}

})





Function({

	pattern: 'upload ?(.*)',

	fromMe: isPublic,

	desc: 'sendFromUrl',

	type: 'download'

}, async (message, match) => {

	match = match || message.reply_message.text

	if (!match) return await message.reply('_Missing Url!_')

	const Url = await parsedUrl(match)

	for (let url of Url) {

		await message.client.sendFromUrl(message.jid, url, message.data)

	}

})
