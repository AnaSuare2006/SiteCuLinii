import Two from 'https://cdn.skypack.dev/two.js@latest';
import helper from "./code.js"
console.log("UWU")

let elems = document.querySelectorAll("#btn");

var two = new Two({
  height:"100vh",
  width:"80%"
}).appendTo(document.getElementById("header"));

let arr = [null, null, null, null, null];


let elemx, ix, ik, linex;

for(const [i,elem] of elems.entries()){
  elem.line = null;
  let k = 0;

  f(200,220,30,40);

  elem.addEventListener("click" , (e) => {
    k++;
    ik = k; elemx = elem; ix = i;
    document.getElementById("free").addEventListener("click", remove);
    elem.line = linex;
    console.log(linex);
    two.update();
  })
}

function f(x,y,z,w){
  var line=two.makeLine(x,y,z,w);
  line.linewidth = 10; line.fill = "#881111";

  two.update();
}


function remove(e){
  ik++;
  let {clientX , clientY} = window.event;
  //console.log(e.clientX ,e.clientY);

  if(arr[ix] == null && ik != 2){
    //draw line
    var line=two.makeLine(clientX,clientY,e.clientX,e.clientY);
    line.linewidth = 10; line.fill = "#881111";
    elemx.line = line;
    linex = line;
    arr[ix] = line;
    two.update();

  }else{
    two.remove(elemx.line); two.update();
    arr[ix]=null;   
  }

  document.getElementById("free").removeEventListener("click", remove);
}


  


    if(elem.used == 0){
      document.body.addEventListener("click", () => {
        let {clientX , clientY} = window.event;

          console.log(elem.used);
          var line=two.makeLine(clientX,clientY,e.clientX,e.clientY);

          elem.line = line;
          line.linewidth = 10; line.fill = "#881111";


        two.update();

        if(elem.used > 1){
          two.remove(elem.line); two.update();
        }else elem.used++;

        })
  
    }else{
      two.remove(elem.line); two.update();
      elem.used = 0;
    }



    let clientX = window.event.clientX , clinetY = window.event.clientY;
      else{
        two.remove(elem.line); two.update();
        arr[i]=null;   
      }




      if(arr[i]==null)
        {
        var line=two.makeLine(clientX,clientY,e.clientX,e.clientY);

        elem.line = line;
        line.linewidth = 10; line.fill = "#881111";
        arr[i]=line;

        two.update();
      }
        
        else{
          two.remove(elem.line); two.update();
          arr[i]=null;   
        }
  