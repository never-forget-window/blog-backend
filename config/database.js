module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '106.75.179.193'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'blog'),
        username: env('DATABASE_USERNAME', 'blog'),
        password: env('DATABASE_PASSWORD', 'zxcv123456'),
      },
      options: {},
    },
  },
});