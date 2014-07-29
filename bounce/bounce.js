var windowbrowser;
var ballcount=0;

var ballbtn;
windowbrowser = document.getElementById("windowcanvas");
ballbtn = document.getElementById("addballbtn");


function moveball(objectBall){
    this.objectball=objectBall;
    this.xCoord=0;
    this.yCoord=0;
    this.dx=Math.floor((Math.random()*100));
    this.dy=20;
    this.move = function()
    {
        this.xCoord = parseInt(this.objectball.style.left);
        this.yCoord = parseInt(this.objectball.style.top);
        this.xCoord += this.dx;
        this.yCoord += this.dy;
       if (this.xCoord<30 || this.xCoord>window.innerWidth-30)
        {
            this.dx=-this.dx;
            this.objectball.style.width="35px";
             this.objectball.style.height="35px";
        }
        if(this.yCoord<30 || this.yCoord>window.innerHeight-30)
        {
            this.dy=-this.dy;
        }
        this.objectball.style.top = this.yCoord+"px";
        this.objectball.style.left= this.xCoord+"px";
    } 
}

function generateBall(){
    var nball = document.createElement("div");
    nball.id = ballcount;
    nball.style.background="#f00";
    nball.style.width="30px";
    nball.style.height="30px";
    nball.style.position = "absolute";
    nball.style.borderRadius="50%";
    nball.style.backgroundColor='#'+ Math.floor(Math.random()*16777215).toString(16); 
    nball.style.top=Math.floor((Math.random() * window.innerHeight) + 1)+"px";
    nball.style.left=Math.floor((Math.random() * window.innerWidth) + 1)+"px";
    windowbrowser.appendChild(nball);
    return nball;
 }


 ballbtn.onclick=function()
 {
    var divball = new generateBall();
    var moveballobj = new moveball(divball);
    window.setInterval(function(){moveballobj.move()},100);
}

