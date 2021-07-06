import mysql from 'serverless-mysql'

const db = mysql({
    config: {
        host: 'thefallofclubs.com',
        port: '3306',
        database: 'ane_collection',
        user: 'team',
        password: 'TeamworkProject12!'
    }
})

export default async function executeQuery({ query, values }) {
    try {
        const results = await db.query(query, values)
        await db.end()

        return results
    } catch (error) {
        return { error }
    }
}