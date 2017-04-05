$("document").ready(function(){
    $('#fullpage').fullpage({
        fixedElements:'#head',
        resize:'true',
        navigation:'true',
        loopHorizontal:'true',
        slidesNavigation:'true',
        navigationPosition:'right',
        navigationTooltips:['首页','关于我','专业技能','我的作品','联系我'],
        css3:'ture',
        anchors:['page1','page2','page4','page5','page6'],
        afterLoad:function(link,index){
            switch(index){
            case 1:
                move('.section1 h1').scale(1.5).duration('1s').end();
                move('.secp1').set('top','0px').duration('1s').end(function(){
                    move('.secp2').set('top','0px').duration('1s').end(function(){
                        move('.secp3').set('top','0px').duration('1s').end()
                    })
                });
            break;
            case 2:
                move('.section2 h1').set('margin-left','60%').duration('1s').end(function(){
                            move('.section2 h1').set('margin-left','40%').duration('.5s').end()
                });
                move('.sec2Bor').set('top','40%').duration('1s').end(function(){
                    move('.sectionText').set('opacity','1').duration('3s').end();
                });
                
            break;

            case 3:
                move('.sec4-pic').set('top','0').duration('.5s').end(function(){
                    move('#pic-c').set('left','3%').duration('.5s').end(function(){
                        move('#pic-j').set('left','6%').duration('.5s').end(function(){
                                move('#pic-aj').set('left','9%').duration('.5s').end(function(){
                            $('.h-tit').bind('mouseover',function(){
                                 move('.h-tit').set('top','10px').duration('.5s').end(function(){
                                    move('#pic-h>.sec4-list').set('opacity','1').duration('2s').end()}
                                    );
                            });
                            $('.c-tit').bind('mouseover',function(){
                                 move('.c-tit').set('top','10px').duration('.5s').end(function(){
                                    move('#pic-c>.sec4-list').set('opacity','1').duration('2s').end()
                                 });
                            });
                            $('.j-tit').bind('mouseover',function(){
                                 move('.j-tit').set('top','30px').duration('.5s').end(function(){
                                    move('#pic-j>.sec4-list').set('opacity','1').duration('2s').end()
                                 });
                            $('.aj-tit').bind('mouseover',function(){
                                 move('.aj-tit').set('top','30px').duration('.5s').end(function(){
                                     move('#pic-aj>.sec4-list').set('opacity','1').duration('2s').end()
                                    });
                                });
                            });
                           
                            })
                       })         
                    })
               
               });
                
               
                break;
            case 4:
                $('.demo img').each(function(){
                    $('.mydemo img').bind('mouseover',function() {
                        move(this).set('top','-20px').duration('1s').end();
                    $('.mydemo img').bind('mouseout',function() {
                         move(this).set('top','0px').duration('1s').end();
                        });
                    });
                })
                
                
                break;
               
            default:
                break;
            }
            
        },
        onLeave:function(link,index){
            switch(index){
            case 1:
                move('.section1 h1').scale(1).end(),
                move('.secp1').set('top','2000px').end()
                move('.secp2').set('top','2000px').end()
                move('.secp3').set('top','2000px').end()
                    
                
                break;
            case 2:
                move('.section2 h1').set('margin-left','0').end(),
                move('.sec2Bor').set('top','-4000px').duration('.1s').end();
                move('.sectionText').set('opacity','0').duration('.1s').end();
                break;

            case 3:
                move('.sec4-pic').set('top','-4000px').duration('.1s').end();
                move('#pic-h').set('left','0px').duration('.1s').end(),
                move('#pic-c').set('left','-216px').duration('.1s').end(),
                move('#pic-j').set('left','-432px').duration('.1s').end(),
                move('#pic-aj').set('left','-648px').duration('.1s').end(),
                move('.h-tit').set('top','120px').end(),
                move('.c-tit').set('top','120px').end(),
                move('.j-tit').set('top','140px').end(),
                move('.aj-tit').set('top','140px').end(),
                move('#pic-h>.sec4-list').set('opacity','0').end(),
                move('#pic-c>.sec4-list').set('opacity','0').end(),
                move('#pic-j>.sec4-list').set('opacity','0').end(),
                move('#pic-aj>.sec4-list').set('opacity','0').end();
                break;
            case 4:
                break;
            default:
                break;
            }
      
        }
            
    })

})



