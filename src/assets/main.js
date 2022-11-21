//for sidebar controls
function openNav(navId) {
  if (document.getElementById("mySidenav").style.width == "250px") {
    document.getElementById("mySidenav").style.width = "70px";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
  }
  //sidebar focus
  const url = document.URL;
  console.log(url);
  if (url === "http://localhost:4200/SearchPage") {
    document.getElementById("search").style.borderLeft = "red 4px solid";
  }
  else if (url != "http://localhost:4200/SearchPage"){
    document.getElementById("search").style.borderLeft = "none";
  }
  else if (url === "http://localhost:4200") {
    document.getElementsByClassName("side-bar-nav") = "hidden";
  }  
  else if (url != "http://localhost:4200/") {
    document.getElementById("home").style.borderLeft = "none";
  } 

  // document.activeElement('mousedown', ()=>{
  //   document.getElementById(navId).style.borderLeft = "red 4px solid";
  // })

  document.getElementById("mySidenav").style.backgroundColor =
    "rgba(23, 23, 23, 0.848)";
  // document.getElementById(navId).style.borderLeft = "red 4px solid";
}

//for banner content change
function ImageUpdate(event) {

  document.querySelector("#MainImg").style.backgroundImage = `linear-gradient(to right,rgba(0, 0, 0, 1) 26%,rgba(0, 0, 0, 0)
  ),url(${event.children[0].src})`;
  document.querySelector("#title1").innerHTML = event.children[1].innerHTML;
  document.querySelector("#para").innerHTML = event.children[2].innerHTML;
  document.querySelector("#genre").innerHTML = event.children[3].innerHTML;
  document.querySelector("#moviesOrSeries").innerHTML = event.children[3].innerHTML;
}

//for search button inputs
function buttonId(event) {
  let output = document.querySelector("#searchBar1");
  let form = document.querySelector("#form");
  if (event === "backspace") {
    output.value = output.value.slice(0, -1);
  } else if (event === "space") {
    output.value += " ";
  } else {
    
    output.value += event;
 
  
  }
}

function Keydown() {

  document.addEventListener("keypress", (e) => {
    console.log(e.key);
    const string = "abcdefghijklmnopqrstuvwxyz1234567890";
    for (let i = 0; i <= string.length; i++) {
      
      if (string[i] === e.key) {
        document.getElementById(`${e.key}`).style.backgroundColor = "white";
        document.getElementById(`${e.key}`).style.color = "black";
      }
      
      else if(e.key==="Backspace"){
        console.log("reached")
        document.getElementById(`backspace`).style.backgroundColor = "white";
        document.getElementById(`backspace`).style.color = "black";
      }
      else if(e.key===" "){
       
        document.getElementById(`space`).style.backgroundColor = "white";
        document.getElementById(`space`).style.color = "black";
      }
    }
  });

  document.addEventListener("keyup", (e) => {
    console.log(e.key);
    const string = "abcdefghijklmnopqrstuvwxyz1234567890";
    for (let i = 0; i <= string.length; i++) {
      if (string[i] === e.key) {
        document.getElementById(`${e.key}`).style.backgroundColor = "#212529";
        document.getElementById(`${e.key}`).style.color = "white";
      }
      else if(e.key==="Backspace"){
        document.getElementById(`backspace`).style.backgroundColor = "#212529";
        document.getElementById(`backspace`).style.color = "white";
      }
      else if(e.key===" "){
        document.getElementById(`space`).style.backgroundColor = "#212529";
        document.getElementById(`space`).style.color = "white";
      }
    }
  });
  
}
