// khai bao mang 2 chieu 0 phan tu
let arrInt = [];
// nhap so vong va so cot cua mang 2 chieu
let row = Number(prompt(" nhap vao so dong cua mang 2 chieu"));
let col = Number(prompt(" nhap vao so cot cua mang 2 chieu"));
// nhap gia tri cac phan tu cua mang 2 chieu
for ( let i = 0; i < row; i++){
    let arrRow = [];
    for (let j =0; j < col; j++){
        let number = Number(prompt("nhap vao mot so"));
        arrRow.push(number);
    }
    //them arrRow vao arrInt
    arrInt.push(arrRow);
}
console.log(" mang 2 chieu sau khi nhap la " + arrInt);
// cac phan tu nam tren duong bien
console.log("cac phan tu nam tren duong bien");
for ( let i =0; i < row; i++){
    for (let j =0; j < col; j++){
        if(i ==0 || j ==0 || i == row -1 || j == col -1){
            console.log(arrInt[i][j]);
        }
    }
}
// cac phan tu nam tren duong cheo chinh
if( row == col){
    console.log("cac phan tu nam tren duong cheo chinh");
    for (let i = 0; i < row; i++){
        for (let j = 0; j < col; j++){
            if(i == j){
                console.log(arrInt[i][j]);
            }
        }
    }
    // cac phan tu nam tren duong cheo phu
    for ( let i = 0; i< row; i++){
        for( let j = 0; j < col; j ++){
            if( i + j == row -1){
                console.log(arrInt[i][j]);
            }
        }
    }
} else {
    console.log(" khong co duong cheo chinh va duong cheo phu");
}
// sap xep mang tang dan theo dong
for ( let i =0; i < row;i++){
    //xet dong i --> arrInt[i]: dong i
    for( let j =0; j< col -1; j++){
        for( let k = j+1; k < col; k ++){
            if(arrInt[i][j] > arrInt[i][k]){
                //doi cho 2 phan tu
                let temp = arrInt[i][j];
                arrInt[i][j] = arrInt[i][k];
                arrInt[i][k] = temp;
            }
        }
    }
}
console.log("mang sau khi sap xep la: " + arrInt);