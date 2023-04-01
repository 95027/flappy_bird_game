const game=document.getElementById('game');

const hole=document.getElementById('hole');

const result=document.getElementById('result');

const text=document.getElementById('text');

let score=0;
let jumping=0;

hole.addEventListener("animationiteration",randomHole)

function randomHole()
{
    let random=-((Math.random()*350)+150);
    hole.style.top=random + 'px';
    score++;
}

let fall=setInterval(()=>{
    let birdTop=parseInt(window.getComputedStyle(bird).getPropertyValue('top'));

    if(jumping==0)
    {
        bird.style.top=(birdTop+2)+'px';
    }

    let blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let holeTop=parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    let hTop=(500+holeTop);

    if((birdTop>450) || ((blockLeft<50) && (blockLeft>-50) && ((birdTop<hTop) || (birdTop>hTop+100)))) 
    {
        result.style.display='block';
        text.innerText=`your final score is ${score}`;
        game.style.display='none';
        score=0;
    }
},10)

window.addEventListener('keydown',hop)

function hop()
{
    jumping=1;

    let birdTop=parseInt(window.getComputedStyle(bird).getPropertyValue('top'))
    if(birdTop>6)
    {
        bird.style.top=(birdTop-60) + 'px';
    }

    setTimeout(()=>{
        jumping=0;
    },100)
}