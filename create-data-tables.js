module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('People', function(err) {
    if (err) throw err;
    app.models.People.create([{
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      gender: 'Male'
    }, {
      name: 'C-3PO',
      height: 167,
      mass: 75,
      gender: 'Undetermined'
    }], function(err, People) {
      if (err) throw err;

      console.log('Models created: \n', People);
    });
  })
};
