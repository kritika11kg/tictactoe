$(document).ready(function(){
var count=0;
$(".row1 div,.row2 div,.row3 div").click(function(){
if(count%2==0)
{
$(this).text("X")
$(this).css({"background-image": "linear-gradient(to right,pink,blue)", "font-size": "500%","color":"white","position":"inherit"});
count++
}

else{
count++
$(this).text("O")
$(this).css({"background-image": "linear-gradient(to right,pink,blue)", "font-size": "500%","color":"white","position":"inherit"});
}
});
});
