function addEvents(){
	
	var btnClose = document.getElementById("close");
	btnClose.addEventListener("click", closeSession);

	var btnProducto = document.getElementById("botonProducto");
	btnProducto.addEventListener("click", fillProducts);


    
  
    getInfoUser();
}
addEvents();

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