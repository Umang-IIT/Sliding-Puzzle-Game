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

cellWriter();

function swapClass(cell1,cell2){
    var temp = document.getElementById(cell1).className;
    var temp1 = document.getElementById(cell2).className;
    document.getElementById(cell1).className = temp1;
    document.getElementById(cell2).className = temp;
    cellWriter();
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