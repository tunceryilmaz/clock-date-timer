

let ad= prompt();

 
document.getElementById("myName").innerHTML = ad;

var date =new Date();
var saniye =date.getSeconds();
var dakika =date.getMinutes();
var saat =date.getHours();


var a = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
var aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
if (Boolean(ad)==true){
    
    let gün = a[date.getDay()];
    let ay = aylar[date.getMonth()];
    let yıl=date.getFullYear();
    
    document.getElementById("myClock").innerHTML= ( saat+ ":" +dakika  +  ":" + saniye +"   "+  gün +"   "+ ay+"/"+yıl);
    
    setTimeout(showTime, 1000);
    
    function showTime(){
        
        
        if (0<=saniye && saniye<59){
        
        saniye ++;
        
        document.getElementById("myClock").innerHTML= ( saat+ ":" +dakika  + ":" + saniye +"   "+ gün +"   "+ ay +"/"+yıl);
        
        setTimeout(showTime, 1000);
        
        }
        else if (  saniye=59){
        
             saniye = 0;
             dakika ++ ;
             
            document.getElementById("myClock").innerHTML= ( saat+ ":" +dakika  + ":" + saniye +"  "+  gün +"   "+ ay +"/"+yıl);
            

            setTimeout(showTime, 1000);
            }

        else    if (  dakika=59){
        
               
                
                     dakika = 00;
                     saat ++ ;
                    
                    document.getElementById("myClock").innerHTML= ( saat+ ":" +dakika  + ":" + saniye +"   "+  gün +"   "+ ay+"/"+yıl);
                    
                    setTimeout(showTime, 1000);
                    }
                
                }
}
  








