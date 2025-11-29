/* FOR SOME TOPIC I REFERED TO LLM WHICH I DID NOT GET IT . THIS PROJECT IS NOT FULLY
    CREATED BY ME */

const resizebtn=document.querySelector("#resizeBtn");
const container=document.querySelector("#container");

createGrid=function(size){
    container.innerHTML="";
    const squareSize=960/size;

    for(let i=0;i<size*size;i++){
        const div =document.createElement("div");
        div.classList.add("square");
        div.style.width=`${squareSize}px`;
        div.style.height=`${squareSize}px`;



        div.dataset.opacity=0;
        div.addEventListener("mouseenter",()=>{
            let r =Math.floor(Math.random()*255);
            let g =Math.floor(Math.random()*255);
            let b =Math.floor(Math.random()*255);

            let opacity = Number(div.dataset.opacity) + 0.1;
            if (opacity > 1) opacity = 1;
            div.dataset.opacity = opacity;


            div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;


        });
        container.appendChild(div)
    }
}
resizebtn.addEventListener("click", () => {
let size = Number(prompt("Enter grid size (max 100):"));


if (size > 100) size = 100;
if (size < 1 || isNaN(size)) return;


createGrid(size);
});


// default 16x16 grid
createGrid(16);