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

