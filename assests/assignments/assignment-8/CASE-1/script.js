let count = 6;
let letters = ["A","B","C","D","E","F"];

let changeLetters = () => {
    let tempArray = [];
    letters.forEach((result, index) => {
        $(".letter").eq(index).text(result);

        if(index == 5){
            tempArray[0] = result;
        }else{
            tempArray[index + 1] = result;
        }
    });

    letters = tempArray;
}

setInterval(changeLetters, 2000);