const fs = require("fs");
module.exports.config = {
	name: "vĩnh biệt",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Vĩnh Biệt Cụ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("vĩnh biệt")==0 || (event.body.indexOf("Vĩnh biệt")==0 || (event.body.indexOf("bye")==0 || (event.body.indexOf("Bye")==0)))) {
		var msg = {
				body: "Hôm nay cụ đã đi rồi \n chiều tà mây lững lờ trôi \n Cụ ơi năm nay cụ đi rồi ai cùng con chơi tài xỉu ! :((",
				attachment: fs.createReadStream(__dirname + `/noprefix/vinhbietcu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}