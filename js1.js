
var versObjektum = [
                    {
                    cim: "A Hegyi Zsupsz",
                    szerzo:"Keresztesi János",
                    vers: "A Hegyi Zsupsz egy nagy kövér<br>nehézkes léptű, lomha lény,<br>és lenn a völgyben él szegény.<br><br>A hegyre nem megy föl soha.<br>A Kőszáli Puff rokona.<br>",
                    kep: 'kepek/hegyizsupsz.PNG'
                    }
                     
                    ];

const elem='<div class="elem"><h3></h3><p></p><p></p><img src="" alt=""></div>';                    

$(function(){
                        
    for (let index = 0; index < versObjektum.length; index++) {
        $("article").append(elem);
                            
        }
        console.log(versObjektum);
    });
                     
                         for (let index = 0; index < versObjektum.length; index++) {
                             $(".elem h3").eq(index).html(versObjektum[index].cim);    
                             $(".elem p").eq(index).html(versObjektum[index].szerzo);    
                             $(".elem p").eq(index).html(versObjektum[index].vers);    
                             
                         }
                         $(".elem h3").eq(0).css({"color":"black", "font-weight":"bold"});
                         
                     });

                     $(".elem h3").mouseenter(function(){
                        if ($(this).parent('div').children('div.image').length) {
                            $(this).parent('div').children('div.image').show();
                        } else {
                            var hegyizsupsz.png=$(this).data('image');
                            var imageTag='<div class="image" style="position:absolute;">'+'<img src="'+hegyizsupsz.png+'" alt="image" height="100" />'+'</div>';
                            $(this).parent('div').append(imageTag);
                        }
                    });
                
                    $(".elem h3").mouseleave(function(){
                        $(this).parent('div').children('div.image').hide();
                    });