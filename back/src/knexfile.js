require('dotenv').config({ path: __dirname + '/../.env' })
// atribuicao das credenciais de banco utilizando variaveis de ambiente para o ambiente de desenvolvimento
module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: process.env.MYSQL_HOST,
            database: process.env.MYSQL_DB,
            user:     process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD
        },
        migrations: {
            directory: __dirname +  '/database/migrations'
        }
        // useNullAsDefault: true
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user:     'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user:     'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
