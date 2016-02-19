exports.query = function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.redirect('/duits-nederlands/'+req.body.q);
};

exports.searchpage = (req, res, next) => {
  const term = req.query.term;
  res.render('de-nl-notfound', {
    germanStr: term
  });
}
