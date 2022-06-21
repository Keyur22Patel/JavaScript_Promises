// console.log("Hello World!\n==========\n");



// Exercise 1 Section


function watchTurorialCallback(callback, errorCallback) {
    let userLeft = false;
  
    if (userLeft) {
      errorCallback("User left.");
    } else {
      callback("Thumbs up and Subscribe!");
    }
  }
  
  watchTurorialCallback(
    (message) => {
      console.log(message);
    },
    (error) => {
      console.log(error.name + " " + error.message);
    }
  );

  let promise = new Promise ((resolve, reject) => {
    let userLeft = API.getUser();
    if (userLeft) {
        reject("User left.");
      } else {
        resolve("Thumbs up and Subscribe!");
      }
    });

    promise.then((result) => {
        console.log(result.msg);
    })
    
    .catch((err) => {
        console.log(err);
    });

    


//console.log("EXERCISE 1:\n==========\n");
