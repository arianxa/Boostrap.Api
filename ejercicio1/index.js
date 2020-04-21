
function validar(){


    var usuario=document.getElementById("usuario").value
    var pass=document.getElementById("passw").value
    
        

        axios.get('http://localhost:3000/users').then(resp => {
            var nombre=resp.data.response[0].Nombre;
            var contra=resp.data.response[0].Contraseña;
                 
            if(usuario==nombre&& pass==contra){
        
                alert("Usuario Correcto")
                
        
            }
            else{
            console.log();
          //  alert(JSON.stringify(resp.data.response))
        
        }
        });
        
        
        
        

    }


   

