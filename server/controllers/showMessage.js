

module.exports = async (ctx, next) => {



  const { mysql: config } = require('../config');
  var DB = require('knex')({
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
  await DB.select().from('showExpress').then(res => {
    //取到的数据
    ctx.state.data = res;
  })



  // knex('question_sort').select('id').then(res => {
  //    console.log(res)
  //   ctx.state.data = res;
  // })

  // const { mysql } = require('../qcloud')
  // mysql('question_sort').select('id').then(res => {
  //   ctx.state.data = res;
  // })


}