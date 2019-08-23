//$(function(){
    //let page=0;
    //let lastPage=parseInt($("#slide img").length-1);
    //$("#slide img").css("display","none");
    //$("#slide img").eq(page).css("dislpay", "block");
    //function changePage(){
        //$("#slide img").fadeOut(1000);
        //$("#slide img").eq(page).fadeIn(1000);
    //}

    //let Timer;
    //function startTimer(){
    //Timer=setInterval(function(){
        //if (page === lastPage){
            //page = 0;
            //changePage();

        //} else {
            //page++;
            //changePage();
        //}

    //},5000);

    //}
//function stopTimer(){
    //ClearInterval(Timer);
//}

//startTimer();
    
//});


//slideshow クラスを持った要素ごとに処理を実行
$(function(){


$("#slideshow").each(function(){

    let $slides=$(this).find("img"),
    slideCount = $slides.length,
                 currentIndex = 0;


    $slides.eq(currentIndex).fadeIn();
    setInterval(showNextSlide,2000);
    function showNextSlide(){
        let nextIndex = (currentIndex + 1)% slideCount;
    $slides.eq(currentIndex).fadeOut();

    $slides.eq(nextIndex).fadeIn();
    currentIndex = nextIndex;
    }

})

})
