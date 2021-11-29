module.exports = {
    development: {
      username: "root",
      password: '2550',
      database: "fake_instagram",
      host: "localhost",
      dialect: "mysql",
    },
    test: {
      username: "root",
      password: null,
      database: "database_test",
      host: "127.0.0.1",
      dialect: "mysql",
    },
    production: {
      username: "root",
      password: null,
      database: "database_production",
      host: "127.0.0.1",
      dialect: "mysql",
    },
  };