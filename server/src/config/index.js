import 'dotenv/config'

export const config = {
  URI_DATABASE: process.env.URI_DATABASE,
  PORT: process.env.PORT ?? 3000
}
