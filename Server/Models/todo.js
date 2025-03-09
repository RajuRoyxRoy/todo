const mongoose = require('mongoose');  // Ensure mongoose is imported

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    }
}, { timestamps: true });

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;