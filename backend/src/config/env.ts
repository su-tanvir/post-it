import { load } from 'ts-dotenv'

export const environment = load({
  HTTP_SERVER_PORT: Number,
  APP_ENV: String,
  MONGODB_CLUSTER_URI: String
}) // path: .env by default

// type EnvironmentKeyType = keyof typeof environment
// type EnvironmentValueType = typeof environment[keyof typeof environment]
// export const getEnvironmentValue = (key: EnvironmentKeyType): EnvironmentValueType => { return environment[key] }
