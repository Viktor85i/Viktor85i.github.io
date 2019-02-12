$(function() {
/* 1 задание*//////////////////////////////
		var num1, num2;
	function inputNumbers() {
		num1 = parseInt($("#num1").val());
		num2 = parseInt($("#num2").val());
	}
	
	function getSum() {
		return num1 + num2;
	}
	
	function getSub() {
		return num1 - num2;
	}
	
	function getMult() {
		return num1 * num2;
	}
	
	function getDiv() {
		return num1 / num2;
	}
	function outputRes(res) {
			$("#result").val(res);
	}
	
	$("#plus").click(function(){
		inputNumbers(); 
		outputRes(getSum());
	});
	
	$("#min").click(function(){
		inputNumbers(); 
		outputRes(getSub());
	});
	
	$("#mult").click(function(){
		inputNumbers(); 
		outputRes(getMult());
	});
	
	$("#div").click(function(){
		inputNumbers();
		outputRes(getDiv());
	});
////////////////////////////////////////////
/*2 Задание *////////////////////////////////
$("#button").click( function(){
	$('#wordi').val($('#wordi').val().toUpperCase());
    
  });
/////////////////////////////////////////////
/*3 Задание *////////////////////////////////	

	var num3, num4;
	function inputNumb() {
		num3 = parseInt($("#num3").val());
		num4 = parseInt($("#num4").val());
	}
	
	function getSumm() {
		return num3 + num4;
	}
	
	function getSubb() {
		return num3 - num4;
	}
	
	function getMull() {
		return num3 * num4;
	}
	
	function getDivv() {
		return num3 / num4;
	}
	function outputRess(result) {
			$("#result3").val(result);
	}
	$("#plus3").click(function(){
		inputNumb(); 
		outputRess(getSumm());
	});
	
	$("#min3").click(function(){
		inputNumb(); 
		outputRess(getSubb());
	});
	
	$("#mult3").click(function(){
		inputNumb(); 
		outputRess(getMull());
	});
	
	$("#div3").click(function(){
		inputNumb();
		outputRess(getDivv());
	});
//////////////////////////////////////////	
	/*4 Задание*///////////////////////////
	var salaries = {
		"Вася": 100,
		"Петя": 300,
		"Даша": 250
	};
    var sum = 0;
	for (var key in salaries) {
		sum += salaries[key];
	}
	alert("Задание 4 - Сумма зарплат равна: " + sum);
////////////////////////////////////////////
/*5 Задание*////////////////////////////////
	var salaries = {
		"Вася": 100,
		"Петя": 300,
		"Даша": 250
	};
	var num = 0;
	var name = "";
	for (var key in salaries) {
  		if (num < salaries[key]) {
    		num = salaries[key];
    		name = key;
  		}
	}
	alert("Задание 5 - Ответ: " + name );
////////////////////////////////////////////
/*6 Задание*////////////////////////////////
	var number = +prompt("Введите целое число:", "");
	function writeNumber(n) {
        if (n == 1) {
            return "1";
        }
        return writeNumber(n - 1) + " " + n;
    }
        alert("Задание 6 - Ответ: " + writeNumber(number)); 

/////////////////////////////////////////////////
/*7 Задание*/////////////////////////////////////
	// 1й способ - через цикл
	var b = +prompt("Введите целое число:", "");
	function sumAll(x) {
  		var sum = 0;
  		for (var i = 1; i <= x; i++) {
    		sum += i;
  		}
  		return sum;
	}
	alert("Задание 7(через цикл) - Сумма чиссел: " + sumAll2(b));
	// 2й способ - через рекурсию
	function sumAll2(c) {
  		if (c == 1) {
  			return 1;
  		}
  		return c + sumAll2(c - 1);
	}
	alert("Задание 7(через рекурсию) - Сумма чиссел: " + sumAll2(b));
////////////////////////////////////////////////
/*8 задание*////////////////////////////////////
	// Через SetInterval
	function printNum() {
  		var i = 1;
  		var timerId = setInterval(function() {
    		console.log(i);
    		if (i == 20) clearInterval(timerId);
    			i++;
  		}, 100);
	}
	printNum();
	// Через рекурсивный SetTimeOut
	function printNumbers() {
		var i = 1;
    	var timerId = setTimeout(function start() {
	    	console.log(i);
	    	if (i < 20) setTimeout(start, 100);
	    		i++;
	  	}, 100);
	}
	printNumbers();










});