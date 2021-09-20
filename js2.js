var versObjektum = 
    
    [{
        cim: "Lusták dala",
        szerzo:"Tóth Krisztina",
        vers: "Gyere lusta, feküdj mellém,<br>kezdjünk együtt lustálkodni,<br>és csak lógjunk itt egész nap,<br>mint kötélen fél pár zokni!<br><br>Gyere, bújj be mellém, lusta,<br>mondjuk el, mit nem csinálunk!<br>Most arról készüljön lista,<br>mi minden nem lesz ma nálunk!<br><br>Ez a lusták napja, vagy mi,<br>átalusszuk az egészet,<br>tessék minket békén hagyni,<br>ágyba kérjük az ebédet!<br>",
        kep: 'kepek/lustakdala.PNG'
    }];
    
    const elem=' <div class="elem"><h3></h3><p></p><p></p></div>';
    
    $(myfunction(){
        for (let index = 0; index < versObjektum.length; index++) {
            $("article").append(elem);
            
        }
         console.log(versObjektum);
       
     
         for (let index = 0; index < versObjektum.length; index++) {
             $(".elem h3").eq(index).html(versObjektum[index].cim);    
             $(".elem p").eq(index).html(versObjektum[index].szerzo);
             $(".elem p").eq(index).html(versObjektum[index].vers);    
         }
         document.getElementById("demo").innerHTML = versObjektum.cim + versObjektum.szerzo + versObjektum.vers;
     });

