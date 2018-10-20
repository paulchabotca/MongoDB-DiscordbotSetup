const fs = require('fs');
const moment = require('moment');
const config = require('./config.json');

class getFunction {

	/**
	 * [writeLogs description]
	 * @param  {[type]} str [description]
	 * @return {[type]}     [description]
	 */
	static writeLogs(str) {
		var writeStr = "\n" + moment().format('MMMM Do YYYY, h:mm:ss a') + `: ${str}`;
		fs.appendFileSync('./logs/mainlogs.txt', writeStr, function(err) {
			if (err) throw err;
		});;
	}

	/**
	 * [clean description]
	 * @param  {[type]} text [description]
	 * @return {[type]}      [description]
	 */
	static clean(text) {
		if (typeof(text) === "string")
			return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
		else
			return text;
	}

	/**
	 * [sleep description]
	 * @param  {[type]} milliseconds [description]
	 * @return {[type]}              [description]
	 */
	static sleep(milliseconds) {
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds) {
				break;
			}
		}
	}

	/**
	 * [registerPrefix description]
	 * @param  {[type]} id [description]
	 * @param  {[type]} pr [description]
	 * @return {[type]}    [description]
	 */
	static registerPrefix(id, pr) {
		var prefixSchema = require('./database/models/prefixSchema');

		var newPrefix = new prefixSchema({
			_id: id,
			content: pr
		});

		try {
			newPrefix.save();
		} catch (err) {
			console.log(err);
		}
	}

	/**
	 * [updatePrefix description]
	 * @param  {[type]} id [description]
	 * @param  {[type]} pr [description]
	 * @return {[type]}    [description]
	 */
	static updatePrefix(id, pr) {
		var PrefixModel = require('./database/models/prefixSchema');

		PrefixModel.findOne({
			_id: id
		}, function(err, doc) {
			doc.content = pr;
			doc.save();
		});
	}

	/**
	 * [hasPrefix description]
	 * @param  {[type]}   id       [description]
	 * @param  {Function} callback [description]
	 * @return {Boolean}           [description]
	 */
	static hasPrefix(id, callback) {
		var PrefixModel = require('./database/models/prefixSchema');

		PrefixModel.find({
			_id: id
		}).then(doc => {
			if (doc.length !== 0) {
				callback(true);
			} else {
				callback(false);
			}
		}).catch(err => {
			console.log(err);
		});
	}

	/**
	 * [getPrefix description]
	 * @param  {[type]}   id       [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	static getPrefix(id, callback) {
		var PrefixModel = require('./database/models/prefixSchema');

		PrefixModel.find({
			_id: id
		}).then(doc => {
			if (doc.length !== 0) {
				var newString = JSON.stringify(doc);
				var firstFilter = newString.replace('[', '');
				var secondFilter = firstFilter.replace(']', '');
				let dataArray = JSON.parse(secondFilter);
				callback(dataArray.content);
			} else {
				callback(config.prefix);
			}
		}).catch(err => {
			console.log(err);
		});
	}
}

module.exports = getFunction;