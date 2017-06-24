const commandLineArgs = require('command-line-args')
const Promise = require('bluebird')
const converter = require('./converter')
const log = require('./logging')

var fs = Promise.promisifyAll(require('fs'));

async function process() {

	const optionDefinitions = [
	  { name: 'back', alias: 'b', type: Boolean },
	  { name: 'output', alias: 'o', type: String },
	  { name: 'file', type: String, defaultOption: true },
	]

	const options = commandLineArgs(optionDefinitions)

	log.info(options, 'Convert started')

	try{

		const content = await fs.readFileAsync(options.file, 'utf8')
		let result

		if(options.back) {
			result = await converter.from12_to_2(content)
		}else {
			result = await converter.from2_to_12(content)
		}

		if(options.output) {
			await fs.writeFileAsync(options.output, result)
		}else {
		 	console.log(result)
		}

	}catch(err){
		log.error(err, 'Convert error')
	}

}

process()
