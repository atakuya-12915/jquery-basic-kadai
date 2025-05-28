$(function() {
  // class属性がbtnの要素をクリックするとイベント実行
  $('.btn').on('click', function(){
    // class属性がtext-boxの要素（テキストボックス）のテキストを書き換え
    $('.text-box').val('クリックしました!');
  });
});