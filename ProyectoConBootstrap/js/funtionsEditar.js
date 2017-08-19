function addEvents(){
 disableFields();


 	var button = document.getElementById("confirmar");
	button.addEventListener("click", confirmPassword);

    
 	var buttonA = document.getElementById("actualizar");
	buttonA.addEventListener("click", registerNewUser);

var buttonR= document.getElementById("regresar");
	buttonR.addEventListener("click", regresar);

}
addEvents();

function  disableFields(){
      var idUserActive = localStorage.getItem('useractive');

    document.getElementById("idUsuario").innerHTML = idUserActive;
      document.getElementById('usuario').disabled = true;
         document.getElementById('contrasenna').disabled = true;
            document.getElementById('ccontrasenna').disabled = true;
            document.getElementById('telefono').disabled = true;
             document.getElementById('correo').disabled = true;
          document.getElementById('direccion').disabled = true;
            document.getElementById('actualizar').hidden = true;


}

function confirmPassword(){
   

    var idUserActive = localStorage.getItem('useractive');

  
     users = JSON.parse(localStorage.getItem('users'));
     var usuario;
for (var i = 0; i < users.length; i++) {
			if(idUserActive==users[i].idUsuario){
             usuario= users[i];
            }
        }
 var oldPass = document.getElementById("contrasennaantigua").value;
	
		if( oldPass == usuario.contrasena){
            document.getElementById("contrasennaantigua").hidden = true;
            document.getElementById('usuario').disabled = false;
         document.getElementById('contrasenna').disabled = false;
            document.getElementById('ccontrasenna').disabled = false;
            document.getElementById('telefono').disabled = false;
             document.getElementById('correo').disabled = false;
          document.getElementById('direccion').disabled = false;

fillFields();
 document.getElementById('confirmar').hidden = true;
 document.getElementById('actualizar').hidden = false;


	
	}else{
    	alert("Contrase&ntilde;a erronea.");
    }
}


function fillFields(){
    var idUserActive = localStorage.getItem('useractive');
     users = JSON.parse(localStorage.getItem('users'));

for (var i = 0; i < users.length; i++) {
			if(idUserActive==users[i].idUsuario){
                 document.getElementById('usuario').value=users[i].usuario;
          // document.getElementById('contrasenna').value="";
             // document.getElementById('ccontrasenna').value="";
            document.getElementById('telefono').value=users[i].telefono;
             document.getElementById('correo').value=users[i].correo;
          document.getElementById('direccion').value=users[i].direccion;
            }
}


}


function registerNewUser(){
 var idUserActive = localStorage.getItem('useractive');
 users = JSON.parse(localStorage.getItem('users'));
     var usuario;
for (var i = 0; i < users.length; i++) {
			if(idUserActive==users[i].idUsuario){
             usuario= users[i];
              users.splice(users[i],1);
             localStorage.removeItem("users");
            



            }
        }

      
        localStorage.setItem('users', JSON.stringify(users));
      

      if(document.getElementById('contrasenna').value==document.getElementById('ccontrasenna').value){

    
               var user = {
           idUsuario : idUserActive,
            usuario: document.getElementById('usuario').value,
         contrasena: document.getElementById('contrasenna').value,
            telefono: document.getElementById('telefono').value,
            correo: document.getElementById('correo').value,
            direccion :document.getElementById('direccion').value,
           
               }
          }else{
              alert("Error password");
              users.push(usuario);
               localStorage.setItem('users', JSON.stringify(users));
          }
       


}

function regresar(){
    location.href = "Perfil.html";
}