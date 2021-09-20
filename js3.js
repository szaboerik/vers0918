var versObjektum = [
    {
        
    cim: "A Hegyi Zsupsz<br>",
 
    vers: "A Hegyi Zsupsz egy nagy, kövér <br> nehézkes léptű, lomha lény <br> és lenn a völgyben él szegény. <br> <br> A hegyre nem megy föl soha. <br> A Kőszáli Puff rokona. <br>\n\t",
    
    szerzo:"<br>Keresztesi János"

},
    {
    cim1: "Metró<br>",
        
    vers1: "Hát elkapott ma, kiscicám,<br> az ellenőr a metrón.<br> Nem volt érvényes matricám,<br> kívánom, bárha lett vón.<br> Leszállított – az alagút<br> most énelőttem ásít,<br> s eljutnom több mint bonyolult<br> a kívánt állomásig.<br> <br> S míg kattog egyre távolabb<br> haladva lent a metró,<br> halkan kattog a bőr alatt<br> az ember szíve dettó.<br>\n\t",
        
    szerzo1:"<br>Varró Dániel"

    },

    ];

    const verselem='<div class="vers"> <h3></h3> <p></p> <p></p></div>';
    const verselem1='<div class="vers1"> <h3></h3> <p></p> <p></p></div>';
    $(function(){


    
        $("article").append(verselem);         
         

        console.log(versObjektum);

        $("#show").click(function () {
            
          

        for (let index = 0; index < versObjektum.length; index++) {
            
            $(".vers h3").eq(index).append(versObjektum[index].cim);    
            $(".vers p").eq(index).append(versObjektum[index].vers);
            $(".vers p").eq(index).append(versObjektum[index].szerzo);

        }
        
    });
    });
    $(function(){

        $("article").append(verselem1);         
        
        

        console.log(versObjektum);

        $("#show1").click(function () {
            console.clear;
          

        for (let index = 0; index < versObjektum.length; index++) {
            

            $(".vers1 h3").eq(index).append(versObjektum[index].cim1);    
            $(".vers1 p").eq(index).append(versObjektum[index].vers1);
            $(".vers1 p").eq(index).append(versObjektum[index].szerzo1);
        }
        
    });
    });
