function alertAnswer(){
    //足し算の対象の数値の取得
    var first = parseInt(document.getElementById('first').value);
    var second = parseInt(document.getElementById('second').value);
    //計算結果を表示
    alert(sum(first,second));
}