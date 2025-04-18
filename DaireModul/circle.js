// circle.js

// Daire alanı: π * r^2
const circleArea = (r) => {
    const area = Math.PI * r * r;
    console.log(`Daire Alanı: ${area.toFixed(2)}`);
    return area;
};

// Daire çevresi: 2 * π * r
const circleCircumference = (r) => {
    const circumference = 2 * Math.PI * r;
    console.log(`Daire Çevresi: ${circumference.toFixed(2)}`);
    return circumference;
};

// Fonksiyonları dışa aktar
module.exports = {
    circleArea,
    circleCircumference
};
