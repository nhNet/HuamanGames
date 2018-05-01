/*Actual Code*/
uponload();//This hides everything when the page is loaded...
Password_Enter();
document.body.style.background="url(https://static.pexels.com/photos/210186/pexels-photo-210186.jpeg)";
var StatementChoice=-1;
var canvas = document.querySelector('canvas');
canvas.width = "0px";
canvas.height = "0px";
function UpdateOrError(){
    var locat = window.location;
    switch (locat){
        default:
            document.body.innerHTML="<img width='400px' style='margin-top:200px;' src='https://nhnet.github.io/img/NH NET AVATAR.png'><div style='margin-left:200px;'><p style='margin-left:300px; margin-top:-100px;'>HuamanGames is moving to NH Net Browser!</p></div><div><h1 style='font-size:100px;'>HuamanGames :)</h1></div>";
    }
    
}

function uponload(){
    document.querySelector(".enterCommand").style.display="none";
    document.querySelector(".instructions").style.display="none";
    document.querySelector("#pimng").style.display="none";
    document.querySelector(".HuamanGames").style.display="none";
    
    
}

function _helpcommands(){
    document.querySelector(".instructions").innerHTML="<p>_help:commands</p><p>_help:controls</p><p>_GiveMeTheCode</p><p><b><u>Sandbox Games:</u></b></p><p>_BB8</p><p>_BB9E</p><p><b><u>Games:</u></b></p><p>_Snake</p><p>_SquareJump:Easy</p><p>_BallMove</p><p>_2048:Starwars</p><p>_2048:MEME</p><p>_FlappyBird</p><p>_Coil</p><p>_Hextris</p><p>_Connect4</p><p>_Tetris</p><p>_Digger</p><p>_OhNo</p><p>_OhHi</p><p>_PacMan</p>";
    document.querySelector("body").style.background="#000000";
    setTimeout(resetCommand,500);
    setTimeout(TextBoxEditTrue, 500);
}
function _helpcontrols(){
    document.querySelector(".instructions").innerHTML="<p><u><b>Controls:</b></u></p><p>All Games (except Snake): IJKL: To Move</p> <p>Snake: Arrow Keys or WASD</p><p>SquareJump:A: Fireballs (When Fire Square Activated) and flatten</p><p>SquareJump: S: Jump</p><p>SquareJump: Q,Direction: Speed Run</p><p>SquareJump: T: Fly</p><p>SquareJump: T,G: Fall down</p><p>SquareJump: T,H,Direction: Teleport</p><p>SquareJump: M: Spray Fireballs (Fire Square Not Needed)</p>";
    document.querySelector("body").style.background="#000000";
    setTimeout(resetCommand,500);
    setTimeout(TextBoxEditTrue, 500);
}




/*Definitions*/
function myTimer() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('pimng').innerHTML =
    h + ":" + m + ":" + s;
    setTimeout(myTimer, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}


/*document.querySelector(".epilepsyz").addEventListener("onmousemove",colourChange,100000);
var whattime = 0;
function colourChange(){
    whattime++;
    switch(whattime){
        case 1:
            document.body.style.background="blue";
        break;
        case 2:
            document.body.style.background="green";
        break;
        case 3:
            document.body.style.background="red";
        break;
        case 4:
            document.body.style.background="yellow";
        break;
        case 5:
            document.body.style.background="purple";
        break;
        case 6:
            document.body.style.background="brown";
        break;
        case 7:
            document.body.style.background="lightblue";
        break;
        case 8:
            document.body.style.background="pink";
        break;
        case 9:
            document.body.style.background="darkgreen";
        break;
        case 10:
            document.body.style.background="black";
            whattime=0;
        break;
    }
}*/






function TextBoxEditTrue(){
document.querySelector(".command").contentEditable=true;
document.querySelector(".enterCommand").style.display="block";
document.querySelector(".instructions").style.display="block";
document.querySelector("#pimng").style.display="block";
$(document).keypress(function(e) {
    if(e.which == 13) {
        document.querySelector(".command").contentEditable=false;
        GameSelectUpdate();
        
        
    }
});
}

function resetCommand(){
    document.querySelector(".command").innerHTML="_";
}



function GameSelectUpdate(){
    var SNS = document.querySelector(".command").innerHTML;
    switch(SNS){
        case "_BB8":
            window.location="https://nhnet.github.io/HuamanGames/BB8";
            document.querySelector("body").style.background="#b4d5c2";
        break;
        case "_SquareJump:Easy":
            window.location="https://nhnet.github.io/HuamanGames/SquareJump";
            new Enjine.Application().Initialize(new Mario.LoadingState(), 320, 240);
        break;
        case "_BB9E":
            window.location ="https://nhnet.github.io/HuamanGames/BB9E";
            document.querySelector("body").style.background="#b4d5c2";
        break;
        case "_Snake":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/files/Huaman/HuamanGames/all/ok/Game/Resources/Don-t/find/this/assets/index.html";
        break;
        case "_BallMove":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/GITHUB_Games/SWAP!!/index.html";
        break;
        case "_2048:Starwars":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/GITHUB_Games/STERWURS/index.html";
        break;
        case "_Hextris":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/GITHUB_Games/HEXTRIS/index.html";
        break;
        case "_Coil":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/GITHUB_Games/Coil-master/index.html";
        break;
        case "_FlappyBird":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/GITHUB_Games/FLEPPYBERD/index.html";
        break;
        case "_Connect4":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/GITHUB_Games/c4-master/index.html";
        break;
        case "_Tetris":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/GITHUB_Games/custom-tetris-master/index.html";
        break;
        case "_Digger":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/GITHUB_Games/Digger-master/index.html";
        break;
        case "_2048:MEME":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/GITHUB_Games/MEME/LVL 1/index.html";
        break;
        case "_OhNo":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/GITHUB_Games/OH, NO!/index.html";
        break;
        case "_OhHi":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/GITHUB_Games/OH, HI!/index.html";
        break;
        case "_PacMan":
            window.location.href = "https://huamangames.github.io/resources.a8h2_HuamanGames/GITHUB_Games/PECMEN/index.html";
        break;
        case "_help":
            document.querySelector(".instructions").innerHTML='<p onclick="_helpcommands();">_help:commands</p><p onclick="_helpcontrols();">_help:controls</p>';
            document.querySelector("body").style.background="#000000";
            setTimeout(resetCommand,500);
            setTimeout(TextBoxEditTrue, 500);
        break;
        case "_GiveMeTheCode":
            document.querySelector(".instructions").innerHTML='<p>Press Ctrl U</p>';
            document.querySelector("body").style.background="#000000";
            setTimeout(resetCommand,500);
            setTimeout(TextBoxEditTrue, 500);
        break;
        case "_help:commands":
            _helpcommands();
            function _helpcommands(){
                document.querySelector(".instructions").innerHTML="<p>_help:commands</p><p>_help:controls</p><p>_GiveMeTheCode</p><p><b><u>Sandbox Games:</u></b></p><p>_BB8</p><p>_BB9E</p><p><b><u>Games:</u></b></p><p>_Snake</p><p>_SquareJump:Easy (Currently Unavailable)</p><p>_BallMove</p><p>_2048:Starwars</p><p>_2048:MEME</p><p>_FlappyBird</p><p>_Coil</p><p>_Hextris</p><p>_Connect4</p><p>_Tetris</p><p>_Digger</p><p>_OhNo</p><p>_OhHi</p><p>_PacMan</p>";
                document.querySelector("body").style.background="#000000";
                setTimeout(resetCommand,500);
                setTimeout(TextBoxEditTrue, 500);
            }
        break;
        case "_help:controls":
            _helpcontrols();
            function _helpcontrols(){
            document.querySelector(".instructions").innerHTML="<p><u><b>Controls:</b></u></p><p>All Games (except Snake): IJKL: To Move</p> <p>Snake: Arrow Keys or WASD</p><p>SquareJump:A: Fireballs (When Fire Square Activated) and flatten</p><p>SquareJump: S: Jump</p><p>SquareJump: Q,Direction: Speed Run</p><p>SquareJump: T: Fly</p><p>SquareJump: T,G: Fall down</p><p>SquareJump: T,H,Direction: Teleport</p><p>SquareJump: M: Spray Fireballs (Fire Square Not Needed)</p>";
            document.querySelector("body").style.background="#000000";
            setTimeout(resetCommand,500);
            setTimeout(TextBoxEditTrue, 500);
            }
        break;
        default:
            StatementChoice++;
            setTimeout(resetCommand,500);
            switch(StatementChoice){
                case 0:
                    document.querySelector(".instructions").innerHTML="<p>Not right...</p><p>Type '_help:commands' to see the commands and '_help:controls' for the controls.</p>";
                break;
                case 1:
                    document.querySelector(".instructions").innerHTML="<p>I don't think that was a game mode...</p><p>Type '_help:commands' to see the commands and '_help:controls' for the controls.</p>";
                break;
                case 2:
                    document.querySelector(".instructions").innerHTML="<p>Are you kidding me?</p><p>Type '_help:commands' to see the commands and '_help:controls' for the controls.</p>";
                break;
                case 3:
                    document.querySelector(".instructions").innerHTML="<p>Seriously, my programmer will not approve of this!</p><p>Type '_help:commands' to see the commands and '_help:controls' for the controls.</p>";
                break;
                case 4:
                    document.querySelector(".instructions").innerHTML="<p>Are you trying to irritate me?</p><p>Type '_help:commands' to see the commands and '_help:controls' for the controls.</p>";
                break;
                case 5:
                    document.querySelector(".instructions").innerHTML="<p>You are on a free, offline game website. Not on a get-it-wrong website!</p><p>Type '_help:commands' to see the commands and '_help:controls' for the controls.</p>";
                break;
                case 6:
                    document.querySelector(".instructions").innerHTML="<p>Really?</p><p>Type '_help:commands' to see the commands and '_help:controls' for the controls.</p>";
                break;
                case 7:
                    document.querySelector(".instructions").innerHTML="<p>Stop Getting it wrong!</p><p>Type '_help:commands' to see the commands and '_help:controls' for the controls.</p>";
                break;
                case 8:
                    document.querySelector(".instructions").innerHTML="<p>Are you doing this on purpose?</p><p>Type '_help:commands' to see the commands and '_help:controls' for the controls.</p>";
                break;
                case 9:
                    document.querySelector(".instructions").innerHTML="<p>Stop. Now.</p><p>Type '_help:commands' to see the commands and '_help:controls' for the controls.</p>";
                break;
                case 10:
                    document.querySelector(".instructions").innerHTML="<p>No really!</p><p>Type '_help:commands' to see the commands and '_help:controls' for the controls.</p>";
                    StatementChoice = -1;
                break;
            }
            document.querySelector("body").style.background="#000000";
            setTimeout(TextBoxEditTrue, 500);
        
    }
}
function Password_Enter(){
    setTimeout(function(){document.body.innerHTML="<img width='500px' style='margin-top:100px;' src='https://nhnet.github.io/img/NH NET AVATAR.png'><p style='font-size:40px;margin-left:10px; margin-top:-400px;'>Welcome to HuamanGames!<span style='font-size:40px;color:black'> HiGiHiHi</span></p>";},1500);
    setTimeout(function(){document.body.innerHTML="<img width='500px' style='margin-top:100px;' src='https://nhnet.github.io/img/NH NET AVATAR.png'><p style='font-size:40px;margin-left:10px; margin-top:-400px;'>A<span style='font-size:40px;color:black'> free game app on NH Net Browser...</span></p>";},3000);
    setTimeout(function(){document.body.innerHTML="<img width='500px' style='margin-top:100px;' src='https://nhnet.github.io/img/NH NET AVATAR.png'><p style='font-size:40px;margin-left:10px; margin-top:-400px;'>A free<span style='font-size:40px;color:black'> game app on NH Net Browser...</span></p>";},3100);
    setTimeout(function(){document.body.innerHTML="<img width='500px' style='margin-top:100px;' src='https://nhnet.github.io/img/NH NET AVATAR.png'><p style='font-size:40px;margin-left:10px; margin-top:-400px;'>A free game<span style='font-size:40px;color:black'> app on NH Net Browser...</span></p>";},3200);
    setTimeout(function(){document.body.innerHTML="<img width='500px' style='margin-top:100px;' src='https://nhnet.github.io/img/NH NET AVATAR.png'><p style='font-size:40px;margin-left:10px; margin-top:-400px;'>A free game app<span style='font-size:40px;color:black'> on NH Net Browser...</span></p>";},3300);
    setTimeout(function(){document.body.innerHTML="<img width='500px' style='margin-top:100px;' src='https://nhnet.github.io/img/NH NET AVATAR.png'><p style='font-size:40px;margin-left:10px; margin-top:-400px;'>A free game app on<span style='font-size:40px;color:black'> NH Net Browser...</span></p>";},3400);
    setTimeout(function(){document.body.innerHTML="<img width='500px' style='margin-top:100px;' src='https://nhnet.github.io/img/NH NET AVATAR.png'><p style='font-size:40px;margin-left:10px; margin-top:-400px;'>A free game app on NH<span style='font-size:40px;color:black'> Net Browser...</span></p>";},3500);
    setTimeout(function(){document.body.innerHTML="<img width='500px' style='margin-top:100px;' src='https://nhnet.github.io/img/NH NET AVATAR.png'><p style='font-size:40px;margin-left:10px; margin-top:-400px;'>A free game app on NH Net<span style='font-size:40px;color:black'> Browser...</span></p>";},3600);
    setTimeout(function(){document.body.innerHTML="<img width='500px' style='margin-top:100px;' src='https://nhnet.github.io/img/NH NET AVATAR.png'><p style='font-size:40px;margin-left:10px; margin-top:-400px;'>A free game app on NH Net Browser...</p>";},3700);
    setTimeout(function(){document.body.innerHTML="<p id='pimng' style='margin-top:-500px;font-size:10px;font-family:Impact;'>Clock</p> <div class='HuamanGames' style='text-align:center;'> <div class='container'> <div class='graphic'> <div class='cup'> <div class='slice'></div> <div class='slice'></div> <div class='slice'></div> <div class='slice'></div> <div class='slice'></div> <div class='slice'></div> </div> </div> <p class='title-intro'>Huaman <span>Games</span></p> </div> </div> <div class='enterCommand'> <div>Type your command here...</div> <div class='command'>_</div> </div> <div onclick='DroidType();' class='instructions'<p>Works Offline!</p><p>Type '_help:commands' to see the commands and '_help:controls' for the controls.</p></div> <div class='HackedMode' style='display:none;'></div>";uponload();document.querySelector(".HuamanGames").style.display="block";},5000);
    setTimeout(function(){TextBoxEditTrue();myTimer();},11400);
    document.body.style.animation="toblack 1.5s";
    setTimeout(function(){document.body.style.background="black";},1500);
}
