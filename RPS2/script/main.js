var p_score=0;
var c_score=0; 
const p = document.getElementById("p");
const r = document.getElementById("r");

const paper= document.getElementById("paper"); 
const scissor= document.getElementById("scissor"); 
const rock= document.getElementById("rock");


const ai=document.getElementById("ai")



p.addEventListener("click",(e)=>{
    const random=rand();
    e.preventDefault();
    if (paper.checked || rock.checked || scissor.checked){
        switch(random) {
            case 1:
                ai.innerText="AI >>>> Paper";
                break;
            case 2:
                ai.innerText="AI >>>> Scissor";
                break;
            case 3:
                ai.innerText="AI >>>> Rock";
                break;
        }
    }
    
    if(paper.checked){
        if(random == 1){
            c_score++;
            p_score++;
            r.innerText="DRAW";
            r.classList="text-center text-white mt-5 pt-5 text-warning";

        } else if(random == 2){
            c_score++;
            r.innerText="YOU LOST!";
            r.classList=" text-center mt-5 pt-5 text-danger";

        } else if(random == 3){
            p_score++;
            r.innerText="YOU WON!";
            r.classList="text-center mt-5 pt-5 text-success";    
        }
    } else if (scissor.checked) {
        if(random == 1){
            p_score++;
            r.innerText="YOU WIN!";
            r.classList="text-center mt-5 pt-5 text-success";
            
        }else if(random == 2){
            c_score++;
            p_score++;
            r.innerText="DRAW";
            r.classList="text-center mt-5 pt-5 text-warning";
            
        } else if(random == 3){
            c_score++;
            r.innerText="YOU LOST!";
            r.classList="text-center mt-5 pt-5text-danger";
            
        }
        }else if (rock.checked){
            if(random == 1){
                c_score++;
                r.innerText="YOU LOST!";
                r.classList="text-center mt-5 pt-5 text-danger";
                
            } else if(random==2){
                p_score++;
                r.innerText="YOU WIN!";
                r.classList="text-center mt-5 pt-5 text-success";
                
            }else  if(random==3){
                c_score++;
                p_score++;
                r.innerText="DRAW";
                r.classList="text-center mt-5 pt-5 text-warning";
                
            }
        } 
        score.innerText=`You: ${p_score} | Ai: ${c_score}`;
        rock.checked=false;
        scissor.checked=false;
        paper.checked=false;

} )


function rand() {
    var r= Math.random();
    var rps = Math.floor(r * 3) + 1;
    return rps;
}