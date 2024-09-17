/*console.log('one');
console.log('true');
console.log('three');


function hello() {
    console.log('hello');

}

//setTimeout(hello, 4000);

setTimeout(function () {
    console.log('hello');
}, 4000);

console.log('four');
console.log('five');


function sum(a, b) {
    console.log(a + b);
}
function calculate(a, b, sum) {
    sum(a, b);
}



calculate(1, 2, sum); 


function getdata(id) {
    setTimeout(function () {
        console.log(id);
    }, 4000);
}

function getdata(data, nextdata) {
    setTimeout(function ()
    {
        console.log(data);
        setTimeout(function () {
            console.log(nextdata);

        }, 4000);

        }, 4000);

}
function getdata(id , nextdata) {
    setTimeout(function () {
        console.log(id);
        if (nextdata) {
            nextdata();
        }
        
    }, 4000);
}


//callback hell                               
getdata(1, function () {
    getdata(2, function () {
        getdata(3);
    });
});*/

let promise = new Promise(function (resolve, reject) {


});

function getdata(id, nextdata) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
           // resolve('success');
           // console.log(id);
           reject('network error');
            if (nextdata) {
                nextdata();
            }

        }, 8000);
    });
    
}


/*promise = getdata(3);
promise.then(function (res) {
    console.log('promise fulfilled !!', res);
});

promise.catch(function (err) {
    console.log('promise rejected !!', err);
});*/



function asyncF1() {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            console.log('data 1');
            resolve('successfully fetched data1');
            
        }, 4000);
        
        
    });
}




function asyncF2() {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            console.log('data 2');
            resolve('successfully fetched data2');
            
        }, 4000);
       
    });
}


/*console.log('fetching data1');
p1 = asyncF1();
p1.then(function (res) {
    console.log(res);
});

console.log('fetching data2');
p2 = asyncF2();

p2.then(function (res) {
    console.log(res);
});



//Chaining//



console.log('fetching data1');
p1 = asyncF1();
p1.then(function (res) {
    console.log(res);
    console.log('fetching data2');
    p2 = asyncF2();

    p2.then(function (res) {
        console.log(res);
    });

});*/

function getdata(id, nextdata) {
    setTimeout(function () {
        console.log(id);
        if (nextdata) {
            nextdata();
        }

    }, 4000);
}

function getdata(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(id);
            
            resolve('successfully printed the data');
        },4000);

    });
}

function api() {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('weather data');
            resolve(200);


        }, 8000);
    });

}


/*async function weatherdata() {
    await api();
    p1 = getdata(1);
    p1.then(function () {

        p2 = getdata(2);
        p2.then(function () {

            p3 = getdata(3);
        });
    });
}
*/
//weatherdata();



(async function () {
    await api();
    p1 = getdata(1);
    p1.then(function () {

        p2 = getdata(2);
        p2.then(function () {

            p3 = getdata(3);
        });
    });

})();



