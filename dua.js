let huruf = "abcd";
let print = [true, false, false, true];
let data = huruf.split("")


let cetak = (cek) => {
    let hasil = ""
    for (let i=0 ; i<cek.length ; i++) {
        if (cek[i] === true) {
            hasil += data[i]
        }
        
    } return hasil
}

console.log(cetak(print))


