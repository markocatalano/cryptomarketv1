 //Proyecto Final v1
 //Catalano Marco
 //C30325
/*  
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
const usuarios=[usuario1]  */

 //Array con parametros de las cryptos
const cryptos=[{nombre:"BITCOIN", par:"BTCUSDT",cotizacion:2124540,interes: 0.05 },
                {nombre:"ETHEREUM", par:"ETHUSDT",cotizacion:1123540,interes: 0.08},
                {nombre:"USDT", par:"USDT",cotizacion:210,interes: 0.18},
                {nombre:"DAI", par:"Dai",cotizacion:210,interes: 0.15}]
/*
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
    const cal1=calculo1(porfolio[cryptosAcomprar.indexOf("BITCOIN")].montoAcomprar,cryptos[0].cotizacion);
    const cal2=calculo3(calculo1(porfolio[cryptosAcomprar.indexOf("BITCOIN")].montoAcomprar,cryptos[0].cotizacion),cryptos[0].interes);
    alert("!Felicitaciones!\nUsted compro: "+ cal1 +" btc");
    alert("Felicitaciones\nSus bitcoins ahora le generan un interes anual de 5%"+   
    "\nPor lo tanto, con su compra usted va a generar "+cal2+" BTC")
    porfolio[cryptosAcomprar.indexOf("BITCOIN")].cantidad=cal1;


} 
if (porfolio.some((i)=> i.cryptos1=="ETHEREUM")){
    const cal3=calculo1(porfolio[cryptosAcomprar.indexOf("ETHEREUM")].montoAcomprar,cryptos[1].cotizacion);
    const cal4=calculo3(calculo1(porfolio[cryptosAcomprar.indexOf("ETHEREUM")].montoAcomprar,cryptos[1].cotizacion),cryptos[1].interes);
    alert("!Felicitaciones!\nUsted compro: "+ cal3 +" ETH");
    alert("Felicitaciones\nSus Ethereum ahora le generan un interes anual de 8%"+
        "\nPor lo tanto, con su compra usted va a generar "+ cal4 +"Ethereum")
    porfolio[cryptosAcomprar.indexOf("ETHEREUM")].cantidad=cal3;

} 
if(porfolio.some((i)=> i.cryptos1=="USDT")){
    const cal5=calculo2(porfolio[cryptosAcomprar.indexOf("USDT")].montoAcomprar,cryptos[2].cotizacion);
    const cal6=calculo4(calculo1(porfolio[cryptosAcomprar.indexOf("USDT")].montoAcomprar,cryptos[2].cotizacion),cryptos[2].interes);
    alert("!Felicitaciones!\nUsted compro: "+ cal5 +" USDT");
    alert("Felicitaciones\nSus USDT ahora le generan un interes anual de 18%"+
    "\nPor lo tanto, con su compra usted va a generar "+ cal6 +" USDT")
    porfolio[cryptosAcomprar.indexOf("USDT")].cantidad=cal5;
}
if(porfolio.some((i)=> i.cryptos1=="DAI")){
    const cal7= calculo2(porfolio[cryptosAcomprar.indexOf("DAI")].montoAcomprar,cryptos[3].cotizacion);
    const cal8=calculo4(calculo1(porfolio[cryptosAcomprar.indexOf("DAI")].montoAcomprar,cryptos[3].cotizacion),cryptos[3].interes);
    alert("!Felicitaciones!\nUsted compro: "+ cal7 +" DAI");
    alert("Felicitaciones\nSus DAI ahora le generan un interes anual de 15%"+
    "\nPor lo tanto, con su compra usted va a generar "+ cal8 +" DAI")
    porfolio[cryptosAcomprar.indexOf("DAI")].cantidad=cal7;
}

console.log(porfolio)  */


// Boton de Compra

let buttonBitcoin=document.getElementById("bitcoin")

buttonBitcoin.innerHTML=`<h3>Bitcoin</h3>
                        <img src="img/btc.png" width="100" />
                        <p>Cotizacion: $</p>
                        <button id="BotonBtc">Comprar</button>`;

                        
BotonBtc.addEventListener("click",(event)=>{
    event.stopPropagation()
    funcionClick()
    
    
})

let calculo4=cryptos[0].cotizacion

let formulario = document.createElement("form");
formulario.id="formBtc"

let funcionClick=()=>{
    formulario.innerHTML = `<hr>
                            <label>Quiero Utilizar pesos Arg($)</label>
                            <input type="number" id="cantidadPesos">
                            <input type="submit" value="Aceptar">
                            <hr>
                            <label>Para comprar Bitcoins</label>
                            <input type="number" id="cantidadBtc">
                            `;


    buttonBitcoin.appendChild(formulario) 

    let form = document.getElementById("formBtc");
    form.addEventListener("focus", function( event ) {
    event.target.style.background = "lightblue";}, true);
    form.addEventListener("blur", function( event ) {
    event.target.style.background = "";}, true);

    document.querySelector("#formBtc").onsubmit=(e)=>{
        e.preventDefault();
        let cal5=(document.querySelector("#cantidadPesos").value/calculo4)
        let cantbtc=document.querySelector("#cantidadBtc").value=cal5;
        alert(`Usted Va a utilizar:$ ${document.querySelector("#cantidadPesos").value}\n 
               Para comprar:${cal5.toFixed(7)} BTC`)
            }
        
        }

 
//Lista para ver las Compras Realizadas

let date = new Date();

const h3=document.querySelector(".tituloTenencia")
h3.innerHTML="Transacciones Realizadas"

const lista = document.getElementById("lista-dinamica");

const fragment = document.createDocumentFragment();
const template = document.querySelector("#template-li").content;

porfolio.forEach((item) => {
  template.querySelector("span").textContent = `El ${date.toISOString().split('T')[0]} compr?? ${item.cantidad} ${item.cryptos1} con $${item.montoAcomprar} pesos Argentinos`;
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment); 

 
     
