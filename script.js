function cellWriter(){
    document.getElementsByClassName("tile1")[0].innerHTML="1";
    document.getElementsByClassName("tile2")[0].innerHTML="2";
    document.getElementsByClassName("tile3")[0].innerHTML="3";
    document.getElementsByClassName("tile4")[0].innerHTML="4";
    document.getElementsByClassName("tile5")[0].innerHTML="5";
    document.getElementsByClassName("tile6")[0].innerHTML="6";
    document.getElementsByClassName("tile7")[0].innerHTML="7";
    document.getElementsByClassName("tile8")[0].innerHTML="8";
    document.getElementsByClassName("tile9")[0].innerHTML="9";
    document.getElementsByClassName("tile10")[0].innerHTML="10";
    document.getElementsByClassName("tile11")[0].innerHTML="11";
    document.getElementsByClassName("tile12")[0].innerHTML="12";
    document.getElementsByClassName("tile13")[0].innerHTML="13";
    document.getElementsByClassName("tile14")[0].innerHTML="14";
    document.getElementsByClassName("tile15")[0].innerHTML="15";
    document.getElementsByClassName("tile16")[0].innerHTML=" ";

}

function swapClass(cell1,cell2){
    var temp = document.getElementById(cell1).className;
    var temp1 = document.getElementById(cell2).className;
    document.getElementById(cell1).className = temp1;
    document.getElementById(cell2).className = temp;
    cellWriter();
    colorChanger();
    return;
}

function clickCell(row,column){
    var cell_class = document.getElementById("cell"+row+column).className;
    if(cell_class != "tile16"){
        if((+row+1)<=4&&(+row+1)>=1){
        if(document.getElementById("cell"+(+row+1)+column).className=="tile16") swapClass("cell"+row+column,"cell"+(+row+1)+column);
        }
        if((+row-1)<=4&&(+row-1)>=1){
        if(document.getElementById("cell"+(+row-1)+column).className=="tile16") swapClass("cell"+row+column,"cell"+(+row-1)+column);
        }
        if((+column+1)<=4&&(+column+1)>=1){
        if(document.getElementById("cell"+row+(+column+1)).className=="tile16") swapClass("cell"+row+column,"cell"+row+(+column+1));
        }
        if((+column-1)<=4&&(+column-1)>=1){
        if(document.getElementById("cell"+row+(+column-1)).className=="tile16") swapClass("cell"+row+column,"cell"+row+(+column-1));
        }
    }

    return;
}

cellWriter();
colorChanger();
function colorChanger(){
if(document.getElementById("cell11").className=="tile1") document.getElementById("cell11").style.backgroundColor = "red";
else if(document.getElementById("cell11").className=="tile16") document.getElementById("cell11").style.backgroundColor = "grey";
else document.getElementById("cell11").style.backgroundColor = "orange";

if(document.getElementById("cell12").className=="tile2") document.getElementById("cell12").style.backgroundColor = "red";
else if(document.getElementById("cell12").className=="tile16") document.getElementById("cell12").style.backgroundColor = "grey";
else document.getElementById("cell12").style.backgroundColor = "orange";

if(document.getElementById("cell13").className=="tile3") document.getElementById("cell13").style.backgroundColor = "red";
else if(document.getElementById("cell13").className=="tile16") document.getElementById("cell13").style.backgroundColor = "grey";
else document.getElementById("cell13").style.backgroundColor = "orange";

if(document.getElementById("cell14").className=="tile4") document.getElementById("cell14").style.backgroundColor = "red";
else if(document.getElementById("cell14").className=="tile16") document.getElementById("cell14").style.backgroundColor = "grey";
else document.getElementById("cell14").style.backgroundColor = "orange";

if(document.getElementById("cell21").className=="tile5") document.getElementById("cell21").style.backgroundColor = "red";
else if(document.getElementById("cell21").className=="tile16") document.getElementById("cell21").style.backgroundColor = "grey";
else document.getElementById("cell21").style.backgroundColor = "orange";

if(document.getElementById("cell22").className=="tile6") document.getElementById("cell22").style.backgroundColor = "red";
else if(document.getElementById("cell22").className=="tile16") document.getElementById("cell22").style.backgroundColor = "grey";
else document.getElementById("cell22").style.backgroundColor = "orange";

if(document.getElementById("cell23").className=="tile7") document.getElementById("cell23").style.backgroundColor = "red";
else if(document.getElementById("cell23").className=="tile16") document.getElementById("cell23").style.backgroundColor = "grey";
else document.getElementById("cell23").style.backgroundColor = "orange";

if(document.getElementById("cell24").className=="tile8") document.getElementById("cell24").style.backgroundColor = "red";
else if(document.getElementById("cell24").className=="tile16") document.getElementById("cell24").style.backgroundColor = "grey";
else document.getElementById("cell24").style.backgroundColor = "orange";

if(document.getElementById("cell31").className=="tile9") document.getElementById("cell31").style.backgroundColor = "red";
else if(document.getElementById("cell31").className=="tile16") document.getElementById("cell31").style.backgroundColor = "grey";
else document.getElementById("cell31").style.backgroundColor = "orange";

if(document.getElementById("cell32").className=="tile10") document.getElementById("cell32").style.backgroundColor = "red";
else if(document.getElementById("cell32").className=="tile16") document.getElementById("cell32").style.backgroundColor = "grey";
else document.getElementById("cell32").style.backgroundColor = "orange";

if(document.getElementById("cell33").className=="tile11") document.getElementById("cell33").style.backgroundColor = "red";
else if(document.getElementById("cell33").className=="tile16") document.getElementById("cell33").style.backgroundColor = "grey";
else document.getElementById("cell33").style.backgroundColor = "orange";

if(document.getElementById("cell34").className=="tile12") document.getElementById("cell34").style.backgroundColor = "red";
else if(document.getElementById("cell34").className=="tile16") document.getElementById("cell34").style.backgroundColor = "grey";
else document.getElementById("cell34").style.backgroundColor = "orange";

if(document.getElementById("cell41").className=="tile13") document.getElementById("cell41").style.backgroundColor = "red";
else if(document.getElementById("cell41").className=="tile16") document.getElementById("cell41").style.backgroundColor = "grey";
else document.getElementById("cell41").style.backgroundColor = "orange";

if(document.getElementById("cell42").className=="tile14") document.getElementById("cell42").style.backgroundColor = "red";
else if(document.getElementById("cell42").className=="tile16") document.getElementById("cell42").style.backgroundColor = "grey";
else document.getElementById("cell42").style.backgroundColor = "orange";

if(document.getElementById("cell43").className=="tile15") document.getElementById("cell43").style.backgroundColor = "red";
else if(document.getElementById("cell43").className=="tile16") document.getElementById("cell43").style.backgroundColor = "grey";
else document.getElementById("cell43").style.backgroundColor = "orange";

}