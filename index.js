// Without using promise implementing promise functionality

const studentPlaying = false;
const studentWatchingfunnyVideos = true;

const studentRoutineCallback =  function(Resolve,Reject) {
  
    if(studentPlaying) {
        Reject({
            name : 'Student not there ',
            message : 'Studentt is Playing 🏏 : 😞' 
        })
    } else if(studentWatchingfunnyVideos) {
        Reject({
            name: 'Student watching memes',
            message : 'Student is Seeing funny videos 🤣 : 😞'
        })
    } else {
        Resolve('Great Keep studying 🥰 ');
    }
}
const check = new studentRoutineCallback((message) =>{
    console.log('Success : '  + message + ' ' + '✅' );
} , (error) => {
  
    console.log(error.message + ' ' + '❌' );
});


//using Promise

// const studentRoutinePromise = new Promise(function(resolve,reject) {
//     if(studentPlaying) {
//         reject({
//             name : 'Student not there ',
//             message : 'Studentt is Playing 🏏 : 😞' 
//         })
//     } else if(studentWatchingfunnyVideos) {
//         reject({
//             name: 'Student watching memes',
//             message : 'Student is Seeing funny videos 🤣 : 😞'
//         })
//     } else {
//         resolve('Great Keep studying 🥰 ');
//     }
// })
// studentRoutinePromise.then((message) =>{
//     console.log('Success : '  + message + ' ' + '✅' );
// })
// .catch((error) => {
  
//     console.log(error.message + ' ' + '❌' );
// });


// function studentRoutineCallback(Resolve,Reject) {
//     setTimeout(function() {
//         if(studentPlaying) {
//             Reject({
//                 name : 'Student not there ',
//                 message : 'Studentt is Playing 🏏 : 😞' 
//             })
//         } else if(studentWatchingfunnyVideos) {
//             Reject({
//                 name: 'Student watching memes',
//                 message : 'Student is Seeing funny videos 🤣 : 😞'
//             })
//         } else {
//             Resolve('Great Keep studying 🥰 ');
//         }
//     },1000)
// }


function myPromise(action) {
    this.status = 'pending';
    this.value = undefined;

    this.thenCallbacks = [];
    this.onCatch = undefined;
    this.onFinally = undefined;

    this.then = function(callback) {
        this.thenCallbacks.push(callback);
        return this;
    };
    
}