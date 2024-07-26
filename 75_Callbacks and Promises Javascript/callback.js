// What is callback function ?

// A callback function is a function passed into another function as an argument, which is then invoked into inside the outer function to complete an action

const callback = (arg) => {
    console.log(arg)
}


const loadScript = (src, callback) => {
    let newScript = document.createElement("script")
    newScript.src = src;
    newScript.onload = callback("Sudhanshu barnwal")
    document.head.append(newScript)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
