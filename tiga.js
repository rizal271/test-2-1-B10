var data = [3,5,5,7,3,6,2,4,2,1,]

var median = () => {
    sort = data.sort((a,b) => a-b)
    if (data.length % 2 == 0) {
        var nilai1 = parseInt(data[(data.length/2)-1])
        var nilai2 = parseInt(data[data.length/2])
        var hasil = (nilai1+nilai2) / 2
    } else {
        hasil = data[(data.length - 1) / 2]
    }
    return `median ${data} adalah ${hasil}`
}

var modus = () => {
    hasil = 0
    total = 0
    for (var i = 0; i < data.length; i++) {
        var jumlah = 0
        for (var j = 0; j < data.length; j++) {
            if (data[i] == data[j]) {
                jumlah++
            }                
        }

        if (jumlah > total) {
            total = jumlah
            hasil = data[i]
        }
    }
    
    return `modus dari ${data} adalah ${hasil} karena ada ${total} nilai`
}

var mean = () => {
    hasil = 0
    for (var i = 0; i < data.length; i++) {
        hasil += parseInt(data[i])
    }
    return `nilai rata-rata dari ${data} adalah ${(hasil/data.length)}`
}

console.log(median())
console.log(modus())
console.log(mean())