import i18next from 'i18next-client'
let resBundle
// This prevents i18next from breaking testing
try {
  resBundle = require('i18next-resource-store-loader!./index.js')
} catch (e) {
  resBundle = { en: { translation: { } } }
}

i18next.init({ resStore: resBundle
             , escapeInterpolation: true
             })

export const t = i18next.t
