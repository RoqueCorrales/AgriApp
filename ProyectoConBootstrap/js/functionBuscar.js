function addEvents(){

var btnReturn = document.getElementById("btnregresar");
btnReturn.addEventListener("click", goBack)

fillProducts();
hideButton();


}
addEvents();


function hideButton(){
    var idUserActive = localStorage.getItem('useractive');
    if(idUserActive==null){
      document.getElementById("btnregresar").style.display = 'none';
    }else{
document.getElementById("inicio").style.display = 'none';
    document.getElementById("conocenos").style.display = 'none';
    }
    



}

function goBack(){
    location.href = "Perfil.html";
}




function selectedRow() {
    var table = document.getElementById("tableProducts");
     var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onclick = (function() { 
            return function() {

 if (confirm("Esta seguro que deseas contactar al vendedor?") == true){
            var id = document.getElementsByTagName("tr");
alert(this.cells[0].innerHTML+" "+this.cells[1].innerHTML+" "+this.cells[2].innerHTML);

var frutaSeleccionada ={
    productor : this.cells[0].innerHTML,
    producto : this.cells[1].innerHTML,
    calidad :this.cells[2].innerHTML,
    precio:this.cells[3].innerHTML,

}
localStorage.setItem('selectedProduct', JSON.stringify(frutaSeleccionada));
 }

              
            }    
        })(i);
    }





}

function fillProducts(){
     var products = [];
       products = JSON.parse(localStorage.getItem('products'));
      var producto = localStorage.getItem('productoBuscado');
var myProducts =[];

for (var i = 0; i < products.length; i++) {

    if(products[i].name == producto){
        myProducts.push(products[i]);

    }

}
var usuarios = JSON.parse(localStorage.getItem('users'));

var table = document.getElementById("tableProducts");
	table.innerHTML = null; 
for (var i = 0; i < myProducts.length; i++){
    var name;
for (var c = 0; c < usuarios.length; c++){
    if(myProducts[i].idUser==usuarios[c].idUsuario){
         name = usuarios[c].usuario;
    }
}
var row = "<tr name=\"" + myProducts[i].idUser + "\"><td>"+name+ "</td><td>"+myProducts[i].name+ "</td><td>"+myProducts[i].category+ "</td><td>"+myProducts[i].price+ "</td></tr>";
			table.innerHTML = table.innerHTML + row;
   

}
selectedRow();
}
  

  
