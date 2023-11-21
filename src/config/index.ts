import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
    path: path.join(process.cwd(), '.env')
})

export default {
    port: process.env.PORT,
    database_url_local_db: process.env.DATABASE_URL_LOCAL_DB,
    database_url_db: process.env.DATABASE_URL_DB,
    node_env: process.env.NODE_ENV
}