

module.exports = async (ctx, next) => {

  ctx.body = ctx.request.body.email;

  const { mysql: config } = require('../config');
  var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.pass,
      database: config.db,
      charset: config.char,
      multipleStatements: true
    }
  });
  await knex('expressBoard').insert({ 
    name: ctx.request.body.user, 
    email: ctx.request.body.email,
    phone: ctx.request.body.phone, 
    content: ctx.request.body.content, 
    express_date: ctx.request.body.time
    })
    .returning('*')
    .then(res => {
         console.log(res)
  })
  // knex.insert({
        // user: ctx.request.body.user,
        // email: ctx.request.body.email,
        // phone: ctx.request.body.phone,
        // content: ctx.request.body.content
  // }).into('online');
  
}