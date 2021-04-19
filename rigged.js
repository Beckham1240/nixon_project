//on onload, alert pops up saying that
// window.onload = alert("Make the right choice and choose Nixon");

var nixonBtn = document.getElementById("nixonBtn");
var mcgovernBtn = document.getElementById("mcgovernBtn");
var mcgovernImg = document.getElementById("mcgovernImg");

//displays alert when voting for nixon
nixonBtn.onclick = ()=> {
    this.alert("You have voted for Nixon!");
}

//onlick event that gives alert and changes the picture of mcgovern
let mcgovernClown = () => {
    alert("Did you mean to vote for Nixon?");
    mcgovernImg.src = "Images/ronald.jpg";
}
mcgovernBtn.addEventListener('click', mcgovernClown);

let hideMcgovern = 0;
mcgovernBtn.addEventListener('click', ()=>{
    mcgovernBtn.removeEventListener('click',)
})


//changes the cursor of the mouse when mouse hovers over mcgovern btn
// mcgovernBtn.addEventListener('mouseover', mouse);

// let mouse = () => {
//     mcgovernBtn.style.cursor = `url('Images/clown-cursor.png') 4 12, pointer;`;
// }

