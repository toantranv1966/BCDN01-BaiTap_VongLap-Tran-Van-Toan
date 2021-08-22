/**
 * Bài tập vòng lặp
*/

// Bài 1 : In các số nguyên dương lẻ / chẵn nhỏ hơn 100 (viết cả vòng lặp while & for)
// Sử dụng vòng lặp for

function inSoCL(){
    var soChan = 0;
    var soLe = 0;
    for (var i = 0; i < 100; i++){
        if(i % 2 == 0){
            soChan = soChan + i + " ";
        }
        else{
            soLe = soLe + i + " ";
        }
    }
    document.getElementById("noti-insoCL").style.display = "block";
    document.getElementById("noti-insoCL").innerHTML = "Số chẵn : " + soChan + "<br>" + "Số lẻ : " + soLe;
}

// Sử dụng vòng lặp while

function inSoCLWhile(){
    var soChan = 0;
    var soLe = 0;
    var count = 0;
    while(count < 100){
        count++;
        if(count % 2 == 0){
            soChan = soChan + count + " ";
        }else{
                soLe = soLe + count + " ";
        }
    }
    document.getElementById("noti-insoCLWhile").style.display = "block";
    document.getElementById("noti-insoCLWhile").innerHTML = "Số chẵn : " + soChan + "<br>" + "Số lẻ : " + soLe;
}

// Bài 2 : Có bao nhiêu số chia hết cho 3 từ 0-1000 (viết cả vòng lặp while & for)

// Sử dụng vòng lặp for

function chia3(){
    var count = 0;
    for (var i = 0 ; i < 1000 ; i++){
        if(i % 3 == 0){
            count++;
            console.log(i + " " + count);
        }
    }
    document.getElementById("noti-chia3").style.display = "block";
    document.getElementById("noti-chia3").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000 : " + count + " số";
}

// Sử dụng vòng lặp while

function chia3While(){
    var count = 0;
    var i = 0;
    while(i < 1000){
        if(i % 3 == 0){
            count++;
            console.log(i + " " + count);
        }
        i++;
    }
    document.getElementById("noti-chia3while").style.display = "block";
    document.getElementById("noti-chia3while").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000 : " + count + " số";
}

// Bài 3 : Tìm số nguyên dương nhỏ nhất sao cho 1 + 2 + 3 + ...+n > 10000

function soNhonhat(){
    var sum = 0;
    var n = 0;
    while (sum < 10000){
        n++;
        sum = sum + n;
    }
    document.getElementById("noti-soNN").style.display = "block";
    document.getElementById("noti-soNN").innerHTML = "Số nhỏ nhất : " + n + "  Tổng : " + sum;
}

// Bài 4 : Viết chương trình nhập vào 2 số x,n.
// Tính tổng S(n) = x + x^2 + x^3 + x^n ( Sử dụng vòng lặp & hàm)

function tinhTong(){
    var x = parseInt(document.getElementById("inputx").value);
    var n = parseInt(document.getElementById("inputn").value);
    var sum = 0;
    for(var i = 1; i < n+1 ; i++){
        sum+= Math.pow(x,i);
    }
    document.getElementById("noti-tongSn").style.display = "block";
    document.getElementById("noti-tongSn").innerHTML = "Tổng S(n): " + sum;
}

// Bài 5 : Nhập vào n, tính giai thừa 1*2*3...*n

function tinhGiaithua(){
    var n = parseInt(document.getElementById("inputngt").value);
    var giaiThua = 1;
    for(var i = 1 ; i < n ; i++){
        giaiThua += giaiThua * i;
    }
    document.getElementById("noti_giaithua").style.display = "block";
    document.getElementById("noti_giaithua").innerHTML = n + " giai thừa = " + giaiThua;
}

// Bài 6 : Viết chương trình khi click vào button sẽ in ra 10 thẻ div.
//  Nếu div nào vị trí chẵn thì background màu đỏ & lẻ thì màu xanh.

function In10div(){
    var content = "";
    for(var i = 0; i <=10; i++){
        if(i % 2 == 0){
            content+= "<div style='background:red; color:white'> Div chẵn</div>";
            // content.style.background = "red"
            document.getElementById("noti-theDiv").style.display = "block";
            document.getElementById("noti-theDiv").innerHTML = content;
        }else{
            content+= "<div style='background:blue; color:white'> Div lẻ </div>";
            document.getElementById("noti-theDiv").style.display = "block";
            document.getElementById("noti-theDiv").innerHTML = content;
        }
    }
}

// Bài 7 : Viết chương trình có một input, một button.
//  Khi nhấn vào button thì in ra các số nguyên tố từ 1 đến giá trị ô input

// Hàm kiểm tra số nguyen tố

function kiemTraSNT(n){
    if(n < 2){
        return false;
    }
        count = 0;
            for (var i = 2; i <= Math.sqrt(n); i++){
                if(n % i == 0){
                    count++;
                }
            }
            if(count == 0){
                return true;
            }else{
                return false;
            }
}

// Hàm in ra danh sách số nguyên tố

function inDSsoNT(){
    var x = parseInt(document.getElementById("inputSon").value);
    var soNT = 0; 
        for(var i = 0 ; i <= x; i++){
            if(kiemTraSNT(i) == true){
                soNT = soNT + i + " "; 
            }
        }
    document.getElementById("noti_soNT").style.display = "block";
    document.getElementById("noti_soNT").innerHTML = "Số nguyên tố : " + soNT;
}


