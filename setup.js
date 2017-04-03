const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost/glam_setup');

const Foo = conn.define('foo');

conn.sync({ force: true })
  .then(()=> console.log('success'));
