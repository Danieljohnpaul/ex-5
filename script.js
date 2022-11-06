function q1(){
    const sentence=document.getElementById("t1").value; const words=sentence.split(" ");
    let sLen=words[0].length, lLen=words[0].length;
    let sIndex=0, lIndex=0;
    words.forEach((word,index)=>{
        if(word.length<sLen){ sLen=word.length; sIndex=index
    }
        if(word.length>lLen){
            lLen=word.length; lIndex=index
    }
    })
    document.getElementById("result1").innerHTML="Longest Word: "+words[lIndex]+"<br><br>"+" Shortest Word: "+words[sIndex];
    }
function q2(){

        const h=parseFloat(document.getElementById("t2").value);
        const w=parseFloat(document.getElementById("t3").value);
        const bmi=(w)/(h*h);
        if(bmi<18)
            document.getElementById("result2").innerHTML="You are Underweight!"; 
        else if(bmi>=18 && bmi<=25)
            document.getElementById("result2").innerHTML="You are Normal!";
        else if(bmi>25 && bmi<=30)
            document.getElementById("result2").innerHTML="You are Overweight!";
        else if(bmi>30)
            document.getElementById("result2").innerHTML="Sorry, you are Obese!";
        }
function q3(){
     const idx=Math.floor(Math.random() * 2);
     const img=["https://cdn.harvesttotable.com/htt/2011/08/23173703/Apples-on- branch.jpg","https://org-dcmp-staticassets.s3.us-east- 1.amazonaws.com/posterimages/1518_1.jpg"]
     const h=document.getElementById("height").value; const w=document.getElementById("width").value;
     document.getElementById("garden").innerHTML="<img src="+img[idx]+" height="+h+" width="+w+">"

}
function q4(){
    const from= document.getElementById("from").value; 
    const to= document.getElementById("to").value;
    let value=parseFloat(document.getElementById("value").value);
        if(from=="INR" && to=="USD"){
            value=value*0.013;
        }
        else if(from=="USD" && to=="INR"){ 
            value=value*79.71;
        }
        else
            value="Choose Properly!"
        if(value=="Choose Properly!")
            document.getElementById("convertedValue").innerHTML=value;
        else
            document.getElementById("convertedValue").innerHTML="Equivalent "+to+" value is "+value.toFixed(2);
}
let headCount=0,tailCount=0;
function q5(){
    const idx=Math.floor(Math.random() * 2);
    const img=["https://cdn3.vectorstock.com/i/thumb-large/41/47/american-money- gold-coin-dollar-vector-924147.jpg","https://cdn3.vectorstock.com/i/thumb- large/65/32/russian-money-vector-626532.jpg"]
    if(idx==0)
        headCount+=1;
    else
        tailCount+=1;
    document.getElementById("coin").innerHTML="<img src="+img[idx]+"height=150 width=150"+">"
    document.getElementById("count").innerHTML="Head Count: "+headCount+"<br>"+"Tail Count: "+tailCount;
}
function q6(){
    const cakeType=document.getElementById("cake").value;
    const tip=parseInt(document.getElementById("tip").value);
    const tax=9;
    let tipCost,taxCost,totalCost;
    if(cakeType=="Small"){
        cakeCost=100;
        taxCost=(cakeCost*(tax/100));
        tipCost=parseFloat(((cakeCost+taxCost)*(tip/100)).toFixed(2));
        totalCost=cakeCost+taxCost+tipCost;
    }
    else if(cakeType=="Medium"){
        cakeCost=200;
        taxCost=(cakeCost*(tax/100));
        tipCost=parseFloat(((cakeCost+taxCost)*(tip/100)).toFixed(2));
        totalCost=cakeCost+taxCost+tipCost;
    }
    else if(cakeType=="Large"){
        cakeCost=400;
        taxCost=(cakeCost*(tax/100));
        tipCost=parseFloat(((cakeCost+taxCost)*(tip/100)).toFixed(2));
        totalCost=cakeCost+taxCost+tipCost;
    }
    document.getElementById("cost").innerHTML="Cake Cost: "+cakeCost+"<br>"+"Tax Cost: "+taxCost+"<br>"+"Tip Cost: "+tipCost+"<br><br>"+"Total Cost: "+totalCost;
}



	




        



            




            
        