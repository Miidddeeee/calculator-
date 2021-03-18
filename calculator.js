var one = document.getElementById("one"),
    two = document.getElementById("two"),
    three = document.getElementById("three"),
    four = document.getElementById("four"),
    five = document.getElementById("five"),
    six = document.getElementById("six"),
    seven = document.getElementById("seven"),
    eight = document.getElementById("eight"),
    nine = document.getElementById("nine"),
    zero = document.getElementById("zero"),
    clear = document.getElementById("clear"),
    plus = document.getElementById("plus"),
    minus = document.getElementById("minus"),
    divide = document.getElementById("divide"),
    input = document.getElementById("input"),
    back = document.getElementById("back"),
    times = document.getElementById("times");

one.onclick = function(){
    input.value += 1 ;
};

two.onclick = function(){
    input.value += 2 ;
};

three.onclick = function(){
    input.value += 3 ;
};

four.onclick = function(){
    input.value += 4 ;
};

five.onclick = function(){
    input.value += 5 ;
};

six.onclick = function(){
    input.value += 6 ;
};

seven.onclick = function(){
    input.value += 7 ;
};

eight.onclick = function(){
    input.value += 8 ;
};

nine.onclick = function(){
    input.value += 9 ;
};

zero.onclick = function(){
    input.value += 0 ;
};

times.onclick = function(){
    input.value += "*" ;
};

plus.onclick = function(){
    input.value += "+" ;
};

minus.onclick = function(){
    input.value += "-" ;
};

divide.onclick = function(){
    input.value += "/" ;
};
clear.onclick = function(){
    input.value = "" ;
};

equal.onclick = function(){
    input.value = eval(input.value)
};

back.onclick = function(){
    var mhe = document.getElementById("input").value;
    document.getElementById("input").value = mhe.substr(0, mhe.length - 1 );
}

