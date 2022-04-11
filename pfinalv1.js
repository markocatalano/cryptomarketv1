 //Mensaje Bienvenida
alert("!!Bienvenido a CrytpoMarket!!\nAqui usted va a poder comprar Cryptomonedas con Pesos Argentinos")

 //Creacion de Usuario
alert("Antes de comenzar es necesario crear su cuenta.\nEmpezemos.")

let usuarioNombre= prompt("Ingrese su nombre: ")
let usuarioTelefono=parseInt(prompt("Ingrese su telefono: "))
let usuarioEmail=prompt("Ingrese su email: ")

//Validacion de Email
let contador=0;
for(let i of usuarioEmail){
    if (i=="@" || i=="."){
        contador++;
    }}

if(contador<2){
    alert("Ingreso un email incorrecto, asegurese que el email contenga un arroba y por lo menos un punto");
    usuarioEmail=prompt("Ingrese nuevamente su email:")
}

//Objeto datos del Usuario
class Usuario{
    constructor(nombre,telefono,email){
        this.nombre=nombre;
        this.telefono=telefono;
        this.email=email;
    }
    saludar(){
        alert("Bienvenido "+(this.nombre).toUpperCase()+" a CryptoMarket")
    }
}

const usuario1= new Usuario(usuarioNombre,usuarioTelefono,usuarioEmail);
usuario1.saludar();

//Lista para guardar datos del usuario
const usuarios=[usuario1]  

//Array con parametros de las cryptos
const cryptos=[{nombre:"BITCOIN", par:"BTCUSDT",cotizacion:2124540,interes: 0.05 },
                {nombre:"ETHEREUM", par:"ETHUSDT",cotizacion:1123540,interes: 0.08},
                {nombre:"USDT", par:"USDT",cotizacion:210,interes: 0.18},
                {nombre:"DAI", par:"Dai",cotizacion:210,interes: 0.15}]

//Eleccion de cryptos a comprar por parte del usuario
let cryptoElegida;
const cryptosAcomprar=[]
while( cryptoElegida != ""){
    cryptoElegida=prompt("Ingrese nombre de crypto que desea comprar:\n1)Bitcoin\n2)Ethereum\n3)USDT\n4)Dai"+
    "\nCuando finalize aprete ACEPTAR").toUpperCase();
    console.log(cryptoElegida)
    for(let i of cryptos){
        if (cryptoElegida==i.nombre){
            cryptosAcomprar.push(cryptoElegida)
            console.log(cryptosAcomprar)
        }
    }
}
//Salida con alert para mostrar cryptos elegidas y monto a comprar:
let monto=[];
let compras=[];
let porfolio=[];
for(let a=0; a<cryptosAcomprar.length; a++){
    alert("Usted esta por comprar: "+ cryptosAcomprar[a])
    let var3=prompt("Ingrese el monto que desea comprar en pesos argentinos($): ")
    monto.push(var3)
    compras=[{cryptos1:cryptosAcomprar[a],montoAcomprar:monto[a]}]
    porfolio.push(compras[0])
    console.log(porfolio)}

//Alert con todas las compras a realizar:
for(let i=0; i<porfolio.length; i++){
    alert("Usted va a comprar "+porfolio[i].cryptos1+" utilizando $"+porfolio[i].montoAcomprar+" pesos argentinos")
}



// Funciones para conversiones de fiat a cryptos
const calculo1= (monto,precio1) =>((monto/precio1).toFixed(7));
const calculo2= (monto,precio2) =>((monto/precio2).toFixed(2));

const calculo3= (tenencia,intereses) =>((tenencia*intereses).toFixed(7));
const calculo4= (tenencia,intereses) =>((tenencia*intereses).toFixed(2));

//Calculo de intereses por tenencia de monedas

if (porfolio.some((i)=> i.cryptos1=="BITCOIN")){
    alert("!Felicitaciones!\nUsted compro: "+ calculo1(porfolio[cryptosAcomprar.indexOf("BITCOIN")].montoAcomprar,cryptos[0].cotizacion) +" btc");
    alert("Felicitaciones\nSus bitcoins ahora le generan un interes anual de 5%"+   
    "\nPor lo tanto, con su compra usted va a generar "+
    calculo3(calculo1(porfolio[cryptosAcomprar.indexOf("BITCOIN")].montoAcomprar,cryptos[0].cotizacion),cryptos[0].interes)+" BTC")

} 
if (porfolio.some((i)=> i.cryptos1=="ETHEREUM")){
    alert("!Felicitaciones!\nUsted compro: "+ calculo1(porfolio[cryptosAcomprar.indexOf("ETHEREUM")].montoAcomprar,cryptos[1].cotizacion) +" ETH");
    alert("Felicitaciones\nSus Ethereum ahora le generan un interes anual de 8%"+
        "\nPor lo tanto, con su compra usted va a generar "+
    calculo3(calculo1(porfolio[cryptosAcomprar.indexOf("ETHEREUM")].montoAcomprar,cryptos[1].cotizacion),cryptos[1].interes)+"Ethereum")

} 
if(porfolio.some((i)=> i.cryptos1=="USDT")){
    alert("!Felicitaciones!\nUsted compro: "+ calculo2(porfolio[cryptosAcomprar.indexOf("USDT")].montoAcomprar,cryptos[2].cotizacion) +" USDT");
    alert("Felicitaciones\nSus USDT ahora le generan un interes anual de 18%"+
    "\nPor lo tanto, con su compra usted va a generar "+
    calculo4(calculo1(porfolio[cryptosAcomprar.indexOf("USDT")].montoAcomprar,cryptos[2].cotizacion),cryptos[2].interes)+" USDT")
}
if(porfolio.some((i)=> i.cryptos1=="DAI")){
    alert("!Felicitaciones!\nUsted compro: "+ calculo2(porfolio[cryptosAcomprar.indexOf("DAI")].montoAcomprar,cryptos[3].cotizacion) +" DAI");
    alert("Felicitaciones\nSus DAI ahora le generan un interes anual de 15%"+
    "\nPor lo tanto, con su compra usted va a generar "+
    calculo4(calculo1(porfolio[cryptosAcomprar.indexOf("DAI")].montoAcomprar,cryptos[3].cotizacion),cryptos[3].interes)+" DAI")
}


