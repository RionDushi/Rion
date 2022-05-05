  console.log("js");
// function ChangeStyle(){

//     var Username=document.getElementById('username');
//     var Password=document.getElementById('password');

//     var element1=document.getElementById('labelUsername');
//     var elemnet2=document.getElementById('labelPassword');

//     if(username.value =="" && password.value ==""){

//        element1.style.opacity=100;
//        elemnet2.style.opacity=100;

//     }
//     else if(username.value==""){

//          element1.style.opacity=100;

//     }
//     else if(password.value==""){

//         elemnet2.style.opacity=100;

//     } 
//     }

//   function ora(){
       
//      var rion=new Date();

//      alert("Ora per momenti eshte :"+rion.getHours()+":"+rion.getMinutes()+":"+rion.getSeconds());

//   }
  function ChangeStyle(){

    var Username=document.getElementById('username');
    var Password=document.getElementById('password');

    var element1=document.getElementById("incorrectPU")

    if(username.value =="" && password.value ==""){

        element1.style.opacity=100;

    }
    else if(username.value==""){

           element1.style.opacity=100;
        
    }
    else if(password.value==""){
        
            element1.style.opacity=100;
        
    } 
  }
  function JSlink() {
				
    var a = document.createElement('a');
    var link = document.createTextNode("This is link");
    
     a.appendChild(link);
    a.title = "This is Link";
    a.href = "./index.html";
    document.body.appendChild(a)
    

  }


