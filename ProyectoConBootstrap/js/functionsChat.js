function addEvents(){

fillData();

}
addEvents();

function fillData(){

 var idUserActive = sessionStorage.getItem('useractive');
  mensajes = JSON.parse(localStorage.getItem('mensajes'));

var table = document.getElementById("tableMensajes");
	table.innerHTML = null; 
  
for (var i = 0; i < mensajes.length; i++) {
 if(idUserActive==mensajes[i].idUsuario){
var row = "<tr name=\"" + idUserActive + "\"><td>"+mensajes[i].texto+  "</td></tr>";
			table.innerHTML = table.innerHTML + row;

 }

}
}