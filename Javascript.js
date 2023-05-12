//contact

let fnameNode=document.getElementById('firstName');
let errorNode1=document.getElementById('error1');



function validate1(){
    errorNode1.textContent="";
    let fname=fnameNode.value;
    let fnamePattern= new RegExp("^[A-Za-z]*$");
    fnameNode.style.border="2px red solid";
    if(fname==""){
        errorNode1.textContent="Name is required";
        return false;
    }
    else if(fname.length<2){
        errorNode1.textContent="Name must contain atleast 2 characters";
        return false;
    }
    else if(fnamePattern.test(fname)==false){
        errorNode1.textContent="Name must have only alphabets";
        return false;
    }
    else{
        fnameNode.style.border="2px green solid";
        return true;
    }
}


let emailNode=document.getElementById('email');
let errorNode2=document.getElementById('error2');
function validate2(){
    errorNode2.textContent="";
    let email=emailNode.value;
    emailNode.style.border="2px red solid";
    if(email==""){
        errorNode2.textContent="Email is required";
        return false;
    }
    else if(!email.includes('@')){
        errorNode2.textContent="Please ente valid Email Id";
        return false;
    }
    else if(email.endsWith('@')){
        errorNode2.textContent="Please enter valid Email Id";
        return false;
    }
    else{
        emailNode.style.border="2px rgb(44, 244, 44) solid";
        return true;
    }
}

let phoneNode=document.getElementById('num');
let errorNode3=document.getElementById('error3');
function validate3(){
    errorNode2.textContent="";
    let numb=phoneNode.value;
    let NumPattern= new RegExp("^[0-9]*$");
    phoneNode.style.border="2px red solid";
    if(numb==""){
        errorNode3.textContent="Contact Number is required";
        return false;
    }
    else if(numb.length<10){
        errorNode3.textContent="name must contain atleast 10 numbers";
        return false;
    }
    else if(NumPattern.test(numb)==false){
        errorNode3.textContent="Number must have only Digits";
        return false;
    }
    else{
        phoneNode.style.border="2px green solid";
        return true;
    }
}


let addreNode=document.getElementById('Add');
let errorNode4=document.getElementById('error4');
function validate4(){
    errorNode4.textContent="";
    let addres=addreNode.value;
    addreNode.style.border="2px red solid";
    if(addres==""){
        errorNode4.textContent="Address is required";
        return false;
    }
    else{
        addreNode.style.border="2px green solid";
        return true;
    }
}

let pinsNode=document.getElementById('pin');
let errorNode5=document.getElementById('error5');
function validate5(){
    errorNode5.textContent="";
    let Pen=pinsNode.value;
    let PinPattern= new RegExp("^[0-9]*$");
    pinsNode.style.border="2px red solid";
    if(Pen==""){
        errorNode5.textContent="PinCode is required";
        return false;
    }
    else if(Pen.length<6){
        errorNode5.textContent="PinCode  atleast 6 Digits";
        return false;
    }
    else if(PinPattern.test(Pen)==false){
        errorNode5.textContent="Pin Code only in  Digits";
        return false;
    }
    else{
        pinsNode.style.border="2px green solid";
        return true;
    }
}

let nodeArray=[fnameNode,emailNode,phoneNode,addreNode,pinsNode]
function validateForm(){
    
    let flag1=validate1();
    let flag2=validate2();
    let flag3=validate3();
    let flag4=validate4();
    let flag5=validate5();
    
    let flagArray=[flag1,flag2,flag3,flag4,flag5];
    
    for(let i=0;i<flagArray.length;i++){
            if(flagArray[i]==false){
                nodeArray[i].focus();
                break;
            }
        }
    return (flag1 && flag2  && flag3 && flag4 && flag5)
}




let ulNode=document.createElement('ul');
let liNode1=document.createElement('li');
liNode1.innerText="Password must not contain symbol";
let liNode2=document.createElement('li');
liNode2.innerText="Password should contain alphabets and/or digits";
let liNode3=document.createElement('li');
liNode3.innerText="password must be 4 to 8 characters long";
ulNode.append(liNode1,liNode2,liNode3);
let passNode=document.getElementById('pass');
let errorNode7=document.getElementById('error7');
function validate7(){
    errorNode7.textContent="";
    let password=passNode.value;
    passNode.style.border="2px red solid";
    let passPattern= new RegExp("^[A-Za-z0-9]{4,8}$");
    if(password==""){
        errorNode7.textContent="Password is required";
        return false;
    }
    else if(passPattern.test(password)==false){
        errorNode7.append(ulNode);
        return false;
    }
    else{
        passNode.style.border="2px green solid";
        return true;
    }

}

let nodeArrays=[emailNode,passNode]
function signvalidateForm(){
    let flag2=validate2();
    let flag7=validate7();
   
    
    let flagArray=[];
    
    for(let i=0;i<flagArray.length;i++){
            if(flagArray[i]==false){
                nodeArrays[i].focus();
                break;
            }
        }
    return (flag2 && flag7)
}


