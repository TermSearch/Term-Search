exports.query = function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.redirect('/duits-nederlands/'+req.body.q);
};
