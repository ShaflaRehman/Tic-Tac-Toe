/*
let promise = fetch(URL);
//console.log(promise);


(async function () {
     console.log('fetching data1');
    let response = await fetch(URL);
    console.log(response);
    let data =await  response.json();
    console.log(data[0].text);
    document.querySelector('#fact').innerHTML = data[0].text;

})();*/

//By promise chains

function facts() {
    const URL = 'https://cat-fact.herokuapp.com/facts';
    fetch(URL).then(function (response) {
        response.json().then(function (data) {

            document.querySelector('#fact').innerHTML = data[0].text;
        });

    });
}


const URL = 'https://cat-fact.herokuapp.com/facts';


facts();