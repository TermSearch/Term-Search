exports.home = function(req, res) {
	res.render('index', {
		totalTime: 0
	});
};
