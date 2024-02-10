import connectionString from '../config/db'

const mongoose = require('mongoose')
const { Schema, model } = mongoose

mongoose.connect(connectionString)
  .then((res) => { console.log('Database connected') })
  .catch(() => { console.log('Database not connected') })

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  icon: {
    category: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  subjectId: {
    type: Number,
    required: true,
    min: 0
  },
  customFields: [{
    type: {
      type: String,
      required: true
    },
    value: {
      type: Schema.Types.Mixed,
      required: true
    }
  }],
  createdAt: {
    type: Date,
    default: () => Date.now()
  },
  updatedAt: Date
})

postSchema.pre('save', function (next) {
  this.updatedAt = new Date()
  next()
})

const Post = model('Post', postSchema)

const post = new Post({
  title: 'Paradigmas de programación',
  icon: {
    category: 'all',
    id: 1451
  },
  subjectId: 0,
  customFields: [
    {
      type: 'title',
      value: 'Es un titulo'
    },
    {
      type: 'code',
      value: { language: 'javascript', code: 'console.log("hello")' }
    }
  ]
})

post.save()
  .then((res) => { console.log('insert: ', res); mongoose.connection.close() })
  .catch((err) => { console.log('insert error: ', err); mongoose.connection.close() })
