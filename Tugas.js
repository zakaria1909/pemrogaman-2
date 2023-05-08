function getProductsAmount(productArr) {    
    let result = {}
    let listProduk = productArr.products
    for (let i = 0; i < listProduk.length; i++) {
        if (result[listProduk[i][0]] === undefined){
            result[listProduk[i][0]] = listProduk[i][1]
        }
    }
    return result
}
function getTotalPriece(productsObj) {
    const listProduct = [
        ["Asus ROG", 25000000],
        ["Lenovo Legion", 22000000],
        ["Zyrex 1945", 7000000],
        ["HP Omen", 20000000],
        ["Acer Predator", 21000000],
    ];
    let result = 0
    for (let key in productsObj){
    for (let i = 0; i < listProduct.length; i++) {
        if (key === listProduct[i][0]) {
            result += productsObj[key] * listProduct[i][1]
        }
        }
        
    }
    return result
}
function getDiscount(memberStatus, totalPrice) {
    //write your code here
    let result = 0
    let discount = 10
    if (memberStatus === true) {
        result = totalPrice - (totalPrice * discount)
    }else{
        return totalPrice
    }
    return result
}
function shoppingTeros(customer) {
    //write your code here
    let productsAmount = getProductsAmount(customer)
    let totalHarga = getTotalPriece(productsAmount)
    let diskon = getDiscount(customer.member,totalHarga)
    if (customer.member === true){
        return `Hai pelanggan setia ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${totalHarga}`
    }else{
        return `hai ${customer}!Total harga yang harus kamu bayar adalah Rp ${totalHarga}`
    }
}
let customer1 = {
    name: "Fajrin",
    products: [
        ["Asus ROG", 2],
        ["Lenovo Legion", 3],
    ],
    member: true,
};
let customer2 = {
    name: "Fadlila",
    products: [
        ["Asus ROG", 3],
        ["Lenovo Legion", 1],
        ["Acer Predator" ,1],
    ],
    member: false,
};
let customer3 = {
    name: "Jetly",
    products: [["HP Omen", 2]],
    member: true,
};
console.log(shoppingTeros(customer1));
console.log(shoppingTeros(customer2));
console.log(shoppingTeros(customer3));