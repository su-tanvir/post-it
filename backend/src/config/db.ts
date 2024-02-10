import { environment } from './env'

// URI: cluster name, database info (username, password, database name)
const mongoDbUri = environment.MONGODB_CLUSTER_URI

const connectionString = `${mongoDbUri}?retryWrites=true&w=majority`

export default connectionString
