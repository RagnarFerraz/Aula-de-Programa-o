let frutas = "Maça "
let legumes = ["alho", "tomate", "abóbora"]
let banana = {
    "cor": "amarela",
    "leguminosa": "Não",
    "fruta": "Sim",
    "sabor": "doce"
}
let batata = {
    "cor": "laranja",
    "leguminosa": "nem",
    "fruta": "não",
    "sabor": "amarga"
}
let colegas = {
    "isaac": {
        "apelido": "Gru",
        "batata": "não",
        "banana": "não"
    },
    "edvan": {
        "apelido": "bizonho",
        "batata": "sim",
        "banana": "sim"
    }
}
/*console.log("Vi na feira um cacho de bananas, a cor dela era " + banana.cor + " e o sabor é " + banana.sabor + ". Ela é uma fruta? " + banana.fruta + ". Ela é uma leguminosa? " + banana.leguminosa + ".")
console.log("Fui em uma feira atras de batata, sua cor era " + batata.cor + ", o seu sabor é " + batata.sabor + ". ela " + batata.fruta + " é uma fruta e " + batata.leguminosa + " leguminosa.")*/
console.log("Meus colegas " + colegas.isaac.apelido + " e " + colegas.edvan.apelido + " estavam conversando sobre gostar de banana e batata. " + colegas.isaac.apelido + " " + colegas.isaac.batata + " gosta de batata e " + colegas.isaac.banana + " gosta de banana. Já " + colegas.edvan.apelido + " gosta " + colegas.edvan.banana + " da banana e gosta " + colegas.edvan.batata + " de batata")