function addEvents(){
	
	var btnClose = document.getElementById("close");
	btnClose.addEventListener("click", closeSession);
  
    getInfoUser();
}
addEvents();

function closeSession(){
	localStorage.removeItem("useractive");
	location.href = "index.html";
}

function getInfoUser(){
    var users = JSON.parse(localStorage.getItem('users'));
    var idUserActive = localStorage.getItem('useractive');

	for (var i = 0; i < users.length; i++) {
        if(users[i].idUsuario== idUserActive){

            
        

             document.getElementById('username').innerHTML=  users[i].usuario;
              document.getElementById('phone').innerText=users[i].telefono;
               document.getElementById('address').innerText=users[i].direccion;
               document.getElementById('email').innerText =users[i].correo;

        }
    }

}