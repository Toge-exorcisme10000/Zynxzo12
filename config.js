require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝐙𝐲𝐧𝐓𝐳𝐲"
global.dana = "085805338638"
global.qris = "https://a.top4top.io/p_319465f4i0.jpeg"


// GLOBAL SETTING
global.owner = "25767334893"
global.namabot = "Toge inumaki"
global.nomorbot = "25767334893"
global.namaCreator = "TOGE INUMAKI"
global.linkyt = "https://youtube.com/@zynxzoo"
global.autoJoin = false
global.antilink = false
global.versisc = '𝟭𝟮.𝟬.𝟬'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://g.top4top.io/p_3194iz70l0.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VapVjjr1noz8wOgd6144'
global.packname = "Zyn"
global.author = "TOGE INUMAKI"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
