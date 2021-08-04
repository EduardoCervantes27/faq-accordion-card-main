$(document).ready(function(){
    //Accordion section
    let tabText1 = $(".tab1 p");
    tabText1.hide();
    let tabText2 = $(".tab2 p");
    tabText2.hide();
    let tabText3 = $(".tab3 p");
    tabText3.hide();
    let tabText4 = $(".tab4 p");
    tabText4.hide();
    let tabText5 = $(".tab5 p");
    tabText5.hide();

    let tabTitle1  = $(".tab1 .tab-title");
    let tabTitle2  = $(".tab2 .tab-title");
    let tabTitle3  = $(".tab3 .tab-title");
    let tabTitle4  = $(".tab4 .tab-title");
    let tabTitle5  = $(".tab5 .tab-title");

    tabTitle1.click(function(){
        tabText1.slideToggle();
        $(".tab1 .tab-title img").toggleClass("rotated");
    })
    tabTitle2.click(function(){
        tabText2.slideToggle();
        $(".tab2 .tab-title img").toggleClass("rotated");
    })
    tabTitle3.click(function(){
        tabText3.slideToggle();
        $(".tab3 .tab-title img").toggleClass("rotated");
    })
    tabTitle4.click(function(){
        tabText4.slideToggle();
        $(".tab4 .tab-title img").toggleClass("rotated");
    })
    tabTitle5.click(function(){
        tabText5.slideToggle();
        $(".tab5 .tab-title img").toggleClass("rotated"); 
    })
});