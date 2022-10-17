// alert('Hello' + 'World');

// 関数（繰り返し使われる一連の処理を1つにまとめたもの）
// function 関数名(引数){
//   処理
//   return 戻り値;
// }


// メイン部分
// let alertString;
// alertString = addString("WebCamp");

// 作成した関数を呼び出す
// alert(alertString);

// 作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );

  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ";
  } else if(js_hand_num == 2){
    js_hand = "パー";
  }

  return js_hand;
}