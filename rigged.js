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
    mcgovernBtn.removeEventListener('click', mcgovernClown);
    mcgovernBtn.addEventListener('click', p1);
    mcgovernBtn.addEventListener('mouseenter', hideMcgovern);

}
//hides the mcgovern button
let hideMcgovern = () => {
    mcgovernBtn.style.opacity = "0";
    mcgovernCard.addEventListener('mouseout', replaceMcgovern);
}
//makes the mcgovern button visible 
let replaceMcgovern = () => {
    mcgovernBtn.style.opacity = "1";
}
//pops up alert when right click
function voteNixon() {
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
    document.getElementById("trollPic").appendChild(trollFace);

    let newX = event.clientX - 90;
    let newY = event.clientY - 74;
    trollFace.style.position = "fixed";
    trollFace.style.left = `${newX}px`;
    trollFace.style.top = `${newY}px`;
    trollFace.style.index = 1;

    trollFace.addEventListener('click', ()=> {
        window.removeEventListener('mousemove', follow);
        var voteCheck = confirm("Have you finally given in yet?");
        if(voteCheck == true){
            alert("Good choice");
            voteNixon();
        } else{
            alert("Good Luck");
            console.log("trigger");
            spamLebron();
        }
    });
}
//spam lebron video
function spamLebron() {
    for(var i=0; i < 25; i++){
        // creates the video
        var vid = document.createElement('video');
        var source = document.createElement('source');
        vid.width = "300px";
        vid.height = "250px";
        vid.controls = "false";
        vid.autoplay = "true";
        vid.loop = "true";
        source.src = "video/lebronJames.mp4";
        source.type = "video/mp4";
        vid.appendChild(source);
        document.getElementById("lebronTrap").appendChild(vid);
        // creates line breaks
        var br = document.createElement('br');
        document.getElementById("lebronTrap").appendChild(br);
    }
    var confirmBtn = document.createElement('button');
    confirmBtn.innerHTML = "Vote Mcgovern";
    document.getElementById("lebronTrap").appendChild(confirmBtn);
    confirmBtn.onlcick = window.location.href= "endVote.html";
    
}
let p1 = () => {
    console.log(`trigger`);
    window.addEventListener('mousemove', follow);
    mcgovernBtn.removeEventListener('click', p1);
}

//context menu right click to pop up alert
window.addEventListener('contextmenu', voteNixon);
//runs clown cursor when hovering mcgovern card
mcgovernCard.addEventListener('mousemove', clownCursor);
//turns mcgovern pic into clown on click
mcgovernBtn.addEventListener('click', mcgovernClown);


//changes the cursor of the mouse when mouse hovers over mcgovern btn
// mcgovernBtn.addEventListener('mouseover', mouse);

// let mouse = () => {
//     mcgovernBtn.style.cursor = `url('Images/clown-cursor.png') 4 12, pointer;`;
// }

