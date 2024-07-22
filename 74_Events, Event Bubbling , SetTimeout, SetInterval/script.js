let btn = document.querySelector("#btn")

// UI events
// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events

// Mouse Events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// Keyboard Events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#keyboard_events



btn.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "<b>Yayy !! You were clicked</b> Enjoy your clicked "
})

// document.addEventListener("contextmenu" , () => {
//     alert("You did right click on mouse which is clicked on document page")
// })

document.addEventListener("keydown", (event) => {
    console.log(event);
    console.log(event.key , ":" , event.keyCode);
})
