var logger = {
  enabled: false,
  log: (...args) => {
    if(logger.enabled) {
      console.log(...args)
    }
  },
  info: (...args) => {
    if(logger.enabled) {
      console.info(...args)
    }
  },
  warn: (...args) => {
    if(logger.enabled) {
      console.warn(...args)
    }
  },
  debug: (...args) => {
    if(logger.enabled) {
      console.debug(...args)
    }
  },
  error: (...args) => {
    console.error(...args)
  },
  enableProdMode: () => {
    logger.enabled = false;
  }
}

module.exports = logger;
