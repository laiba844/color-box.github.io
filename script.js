let b=document.querySelector(".container")
console.log(b)
function clr(number)
{
    let x= Math.floor(Math.random() * number+1)
    return x
}
function  box()
{
    let y=`rgb(${clr(255)} , ${clr(255)} , ${clr(255)})`
    return y
}

 b.addEventListener("click" , ()=>{
    event.target.style.backgroundColor=box()
    event.target.style.transition="1s"
    event.target.style.borderRadius="10px"
    
 })
