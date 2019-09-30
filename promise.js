function getsum(n1,n2){
    var a=function(){
        return n1<0 || n2<0;
    }
    var promise=new Promise(function(resolve,reject){
      if(a()){
        reject(Error("negatives are not supported"));
      }else{
        resolve(n1+n2);
      }
    });
    return promise;
}
getsum(5,6).then(function (result){
    console.log(result);
    return getsum(10,20);
},function(error){
    console.log(error);
}).then(function(result){
    console.log(result);
    return getsum(30,40);
},function(error){
    console.log(error);
}).then(function(result){
    console.log(result);
},function(error){
    console.log(error);
});
console.log("end of script");