var projects = require("../projects.json")
/*
 * GET home page.
 */

exports.view = function(req, res){
  // Here you should implement your random landing page rendering functionality
  var ran = Math.random();

  if (ran > 0.5) {
    res.render("index", projects);
  } else {
    res.render("index_alternate", projects);
  }
};