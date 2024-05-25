// Bài 1
document.getElementById("btn_KQBai1").onclick = () => {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let diemKhuVuc = document.getElementById("diemKhuVuc").value * 1;
  let diemDoiTuong = document.getElementById("diemDoiTuong").value * 1;
  let diemMon1 = document.getElementById("diemMon1").value * 1;
  let diemMon2 = document.getElementById("diemMon2").value * 1;
  let diemMon3 = document.getElementById("diemMon3").value * 1;
  let diemTong = diemDoiTuong + diemKhuVuc + diemMon1 + diemMon2 + diemMon3;
  //   console.log(typeof diemKhuVuc);
  console.log(diemDoiTuong);
  console.log(diemChuan);
  if (diemChuan == 0) {
    alert("Hãy nhập điểm chuẩn !");
    return false;
  }
  console.log(diemMon1);
  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
    document.querySelector(
      ".ketQuaThi"
    ).innerHTML = `Bạn đã rớt, do có môn có điểm bằng 0`;
  } else if (diemTong >= diemChuan) {
    document.querySelector(
      ".ketQuaThi"
    ).innerHTML = `Chúc mừng bạn đã đậu !!! Tổng điểm là ${diemTong}`;
  } else {
    document.querySelector(
      ".ketQuaThi"
    ).innerHTML = `Xin chia buồn bạn đã rớt (-_-") Tổng điểm là ${diemTong}`;
  }
};
// Bài 2
document.getElementById("btn_TienDien").onclick = () => {
  let hoTen = document.getElementById("tenChuHo").value;
  let soKw = document.getElementById("soKw").value * 1;
  const muc1 = 500;
  const muc2 = 650;
  const muc3 = 850;
  const muc4 = 1100;
  const muc5 = 1300;
  let tongTien = 0;
  if (hoTen == 0) {
    alert("Hãy điền tên chủ hộ !!!");
    return false;
  } else if (soKw == 0) {
    alert("Vui lòng điền số kW để tiếp tục !!!");
  }
  if (soKw > 0 && soKw <= 50) {
    tongTien = soKw * muc1;
  } else if (soKw > 50 && soKw <= 100) {
    tongTien = 50 * muc1 + (soKw - 50) * muc2;
  } else if (soKw > 100 && soKw <= 200) {
    tongTien = 50 * muc1 + 50 * muc2 + (soKw - 100) * muc3;
  } else if (soKw > 200 && soKw <= 350) {
    tongTien = 50 * muc1 + 50 * muc2 + 100 * muc3 + (soKw - 200) * muc4;
  } else {
    tongTien =
      50 * muc1 + 50 * muc2 + 100 * muc3 + 150 * muc4 + (soKw - 350) * muc5;
  }
  document.querySelector(
    ".ketQuaHoaDon"
  ).innerHTML = `Tên chủ hộ : ${hoTen} .Số tiền điện : ${tongTien.toLocaleString(
    "vi",
    { style: "currency", currency: "VND" }
  )}`;
};
// Bài 3
document.getElementById("btn_TienThue").onclick = () => {
  let ten = document.getElementById("tenNguoiNopThue").value;
  let thuNhapNam = document.getElementById("tongThuNhap").value * 1;
  let soNguoiPT = document.getElementById("soNguoi").value * 1;
  let thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPT * 1600000;
  let soTienNopThue = 0;
  const thue1 = 5 / 100;
  const thue2 = 10 / 100;
  const thue3 = 15 / 100;
  const thue4 = 20 / 100;
  const thue5 = 25 / 100;
  const thue6 = 30 / 100;
  const thue7 = 35 / 100;
  //   console.log(thue1);
  if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000) {
    soTienNopThue = thuNhapChiuThue * thue1;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    soTienNopThue = 60000000 * thue1 + (thuNhapChiuThue - 60000000) * thue2;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    soTienNopThue =
      60000000 * thue1 +
      60000000 * thue2 +
      (thuNhapChiuThue - 120000000) * thue3;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    soTienNopThue =
      60000000 * thue1 +
      60000000 * thue2 +
      90000000 * thue3 +
      (thuNhapChiuThue - 210000000) * thue4;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    soTienNopThue =
      60000000 * thue1 +
      60000000 * thue2 +
      90000000 * thue3 +
      174000000 * thue4 +
      (thuNhapChiuThue - 384000000) * thue5;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    soTienNopThue =
      60000000 * thue1 +
      60000000 * thue2 +
      90000000 * thue3 +
      174000000 * thue4 +
      240000000 * thue5 +
      (thuNhapChiuThue - 624000000) * thue6;
  } else {
    soTienNopThue =
      60000000 * thue1 +
      60000000 * thue2 +
      90000000 * thue3 +
      174000000 * thue4 +
      240000000 * thue5 +
      336000000 * thue6 +
      (thuNhapChiuThue - 960000000) * thue7;
  }
  document.querySelector(
    ".ketQuaTienThue"
  ).innerHTML = `Anh/Chị: ${ten} - Tiền thuế thu nhập cá nhân: ${soTienNopThue.toLocaleString()}`;
};
// Bài 5
document.getElementById("selectLoaiKH").onchange = function () {
  hienSoKetNoi();
};
function hienSoKetNoi() {
  let loaiKH = document.getElementById("selectLoaiKH").value;
  if (loaiKH == 2) {
    document.getElementById("inputSoketNoi").className = "d-block";
  } else if (loaiKH == 1) {
    document.getElementById("inputSoketNoi").className = "d-none";
  } else {
    return false;
  }
}
const giaXLHD = (loaiKH) => {
  switch (loaiKH) {
    case 1:
      return 4.5;
    case 2:
      return 15;
  }
};
const giaDVCB = (loaiKH, soKetNoi) => {
  switch (loaiKH) {
    case 1:
      return 20.5;

    case 2:
      if (soKetNoi <= 10) {
        return 75;
      } else {
        return 75 + (soKetNoi - 10) * 5;
      }
  }
};
const thueKenhCC = (loaiKH, soKenhCaoCap) => {
  switch (loaiKH) {
    case 1:
      return 7.5 * soKenhCaoCap;
    case 2:
      return 50 * soKenhCaoCap;
  }
};

document.getElementById("btn_TinhTienCap").onclick = () => {
  let loaiKH = document.getElementById("selectLoaiKH").value * 1;
  let maKH = document.getElementById("maKhachHang").value;
  let soKenhCC = document.getElementById("soKenhCaoCap").value * 1;
  // console.log(typeof loaiKH);
  let soKeNoi = document.getElementById("soKetNoi").value * 1;
  let priceDVCB = giaDVCB(loaiKH, soKeNoi);
  let priceXLHD = giaXLHD(loaiKH);
  let priceKenhCC = thueKenhCC(loaiKH, soKenhCC);
  console.log(priceKenhCC);
  let tongTien = priceDVCB + priceXLHD + priceKenhCC;
  // console.log(tongTien);
  document.querySelector(
    ".ketQuaTienCap"
  ).innerHTML = `Mã khách hàng: ${maKH} - Tiền cáp: ${tongTien.toLocaleString(
    "en-US",
    { style: "currency", currency: "USD" }
  )} `;
};
