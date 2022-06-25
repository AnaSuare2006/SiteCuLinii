import Two from 'https://cdn.skypack.dev/two.js@latest';

let dim = [document.body.clientHeight , document.body.clientWidth];  

let helper = {
    help(){
        console.log("hello");
    },
    initMainRect(){
        //var rect = two.makeRectangle(0, 0, dim[0], dim[1]);
  
        //rect.fill = 'rgb(0, 200, 255)';
        //rect.opacity = 0.75;
        //rect.noStroke();
    }
}

export default helper;