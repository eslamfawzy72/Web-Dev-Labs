

window.onload=function(){
window.EnterNumber=function(val){
    document.getElementById("Answer").value+=val
};
window.EnterOperator=function(val){
    if(document.getElementById("Answer").value===""){//to not start by operator
        return 
    }
     document.getElementById("Answer").value+=val
}
window.EnterClear=function(){
 
     document.getElementById("Answer").value=""
}
window.EnterEqual=function(){
    let val=document.getElementById("Answer").value
    let result=Function("return "+val)();
    document.getElementById("Answer").value = result;
}




}