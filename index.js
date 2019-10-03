const sleep = (n) => new Promise(resolve => setTimeout(resolve, n));
var i = 0, j = 0;
var stopper = false;
const speed = parseInt(location.href.split("#")[1]) || 100;

function stop(){
    stopper = !stopper;
    init();
}


function init(){
    (async()=>{
        while(i<content.length&&!stopper){
            while(j<content[i].length&&!stopper){
                document.getElementById(i).innerHTML = content[i].slice(0,j+1);
                // document.getElementById(i).insertAdjacentHTML("beforeend",content[i][j]);
                document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
                await sleep(speed);
                j=(j+1)|0;
            }
            if(!stopper){
                i=(i+1)|0;
                j=0;
                var div = document.createElement("div");
                div.setAttribute("id", String(i));
                div.setAttribute("class", "moji");
                document.body.insertBefore(div,document.getElementById(String(i-1)).nextSibling);
            }
        }
    })();
}

window.addEventListener("DOMContentLoaded", init);
