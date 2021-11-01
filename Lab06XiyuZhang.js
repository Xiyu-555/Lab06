// Name: Xiyu Zhang Copyright: Xiyu Zhang
function prog1xiyuzhang(){
var num = parseInt(prompt("please type a number:",""));
var prime = true;
var d = 2;
while(prime == true && d<=(num/2)){
    if(num%d==0){
        prime = false;
    }
    d++;
}
if(prime==true && num!=1 && num!=0){
    document.getElementById("output").innerHTML = num+" is prime";
}
else{
    document.getElementById("output").innerHTML = num+" is not prime";
}
}

function prog2xiyuzhang(){
var sum1=0;
var sum2=0;
for(i=1;i<=4;i++){
    var num = parseInt(prompt("please type a number:",""));
    sum1 = sum1 + num;
}
for(i=1;i<=4;i++){
    var num = parseInt(prompt("please type a number:",""));
    sum2 = sum2 + num;
}
if(sum1==sum2){
    document.getElementById("output").innerHTML = "yes";
}
else{
    document.getElementById("output").innerHTML = "no";
}
}

function prog3xiyuzhang(){
var p = 0;
var n = 0;
do{
    var num = parseInt(prompt("please type a number:",""));
    if (num>0){p++;}
    else if(num<0){n++;}
}
while(num!=0 && p<= 2*n)
document.getElementById("output").innerHTML ="positive: "+p+"    "+"negative: "+n
}

function prog4xiyuzhang(){
var cnt1 = 0;
var cnt2 = 0;
for(i=1;i<=4;i++){
    var num = parseInt(prompt("please type a number",""));
    if(num<0){
        cnt1++;
    }
}
for(i=1;i<=4;i++){
    var num = parseInt(prompt("please type a number",""));
    if(num>0){
        cnt2++;
    }
}
if(cnt1==cnt2){
    document.getElementById("output").innerHTML ="yes";
}
else{
    document.getElementById("output").innerHTML ="no"
}
}

function prog5xiyuzhang(){
    function prime(num){
        let flag=true;
        let d=2;
        while(flag==true && d<=(num/2)){
            if(num%d==0){
                flag=false;
            }
            d=d+1;
        }
        return flag;
        }
var num = parseInt(prompt("please type a number",""));
var i;
for(i=2;i<=num;i++){
    prime(i);
    if(prime(i)==true){
        document.getElementById("output").innerHTML =document.getElementById("output").innerHTML+i+" ";
    }
}
}

function prog6xiyuzhang(){
    function has7(num){
        let flag=false;
        let r;
        while(num!=0 && flag==false){
            r=num%10;
            num=Math.floor(num/10);
            if(r%7==0){
                flag=true;
            }
        }
        return flag;
    }
    function prime(num){
        let flag=true;
        let d=2;
        while(flag==true && d<=(num/2)){
            if(num%d==0){
                flag=false;
            }
            d=d+1;
        }
        return flag;
    }
var num = parseInt(prompt("please type a number",""));
var i;
for(i=2;i<=num;i++){
    has7(i);
    if(has7(i)==true){
        prime(i);
        if(prime(i)==true){
            document.getElementById("output").innerHTML =document.getElementById("output").innerHTML+i+" ";
        }
    }
}
}