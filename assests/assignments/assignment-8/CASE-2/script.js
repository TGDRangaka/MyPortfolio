let count = 6;
let colors = ["#FE0000","#008001","#0000FE","#FFFF00","#FFBFCD","#EE82EF"];

let changeColor = () => {
    let tempArray = [];
    colors.forEach((result, index) => {
        $(".box").eq(index).css("background", result);

        if(index == 5){
            tempArray[0] = result;
        }else{
            tempArray[index + 1] = result;
        }
    });

    colors = tempArray;
}

setInterval(changeColor, 1000);