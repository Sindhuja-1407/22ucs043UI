function display()
{
    let a=document.getElementById('x').value
    let b=document.getElementById('y').value
    let c=parseInt(a)+parseInt(b)
    document.getElementById('para').style.border="3px red solid"
    document.getElementById('para').innerHTML=" Addition " + c
    //alert("hi"+n)
    //console.log("hii")
}
function display1()
{
    let a=document.getElementById('x').value
    let b=document.getElementById('y').value
    let c=parseInt(a)-parseInt(b)
    document.getElementById('para').style.border="3px red solid"
    document.getElementById('para').innerHTML=" Subtraction " + c
}
function display2()
{
    let a=document.getElementById('x').value
    let b=document.getElementById('y').value
    let c=parseInt(a)*parseInt(b)
    document.getElementById('para').style.border="3px red solid"
    document.getElementById('para').innerHTML=" Multipilication " + c
}
function display3()
{
    let a=document.getElementById('x').value
    let b=document.getElementById('y').value
    let c=parseInt(a)/parseInt(b)
    document.getElementById('para').style.border="3px red solid"
    document.getElementById('para').innerHTML=" Division " + c
}

