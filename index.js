// bai 1 
var sPDay = 100000;
var btn1 = document.getElementById('btn__bt1');
btn1.onclick = function () {
    var dayWork = document.getElementById('work__day').value * 1;
    var Luong = dayWork * sPDay;
    var result1 = document.getElementById('salary1');
    result1.innerHTML = Luong;
}



// bai 2
var btn2 = document.getElementById("btn__bt2");
btn2.onclick = function () {
    var num1 = document.getElementById('so__1').value * 1;
    console.log(num1);
    var num2 = document.getElementById('so__2').value * 1;
    var num3 = document.getElementById('so__3').value * 1;
    var num4 = document.getElementById('so__4').value * 1;
    var num5 = document.getElementById('so__5').value * 1;
    var trungBinh = (num1 + num2 + num3 + num4 + num5) / 5;
    console.log(trungBinh)
    var result2 = document.getElementById('average__number');
    result2.innerHTML = trungBinh;
}



// bai 3 
var usdRate = 235000;
var btn3 = document.getElementById('btn__bt3');
btn3.onclick = function () {
    var usdMoney = document.getElementById('usd__money').value * 1;
    var vndMoney = usdMoney * usdRate;
    var result3 = document.getElementById('vnd__money');
    result3.innerHTML = vndMoney;
}


// bai 4 
var btn4 = document.getElementById('btn__bt4');
btn4.onclick = function () {
    var chieuDai = document.getElementById('chieu__dai').value* 1;
    var chieuRong = document.getElementById('chieu__rong').value *1;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    console.log(chuVi)
    document.getElementById('chu__vi').innerHTML = chuVi;
    document.getElementById('dien__tich').innerHTML = dienTich;
}


// bai 5 
var btn5 = document.getElementById('btn__bt5');
btn5.onclick = function() {
    var numBt5 = parseInt(document.getElementById('num__bt5').value);
    var soHangDonVi = numBt5%10;
    var soHangChuc = (numBt5 - soHangDonVi)/10;
    var tongKySo = soHangChuc + soHangDonVi;
    document.getElementById('tong__ky__so').innerHTML = tongKySo;
}




