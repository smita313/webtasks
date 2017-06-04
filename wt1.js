module.exports = function(ctx, cb) {
  console.log('webhook invoked');
  cb(null, { hello: ctx.data.name || 'Anonymous' });
};