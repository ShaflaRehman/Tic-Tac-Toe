  //console.log('box is clicked');

let count = 0;
let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let draw = true;

console.dir(boxes);
let turnO = true;


const patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];


/*boxes.forEach((box = function () {
    
});*/
boxes.forEach(function (box) {
    box.addEventListener('click', function () {
        console.log('box is clicked!!');
        if (turnO) {
            ++count;
            box.innerHTML = 'X'
            turnO = false;
            box.disabled = true;
            check_winner();
            checkdraw();

        }
        else {
            ++count;
            box.innerHTML = 'O'
            turnO = true;
            box.disabled = true;
            check_winner();
            checkdraw();
        }
    });
});

reset.addEventListener('click', function () {
    boxes.forEach(function (box) {
        box.innerHTML = '';
        box.disabled = false;
        turnO = true;
        document.querySelector('#msg').innerText = '';
        draw = true;
        count = 0;

       
    });
});

function check_winner()
{
    let winX = true;
    for (pattern of patterns) {
        

            if ((boxes[pattern[0]].innerHTML == 'X') && (boxes[pattern[1]].innerHTML == 'X') && (boxes[pattern[2]].innerHTML == 'X')) {
                console.log('X wins');
                for (box of boxes) {
                    box.disabled = true;
                    turnO = true;
                }
                document.querySelector('#msg').innerText = ' Congratulations ! X wins . ';
                draw = false;
              

        }
        if ((boxes[pattern[0]].innerHTML == 'O') && (boxes[pattern[1]].innerHTML == 'O') && (boxes[pattern[2]].innerHTML == 'O')) {
            console.log('O wins');
            for (box of boxes) {
                box.disabled = true;
                turnO = true;
            }
            document.querySelector('#msg').innerText = ' Congratulations ! O wins . ';
            draw = false;
            
        }
    }

}
function checkdraw() {
    if ((count == 9) && (draw==true))
    {
        console.log('true');
        document.querySelector('#msg').innerText = ' Its a draw ';
    }
}



class User {
    constructor(n, e) {
        this.name = n;
        this.email = e;
    }

    viewdata() {
        console.log('website data');
    }
}

class Admin extends User {
    constructor(n, e) {
        super(n, e);

    }

    editdata()
    {
        

    }
}