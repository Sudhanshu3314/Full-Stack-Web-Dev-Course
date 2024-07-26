function CreateCard(title, channelName, views, monthOld , thumbnail) {
    //function statement

    let viewStr ;
    if( views < 1000 ){
        viewStr = views + " views "
    }
    else if( views < 1000000 ){
        viewStr = views/1000 + "K views"
    }
    else{
        viewStr = views/1000000 + "M views"
    }

    let insertingCard = `<div class="card">
        <div class="imgCard">
            <img src="${thumbnail}" alt="">
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${channelName} • ${viewStr} • ${monthOld} months ago</p>
        </div>`

    document.querySelector(".container").innerHTML += insertingCard;
}

console.log(`CreateCard("Intrduction to Programming ", "Code With Error", 720000, 7 ,"https://i.ytimg.com/vi/7msiXGBIblE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA74rNTGgw2JrIxkacjwHCBzyTtpw" )`);
