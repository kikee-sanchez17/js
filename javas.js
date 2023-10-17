
let array=[];
function generateDate(){
   let month=["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]
   let monthNumber=randomIntFromInterval(1,12)
   let day= randomIntFromInterval(1,31)
   let year="2023"
   let date_generated=day +" - "+ monthNumber+" - " + year
   
    return date_generated

}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function generateDates(){
    document.getElementById("table").style.display = 'block';
    for (let i = 0; i<5 ; i++ ){
        array[i]=generateDate();   
    }
    
    for(let i=0;i<5 ; i++){

        let menor = ((array[0].toString()).split("-"))[1];

        if (((array[i].toString()).split("-"))[1]< menor){
            menor = array[i];
        
        }
       
        else{
            if (((array[i].toString()).split("-"))[1] > menor){
              menor = menor;
            }      
        }
       
    }
    for (let i = 0; i<5 ; i++ ){
        document.getElementById(i).innerHTML=array[i] 
    }
    

}