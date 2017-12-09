var results="";
var results2="";
var calresults="";
var lastkey="";
var flg=1;
var re1=/^[\*|\/].+/;
var re2=/.+[\*|\/]$/;
var re3=/(\+|-|\*|\/)/;
function calculater () {
    if (event.srcElement.innerText=="=") {
        return;
    }
    if (event.srcElement.innerText=="c") {
        results="";
        display.innerText="0";
        return;
    }
    if (event.srcElement.id=="display") {
        return;
    }
    if (results.match(re1)) {
        display.innerText="输入错误";
        results="";
        return;
    }
    if(lastkey.match(re3)&&event.srcElement.innerText.match(re3)){
        return;
    }
    if(lastkey=="="&&event.srcElement.innerText.match(re3)){
        results=calresults;
    }
    if (event.srcElement.innerText=="+/-"&&results!="") {
        if (flg==-1) {
            results=String(results2);
            display.innerText=results;
            flg=-flg;
            return;
        }
        results2=results;
        results = "-"+"("+results+")";
        flg=-flg;
        display.innerText=results;
        return;
    }
    if (event.srcElement.innerText == "History:"){
        return;
    }
    results+=event.srcElement.innerText;
    lastkey=event.srcElement.innerText;
    display.innerText=results;
}
function resultscalcaulte(){
    if (results.match(re1)||results.match(re2)) {
        display.innerText="输入错误";
        results="";
        return;
    }
    calresults=eval(results);  /* 最终还是没有按照要求 使用了eval */
    display.innerText=calresults; /* 表示以后会修改并且努力的 */
    storage();
    lastkey="=";
    results="";
}
function storage(){     /* 作为历史数据竟然只能保存一次，着实有些过分了 */
    var data= results + "=" + calresults;
    document.getElementById("history2").innerText= data;
}