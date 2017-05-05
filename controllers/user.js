var User = require('../models/user');

exports.getUsers=function(req,res){
    var id = req.params.id;
    User.findOne({_id:id}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

exports.getUsers2=function(req,res){
  var regexp = /shubh/i;
    User.find({name : regexp} , function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}
