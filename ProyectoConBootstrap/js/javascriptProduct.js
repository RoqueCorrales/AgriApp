


function addEvents() {
	var button = document.getElementById("addProduct");
	button.addEventListener("click", registerProduct);
}

addEvents();



function registerProduct(){
 var idUserActive = localStorage.getItem('useractive');

        var product = {
            idUser : idUserActive,
           name: document.getElementById('nombre').value,
         category: document.getElementById('categoria').value,
            description: document.getElementById('descripcion').value,
           price: document.getElementById('precio').value,
         
          };

 localStorage.setItem('products', JSON.stringify(product));


}


