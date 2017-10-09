var Todo = require('../models/todo.model');
var TodoController = require('../controllers/todo.controller')(Todo);

module.exports = function(app) {

    app.get('/api/todos', TodoController.GetTodo);

    app.post('/api/todos', TodoController.PostTodo);

    app.get('/api/todos/:todo_id', TodoController.GetSingleTodo);

    app.put('/api/todos/:todo_id', TodoController.UpdateTodo);

    app.delete('/api/todos/:todo_id', TodoController.DeleteTodo);

    app.delete('/api/todos/multiple/:todo_ids', TodoController.DeleteTodoMultiple);

}