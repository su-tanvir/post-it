import mongoose from 'mongoose'
import connectionString from '../config/db'

// Atlas cloud > Project > Mongodb cluster > Database > Collections

// Open a connection once with DB and reuse it across app; avoided pool connection
const start = () => {
  mongoose
    .connect(connectionString)
    .then(() => { console.log('Database connected') })
    .catch((error) => {
      console.log('Database not connected')
      throw error
    })
}

process.on('uncaughtException', (error) => {
  void mongoose.disconnect()
  throw error
})

export { start }
