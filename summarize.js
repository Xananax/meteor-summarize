// stolen from http://blog.stevenlevithan.com/archives/get-html-summary

/**
 * Summarizes a string, even if it contains html characters
 * @param  {String} input the input string
 * @param  {Int} maxChars maximum characters (defaults to 250)
 * @return {String} the summarized string
 */
summarize = function(input, maxChars,append){
	append = append || '';
	// token matches a word, tag, or special character
	var	token = /\w+|[^\w<]|<(\/)?(\w+)[^>]*(\/)?>|</g,
		selfClosingTag = /^(?:[hb]r|img|input)$/i,
		output = "",
		charCount = 0,
		openTags = [],
		match;

	// Set the default for the max number of characters
	// (only counts characters outside of HTML tags)
	maxChars = maxChars || 250;
	if(append){
		maxChars-=append.length;
	}

	//if we can't cut at a word boundary, return fast
	if(input.indexOf(/\s/)<maxChars){
		return input.substr(0,maxChars)+(append?append:'');
	}

	while ((charCount < maxChars) && (match = token.exec(input))) {
		// If this is an HTML tag
		if (match[2]) {
			output += match[0];
			// If this is not a self-closing tag
			if (!(match[3] || selfClosingTag.test(match[2]))) {
				// If this is a closing tag
				if (match[1]) openTags.pop();
				else openTags.push(match[2]);
			}
		} else {
			charCount += match[0].length;
			if (charCount <= maxChars) output += match[0];
		}
	}

	// Close any tags which were left open
	var i = openTags.length;
	while (i--) output += "</" + openTags[i] + ">";

	if((output.length < input.length) && append){
		output+=append;
	}
	return output;
};