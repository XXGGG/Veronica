const isPro = Object.is(process.env.NODE_ENV, 'production')
 
console.log('是否【线上环境】：' + isPro);
 
module.exports = {
  baseUrl: isPro ? '' : 'api/'
}