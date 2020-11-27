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
      $('body').css('background-color','rgba(0,0,0,0.0)');
      isBlackMode=0;
      wait(2).done(function(){
        $('.serifu-p').text("ねえねえ、聞いていもいい？");
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
      wait(1).done(function(){
        //$('.present').css('display','none');
        $('.present').css('opacity','0');
        $('body').css('background-color','rgba(0,0,0,0.8)');
        $(answerBtn).fadeOut();
      });
      isBlackMode=1;
    }else{
      $('.serifu-p').text("じゃあ、もういいや・・");
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
        $('.hart').addClass('emote-active');
        $('.onpu').removeClass('emote-active');
        $('#name').val("");
        $(answerBtn).fadeIn("slow",function(){});
      });    
    }else{
      yourName=$('#name').val();
      $('.serifu-p').text("じゃあ、教えてくれたお礼にプレゼントをあげるね。");
      //プレゼントラッパー表示
      $('.present').css('opacity','1');
    }
  });

  //当りクリック
  $('.hit').click(function(){
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
    $('.megane-serifu-p').text("ジンジャーブレッドマン！！");
  });
  //サンタクリック
  $('.santa').click(function(){
    $('.megane-serifu-p').text("サンタはあげない");
  });
  //トナカイクリック
  $('.tonakai').click(function(){
    $('.megane-serifu-p').text("それは食べられません。");
  });
  //雪だるまクリック
  $('.snowman').click(function(){
    $('.megane-serifu-p').text("かってに作って遊べばいい");
  });
  //ろうそくクリック
  $('.candle').click(function(){
    $('.megane-serifu-p').text("あちちっ");
  });
    //プレゼントクリック
  $('.hazure').click(function(){
    $('.megane-serifu-p').text("はずれ～");
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
      $('.megane-serifu-p').text("俺にとっては "　+ myName + " の笑顔が一番のプレゼント・・・" + yourName + " より");
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