window.addEventListener("mouseover",play);
window.addEventListener("click",play);
function play(){ 
    document.getElementById("aud").play();
}




var x = 0
//closing and opening section ---------------------

function normal(){
    $("#bar_1").css("transform","rotate(0deg)");
    $("#bar_2").css("transform","rotate(0deg)");
    $("#bar_3").css("transform","rotate(0deg)");
    $(".bar_content_container").css("left","-80vw");
    $(".bar_container").css("left","0vw");
    $("#primary").css("left","0vw");
    $(".containt").css("left","0vw");
}

function bar_function(){
    if (x==0){
        $("#bar_1").css("transform","rotate(45deg)");
        $("#bar_2").css("transform","rotate(-45deg)");
        $("#bar_3").css("transform","rotate(45deg)");
        $(".bar_content_container").css("left","0vw");
        $(".bar_container").css("left","80vw");
        $("#primary").css("left","80vw");
        $(".containt").css("left","80vw");
        x = 1;
    }
    else{
        normal();
        x = 0;
    }
}


function openCake(){
    normal();
    $("#birthday_cake").css("display","block");
}
function closeCake(){
    normal();
    $("#birthday_cake").css("display","none");
}
function openSpin(){
    normal();
    $("#spin_container").css("display","block");
}
function closeSpin(){
    normal();
    $("#spin_container").css("display","none");
}

function warning(){
    Swal.fire({
        icon: 'error',
        title: '???? ???? ???? ?? ?? ????',
        html: 'Dubey ji aap jiyo hazaro saal.',
        footer: '&copy All rights reserved !'
    });
}
//-------------------------------------------------


window.onload = function(){
    
    $(".loader_container").css("display","none");
    $(".bar_container").css("display","block");
    $("#primary").css("display","block");
    $(".containt").css("display","block");
    
    
    Swal.fire({
        icon: 'success',
        title: 'Welcome',
        html: 'Happy BIRTHDAY Prashant',
        footer: '&copy All rights reserved !'
    });
    
    
    
    
    
    
    /type writer effect logic --------------------/
    var _CONTENT = [ 
        "Hey There Dubey Ji", 
        "kaise hain ? ??", 
        "Maje me hi honge.", 
        "Accha Wait !",
        "Wish you a very very happy birthday",
        "हमारे प्रिय मित्र, दुबे जी को जन्मदिन की लख लख बधाईया एवं शुभकामनाएं🥳🎂🎉🎉🎈🍾🍾"
        "ab isko dekh lo",
        "upper left me teen line",
        "ko click kar do.",
        "Ab dekh ke ja ke birthday manao",
        "birthday manao aur enjoy kro ??",
        "Bye Bye... take care bro...?????"
    ];
    var _PART = 0;
    var _PART_INDEX = 0;
    var _INTERVAL_VAL;
    var _ELEMENT = document.querySelector("#text");
    var _CURSOR = document.querySelector("#cursor");
    
    function Type() { 
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX++;

        if(text === _CONTENT[_PART]) {
            _CURSOR.style.display = 'none';

            clearInterval(_INTERVAL_VAL);
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Delete, 50);
            }, 1000);
        }
    }

    function Delete() {
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX--;

        if(text === '') {
            clearInterval(_INTERVAL_VAL);

            if(_PART == (_CONTENT.length - 1))
                _PART = 0;
            else
                _PART++;
        
            _PART_INDEX = 0;

            setTimeout(function() {
                _CURSOR.style.display = 'inline-block';
                _INTERVAL_VAL = setInterval(Type, 200);
            }, 200);
        }
    }

    _INTERVAL_VAL = setInterval(Type, 100);
    /type writer logic ends ----------------------/
}
