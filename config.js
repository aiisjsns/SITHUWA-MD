const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94773283124'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'radiparosha57@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94773283124"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUxzZC9iUjMvajNGSkZmdWE5RGozL3hwVmpnYW5palZ3YmF2aXVhcUxsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTBZZ3VEY08yUWN5MlNCUWFBUS9DRzhNQ0UxbWZRa1Y3eEZhTm4rUlFRZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQzNybTUyUE92WjdLaGFZK21mWG1Tai9taU5Ga3VRZkx3MHJqUWsvS1hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjWVFVN1pxeUdCellvQWowRWx0TW1SamNISHBwaEFpbTNMRm9RaUtidVhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHZjJETmdtM04xSE1CWVVGU3liVEdmTWhZUDJHRkxQUWhXNHpac2dFV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF2SXJmUnBzZFZNM3FtaUFkelhhS1JqNnJuWlQvcE8yZXpoUFF3MXJTUTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tYTEpDbElJL3ZrWDd0MDZlQXdVUVdpU3RSSlg1dXZrSDl2U0M2NXVGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGNlM1RYTjBoSXFjcE4vYUdUSnA3NEZGSUpFR1BIS1RqS0NrVmVJRW9BZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5hNWV6bWlhNlE1YUM0QUtKY2tQQnhCSDJsWDFXbGVuejhEY1JtdGhMeDFlRXh1WElPV0lpc1FXQ09YcWZEWU9EQm1KZFM3akpKYUVIYkcxSTJsVmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6IjNuSG5WWCtkN0EvMG5vTW5lUU5oTTVKU1BsL203NzFUMGczSENkTE5FeW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjMxNzg3NDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEU2QkZDM0E2Qjg0N0M2NTNFMjc4QTk1MjdFRERFMzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwODE3MTA3NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjMxNzg3NDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDM2OEU0RTMyN0IzNDgyMzA1QjA3NzcwRjlBQUVGMzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwODE3MTA3Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVlVCYUFGZGlRRG0ta1Rwd3psMVpQQSIsInBob25lSWQiOiIwNWYwMjYwMC1lN2Q4LTRmYzMtYTg5NC1lZGViYzQwYTllOWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXdhRW85WkgwWkc4bW5oeFhONHBNL2xkb3JVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBdUY3VUhGWHFETmxabkhvUFhMSHlBRFlLQVk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJR1h6NWdHRUwrK3dxNEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyNEE3V3VncGZhZ3ZRTDUrQk9LeXBPM2tLaXYrajJLdmFYZ0wwU2Y5UUJJPSIsImFjY291bnRTaWduYXR1cmUiOiJpODd3b2FQbGNyRXE0MkFZN2xyNmNvbWhWUXYxa3loSTdLeDA5V0x2WjVlR3VESnNDb0QzbUdYYitQZGtMOW5KYW1VSlhld0xBVGJhYUlkc1F1YUFEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTG1QeXJFVUJOU2g5NWRsNUF4TEtOczh1ZU1qcG51VXNpd0srUy9yMERDcGhmMWF5Y0k3b2NFOFZYaDNUbXhpMmdhSXV6TmtYcDA5VTd4QmVRL2tVaVE9PSJ9LCJtZSI6eyJpZCI6Ijk0NzIzMTc4NzQyOjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkdPU1QifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjMxNzg3NDI6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHVBTzFyb0tYMm9MMEMrZmdUaXNxVHQ1Q29yL285aXIybDRDOUVuL1VBUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwODE3MTA3NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLZ0MifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'GOST BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "GOST-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'gost' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'හායි මම ඉන්නවා මොකක්ද වෙන්න ඕනේ මගෙන් ඔයාට ' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
