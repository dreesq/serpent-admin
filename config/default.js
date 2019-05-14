module.exports = () => {
  return {
    debug: true,
    baseUrl: 'http://localhost:3000',
    server: {
      port: 3004,
      helmet: true,
      parsers: true,
      ssl: false,
      cors: {
        origin: '*',
        credentials: true
      },
      session: {
        resave: false,
        saveUninitialized: false,
        secret: 'mySecret'
      }
    },
    plugins: {
      validator: {
        gcaptcha: {
          secret: ''
        }
      },
      db: {
        server: 'mongodb://127.0.0.1/database'
      },
      auth: {
        confirm: true,
        reset: true,
        refresh: true,
        jwt: {
          secret: 'mySecret',
          duration: '1d'
        },
        strategies: [
          'local',
          'fb'
        ]
      },
      mail: {
        enabled: true,
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: 'mnxf2ak2zdjjc5kc@ethereal.email',
          pass: 'ueHQVpx7FxkbsSzp5n'
        }
      },
      logger: {
        path: 'storage/logs/logs.out',
        maxsize: 10000000,
        zippedArchive: true,
        maxFiles: 5
      },
      i18n: {
        defaultLocale: 'en',
        path: 'res/locales',
        locales: [
          'en',
          'de'
        ]
      }
    }
  };
};