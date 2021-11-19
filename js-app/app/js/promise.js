/* 
 * 1. A "Producing code" that does something and takes time, For instance some codes that
loads data over network. Thats a singer

 * 2. A "Consuming code" that wants the result of the producing code once it gets ready.
Many function may need that result. These are the fans.

* 3. SO, A promise is a special javascript object that links the 'producing code'
and 'consuming code' together

The producing code takes whatever time it needs to produce the promised result
and the promise make the result available to all the subscribed code when its 
ready
*/


/* 
  * Syntax for promise object
  
*/


let promise = new Promise(function(resolve, reject){
    // executor (the producing code) 'Singer'
});


/* 
  The function passed to a new Promise is called the executor. When new Promise
  is created, the executor runs automatically. it contains the producing code
  whih should produce the result.
*/

/* 
 * When executor obtains the result, be it soon or later, it should call
  one of the call backs

  1. Resolve(value): if the job is finished successfully, with result value
  2. Reject(error): if an error has occured, error is the error object
*/

/* 
 * State: Initially when promise invoked its in 'pending', then changes to either
'fullfilled' when resove is called or 'rejected' when reject is called
 1. Pending
 2. Fulfilled
 3. Rejected


 * Result: initially 'undefined', the chnages to value when resolve(value) called or
 error when reject(error) is called
*/

// A promise is a good way to handle asynchronous calls or operations.It is used 
// to find out if the asynchronous operations are successfully completed or not.

// Create a promise

let prmise = new Promise(function(resolve , reject){

});

// The prpmise constructor takes a function as an arguement. the function also 
// accepts two functions 
// 1. resolve()
// 2. reject()


// const count = true;

function countValue(count){
    return new Promise((resolve, reject)=>{
        if(count) {
            resolve("There is a count value");
        } else {
            reject("There is no count value");
        }
    });
}
// console.log('countValue', countValue(true));
// console.log('count', count);

// JavaScript promise channing

/* 
 * Promise are useful when you have to handle more than one synchronous request,
   one after another, for that we do promise chaining

   you can perform operations after a promise is resolved using method then()
*/

// Javascript then() method

/* 
   Then method is used to callback when the promise is succesfullt fulfilled or resolves

   the syntax of then is:

   promiseObj.then(onfulfilled, onRejected);
*/


countValue(true).then(res=>{
    console.log('res', res);
});


/* 
 * catch() method: is used with the callback when the promise rejected or if any error
 occures
*/

countValue(false).then(res=>{
    console.log('res', res);
}).catch(err=>{
    console.error('err', err);
});

/* 
 * finally(): you can use the finally method with 'promise. The finally() method gets 
executed when the promise is either resolved or rejected
*/

let countValue_1 = new Promise((resolve, reject )=>{
    // Could be resolved or rejected
    resolve('Promise resolved');
});

countValue_1.finally(()=>{
   console.log('Code is executed');
});

// Promise methods

/* 
  all(iterables)
  allSettled(iterables)
  any(iterables)
  race(iterables)
*/

// API calls with promise and XMLHttpRequest

function loadMessage(url){
    return new Promise((resolve, reject)=>{
        const http = new XMLHttpRequest();

        http.onreadystatechange = function(e){
            if(this.readyState == 4) {
                if(this.status == 200){
                    resolve(this.response);
                } else {
                    reject(this.status);
                }
            }
        }
        http.open('GET', url, true);
        http.send();
    });
}

function getMessage(){
    let url = 'http://jsonblob.com/910901864581840896'
    let btn = document.getElementById('btnGet');
    let msg = document.getElementById('message');

    loadMessage(url).then(res=>{
        console.log('res', res);
    }).catch(err=>{
        console.error('err', err);
    });
}

getMessage();