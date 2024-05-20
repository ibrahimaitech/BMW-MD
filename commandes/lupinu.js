const {france}=require("../framework/france")







france({nomCom:"car",categorie:"Mods",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  const githubRepoURL = 'https://github.com/ibrahimaitech/BMW-MD';



  try {

  

    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);



    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);



    if (response.status === 200) {

      const repoData = response.data;



      const formattedInfo = `

📂 Repository Name: ${repoData.name}

📝 Description: ${repoData.description}

👤 Owner: ${repoData.owner.login}

⭐ Stars: ${repoData.stargazers_count}

🍴 Forks: ${repoData.forks_count}

🌐 URL: ${repoData.html_url}

      `.trim();



      await conn.relayMessage(m.chat,  {

        requestPaymentMessage: {

          currencyCodeIso4217: 'INR',

          amount1000: 69000,

          requestFrom: m.sender,

          noteMessage: {

          extendedTextMessage: {

          text: formattedInfo,

          contextInfo: {

          externalAdReply: {

          showAdAttribution: true

          }}}}}}, {})

    } else {

      await conn.reply(m.chat, 'Unable to fetch repository information.', m);

    }

  } catch (error) {

    console.error(error);

    await conn.reply(m.chat, 'An error occurred while fetching repository information.', m);

  }

};



handler.help = ['script'];

handler.tags = ['main'];

handler.command = ['sc', 'repo', 'script'];



export default handler;
