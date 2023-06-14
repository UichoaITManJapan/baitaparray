let array = [];
// khai bao 2 so nguyen a va b
 let a = parseInt(prompt("nhap vao so nguyen a:"));
 let b = parseInt(prompt("nhap vao so nguyen b:"));
 // bien luu tru kich thuoc ban dau cau mang =0
 let size =0;
// khoi tao mang gom cac phan tu nam giua a va b
for ( let i = a+1; i < b; i++){
    array[size] = i;
    size++;
}
// in ra cac phan tu cua mang
console.log(" cac phan tu cua mang la: ");
for( let i = 0; i < size; i++){
    console.log(array[i] + " ");
}