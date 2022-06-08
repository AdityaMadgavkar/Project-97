
var firebaseConfig = {
   apiKey: "AIzaSyAxxssLUIiYK8Ep72sWAHmPJHJamF6o_7E",
   authDomain: "minimeter-4a7d1.firebaseapp.com",
   projectId: "minimeter-4a7d1",
   storageBucket: "minimeter-4a7d1.appspot.com",
   messagingSenderId: "804725632166",
   appId: "1:804725632166:web:2227eb8acfb1664c53d867"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function calcV(){

   current = document.getElementById("current").value;
   resistance = document.getElementById("resistance").value;
   power = document.getElementById("power").value;
   Ivoltage = document.getElementById("voltage").value;

   if(Ivoltage!=""){
      document.getElementById("current").style.backgroundColor="blue";
      document.getElementById("power").style.backgroundColor="blue";
      document.getElementById("voltage").style.backgroundColor="blue";
      document.getElementById("resistance").style.backgroundColor="blue";
      document.getElementById("out").innerHTML = "Voltage = "+voltage+" volts";
      document.getElementById("warning").innerHTML="";
     } 

     if ((resistance=="") &&(power=="")){
        document.getElementById("warning").innerHTML = "Please enter the required value."
        document.getElementById("resistance").style.backgroundColor="red";
        document.getElementById("power").style.backgroundColor="red";
        console.log("Error!");
        document.getElementById("out").innerHTML = "";
     }

     if (current==""){
        document.getElementById("warning").innerHTML = "Please enter the required value."
        document.getElementById("current").style.backgroundColor="red";
        console.log("Error!");
        document.getElementById("out").innerHTML = "";
     }

     if((resistance!="")&&(current!="")){

      document.getElementById("current").style.backgroundColor="blue";
      document.getElementById("resistance").style.backgroundColor="blue";
        
        voltage = current*resistance;
        console.log("Voltage = "+voltage);
        console.log("Current = "+current);
        console.log("Resistance = "+resistance);
        power = voltage*current;
        console.log("Power = "+power);
        document.getElementById("out").innerHTML = "Voltage = "+voltage+" volts"+"<br/>"+"Current = "+current+" amperes"+"<br/>"+"Resistance = "+resistance+" Ohms"+"<br/>"+"Power = "+power+" watts";
        document.getElementById("warning").innerHTML = "";
     }

     if((power!="")&&(current!="")){

      document.getElementById("current").style.backgroundColor="blue";
      document.getElementById("power").style.backgroundColor="blue";
        voltage = power/current;
        console.log("Voltage = "+voltage);
        console.log("Current = "+current);
        console.log("Power = "+power);
        resistance = voltage/current;
        console.log("Resistance = "+resistance);
        document.getElementById("out").innerHTML = "Voltage = "+voltage+" volts"+"<br/>"+"Current = "+current+" amperes"+"<br/>"+"Resistance = "+resistance+" Ohms"+"<br/>"+"Power = "+power+" watts";
        document.getElementById("warning").innerHTML = "";
      }

      firebase.database().ref("/").child("test").update({
         purpose:"testing"
      });
              
}


function calcC(){

    Cvoltage = document.getElementById("voltage").value;
    Cresistance = document.getElementById("resistance").value;
    Cpower = document.getElementById("power").value;
    CIcurrent = document.getElementById("current").value;

    if(CIcurrent!=""){
      document.getElementById("current").style.backgroundColor="blue";
      document.getElementById("power").style.backgroundColor="blue";
      document.getElementById("voltage").style.backgroundColor="blue";
      document.getElementById("resistance").style.backgroundColor="blue";
      document.getElementById("out").innerHTML = "Current = "+CIcurrent+" amperes";
      document.getElementById("warning").innerHTML="";
     }  

    if ((Cresistance=="") &&(Cpower=="")){
      document.getElementById("warning").innerHTML = "Please enter the required value."
      document.getElementById("resistance").style.backgroundColor="red";
      document.getElementById("power").style.backgroundColor="red";
      console.log("Error!");
      document.getElementById("out").innerHTML = "";
      
   }

   if (Cvoltage==""){
      document.getElementById("warning").innerHTML = "Please enter the required value."
      document.getElementById("voltage").style.backgroundColor="red";
      console.log("Error!");
      document.getElementById("out").innerHTML = "";
   }
   
   if((Cresistance!="")&&(Cvoltage!="")){
      document.getElementById("current").style.backgroundColor="blue";
      document.getElementById("power").style.backgroundColor="blue";
      Ccurrent = Cvoltage/Cresistance;
      console.log("Voltage = "+Cvoltage);
      console.log("Current = "+Ccurrent);
      console.log("Resistance = "+Cresistance);
      Cpower = Cvoltage*Ccurrent;
      console.log("Power = "+Cpower);
      document.getElementById("out").innerHTML = "Voltage = "+Cvoltage+" volts"+"<br/>"+"Current = "+Ccurrent+" amperes"+"<br/>"+"Resistance = "+Cresistance+" Ohms"+"<br/>"+"Power = "+Cpower+" watts";
      document.getElementById("warning").innerHTML = ""; 
   }

   if((Cpower!="")&&(Cvoltage!="")){
      document.getElementById("current").style.backgroundColor="blue";
      document.getElementById("power").style.backgroundColor="blue";
         Ccurrent = Cpower/Cvoltage;
         console.log("Voltage = "+Cvoltage);
         console.log("Current = "+Ccurrent);
         console.log("Power = "+Cpower);
         Cresistance = Cvoltage/Ccurrent;
         console.log("Resistance = "+Cresistance);
         document.getElementById("out").innerHTML = "Voltage = "+Cvoltage+" volts"+"<br/>"+"Current = "+Ccurrent+" amperes"+"<br/>"+"Resistance = "+Cresistance+" Ohms"+"<br/>"+"Power = "+Cpower+" watts";
         document.getElementById("warning").innerHTML = ""; 
      } 
      
     

}

function calcR(){

    Rvoltage = document.getElementById("voltage").value;
    Rcurrent = document.getElementById("current").value;
    Rpower = document.getElementById("power").value;
    RIresistance = document.getElementById("resistance").value;

   if(RIresistance!=""){
    document.getElementById("current").style.backgroundColor="blue";
    document.getElementById("power").style.backgroundColor="blue";
    document.getElementById("voltage").style.backgroundColor="blue";
    document.getElementById("resistance").style.backgroundColor="blue";
    document.getElementById("out").innerHTML = "Resistance = "+RIresistance+" ohms";
    document.getElementById("warning").innerHTML="";
   }

    if ((Rvoltage=="") &&(Rcurrent=="")){
      document.getElementById("warning").innerHTML = "Please enter the required value."
      document.getElementById("voltage").style.backgroundColor="red";
      document.getElementById("current").style.backgroundColor="red";
      console.log("Error!");
      document.getElementById("out").innerHTML = "";
   }

   
   
   if((Rcurrent!="")&&(Rvoltage!="")){
      document.getElementById("voltage").style.backgroundColor="blue";
      document.getElementById("current").style.backgroundColor="blue";
        
      Rresistance = Rvoltage/Rcurrent;
      console.log("Voltage = "+Rvoltage);
      console.log("Current = "+Rcurrent);
      console.log("Resistance = "+Rresistance);
      Rpower = Rvoltage*Rcurrent;
      console.log("Power = "+Rpower);
      document.getElementById("out").innerHTML = "Voltage = "+Rvoltage+" volts"+"<br/>"+"Current = "+Rcurrent+" amperes"+"<br/>"+"Resistance = "+Rresistance+" Ohms"+"<br/>"+"Power = "+Rpower+" watts";
   document.getElementById("warning").innerHTML = "";
   }

   
   

}

function calcP(){

    Pvoltage = document.getElementById("voltage").value;
    Pcurrent = document.getElementById("current").value;
    Presistance = document.getElemantById("resistance").value;
    PIpower = document.getElementById("power").value;

    if(PIpower!=""){
     document.getElementById("current").style.backgroundColor="blue";
     document.getElementById("power").style.backgroundColor="blue";
     document.getElementById("voltage").style.backgroundColor="blue";
     document.getElementById("resistance").style.backgroundColor="blue";
     document.getElementById("out").innerHTML = "Power = "+PIpower+" watts";
     document.getElementById("warning").innerHTML="";
    }  

    if ((Pvoltage=="") &&(Pcurrent=="")){
      document.getElementById("warning").innerHTML = "Please enter the required value."
      document.getElementById("voltage").style.backgroundColor="red";
      document.getElementById("current").style.backgroundColor="red";
      console.log("Error!");
      document.getElementById("out").innerHTML = "";
   }

  
   
   if((Pcurrent!="")&&(Pvoltage!="")){
      document.getElementById("voltage").style.backgroundColor="blue";
      document.getElementById("current").style.backgroundColor="blue";  
      Ppower = Pvoltage*Pcurrent;
      console.log("Voltage = "+Pvoltage);
      console.log("Current = "+Pcurrent);
      console.log("Power = "+Ppower);
      Presistance = Pvoltage/Pcurrent;
      console.log("Resistance = "+Presistance);
      document.getElementById("out").innerHTML = "Voltage = "+Pvoltage+" volts"+"<br/>"+"Current = "+Pcurrent+" amperes"+"<br/>"+"Resistance = "+Presistance+" Ohms"+"<br/>"+"Power = "+Ppower+" watts";
      document.getElementById("warning").innerHTML = "";
   }

   PIpower = document.getElementById("power").value;
   if(PIpower!=""){
    document.getElementById("current").style.backgroundColor="blue";
    document.getElementById("power").style.backgroundColor="blue";
    document.getElementById("voltage").style.backgroundColor="blue";
    document.getElementById("resistance").style.backgroundColor="blue";
    document.getElementById("out").innerHTML = "Power = "+PIpower+" watts";
    document.getElementById("warning").innerHTML="";
   }  

}

function Vhistory(){
   window.location="index2.html";
}


