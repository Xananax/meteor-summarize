if (Package.templating) {
	var Template = Package.templating.Template;
	var HTML = Package.htmljs.HTML; // implied by `ui`
	var Blaze = Package.blaze.Blaze; // implied by `ui`

	var sum = function(){
		var view = this;
		var content = '';
		var data = Template.currentData();
		if(!(data.hasOwnProperty('chars') || data.hasOwnProperty('append'))){data=null;}
		if(view.templateContentBlock){
			content =  data ? 
				Blaze._toText(
					Blaze.With(Template.parentData(1),function() {return view.templateContentBlock;})
				,	view.parentView
				,	HTML.TEXTMODE.STRING
				)
				: Blaze._toText(
					view.templateContentBlock
				,	HTML.TEXTMODE.STRING
				)
				;
			content = content.replace(/^\s*?\n/,'').replace(/\s+?$/,'');
		}
		var maxChar = (data && data.chars) || 250;
		var append = (data && data.append) || ''; 
		var html = summarize(content,maxChar,append);
		return HTML.Raw(html);
	};

	var t = Blaze.Template('summarize', sum);

	Template.registerHelper('summarize', t);
}
