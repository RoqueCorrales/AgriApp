REG.initializeEvents = function() {
      if(document.getElementById('addUserButton')) {
        document.getElementById('addUserButton').addEventListener('click', function() {
        	// obtener la información del form
          if(REG.confirmPassword()){
            var user = {
            
            usuario: document.getElementById('usuario').value,
         contrasena: document.getElementById('contrasenna').value,
            telefono: document.getElementById('telefono').value,
            correo: document.getElementById('correo').value,
            direccion :document.getElementById('direccion').value,

          };
         REG.addUser(user); 
        REG.cleanFields();
          }else{
            alert("Contrasena erronea.")
          }
  				 
        
        });
      }  
       
}
 REG.initializeEvents();