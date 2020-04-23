function mostrarPassword2(){
  var cambio = document.getElementById("Contraseña");
  if(cambio.type == "password"){
      cambio.type = "text";
      $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
  }else{
      cambio.type = "password";
      $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
  }
}

function validar2(){
  var usuario=document.getElementById("Nombre").value
  var apellidos=document.getElementById("Apellidos").value


    var Email=document.getElementById("Correo").value
    var Contraseña=document.getElementById("Contraseña").value
    
    var registro={
      
        Nombre:usuario,
        Apellidos:apellidos,
        Email:Email,
        Contraseña:Contraseña
      };

        axios.post('http://localhost:3000/users/alta_Registro',registro)
        
        .then(function(resp) {
                //me.rols=response.data;
                console.log(resp);

                alert("OBJETO OK")
       // window.location.href = "./Registro.html";            
                 })
              .catch(function(error) {
                console.log(error);
              });

       
              document.getElementById("Nombre").value="";
              document.getElementById("Apellidos").value="";
        
        
        
        

    }




    function validar3(){


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
              console.log("error else");
              alert("Usuario Incorrecto")

            //  alert(JSON.stringify(resp.data.response))
          
          }
          })
          
          .catch(e => {
              console.log("error catch");
              console.log(e);
          });             
  
      }


   

