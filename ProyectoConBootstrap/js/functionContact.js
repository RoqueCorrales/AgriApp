
function addEvents(){
	


	var btnProducto = document.getElementById("botonProducto");
	btnProducto.addEventListener("click", fillProducts);

  	var btnInicio = document.getElementById("btninicio");
	btnInicio.addEventListener("click", goIndex);


    	var btnConocenos = document.getElementById("btnconocenos");
	btnConocenos.addEventListener("click", goConocenos);

    	var btnRegresar = document.getElementById("btnregresar");
	btnRegresar.addEventListener("click", goBack);
  
 fillProductsPrincipal();
 fillDataUser();
 hideB();

    
    
}

addEvents();
function fillProducts(){
   
       var products = [];
       products = JSON.parse(localStorage.getItem('products'));
  var productoSeleccionado = JSON.parse(localStorage.getItem('selectedProduct'));
  productoor= productoSeleccionado.productor;
  var idProductor;

var usuarios = JSON.parse(localStorage.getItem('users'));

for (var c = 0; c < usuarios.length; c++){
    if(productoor==usuarios[c].usuario){
         idProductor = usuarios[c].idUsuario;
    }
}




var myProducts =[];

for (var i = 0; i < products.length; i++) {

    if(products[i].idUser == idProductor){
        myProducts.push(products[i]);

    }

}

var table = document.getElementById("tableProd");
	table.innerHTML = null; 
for (var i = 0; i < myProducts.length; i++){
var row = "<tr name=\"" + myProducts[i].name + "\"></td><td>"+myProducts[i].name+ "</td><td>"+myProducts[i].category+ "</td><td>"+myProducts[i].price+ "</td></tr>";
			table.innerHTML = table.innerHTML + row;
   

}
        




     

}

function fillProductsPrincipal(){
   
      
  var productoSeleccionado = JSON.parse(localStorage.getItem('selectedProduct'));
  

var table = document.getElementById("tableProducts");
	table.innerHTML = null; 

var row = "<tr name=\"" + productoSeleccionado.productor + "\"></td><td>"+productoSeleccionado.producto+ "</td><td>"+productoSeleccionado.calidad+ "</td><td>"+productoSeleccionado.precio+ "</td></tr>";
			table.innerHTML = table.innerHTML + row;
   


        




     

}


function fillDataUser(){
    var productoSeleccionado = JSON.parse(localStorage.getItem('selectedProduct'));
  productoor= productoSeleccionado.productor;

var usuarios = JSON.parse(localStorage.getItem('users'));

for (var i = 0; i< usuarios.length; i++){
    if(productoor==usuarios[i].usuario){
       

             document.getElementById('username').innerHTML =  usuarios[i].usuario;
              document.getElementById('phone').innerText = usuarios[i].telefono;
               document.getElementById('address').innerText = usuarios[i].direccion;
               document.getElementById('email').innerText = usuarios[i].correo;

    }
}


}


function hideB(){

var idUserActive = localStorage.getItem('useractive');
    if(idUserActive==null){
      document.getElementById("btnregresar").style.display = 'none';
    }else{
document.getElementById("btninicio").style.display = 'none';
    document.getElementById("btnconocenos").style.display = 'none';
    }

}

function goBack(){
    location.href = "Perfil.html";
}

function goIndex(){
    location.href = "index.html";
}

function goConocenos(){
    location.href = "Conocenos.html";
}

