const sleep = (n) => new Promise(resolve => setTimeout(resolve, n));
var i = 0;
var stopper = false;
const speed = parseInt(location.href.split("#")[1]) || 100;

function stop(){
    stopper = !stopper;
    init();
}

function init(){
    (async()=>{
        while(i<content.length&&!stopper){
            document.getElementById("moji").innerHTML = content.slice(0,i+1);
            document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
            await sleep(speed);
            i=(i+1)|0;
        }
    })();
}

window.addEventListener("DOMContentLoaded", init);
