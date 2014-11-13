Package.describe({
	name: "xananax:summarize"
,	summary: "A simple function to trim texts & HTML texts"
,	version: "0.0.1"
,	git: "https://github.com/xananax/meteor-summarize.git"
});

Package.on_use(function (api) {
	api.versionsFrom("0.9.0");
	api.use("templating", "client", {weak: true});
	api.imply("templating")
	api.add_files('summarize.js',['client','server']);
	api.add_files('template-integration.js', 'client');
	api.export('summarize');
});