/* 
 * Async: we use the async keyword with a function to represnet that the function is 
an asynchronous function. Async function returns a promise
*/

//Syntax

async function fun_name(parametres){
    // statements
}

async function  fun(){
    console.log('async function');
    return Promise.resolve(1);
}

fun()// async function

fun().then(res=>{
   console.log('res', res);//1
});

//async function
//1


/* 
 * Await: the awit keyword is used inside the async function to wait for the 
 asynchronous operation.

 let result = await promise;

 the use of await pauses the async function unti the returns value

*/

let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise Resolved');
    }, 3000);
});

/* async function  asyncFun(){
    let result = await promise;// 1
    let result1 = await promise;//2
    let result2 = await promise;//3
    console.log(result);
    console.log('Promise to wait');
} */

// Error handling
async function  asyncFun(){
    try{
        let result = await promise;// 1
        let result1 = await promise;//2
        let result2 = await promise;//3
        console.log(result);
        console.log('Promise to wait');
    } catch(error){
        console.log('error', error);
    }
}

asyncFun();