const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["alex¥T"];
global.OwnerNumber = ["2348168000939"];
global.ownertag = [""]; 
global.OwnerName =  "alex";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2348168000939"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"MOlZxyK/lTNOUHMX3886OKSFmFrCTDr5VuUmfvSb4lM="},"public":{"type":"Buffer","data":"ULX3gQ1ZCKpnBtf34qPINYNW/siMvelT8tVwgMPevy0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"qBE42HSVzdlpPd52X4LLM86KB4V7xl2JrARYmYTg6Vo="},"public":{"type":"Buffer","data":"IGYB+IopEl76tuvxgtz0bAjcn8hZTK/GBE2i0Yl7AiU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aC4qJQuJlbN3mDsc53vwiVPvl3MFmKSvLJxyJs3x10M="},"public":{"type":"Buffer","data":"IUhIJgi3YFfkQB2RyQph9t6Ek0LiqvoC3NHxI3c9D1M="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"GKZW+mQAndfnFxafUt9hXTMwZ8bfCTOXk9LzjRMojXM="},"public":{"type":"Buffer","data":"rKQsOoIVpJJDinIK/7R6J0f6kk5o7q8ndDRziPR1LXg="}},"signature":{"type":"Buffer","data":"eChw2TTovSicDgATe9q3qDWO/Bjc9OtixaRSatoRs2bdYia72YTB2J+u+f751qaRD3vYUqhQJ0NwJ/QNDy3Rgw=="},"keyId":1},"registrationId":64,"advSecretKey":"vM4fP8lxiAORsPCa/b4z+zBaPIxAXj+QXAgfP+f/3gM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"XWP7gI8PRWGgHHTS2AaamA","phoneId":"68248a48-c7d1-4281-b9fd-d98865f8f69c","identityId":{"type":"Buffer","data":"wHZ84vRqsylbq8UlSsmooAmR+Bk="},"registered":true,"backupToken":{"type":"Buffer","data":"vRJ5Vs+v8DlaYEX/fr/PzQl1IQo="},"registration":{},"pairingCode":"EDH9BCZK","me":{"id":"2348168000939:15@s.whatsapp.net"},"account":{"details":"CKu1h6sBEKGs+7QGGAEgACgA","accountSignatureKey":"F4Hr04HV8ddS85cf3tYYhRdC4InyQNvPgDZWMwdhw3E=","accountSignature":"9nFesB7fIlVgPf0J8ewenH3hfcX9rJ+q9OJZTFjpgYjk56iorwV28XIHnJt+iEfm8M5w+aGlQtK5gtfwBbRYDw==","deviceSignature":"gpYQQ3RHop3sHG6iR6KFq5tjiUvUVdz7I4AEU7vJM6pEfkeeqR7ynYjBAATToSALTJNYqdQ1ERy4ucZAneishw=="},"signalIdentities":[{"identifier":{"name":"2348168000939:15@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BReB69OB1fHXUvOXH97WGIUXQuCJ8kDbz4A2VjMHYcNx"}}],"platform":"android","lastAccountSyncTimestamp":1721685550,"myAppStateKeyId":"AAAAAED4"}`
global.prefa = ["."]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
