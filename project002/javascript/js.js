$(document).ready(function(){


    // 실행문

    // 2뎁스메뉴1번 설정
    // gnb ul안에 li에 마우스가 들어갔을때,
    // ul이 자연스럽게 열려라 

    // $('.gnb>ul>li').mouseenter(function(){
    //     $(this).find('ul').stop().slideDown('fast')


    // })

    
    // $('.gnb>ul>li').mouseleave(function(){
    //     $(this).find('ul').stop().slideUp('fast')


    // });


    // 2뎁스메뉴 2번설정

    // gnb>ul>li 에 마우스가 들어갔을때, sub가 생겨나라.

    // $('.gnb>ul>li').mouseenter(function(){

    //     $('.sub').stop().animate({'height':'250px'},800)

    //     let i = $(this).index();
    //     $('.sub>div').removeClass('on')
    //     $('.sub>div').eq(i).addClass('on')
    // })


    // // X버튼을 누르면  sub가 사라져라.
    // $('.sub em').click(function(){
    //     $('.sub').stop().animate({'height':'0'},400)
    //     $(this).hide()
    //     $('.sub>div').removeClass('on')
    // })


    // 2뎁스메뉴설정 3번째

    $('.gnb>ul>li').mouseenter(function(){

        $('.sub3').css('top','100%')

        let i = $(this).index()
        $('.sub3>div>ul').removeClass('on')
        $('.sub3>div>ul').eq(i).addClass('on')
    })

    $('.gnb>ul>li').mouseleave(function(){

        $('.sub3').css('top','-250px')
    })

    $('.sub3').mouseenter(function(){

        $('.sub3').css('top','100%')
    })

    $('.sub3').mouseleave(function(){

        $('.sub3').css('top','-250px')
    })

    $('.sub3>div>ul').mouseenter(function(){
        $('.sub3>div>ul').removeClass('on')
        $(this).addClass('on')
    })



    // 장바구니설정1

    $('.util li').eq(2).click(function(e){
        e.preventDefault()

        $('.shop').show();
        $('.shop1').stop().animate({'right':0},800)
    })

    $('.close').click(function(){

        $('.shop').hide();
        $('.shop1').stop().animate({'right':'-30%'},800)
    })


// hero 슬라이더 자동으로 돌아가기 
let i =0
setInterval(function(){
i++;

$('.slider ul').css('transform',`rotate(${90*i}deg)`)

},3000)

let a=0;
setInterval(function(){
a++;
if(a==4)a=0;
// console.log(a)
$('.slider_btn li').removeClass('on');
$('.slider_btn li').eq(a).addClass('on')


},3000);


// 화면이 브랜드를 보고있을때, 패럴렉스스크롤링이 일어나라. 

$(window).scroll(function(){

    let sc= $(this).scrollTop();
    console.log(sc);
    let b_top = $(window).height();
    let p_top = $('.product').offset().top;

    // 첫번째 구간 953 보다 클때
 
    if(sc>=b_top-200){

        $('.brand>div').eq(0).find('.txt_box').addClass('on')
        $('.brand>div').eq(0).find('.img_box').addClass('on')
    }
    //  두번째 구간 953*2 보다 클때 
    if(sc >= (b_top*2)-200 ){

        $('.brand>div').eq(1).find('.txt_box').addClass('on')
        $('.brand>div').eq(1).find('.img_box').addClass('on')
    } 
    // 세번째 구간 953*3 보다 클때 
    if(sc >= (b_top*3)-200 ){

        $('.brand>div').eq(2).find('.txt_box').addClass('on')
        $('.brand>div').eq(2).find('.img_box').addClass('on')
    } 


    if(sc< b_top){

        $('.brand>div').eq(0).find('.txt_box').removeClass('on')
        $('.brand>div').eq(0).find('.img_box').removeClass('on')
        $('.brand>div').eq(1).find('.txt_box').removeClass('on')
        $('.brand>div').eq(1).find('.img_box').removeClass('on')
        $('.brand>div').eq(2).find('.txt_box').removeClass('on')
        $('.brand>div').eq(2).find('.img_box').removeClass('on')
    }

    if(sc>= p_top){

        $('.brand>div').eq(0).find('.txt_box').removeClass('on')
        $('.brand>div').eq(0).find('.img_box').removeClass('on')
        $('.brand>div').eq(1).find('.txt_box').removeClass('on')
        $('.brand>div').eq(1).find('.img_box').removeClass('on')
        $('.brand>div').eq(2).find('.txt_box').removeClass('on')
        $('.brand>div').eq(2).find('.img_box').removeClass('on')
    }


});



// 프로덕트 부분 리스트 이동페이지 만들기

let num = 0;

// p_btn 의 li를 클릭했을때 num의 숫자가 변해라.

$('.p_btn li').eq(0).click(function(){

if(num>0) num--;
$('.p_list ul').stop().animate({'left':`${-420*num}px`},1200)

})

$('.p_btn li').eq(1).click(function(){

    if(num<3) num++;

    $('.p_list ul').stop().animate({'left':`${-420*num}px`},1200)
})


// 컨텐츠영역 인터렉션설정

$('.btnBox li').eq(0).click(function(){

    $('.contents .bigBox .rightBox').addClass('on');
    $('.contents .bigBox .leftBox').addClass('on')
})



$('.btnBox li').eq(1).click(function(){

    $('.contents .bigBox .rightBox').removeClass('on');
    $('.contents .bigBox .leftBox').removeClass('on')
})




// 서브페이지연결하기

$('.gnb li').eq(0).click(function(e){
    e.preventDefault();
    $('#wrap').fadeOut()
    $('#sub01').fadeIn()



})


// logo를 클릭했을때 메인페이지가 나타나기 

$('.logo').click(function(){
    
    $('#sub01').fadeOut()
    $('#wrap').fadeIn()
 
});


// 장바구니 나왔다 들어가기 

let click = 0
$('.icon').click(function(){
    click++;
    if(click==2)click=0;
    console.log(click)

    if(click==1){
    $(this).parent('.shopping').addClass('on')
    }
    else{
        $(this).parent('.shopping').removeClass('on') 
    }


});


// 장바구니의 숫자올라가기
// 장바구니 상세설정

let cartNum= 0;

$('.cart p').click(function(e){
    e.preventDefault()
    cartNum++;
$('.icon span').text(cartNum);

$('.empty_cart').hide();

// t1의 p의 text 가져오기

let t1Txt = $(this).closest('li').find('.t1 p').text()

console.log(t1Txt)

// img 가져오기 
let t1Img = $(this).closest('li').find('img').attr('src')
console.log(t1Img)
// 금액가져오기
let t1Num = Number($(this).closest('li').find('.t1 span').text()) ;

console.log(t1Num)

let cart_txt = `<li>
                      <div>
                        <img src="${t1Img}" alt="">
                        <p>${t1Txt}</p>
                      </div>
                      <div>옵션정보</div>
                      <div>${t1Num}원</div>
                      <div>1</div>
                      </li> `

console.log(cart_txt);

$('.cart_page ul').append(cart_txt)




})





})