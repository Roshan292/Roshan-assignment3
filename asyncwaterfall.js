var async=require('async');
async.waterfall([
    function(callback) {
      callback(null, 'Task 1', 'Task 2');
    },
    function(arg1, arg2, callback) {
      let arg3 = arg1 + ' and ' + arg2;
      callback(null, arg3);
    },
    function(arg1, callback) {
      arg1 += ' completed';
      callback(null, arg1);
    }
  ], function(err, result) {
    console.log(result);
  });