module.exports = {
  getIssue: function(id, callback) {
    if (typeof id == 'integer') {
      throw new Error('Error: Argument #1 id must be integer')
    }
    this.request('GET', '/issues/' + id + '.json', {}, callback)
  },
  getIssues: function(params, callback) {
    this.request('GET', '/issues.json', params, callback)
  },
  postIssue: function(params, callback) {
    this.request('POST', '/issues.json', {issue: params}, callback)
  },
  updateIssue: function(id, params, callback) {
    this.request('PUT', '/issues/' + id + '.json', {issue: params}, callback)
  },
  deleteIssue: function(id, callback) {
    this.request('DELETE', '/issues/' + id + '.json', {}, callback)
  }
}
