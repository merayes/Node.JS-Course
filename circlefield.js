const arguments = process.argv.slice(2);

// parseInt yerine parseFloat kullanmak daha uygun
function alanHesap(r) {
    let alan = Math.PI * r * r;
    alan = alan.toFixed(2); // virgülden sonra 2 basamak
    return alan;
}

// Template literal için backtick (`) kullanmalısın
console.log(`Yarıçapı ${arguments[0]} olan dairenin alanı: ${alanHesap(parseFloat(arguments[0]))}`);
