
function setup() {
  createCanvas(400,400);
  btn_red = createButton ("RED");
  btn_red.position (100,50);
  btn_red.mousePressed=()=>{
    red_bg ()
  }

  btn_green= createButton ("GREEN");
  btn_green.position (250,50);
  btn_green.mousePressed=()=>{
    green_bg ()
  }


}

function draw() 
{
  btn_red = createButton ("RED");
  btn_red.position (100,50);
  btn_red.mousePressed=()=>{
    red_bg ()
  }

  btn_green= createButton ("GREEN");
  btn_green.position (250,50);
  btn_green.mousePressed=()=>{
    green_bg ()
  }
  

}


function red_bg (){
 background ("red")

}

function green_bg () {
  background ("green")
}

