function TesteDeData(date) {
    let msg = "Data Válida";
    let dataatual = new Date();
    if (Date.parse(date) < dataatual) {
        msg = "Data Inválida";
    }
    return msg;
}

let x = TesteDeData("2022-10-10");
console.log(x);