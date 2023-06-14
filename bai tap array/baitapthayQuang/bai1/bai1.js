let arrInt = [];

      // cau a
      for (let i = 1; i <= 5; i++) {
        number = Number(prompt("nhap so thu" + i));
        arrInt.push(number);
      }
      // cau b: Hien thi gia tri cac phan tu trong mang
      console.log(" hien thi cac phan tu trong mang");
      for (const index of arrInt) {
        console.log(index);
      }
      // cau c: in ra cac phan tu co gia tri chan va tinh tong
      console.log(" cac phan tu co gia tri chan va tong cua chung");
      let sum = 0;
      for (const key of arrInt) {
        if (key % 2 == 0) {
          console.log("phan tu co gia tri chan la:" + key);
          sum += key;
        }
      }
      console.log("tong la "  + sum);

      // cau d: in ra cac phan tu co chi so le va tinh tong
      console.log(" cac phan tu co chi so le va tong cua chung");
      let sumLe = 0;
      for (const key in arrInt) {
        if (key % 2 != 0){
            console.log(" gia tri cua phan tu co chi so le la :" + arrInt[key]);
            sumLe  += arrInt[key];
        }    
        }
        console.log(" tong la" + sumLe);

      // cau e: in cac gia tri trong mang la so nguyen to
      console.log("cac phan tu trong mang la so nguyen to la");
      for(let e = 0; e < arrInt.length; e++){
        //kiem tra arrInt[e] co phai la so nguyen to hay khong
        let checkPrime = true;
        if(arrInt[e] >=2){
            for(let a = 2; a <= Math.sqrt(arrInt[e]); a++ ){
                if(arrInt[e] % a == 0){
                    checkPrime = false;
                }
            }
            if(checkPrime){
                console.log(arrInt[e]);
            }
        }
      }

      //cau f: tim cac phan tu co gia tri la max hoac min
      console.log(" cac phan tu co gia tri lon nhat va nho nhat la");
      // tim so lon nhat
      let max = arrInt[0];
      let index = 0;
      for ( let i =1; i< arrInt.length; i++){
        if(arrInt[i] > max){
            max = arrInt[i];
            index = i;
        }
      }
      console.log("phan tu co gia tri lon nhat la: " + arrInt[index]);
      //tim so nho nhat
      let min = arrInt[0];
      let b =0;
      for ( let i =1; i < arrInt.length; i++){
        if (arrInt[i] < min) {
            min = arrInt[i];
            b = i;
        }
      }
      console.log("phan tu co gia tri nho nhat la:" + arrInt[b]);

      //cau g: sap xep mang giam dan va in gia tri cac phan tu mang sau khi xap xep
      let n = arrInt.length;
      // Buble soft, Selection soft, Insertion soft
      for( let i = 0; i< n -1; i++){
        // max i = arrInt.length -2
        // so sanh phan tu arrInt[i] vs cac phan tu arrInt[j]
        for ( let j = i +1; j < n ; j++){
          //max j = arrInt.length -1
          //so sanh arrInt[i] voi arrInt[j]
          if(arrInt[i] < arrInt[j]){
            //doi cho 2 phan tu
            let temp = arrInt[i];
            arrInt[i] = arrInt[j];
            arrInt[j] = temp;
          }
        }
      }
      // in mang sau khi sap xep
      console.log("mang sau khi sap xep la: " + arrInt);
      // h. Nhập vào 1 số, thống kê có bao nhiêu phần tử = số đó
      // - Nhập vào 1 số
      let numberFind = Number(prompt("nhap vao 1 so can tim"));
      // Thống kê các phần tử
      let cnt =0;
      for( let i =0; i < arrInt.length; i++){
        if(arrInt[i] == numberFind){
          cnt++;
        }
      }
      console.log("so phan tu co gia tri bang " + numberFind + "la" +cnt);