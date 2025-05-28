$(function() {
  // id属性がchange-colorの要素をクリックすると文字色を変化させる
  $('#change-color').on('click', function(){
    $('#target').css('color', 'red');
  });
// id属性がchange-textの要素をクリックすると文字内容を変化させる
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
  });
// id属性がfade-outの要素をクリックするとフェードアウトさせる
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });
// id属性がfade-inの要素をクリックするとフェードインさせる
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
});