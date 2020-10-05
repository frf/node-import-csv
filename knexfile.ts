import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        // filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
        host : '127.0.0.1',
        user: 'root',
        password: 'cs123',
        database: 'nut'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true
};