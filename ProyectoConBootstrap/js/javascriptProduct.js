


function addEvents() {
	var button = document.getElementById("addProduct");
	button.addEventListener("click", registerProduct);
}

addEvents();



function registerProduct(){
 var productos  = [];
  var idUserActive = localStorage.getItem('useractive');

        var product = {
            idUser : idUserActive,
           name: document.getElementById('nombre').value,
         category: document.getElementById('categoria').value,
            description: document.getElementById('descripcion').value,
           price: document.getElementById('precio').value,
         
          };

 if (localStorage.getItem('products')) {
           productos = JSON.parse(localStorage.getItem('products'));
        }
        
productos.push(product);

 localStorage.setItem('products', JSON.stringify(productos));



  

location.href = "Perfil.html";
}



