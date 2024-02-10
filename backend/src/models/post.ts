import { Schema, model } from 'mongoose'
import { PostWithId } from '../types/post'

// Schema with validation
// Defines the structure of "posts" collection document
// Permitted types: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map, Schema, UUID, BigInt
const postSchema = new Schema<PostWithId>({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: Schema.Types.Mixed,
    default: null
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
    default: Date.now
  },
  updatedAt: Date
})

// indicate how to do the transformation "toJSON"
postSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

/**
 * Middleware: update date every time an post is saved or updated

  postSchema.pre('save', function (next) {
    this.updatedAt = new Date()
    next()
  })
 */

// Will apply this schema to each document in collection
// Will provide CRUD operations
// Note: mongoose automatically will change this name to "posts" (collection name)
const Post = model<PostWithId>('Post', postSchema)
// Moongose model has several methods: findOne, remove, findOneAndUpdate, findOneAndRemove, ...

export default Post
