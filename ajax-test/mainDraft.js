const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function writeToDocument(type) {
    getData(type, function(data) {
        document.getElementById("data").innerHTML = data;
    });
}



/*function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://swapi.co/api/");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data){
    console.log(data);
}
getData(printDataToConsole);*/

/*getData(function(data){
    console.log(data);
});*/

//Version 1

/*var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://swapi.co/api/");
xhr.send();

function setData(jsonData){
    data = jsonData;
}

xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        //document.getElementById("data").innerHTML = thisresponse;
        //console.log(typeof(this.responseText)); - string
        //console.log(typeof(JSON.parse(this.responseText))); - object
        //console.log(JSON.parse(this.responseText)); - see all the elements of the object
        //data = this.response;//
        //console.log(data);
        setData(JSON.parse(this.responseText));
    }
};

    setTimeout(function(){
    console.log(data);
    },500);
*/

