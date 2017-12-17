var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://root:admin@ds137256.mlab.com:37256/maxtee_todo_db', ['todo'])

//get all todos
router.get('/', function(req, res, next){
    db.todo.find(function(err, todos) {
        if(err){
            res.send(err);
            console.log(err);
        }
        res.json(todos);
    });
});
//get single todo
router.get('/:id', function(req, res, next){
    db.todo.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, todo) {
        if(err){
            res.send(err);
            console.log(err);
        }
        res.json(todo);
    });
});
//save a todo
router.post('/todo', function(req, res, next){
    var todo = req.body;
    if(!todo.name || !todo.description){
        req.statusCode(400);
        req.json({"error": "The name and the description is compulsory"});
    }else{
        db.todo.save(todo, function(err, todo) {
            if(err){
                res.send(err);
            }
            res.json(ttodoask);
        });
    }
});
//delete single todo
router.delete('/:id', function(req, res, next){
    db.todo.remove({_id:mongojs.ObjectId(req.params.id)}, function(err, todo) {
        if(err){
            res.send(err);
            console.log(err);
        }
        res.json(todo);
    });
});
//update todo
router.put('/:id', function(req, res, next){
    var todo = req.body;
    var uptodo  = {};
    if(!todo.name || !todo.description){
        req.statusCode(400);
        req.json({"error": "The name and the description is compulsory"});
    }else{
        db.todo.update({_id:mongojs.ObjectId(req.params.id)},todo, {}, function(err, todo) {
            if(err){
                res.send(err);
            }
            res.json(todo);
        });
    }
});
module.exports = router;