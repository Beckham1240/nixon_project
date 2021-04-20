//on onload, alert pops up saying that
// window.onload = alert("Make the right choice and choose Nixon");

var nixonBtn = document.getElementById("nixonBtn");
var mcgovernBtn = document.getElementById("mcgovernBtn");
var mcgovernImg = document.getElementById("mcgovernImg");
var mcgovernCard = document.getElementById("mcgovernCard");
//spits out a random integer using the max as the parameter
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//displays alert when voting for nixon
nixonBtn.onclick = ()=> {
    this.alert("You have voted for Nixon!");
}
//onlick event that gives alert and changes the picture of mcgovern
let mcgovernClown = () => {
    alert("Did you mean to vote for Nixon?");
    mcgovernImg.src = "Images/ronald.jpg";
}
//hides the mcgovern button
let hideMcgovern = () => {
    mcgovernBtn.style.visibility = "hidden";
}
//makes the mcgovern button visible 
let replaceMcgovern = () => {
    mcgovernBtn.style.visibility = "visible";
}
//pops up alert when right click
let voteNixon = () => {
    alert("You better vote Nixon!");
}
//makes cursor into a clown when hovering mcgovern card
let clownCursor = () => {
    mcgovernCard.style.cursor = "url(Images/clown-cursor.png) 0 0, pointer";
}
//
let follow = (event) => {
    let trollFace = document.createElement("img");
    trollFace.src = "Images/trollface.png";
    let newX = 0;
    let newY = 0;

    newX = event.clientX - 90;
    newY = event.clientY - 74;
    trollFace.style.position = "fixed";
    trollFace.style.left = `${newX}px`;
    trollFace.style.top = `${newY}px`;
    trollFace.style.index = 1;

    trollFace.addEventListener('click', spamLebron);
}
//spam lebron video
let spamLebron = ()=> {}

//context menu right click to pop up alert
window.addEventListener('contextmenu', voteNixon);
//runs clown cursor when hovering mcgovern card
mcgovernCard.addEventListener('mousemove', clownCursor);
//turns mcgovern pic into clown on click
mcgovernBtn.addEventListener('click', mcgovernClown);

mcgovernBtn.addEventListener('click', ()=> {
    mcgovernBtn.removeEventListener('click', mcgovernClown);
    mcgovernBtn.addEventListener('mouseover', hideMcgovern);
    mcgovernBtn.addEventListener('mouseleave', replaceMcgovern);
});

mcgovernBtn.addEventListener('click', ()=> {
    mcgovernBtn.removeEventListener('mouseover', hideMcgovern);
    mcgovernBtn.removeEventListener('mouseleave', replaceMcgovern);
    window.addEventListener('mousemove', follow);
})


//changes the cursor of the mouse when mouse hovers over mcgovern btn
// mcgovernBtn.addEventListener('mouseover', mouse);

// let mouse = () => {
//     mcgovernBtn.style.cursor = `url('Images/clown-cursor.png') 4 12, pointer;`;
// }

