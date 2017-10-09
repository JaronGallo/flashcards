//Cloze card function
exports.ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");
	this.fullText = text;
	//Error Warning
	if (!text.includes(cloze)){
		console.log("ERROR: " + cloze + " is not in the full text");
		throw err;
	}
};