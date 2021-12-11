module.exports.config = {
	name: "ad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hà Mạc Trường Giang",
	description: "Thông tin về admin",
	commandCategory: "Thông tin về admin",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`\n★Thông Tin Admin Bot Này★\nADMIN NAME : Lê Hoài Lam\nNICK NAME: ECHXANH \nChúc bạn sử dụng vui vẻ <3\n=== Lê Hoài Lam ===`, event.threadID, event.messageID);