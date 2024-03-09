const {

	Function,

	truecaller,

	isPublic

} = require('../lib/');



Function({

	pattern: 'true ?(.*)',

	fromMe: isPublic,

	desc: 'search number on truecaller',

	type: 'search'

}, async (message, match, client) => {

	if (!match && !message.quoted) return await message.reply('_Enter the number you want to search_');

	const number = message.quoted ? message.quoted.sender : match.replace(/[^0-9]/g, '')

	const result = await truecaller(number, message.user_id)

	return await message.reply(result);

})
