// Bài1
// khoi1 đầu vào
// khối 2 xử lý
// khối 3 đầu ra

const thue1 = 0.05;
const thue2 = 0.1;
const thue3 = 0.15;
const thue4 = 0.2;
const thue5 = 0.25;
const thue6 = 0.3;
const thue7 = 0.35;

function getEle(id){
    return document.getElementById(id);
}
function tongthunhap(thunhapNam, ngphuthuoc,thue){
    var kq = 0;
    kq = (thunhapNam - (4e+6) - ngphuthuoc * 1600000)*thue;
    return kq;
}
getEle('tinhtien').onclick = function(){
    var ht = getEle('ht').value;
    var thunhap = getEle('thunhap').value;
    var nphuthuoc = getEle('nphuthuoc').value;

    thunhap = parseInt(thunhap);
    nphuthuoc = parseInt(nphuthuoc);
    var thunhapsauthue;
    if(thunhap == 60e+6){
        thunhapsauthue = tongthunhap(thunhap,nphuthuoc,thue1);
    }
    else if (thunhap>60e+6 && thunhap<=120e+6){
        thunhapsauthue = tongthunhap(thunhap,nphuthuoc,thue2);
    }
    else if (thunhap>120e+6 && thunhap<=210e+6){
        thunhapsauthue = tongthunhap(thunhap,nphuthuoc,thue3);
    }
    else if (thunhap>210e+6 && thunhap<=384e+6){
        thunhapsauthue = tongthunhap(thunhap,nphuthuoc,thue4);
    }
    else if (thunhap>384e+6 && thunhap<=624e+6){
        thunhapsauthue = tongthunhap(thunhap,nphuthuoc,thue5);
    }
    else if (thunhap>624e+6 && thunhap<=960e+6){
        thunhapsauthue = tongthunhap(thunhap,nphuthuoc,thue6);
    }
    else if (thunhap>624e+6 ){
        thunhapsauthue = tongthunhap(thunhap,nphuthuoc,thue7);
    }
    else{
        alert('Vui lòng nhập lại');
    }
    getEle('kq').innerHTML ="Họ và tên: "+ ht +" "+ "Tiền Thuế thu nhập cá nhân là " + thunhapsauthue +" VNĐ";
};