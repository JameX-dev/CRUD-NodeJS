module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },

    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!', 
    },

    mysql :{
        host: process.env.MYSQL_HOST || 'bnjbncavldxsyirwxdoo-mysql.services.clever-cloud.com',
        user: process.env.MYSQL_USER || 'usq3zxcwn5lyrh6x',
        password: process.env.MYSQL_PASS || 'SVcWZSukBg57IeVtniYv',
        database: process.env.MYSQL_DB || 'bnjbncavldxsyirwxdoo',

    },

    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT ||3001,
    }
}