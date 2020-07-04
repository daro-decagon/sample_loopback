module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('People', function(err) {
    if (err) throw err;


  })
};
