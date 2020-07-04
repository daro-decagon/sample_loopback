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


  app.dataSources.mysqlDs.automigrate('Film', function(err) {
    if (err) throw err;

    app.models.Film.create([{
      title: 'A New Hope',
      opening_crawl: 'It is a period of civil war',
      director: 'George Lucas',
      producer: 'Gary Kurtz'
    }, {
      title: 'The Empire Strikes Back',
      opening_crawl: 'It is a dark time for the rebellion',
      director: 'Irvin Kershner',
      producer: 'Rick McCallum'
    }], function(err, People) {
      if (err) throw err;

      console.log('Models created: \n', People);
    });
  });
};
