	
function addEvents(){

    var btnBuscar = document.getElementById("btnBuscar");
	btnBuscar.addEventListener("click", addBuscar);
}


addEvents();


function addBuscar(){

 localStorage.removeItem("productoBuscado");
if ( document.getElementById('producto').value==""){
alert("No hay datos que buscar")

}
      else{
            localStorage.setItem('productoBuscado',document.getElementById('producto').value);
location.href = "BuscarProducto.html";
      }  


  



}


