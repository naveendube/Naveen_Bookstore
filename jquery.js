let fnameNode=$('#firstName');
let errorNode1=$('#error1');
let lNameNode=$('#lastName');
let errorNode6=$('#error6');
let mailNode=$('#email');
let errorNode2=$('#error2');
let passNode=$('#pass');
let errorNode3=$('#error3');

$(function(){
    fnameNode.blur(()=>validate1());
    lNameNode.blur(()=>validate4());
    mailNode.blur(()=>validate2());
    passNode.blur(()=>validate3());
   
  
    
    
    $('#regForm').submit(()=>validateForm());
});

function validate1(){
    errorNode1.text("");
    let fname=fnameNode.val();
    let fnamePattern= new RegExp("^[A-Za-z]*$");
    fnameNode.css({border:"2px red solid"});
    if(fname==""){
        errorNode1.text("First name is required");
        return false;
    }
    else if(fname.length<2){
        errorNode1.text("name must contain atleast 2 characters");
        return false;
    }
    else if(fnamePattern.test(fname)==false){
        errorNode1.text("name must have only alphabets");
        return false;
    }
    else{
        fnameNode.css({border:"2px green solid"});
        return true;
    }
}

function validate4(){
    errorNode6.text("");
    let lname=lNameNode.val();
    let lNamePattern= new RegExp("^[A-Za-z]*$");
    lNameNode.css({border:"2px red solid"});
    if(lname==""){
        errorNode6.text("Last name is required");
        return false;
    }
    else if(lname.length<5){
        errorNode6.text("Name must contain atleast 5 characters");
        return false;
    }
    else if(lNamePattern.test(lname)==false){
        errorNode6.text("Name must have only alphabets");
        return false;
    }
    else{
        lNameNode.css({border:"2px green solid"});
        return true;
    }
}

function validate2(){
    errorNode2.text("");
    let email=mailNode.val();
    mailNode.css({border:"2px red solid"});
    if(email==""){
        errorNode2.text("Email Id is required");
        return false;
    }
    else if(!email.includes('@')){
        errorNode2.text("Please enter valid EmailId");
        return false;
    }
    else if(email.endsWith('@')){
        errorNode2.text("Please enter valid EmailId");
        return false;
    }
    else{
        mailNode.css({border:"2px green solid"});
        return true;
    }
}

let ulNode=$('<ul>');
let liNode1=$('<li>');
liNode1.text("Password must not contain symbol");
let liNode2=$('<li>');
liNode2.text("Password should contain alphabets and/or digits");
let liNode3=$('<li>');
liNode3.text("password must be 4 to 8 characters long");
ulNode.append(liNode1,liNode2,liNode3);
function validate3(){
    errorNode3.text("");
    let password=passNode.val();
    passNode.css({border:"2px red solid"});
    let passPattern= new RegExp("^[A-Za-z0-9]{4,8}$");
    if(password==""){
        errorNode3.text("Password is required");
        return false;
    }
    else if(passPattern.test(password)==false){
        errorNode3.append(ulNode);
        return false;
    }
    else{
        passNode.css({border:"2px green solid"});
        return true;
    }

}




let nodeArray=[fnameNode,lNameNode,mailNode,passNode];
function validateForm(){
    
    let flag1=validate1();
    let flag4=validate4();
    let flag2=validate2();
    let flag3=validate3();
    
    
    let flagArray=[flag1,flag4,flag2,flag3];
    for(let i=0;i<flagArray.length;i++){
            if(flagArray[i]==false){
                nodeArray[i].focus();
                break;
            }
        }
    return (flag1 && flag4 && flag2 && flag3)
}




