//event pada saat link di klik
$('.page-scroll').on('click',function(e){

 //ambil isi href
  var tujuan= $(this).attr('href');
  //tangkpa elemen yang bersangkutan
  var elemenTujuan=$(tujuan);
//pindahkan scroll //swing/
$('html,body').animate({
scrollTop:elemenTujuan.offset().top -50
},1250,'easeInOutExpo');
e.preventDefault();
});

//about
$(window).on('load',function(){
       $('.pkiri').addClass('pmuncul');
       $('.pkanan').addClass('pmuncul');
       
       
});


 
//parralax
$(window).scroll(function(){
   var wScroll= $(this).scrollTop();

//jmbotron
 $('.jumbotron img').css({
         'transform':'translate(0px,'+wScroll/4+'%)'
 });
 $('.jumbotron h1').css({
         'transform':'translate(0px,'+wScroll/2+'%)'
 });
 $('.jumbotron h4').css({
         'transform':'translate(0px,'+wScroll/1.2+'%)'
 });

 //portfolio
 if(wScroll> $('.portfolio').offset().top - 300 ){
        $('.portfolio .img-thumbnail').each(function(i){
                setTimeout(function(){
                        $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
                },300* (i+1));
        })
        
        
 }
});
