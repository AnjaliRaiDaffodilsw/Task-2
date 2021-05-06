//Promise - eg 1

// var data = new Promise(function (resolve, reject) {
//     console.log("State is Pending")
//     setTimeout(() => {
//         resolve("Resolved state");
//         reject("Rejected state");
//     }, 2000)

// })
// data.then((val) => {
//     console.log(val);
// }).catch ((error) => {
//     console.log(error);
// })


//Promise - eg 2
//executor function

// const pro1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let roll_no = [1, 2, 3, 4, 5];
//         resolve(roll_no);
//         reject('Error while communicating');
//     }, 2000);
// });

// const getbioData = (rollno) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((rollno) => {
//             let biodata = {
//                 name: "Anjali",
//                 age: 23
//             }
//             resolve(`My name is ${biodata.name} , I am ${biodata.age} years old and my roll no is ${rollno}`);
//             reject(`Your details are not correct`);
//         }, 2000, rollno);
//     })
// }

// //promise consumption
// pro1.then((rollno) => {
//     console.log(rollno);
//     return getbioData(rollno[3]);
// }).then((details) => {
//     console.log(details);
// }).catch((error) => {
//     console.log(error);
// })

//Promise - eg 3


// const myPromise = new Promise((myResolve, myReject) => {
//     let x = 0;


//     if (x == 0) {
//       myResolve("Great 🙂");  
//     } else {
//       myReject("Sorry It is an error 😥");    
//     }
//   });

//   myPromise.then((status) => {
//       console.log(status);
//   }).catch ((error) => {
//       console.log(error)
//   })

//Promise - eg 4 


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("done!🙂");
//         reject("Error");
//     }, 2000);
// });


// promise.then((result) => {
//     console.table(result);
// }).catch((error) => {
//     console.table(error);
// })

//Promise - eg 5 


const promise = new Promise((resolve, reject) => {
    const x = "all the best";
    const y = "all the best";
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
    
  promise.
      then( () => {
          console.log('Success, You are a Genius🙋');  
      }).
      catch( () => {
          console.log('Some error has occured');
      });
  
