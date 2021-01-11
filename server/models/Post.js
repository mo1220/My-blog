const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    title: {
        type: String
    },
    hashTag: {
        type: String
    },
    content:{
        type: String,
        maxlength: 200
    },
    date:{
        type: String
    }
})

postSchema.pre('save', function(next){
    var post = this;
        next()
});


const Post = mongoose.model('Post', postSchema);
module.exports = { Post }