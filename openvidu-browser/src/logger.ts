let enabled = true;
const logger = {
  log: (...args) => {
    if(enabled) {
      console.log(...args)
    }
  },
  info: (...args) => {
    if(enabled) {
      console.info(...args)
    }
  },
  warn: (...args) => {
    if(enabled) {
      console.warn(...args)
    }
  },
  debug: (...args) => {
    if(enabled) {
      console.debug(...args)
    }
  },
  error: (...args) => {
    console.error(...args)
  },
  enableProdMode: () => {
    enabled = false;
  }
}

export default logger;
