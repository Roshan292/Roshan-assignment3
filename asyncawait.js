function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
       resolve('resolved');
    }, 100);
  });
}

async function asyncCall() {
   
  var result = await resolveAfter2Seconds();
  console.log(result);
  console.log('calling');
}


asyncCall();