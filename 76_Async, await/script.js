
// async function getData() {
//     // Simulate getting data from a server
//     let prom = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(549)
//         }, 3500);
//     })
//     return prom;
// }

// Promise settle means resolve or reject
// resolve means promise has been settled successfully
// reject means promise has NOT been settled successfully

async function getData() {
    // Simulate getting data from a server
    // let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(text => console.log(text))
    // console.log(x);

    let data = await(await fetch('https://jsonplaceholder.typicode.com/posts')).text();
    console.log(data);
    
}

async function main() {
    console.log('Loading modules');
    console.log('Do something else');
    console.log('Load data');
    console.log('Wait for four second');
    // We need some a waiting time until data comes for processing that data
    let data = await getData();

    console.log(data);
    console.log("Process data")
    console.log('Task 2');
}

main()

// data.then((v) => {
//     console.log(data);
//     console.log("Process data")
//     console.log('Task 2');
// })