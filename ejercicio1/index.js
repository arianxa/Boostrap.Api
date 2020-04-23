function mostrarPassword(){
    var cambio = document.getElementById("passw");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}


function validar(){


    var usuario=document.getElementById("email").value
    var pass=document.getElementById("passw").value
    


           axios.get('http://localhost:3000/users').then(function(resp) {
          // .then(resp => {

        console.log(resp);
            for(var i = 0; i < resp.data.response.length; i++) {
                //console.log(data.artists.items[i].href);
                var email=resp.data.response[i].Email;
            var contra=resp.data.response[i].Contraseña;
                // (o el campo que necesites)
            }                       
                            
            if(usuario==email&& pass==contra){
        
                alert("Usuario Correcto")
             
                window.location.href = "../index.html";
        
            }
            else{
            console.log("error");
            alert("Usuario Incorrecto")
          //  alert(JSON.stringify(resp.data.response))
        
        }
        })
        
        .catch(e => {
            console.log("error");
            console.log(e);
        });             

    }





(function() {
   
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    var contraseña = document.getElementById("passw");
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
     
        

    console.log(event);
    event.preventDefault();
    event.stopPropagation();


    }
    form.classList.add('was-validated');
    }, false);
    });
    }, false);
    })();







   

