"use strict";

var TodoCtrl = function(Todo) {

    var TodoObj = {};

    TodoObj.PostTodo = function(req, res, next) {
        var newTodo = new Todo(req.body);
        newTodo.save(function(err, todo) {
            if (err) {
                res.json({ status: false, error: err.message });
                return;
            }
            res.json({ status: true, todo: todo });
        });
    }

    TodoObj.GetTodo = function(req, res, next) {
        Todo.find(function(err, todos) {
            if (err) {
                res.json({ status: false, error: "Something went wrong" });
                return
            }
            res.json({ status: true, todo: todos });
        });
    }

    TodoObj.GetSingleTodo = function(req, res, next) {
        Todo.findById(req.params.todo_id, function(err, todo) {

            if (err) {
                res.json({ status: false, error: "Todo id not found in database" });
            }

            res.json({ status: true, todo: todo });
        });
    }

    TodoObj.UpdateTodo = function(req, res, next) {
        var completed = req.body.completed;
        Todo.findById(req.params.todo_id, function(err, todo) {
            todo.completed = completed;
            todo.save(function(err, todo) {
                if (err) {
                    res.json({ status: false, error: "Status not updated" });
                }
                res.json({ status: true, message: "Status updated successfully" });
            });
        });
    }

    TodoObj.DeleteTodo = function(req, res, next) {
        Todo.remove({ _id: req.params.todo_id }, function(err, todos) {
            if (err) {
                res.json({ status: false, error: "Deleting todo is not successfull" });
            }
            res.json({ status: true, message: "Todo deleted successfully" });
        });
    }

    TodoObj.DeleteTodoMultiple = function(req, res, next) {
        Todo.remove({ _id: { $in: ['59db737cfa9a44057c61d256', '59db7b03a4265333f85fe96c'] } }, function(err, todos) {
            if (err) {
                res.json({ status: false, error: "Deleting todos is not successfull" });
            }
            res.json({ status: true, message: "Todos deleted successfully" });
        });
    }

    return TodoObj;
}

module.exports = TodoCtrl;