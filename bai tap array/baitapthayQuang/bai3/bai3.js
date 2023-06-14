//Tạo mảng có tên là styles có giá trị các phần tử là “Jazz”, “Blues”
let arr = ["Jazz","Blues"];
//a. Thêm phần tử “Rock-n-Roll” vào cuối mảng
arr.push("Rock-n-Roll");
//b. Thay thế phần tử nằm chính giữa mảng bằng “Classics” nếu mảng
//có tổng số phần tử là lẻ
for( let i = 0; i < arr.length; i++){
    if(arr[i] % 3 == 0){
        arr["Blues"] = arr["Classics"];
    }else{
        break;
    }
}
//c. Xóa phần tử đầu tiên của mảng và hiển thị mảng
let elementDelete = arr.pop();
console.log("ElementDelete-->", elementDelete);
//d. Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
let arrLength = arr.unshift("Rap", "Reggae");
        console.log("arrLength--> " + arrLength);
        console.log("cac phan tu la: " + arr);
