document.getElementById("gradient").addEventListener('click', function(event) {
    event.preventDefault();
    var type = '';
    if (document.getElementById('selector').options[document.getElementById('selector').selectedIndex].value != '') {
        type = document.getElementById('selector').options[document.getElementById('selector').selectedIndex].value + '&';
    }
    fetch('https://x-colors.herokuapp.com/api/random?' + type + 'number=' + document.getElementById("number").value).then(function(response) {
        return response.json();
    }).then(function(json) {
        var str = 'linear-gradient(';
        if (document.getElementById("angle").value != '') {
            str += document.getElementById('angle').value + 'deg, ';
        }
        for (var i = 0; i < json.length; i++) {
            str += json[i].hex + '55';
            if (i != json.length - 1) {
                str += ', ';
            }
        }
        str += ')';
        document.getElementById("overlay").style.backgroundImage = str;
    });
});

document.getElementById("setText").addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById("bottomText").innerHTML = document.getElementById("bottomTextInput").value;
    document.getElementById("topText").innerHTML = document.getElementById("topTextInput").value;
});

document.getElementById("newPic").addEventListener('click', function(event) {
    event.preventDefault();
    fetch('https://random.dog/woof.json').then(function(response) {
        return response.json();
    }).then(function(json) {
        document.getElementById("parent").style.backgroundImage = 'url(' + json.url.toString() + ')';
    })
});