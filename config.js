/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
        xteam: 'https://api.xteam.xyz',
        lolhuman: 'https://api.lolhuman.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
        'https://api.xteam.xyz': 'MIMINETBOT',
        'https://api.lolhuman.xyz': '7b389b5e346e7b9181783e80',
}

// Other
global.owner = ['6283816171576']
global.premium = ['6283816171576']
global.namaowner = ['ZhaaLL']
global.namabot = ['ZhaaLLBOT']
global.packname = 'Created By ZhaaLL'
global.author = 'zhal'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
