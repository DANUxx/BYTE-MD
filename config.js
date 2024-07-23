
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "DANU";
global.gurl = process.env.GURL || "DANU";
global.website = process.env.GURL || "DANU";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "94703338879";
global.owner = process.env.OWNER_NUMBER || "94703338879";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9KdEtOVWR4KzlWalJJZXZBY1FjaFlwTW0xa1UyQjZaNGQ1WEtmRU1FRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRndIbWNHaS90VWdlNzVLZUR1VWIyd1NWYWRLNUpIMENveGdUUEJmT0tCUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTFc2K0xNSHZDeitXeEQ1Y2EzdVRyZWZTVENsbkhLOU9tRlZIRWt4VWxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UWhNc0pLckNyQjFqL3gzdnZOdi91YS9PUEZWWUN2V0luem1RbnY5SmdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhMRXMwWEtaV0YrVEtVSEk1eVVWMFUxajNxUFJUbU9xTFlGRFV3UVpuRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdQNnNXMnVXOEh3cTJ5Lzg3dGl4NmZuaXdJNW1nR0JhRmpsRFlBQ01SVVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5FcWxrRWpZSVpIU09KaER1QXhqNUJwak5xekw2d1E5SWhOWFNCM05Vbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01mNTJOMEhSQ1lsNGRqM1p6RTYwL3UyekVKdVNSZjFPQnZKMzJ3RkR5MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CQUpXbEdKQzI5RDlZUWpOQ2pTSk9uZ0FDb3p6Y0lJcC83SGVBWnVHTGp1bVM2cUxsQzFYUTdMaG5YMHRZdVVVbnBySzcrclMxYmJlaHYvcDBLYWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6IkIwNmJseHFXTUE3VTlwVG5MeEt3SlAzTU9QRXFzdyt2TlAvZFphQWc3TTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkN5VGpGMGoyUi1LMWZBNnFXTGtzSkEiLCJwaG9uZUlkIjoiYjkwYjZhYzMtMDVlMy00MmYyLTk1MmYtMjM3ZTAzNTYxYmQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhrQUhkZlVzZjFKUU1qNWFBZTlWVzl2cmtjQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuNytGYWErSVdHYTNOWTdRV1o4WThVUW03SjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWU0yMVdQNlEiLCJtZSI6eyJpZCI6Ijk0NzAzMzM4ODc5OjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IiEgRCBBIE4gVSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFBvKzlRR0VQYnEvN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidVBBZWk0NnBhSW9zYXhBa1FWQmxDNVdWeFZIODJ1OXcyRWlNWmJsbUxtZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidVF0ZDBBMjBrZ0M5U283Vm9jc1F6Q2JLVFJiMXVURUUvOVFGaUxKSUg2YXk4dUdPT3VUVk04TUF5M0toZHltc0FWdDRNMS9NL2w5UlY0ZWZiMmpuQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlY2aXVkekJFNXBpcUwzbm52SjhUWFluNzhOcUFsUVpGYlJlb3libjJ4Vzk0eTJqQzZydDdLcCtvbUUrWlZ4OWlRMGF6cGs0WFo4ek10anNmTkxqL2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDMzMzg4Nzk6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmp3SG91T3FXaUtMR3NRSkVGUVpRdVZsY1ZSL05ydmNOaElqR1c1Wmk1byJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTc1OTEwNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHbGgifQ==
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Your session ID" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
