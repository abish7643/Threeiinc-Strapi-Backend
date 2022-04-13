// const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env(DATABASE_HOST, "127.0.0.1"),
        port: env(DATABASE_PORT, "27017"),
        database: env(DATABASE_NAME, "strapi"),
        username: env(DATABASE_USERNAME, ""),
        password: env(DATABASE_PASSWORD, ""),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
