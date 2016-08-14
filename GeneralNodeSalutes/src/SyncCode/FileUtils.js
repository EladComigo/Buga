const fs = require('fs');

class FileUtils
{
	constructor()
	{

	}


	static CheckFileExistsSync(filepath)
	{
		try
		{
			const stats = fs.statSync(filepath);
			return stats.isFile() || stats.isDirectory();
		}
		catch (e)
		{
			return false;
		}

	}
}
module.exports = FileUtils;


