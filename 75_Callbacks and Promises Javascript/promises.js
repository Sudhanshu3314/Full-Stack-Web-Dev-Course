console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random() * 10;
    if (a < 5) {
        reject("No random number was not supporting you ")
    }
    else {
        setTimeout(() => {
            console.log('Yes I am Done');
            resolve("Sudhanshu now your work done")
        }, 3000);
    }
})

prom1.then((a) => { // This is used to show the resolve response to the browser
    console.log(a);
}).catch((err)=>{  // This catch function is used for handlling the error for reject call
    console.log(err);
})

