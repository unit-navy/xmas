$(function(){
  var myName="";
  var yourName="";
  var answerBtn = $('.message-wrapper').find('.answer');
  var answerInput = $('.message-wrapper').find('.answer-input');
  var serifu = $('.message').find('.fukidasi-miffy');
  var isBlackMode = 0;
  //タイトルクリック
  $('#start').click(function(e){
   // $('.present').css('display','none');
    $('.present').css('opacity','0');
    if(isBlackMode==1){
      $('.serifu-p').text("反省した？");
    }else{
      $(serifu).fadeIn("slow",function(){
        $('.serifu-p').text("ねえねえ、聞いていもいい？");
        $('.emote').find('.emote-active').removeClass('emote-active');
        $('.onpu').addClass('emote-active');
      });
    }
    //はい いいえ を表示
    $(answerBtn).fadeIn("slow",function(){});
  });
  
  //はい選択
  $('#yes').click(function(){
    $(answerBtn).fadeOut();
    if (isBlackMode==1){
      $('.serifu-p').text("じゃあ、ゆるしてあげる");
      $('.emote').find('.emote-active').removeClass('emote-active');
      $('body').css('background-color','rgba(0,0,0,0.0)');
      isBlackMode=0;
      wait(2).done(function(){
        $('.serifu-p').text("ねえねえ、聞いていもいい？");
        $('.onpu').addClass('emote-active');
        $(answerBtn).fadeIn("slow",function(){});
      });
    }else{
      //次の質問表示
      if($('.serifu-p').text()=="すきな人はいる？"){
        $('.serifu-p').text("ドキドキだね！おしえて");
      }else{
        $('.serifu-p').text("あなたの名前は？");
      }
      $(answerInput).fadeIn("slow",function(){});    
    }
  });
  //いいえ選択
  $('#no').click(function(){
    if($('.serifu-p').text()=="すきな人はいる？"){
      $('.serifu-p').text("さびしいひと・・");
      $('.emote').find('.emote-active').removeClass('emote-active');
      $('.namida').addClass('emote-active');
      wait(1).done(function(){
        //$('.present').css('display','none');
        $('.present').css('opacity','0');
        $('body').css('background-color','rgba(0,0,0,0.8)');
        $(answerBtn).fadeOut();
      });
      isBlackMode=1;
    }else{
      $('.serifu-p').text("じゃあ、もういいや・・");
      $('.emote').find('.emote-active').removeClass('emote-active');
      $('.ikari').addClass('emote-active');
      wait(1).done(function(){
        //$('.present').css('display','none');
        $('.present').css('opacity','0');
        $('body').css('background-color','rgba(0,0,0,0.8)');
        $(answerBtn).fadeOut();
      });
      isBlackMode=1;
    }
  });
  
  //入力確定
  $('#enter').click(function(){
    $(answerInput).fadeOut();
    if($('.serifu-p').text()=="あなたの名前は？"){
      myName=$('#name').val();
      $('.serifu-p').text(myName+"さんだね");
      wait(1).done(function(){
        $('.serifu-p').text("すきな人はいる？");
        $('.emote').find('.emote-active').removeClass('emote-active');
        $('.hart').addClass('emote-active');
        $('#name').val("");
        $(answerBtn).fadeIn("slow",function(){});
      });    
    }else{
      yourName=$('#name').val();
      $('.serifu-p').text("じゃあ、教えてくれたお礼にプレゼントをあげるね。");
      $('.emote').find('.emote-active').removeClass('emote-active');
      $('.onpu').addClass('emote-active');
      //プレゼントラッパー表示
      $('.present').css('opacity','1');
    }
  });

  //当りクリック
  $('.hit').click(function(){
    $('.emote-megane').find('.emote-active-megane').removeClass('emote-active-megane');
    $('.onpu-megane').addClass('emote-active-megane');
    $('.megane-serifu-p').text("正解！宝の地図を授けよう");
    wait(2).done(function(){
      //モーダル表示
      $('#modal-map').fadeIn("slow");
      //プレゼントの場所を点滅
      $('.modal').find('.point').addClass('pikapika');
    });
  });
  
  //ジンジャーブレッドクリック
  $('.ginger').click(function(){
    $('.emote-megane').find('.emote-active-megane').removeClass('emote-active-megane');
    $('.megane-serifu-p').text("ジンジャーブレッドマン！！");
    $('.ikari-megane').addClass('emote-active-megane');
  });
  //サンタクリック
  $('.santa').click(function(){
    $('.emote-megane').find('.emote-active-megane').removeClass('emote-active-megane');
    $('.megane-serifu-p').text("サンタはあげない");
    $('.ase-megane').addClass('emote-active-megane');
  });
  //トナカイクリック
  $('.tonakai').click(function(){
    $('.emote-megane').find('.emote-active-megane').removeClass('emote-active-megane');
    $('.megane-serifu-p').text("それは食べられません。");
    $('.namida-megane').addClass('emote-active-megane');
  });
  //雪だるまクリック
  $('.snowman').click(function(){
    $('.emote-megane').find('.emote-active-megane').removeClass('emote-active-megane');
    $('.megane-serifu-p').text("かってに作って遊べばいい");
  });
  //ろうそくクリック
  $('.candle').click(function(){
    $('.emote-megane').find('.emote-active-megane').removeClass('emote-active-megane');
    $('.megane-serifu-p').text("あちちっ");
    $('.hart-megane').addClass('emote-active-megane');
  });
    //プレゼントクリック
  $('.hazure').click(function(){
    $('.emote-megane').find('.emote-active-megane').removeClass('emote-active-megane');
    $('.megane-serifu-p').text("はずれ～");
  });
  //メガネクリック
  $('#megane-click').click(function(){
    $('.emote-megane').find('.emote-active-megane').removeClass('emote-active-megane');
    $('.megane-serifu-p').text("俺はプレゼントじゃない");
    $('.hart-megane').addClass('emote-active-megane');
  });

  //モーダル閉じるアイコン
  $('.close-modal').click(function(){
    $('#modal-map').fadeOut("slow");
  });

  //見つけたボタン
  $('.end').click(function(){
    $('#modal-map').fadeOut("slow");
    $('.serifu-p').text("いいものもらえた？");
    $('.megane-serifu-p').text("プレゼントは受取れたかな？");
    wait(2).done(function(){
      $('.msg').html('俺にとっては、大好きな <br>'　+ myName + ' の笑顔が一番のプレゼント・・・');
      //$('.msg').text('俺にとっては/r/n '　+ myName + ' の笑顔が一番のプレゼント・・・');
      $('.from').text(yourName + "　より")
      $('.msgcard-wrapper').show();
      //アニメーション アニメーションをつけたいテキストを指定
      $('.msg').textillate({
        selector: '.texts',
        loop: true,
        minDisplayTime: 1000,
        initialDelay: 1000,
        in: {
          effect: 'tada',
          delayScale: 1.5,
          delay: 50,
          sync: false,
          reverse: false,
          shuffle: false,
          callback: function () {}
        },
        out: {
          effect: 'tada',
          delayScale: 1.5,
          delay: 50,
          sync: false,
          reverse: false,
          shuffle: true,
          callback: function () {}
        },
        autoStart: true,
        inEffects: ['fadeIn'],
        outEffects: [ 'hinge' ],
        callback: function () {},
        type: 'char'
      });

    });
  });
  //指定秒数待機関数
  function wait(sec) {
    // jQueryのDeferredを作成します。
    var objDef = new $.Deferred;
    setTimeout(function () {
        // sec秒後に、resolve()を実行して、Promiseを完了します。
        objDef.resolve(sec);
    }, sec*1000);
    return objDef.promise();
  };
 


  //レスポンシブ
  jQuery( 'img[usemap]' ).rwdImageMaps();







});