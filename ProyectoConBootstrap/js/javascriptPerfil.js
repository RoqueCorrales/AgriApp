
var productID;
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
     var idUserActive = sessionStorage.getItem('useractive');
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
        


seleccion();


     

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
	sessionStorage.removeItem("useractive");
	location.href = "index.html";
}

function getInfoUser(){
    var users = JSON.parse(localStorage.getItem('users'));
    var idUserActive = sessionStorage.getItem('useractive');

	for (var i = 0; i < users.length; i++) {
        if(users[i].idUsuario== idUserActive){

            
        

             document.getElementById('username').innerHTML =  users[i].usuario;
              document.getElementById('phone').innerText = users[i].telefono;
               document.getElementById('address').innerText = users[i].direccion;
               document.getElementById('email').innerText = users[i].correo;

        }
    }

}


function seleccion() {
    var table = document.getElementById("tableProducts");
     var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onclick = (function() { 
            return function() {
               
         
           var name = this.cells[0].innerHTML;
           var calidad= this.cells[1].innerHTML;
           var  precio = this.cells[2].innerHTML;
              
              if (confirm("Esta seguro que quiere eliminar este producto?") == true) {
   deleteProduct(name,calidad,precio);
} else {
    
}
            }    
        })(i);
    }
}
function deleteProduct(name,calidad,precio){
     var productos  = JSON.parse(localStorage.getItem('products'));  
      var idUserActive = sessionStorage.getItem('useractive');
      var listaProductos=[];
      
     for (var i = 0; i < productos.length; i++) {
         if((idUserActive==productos[i].idUser)&&(name ==productos[i].name) 
         &&(calidad == productos[i].category)&&(precio==productos[i].price)){
            
alert("Eliminado exitoso.")
    
         }else{
               listaProductos.push(productos[i]);
         }



        }
         localStorage.setItem('products', JSON.stringify(listaProductos));
         location.href ="Perfil.html";

   




     

        
      
}