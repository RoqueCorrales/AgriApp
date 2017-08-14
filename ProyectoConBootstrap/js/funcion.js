var REG = {
    property: 10,

    initialize: function() {
   
    },

   

     addUser: function(user) {

        // agregarlo a localStorage
        var users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

			
    },
   
   cleanFields: function(){
 document.getElementById('usuario').value="";
           document.getElementById('contrasenna').value="";
              document.getElementById('ccontrasenna').value="";
            document.getElementById('telefono').value="";
             document.getElementById('correo').value="";
          document.getElementById('direccion').value="";

   },

   confirmPassword: function(){
    
     var pass1 =  document.getElementById('contrasenna').value;
     var pass2 =  document.getElementById('ccontrasenna').value;

 if(pass1===pass2){
     return true;
 }
return false;

   },
  
};

