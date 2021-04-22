//on onload, alert pops up saying that
// window.onload = alert("Make the right choice and choose Nixon");

var nixonBtn = document.getElementById("nixonBtn");
var mcgovernBtn = document.getElementById("mcgovernBtn");
var mcgovernImg = document.getElementById("mcgovernImg");
var mcgovernCard = document.getElementById("mcgovernCard");

// pops up alert that says voted for nixon
let voteNixon = ()=> {
    this.alert("You have voted for Nixon!");
}
//onlick event that gives alert and changes the picture of mcgovern and asks a question that either votes for nixon or activates the hide and replace mcgovern 
//functions and starts the p1 function
let mcgovernClown = () => {
    let question = confirm("Did you mean to vote for Nixon?");
    if(question == true){
        alert("You have voted for Nixon!");
    } else{
        mcgovernImg.src = "Images/ronald.jpg";
        mcgovernBtn.removeEventListener('click', mcgovernClown);
        mcgovernBtn.addEventListener('click', p1);
        mcgovernBtn.addEventListener('mouseenter', hideMcgovern);
    }
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
let maybeNixon = ()=> {
    alert("You better vote Nixon!");
}
//makes cursor into a clown when hovering mcgovern card
let clownCursor = () => {
    mcgovernCard.style.cursor = "url(Images/clown-cursor.png) 0 0, pointer";
}
//creates a trail of troll faces that follow the user's mouse
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
            spamKanye();
        }
    });
}
//spams a column of kanyeis jesus pictures
function spamKanye() {
    for(var i=0; i < 25; i++){
        // creates the video
        var img = document.createElement('img');
        img.src = "Images/kanye.jpg";
        document.getElementById("kanyeTrap").appendChild(img);
        // creates line breaks
        var br = document.createElement('br');
        document.getElementById("kanyeTrap").appendChild(br);
    }
    var confirmBtn = document.createElement('button');
    confirmBtn.innerHTML = "Vote Mcgovern";
    document.getElementById("kanyeTrap").appendChild(confirmBtn);
    confirmBtn.addEventListener('click', ()=> {
        alert("You voted for Mcgovern");
    })
    
}
// starts the follow function and removes the p1 function itself
let p1 = () => {
    window.addEventListener('mousemove', follow);
    mcgovernBtn.removeEventListener('click', p1);
}

// when nixon button clicked it votes for Nixon
nixonBtn.addEventListener('click', voteNixon);
//context menu right click to pop up alert
window.addEventListener('contextmenu', maybeNixon);
//runs clown cursor when hovering mcgovern card
mcgovernCard.addEventListener('mousemove', clownCursor);
//turns mcgovern pic into clown on click
mcgovernBtn.addEventListener('click', mcgovernClown);


//changes the cursor of the mouse when mouse hovers over mcgovern btn
// mcgovernBtn.addEventListener('mouseover', mouse);

// let mouse = () => {
//     mcgovernBtn.style.cursor = `url('Images/clown-cursor.png') 4 12, pointer;`;
// }

