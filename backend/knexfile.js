module.exports = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'manager',
        database: 'unesc_estudos'
    },
    migrations: {
        directory: './src/database/migrations',
    },
    useNullAsDefault: true
}
