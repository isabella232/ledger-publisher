const SLDs = [
  'cloud.githubusercontent',
  'githubusercontent',
  'ssl-images-amazon',
  'twimg',
  'ytimg'
]

module.exports = {
  properties: { SLD: SLDs },

  build: function (cb) {
    const transformedList = SLDs.map((item) => { return `'${item}'` }).join(', ')
    const rule = {
      condition: `(new Set([ ${transformedList} ])).has(SLD.split('.')[0])`,
      consequent: null,
      description: 'exclude image stores'
    }
    cb(null, rule)
  }
}
