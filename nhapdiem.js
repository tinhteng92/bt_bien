
let diemLy
let diemHoa
let diemSinh

diemLy = prompt( "Nhập điểm Lý")
diemHoa = prompt("Nhập điểm Hóa")
diemSinh = prompt( "Nhập điểm Sinh")

let Ly = parseInt(diemLy)
let Hoa = parseInt(diemHoa)
let Sinh = parseInt(diemSinh)

let diemtrungbinh = (Ly + Hoa + Sinh)/3
document.write('Điểm trung bình: '+ diemtrungbinh);
let tongdiem = (Ly + Hoa + Sinh)
document.write('Tổng điểm: '+ tongdiem)