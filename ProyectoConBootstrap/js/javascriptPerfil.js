function addEvents(){
	
	var btnClose = document.getElementById("close");
	btnClose.addEventListener("click", closeSession);

	var btnProducto = document.getElementById("botonProducto");
	btnProducto.addEventListener("click", fillProducts);

    var btnBuscar = document.getElementById("btnBuscar");
	btnBuscar.addEventListener("click", serch );


    var btnEdit = document.getElementById("edit");
	btnEdit.addEventListener("click", openEdit);
  
    getInfoUser();
}
addEvents();

function openEdit(){
    location.href = "EditarRegistro.html";
}


function fillProducts(){
     var products = [];
       products = JSON.parse(localStorage.getItem('products'));
     var idUserActive = localStorage.getItem('useractive');
var myProducts =[];

for (var i = 0; i < products.length; i++) {

    if(products[i].idUser == idUserActive){
        myProducts.push(products[i]);

    }

}

var table = document.getElementById("tableProducts");
	table.innerHTML = null; 
for (var i = 0; i < myProducts.length; i++){
var row = "<tr name=\"" + idUserActive + "\"></td><td>"+myProducts[i].name+ "</td><td>"+myProducts[i].category+ "</td><td>"+myProducts[i].price+ "</td></tr>";
			table.innerHTML = table.innerHTML + row;
   

}
        





     

}

function serch(){
     localStorage.removeItem("productoBuscado");
if ( document.getElementById('producto').value==""){
alert("No hay datos que buscar")

}
      else{
            localStorage.setItem('productoBuscado',document.getElementById('producto').value);
location.href = "BuscarProducto.html";
      }  

}





function closeSession(){
	localStorage.removeItem("useractive");
	location.href = "index.html";
}

function getInfoUser(){
    var users = JSON.parse(localStorage.getItem('users'));
    var idUserActive = localStorage.getItem('useractive');

	for (var i = 0; i < users.length; i++) {
        if(users[i].idUsuario== idUserActive){

            
        

             document.getElementById('username').innerHTML =  users[i].usuario;
              document.getElementById('phone').innerText = users[i].telefono;
               document.getElementById('address').innerText = users[i].direccion;
               document.getElementById('email').innerText = users[i].correo;

        }
    }

}