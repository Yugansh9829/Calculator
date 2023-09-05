let a ="";
let buttons = document.getElementsByTagName("button");
var screen_value = document.querySelector(".screen");
let x = false;
Array.from(buttons).forEach((button)=> {  //array.from will convert buttons to an array
    button.addEventListener('click',(e)=>{
        if(button.innerHTML==="ANS"|| button.innerHTML ==="DEL" || button.innerHTML ==="CLR" || button.innerHTML==="START" || button.innerHTML==="ENTER"){
            if(button.innerHTML=="ENTER" || button.innerHTML=="ANS"){
                a = eval(a);
                screen_value.innerHTML=a;
                a="";
            }
            if(button.innerHTML=="DEL"){
                a = a.slice(0,-1);
                screen_value.innerHTML=a;
            }
            if(button.innerHTML=="CLR"){
                a="";
                screen_value.innerHTML=0;
            }
            if(button.innerHTML=="START"){
                if(x){
                    x=false;
                    a="";
                    screen_value.innerHTML="";
                }
                else{
                    screen_value.innerHTML=0;
                    x=true;
                }
            }
        }else if(x){
            if(button.innerHTML==="x"){
                a+="*";
                screen_value.innerHTML=a;
                console.log(a);
            }else{
                a+=(button.innerHTML);
                screen_value.innerHTML=a;
                console.log(a);
            }
        }
        
    })
});