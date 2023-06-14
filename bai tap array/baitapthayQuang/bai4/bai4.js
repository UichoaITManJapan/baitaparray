// cau a: Khai báo mảng một chiều:
//Cho phép người dùng nhập các giá trị của mảng bằng hàm prompt 
//và lưu trữ giá trị trong mảng cho đến khi người dùng nhập một giá trị không phải là số, 
//một chuỗi trống hoặc nhấn “Cancel”

// khai bao mang 1 chieu
let array = [];
//su dung ham while (true)
while(true){
    //nhap gia tri vao mang
    let smile = Number(prompt("Nhap gia tri cua mang (nhan cancel de ket thuc)"))
    //xet cac truong hop
    if( smile === null || smile === " " || isNaN(Number(smile))){
        break;
    }
    array.push(Number(smile));
}
console.log("cac phan tu cua mang la: " +array);

// cau b:Tính tổng các giá trị của mảng, in ra phần tử có giá trị max - min 
//(không và có sử dụng hàm Math.max và Math.min)

//tong cua cac gia tri mang
console.log("Tong cua cac gia tri la: ");
let n = array.length;
let sum = 0;
for( let i = 0; i< n; i++){
    sum += array[i];
}
console.log("tong la: " + sum);
//tim phan tu co gia tri lon nhat va nho nhat
console.log(" cac phan tu co gia tri lon nhat va nho nhat la");
      // tim so lon nhat
      let max = array[0];
      let indexMax = 0;
      for ( let i =1; i< n; i++){
        if(array[i] > max){
            max = array[i];
            indexMax = i;
        }
      }
      console.log("phan tu co gia tri lon nhat la: " + array[indexMax]);
      //tim so nho nhat
      let min = array[0];
      let indexMin =0;
      for ( let i =1; i < n; i++){
        if (array[i] < min) {
            min = array[i];
            indexMin = i;
        }
      }
      console.log("phan tu co gia tri nho nhat la:" + array[indexMin]);