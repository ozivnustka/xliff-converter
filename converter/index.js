const Promise = require('bluebird')
var xliff = Promise.promisifyAll(require('xliff'));

module.exports = {

	async from2_to_12(content) {
		const json = await xliff.xliff2jsAsync(content)
	    const converted = await xliff.jsToXliff12Async(json)
	   	return converted
	},

	async from12_to_2(content) {
		const json = await xliff.xliff12ToJsAsync(content)
	    const converted = await xliff.js2xliffAsync(json)
	   	return converted
	}

}