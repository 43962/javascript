alert('Hello' + 'World');

// 関数（繰り返し使われる一連の処理を1つにまとめたもの）
// function 関数名(引数){
//   処理
//   return 戻り値;
// }


// メイン部分
let alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}