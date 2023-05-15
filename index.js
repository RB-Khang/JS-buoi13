// bai 1 
// input gồm 2 biến: 
// biến cố định: tiền lương một ngày cho trước 
// biến số ngày làm việc do người dùng nhập
// => đặt biến cố định, dùng DOM lấy số liệu người dùng nhập và chuyển thành dạng số
// tạo button lấy thao tác người dùng để thực thi khối lệnh
// khối lệnh gồm:
// + dùng DOM lấy giá trị người dùng nhập và gán vào biến số ngày làm việc
// + tiến hành nhân để có kết quả số lương theo công thức và gán kết quả vào biến result1
// + hiển thị biến result1 trở lại giao diện html

var sPDay = 100000;
var btn1 = document.getElementById('btn__bt1');
btn1.onclick = function () {
    var dayWork = +document.getElementById('work__day').value;
    var Luong = dayWork * sPDay;
    var result1 = document.getElementById('salary1');
    result1.innerHTML ='Tổng lương là: ' + Luong.toLocaleString();
}

// output : tiền lương được trả lại theo biến result1 được thể hiện ở thẻ span trong html







// bai 2
// input gồm 5 số được người dùng nhập vào 
// chương trình sẽ dùng DOM lấy 5 biến này để xử lý và trả ra output là giá trị trung bình của 5 số đã nhập 
// Phương thức xử lý: tạo 1 nút bấm để lấy sự kiện người dùng thao tác, thực thi bằng cách dùng DOM lấy 5 biến người dùng nhập vào gán vào 5 biến num, tính và gán giá trị trung bình cho biến result 
// sau đó hiển thị ở thẻ span html với nội dung là biến result đã được tính 
var btn2 = document.getElementById("btn__bt2");
btn2.onclick = function () {
    var num1 = +document.getElementById('so__1').value;
    var num2 = +document.getElementById('so__2').value;
    var num3 = +document.getElementById('so__3').value;
    var num4 = +document.getElementById('so__4').value;
    var num5 = +document.getElementById('so__5').value;
    
    var trungBinh = (num1 + num2 + num3 + num4 + num5) / 5;
    
    var result2 = document.getElementById('average__number');
    result2.innerHTML = 'Giá trị trung bình là: ' + trungBinh;
}



// bai 3 
// input gồm 2 biến: biến cố định là tỉ giá USD cho trước và số USD cần quy đổi do người dùng nhập.
// Phương thức xử lý: tạo button để lấy sự kiện người dùng cần quy đổi. khi đó: 
// dùng DOM để lấy giá trị người dùng nhập và gán vào biến số USD cần quy đổi, thực hiện nhân với tỉ giá theo biến cố định và gán kết quả vào biến result 

var usdRate = 23500;
var btn3 = document.getElementById('btn__bt3');
btn3.onclick = function () {
    var usdMoney = +document.getElementById('usd__money').value;
    var vndMoney = usdMoney * usdRate;
    var result3 = document.getElementById('vnd__money');
    result3.innerHTML = 'Số tiền quy đổi là: ' + vndMoney.toLocaleString('vi-VI', { style: 'currency', currency: 'VND' });
}

// output: số tiền quy đổi từ USD -> VND được trả về html ở thẻ span hiển thị giá trị biến result


// bai 4 
// input gồm 2 giá trị chiều dài và chiều rộng của hình chữ nhật do người dùng nhập 
// Phương thức xử lý: tạo một nút để người dùng thao tác, trong đó, tạo và gán 2 biến chiều dài và chiều rộng bởi giá trị thu được từ DOM, sau đó tạo 2 biến kết quả về chu vi và diện tích, gán giá trị cho 2 biến này bằng công thức tính chu vi và diện tích 
// output là giá trị chu vi và diện tích của hình chữ nhật đã được tính, trả về giao diện htmt bằng cách gán giá trị 2 biến chu vi và diện tích vào thẻ span 
var btn4 = document.getElementById('btn__bt4');
btn4.onclick = function () {
    var chieuDai = +document.getElementById('chieu__dai').value;
    var chieuRong = +document.getElementById('chieu__rong').value;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    document.getElementById('ket__qua').innerHTML = 'Chu vi là: ' + chuVi + '  ; Diện tích là ' + dienTich;
}


// bai 5 
// input là số có hai chữ số do người dùng nhập 
// output là tổng ký số (tổng số hàng đơn vị cộng số hàng chục) của số do người dùng nhập 
// phương thức xử lý: khi người dùng ấn vào nút tính toán, chương trình sẽ thực hiện 
// dùng DOM để lấy số người dùng đã nhập và gán cho biến sumBt5 
// tạo thêm 2 biến khác, dùng chia lấy dư để lấy giá trị cho biến số hàng đơn vị, dùng công thức để lấy giá trị và gán cho biến số hàng chục 
// tạo và gán giá trị cho biến tongKySo là tổng của 2 biến hàng đơn vị và hàng chục vừa tạo 
// hiển thị qua html bằng cách gán biến tongKySo vao thẻ span 
var btn5 = document.getElementById('btn__bt5');
btn5.onclick = function () {
    var numBt5 = +document.getElementById('num__bt5').value;
    var soHangDonVi = numBt5 % 10;
    var soHangChuc = (numBt5 - soHangDonVi) / 10;
    var tongKySo = soHangChuc + soHangDonVi;
    document.getElementById('tong__ky__so').innerHTML = 'Tổng ký số là: ' + tongKySo;
}





