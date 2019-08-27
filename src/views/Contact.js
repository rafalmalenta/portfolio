import React,{useEffect} from "react";

export default function Contact(props){  
   var contact = {
      header:{
          pl:"Napisz do mnie",
          en:"Mail me"
      },
      nextheader:{
         pl:"albo wypełnij formularz",
         en:"or send form",
      },
      nameLabel:{
         pl:"imię",
         en:"name",
      },
      phoneLabel:{
         pl:"numer telefonu",
         en:"phone number",
      },
      messageLabel:{
         pl:"wiadomość",
         en:"message"
      },
      buttonValue:{
         pl:"Wyślij",
         en:"Submit"
      }
   }
   function handleBlur(id){
      //console.log(`#${id}`)
      var value = document.querySelectorAll(`#${id}`)[0].value;
      //console.log(name)
      if(value == ""){         
         document.querySelectorAll(`#${id}`)[0].labels[0].innerHTML = "cant be empty";
         document.querySelectorAll(`#${id}`)[0].labels[0].style.color = "red"
         document.querySelectorAll(`#${id}`)[0].style.borderColor= "red"
      }
      else{
         document.querySelectorAll(`#${id}`)[0].labels[0].innerHTML = "ok";
         document.querySelectorAll(`#${id}`)[0].labels[0].style.color = "green"
         document.querySelectorAll(`#${id}`)[0].style.borderColor= "green"
      }
   }
   function handleBlurp(id){
      var value = document.querySelectorAll(`#${id}`)[0].value;   
      var phoneRegExp = /^[0-9]{9}$/;
      console.log(phoneRegExp.test(value))
      if(!phoneRegExp.test(value)){
         document.querySelectorAll("#phone")[0].labels[0].innerHTML = "Incorrect phone";
         document.querySelectorAll("#phone")[0].labels[0].style.color = "red"
         document.querySelectorAll("#phone")[0].style.borderColor= "red"
      }
      else if((value != "") && (phoneRegExp.test(value)))
      {
         document.querySelectorAll(`#${id}`)[0].labels[0].innerHTML = "ok";
         document.querySelectorAll(`#${id}`)[0].labels[0].style.color = "green"
         document.querySelectorAll(`#${id}`)[0].style.borderColor= "green"
      }
   }
   function handleclick(e){
      e.preventDefault();
      var name = document.querySelectorAll("#name")[0].value;
      if(name == ""){         
         document.querySelectorAll("#name")[0].labels[0].innerHTML = "cant be empty";
         document.querySelectorAll("#name")[0].labels[0].style.color = "red"
         document.querySelectorAll("#name")[0].style.borderColor= "red"
      }
      var message = document.querySelectorAll("#message")[0].value;
      if(message == ""){          
         document.querySelectorAll("#message")[0].labels[0].innerHTML = "cant be empty";
         document.querySelectorAll("#message")[0].labels[0].style.color = "red"
         document.querySelectorAll("#message")[0].style.borderColor= "red"
      }
      var phone = document.querySelectorAll("#phone")[0].value;
      var phoneRegExp = /^[0-9]{9}$/;
      if(!phoneRegExp.test(phone)){
         document.querySelectorAll("#phone")[0].labels[0].innerHTML = "Incorrect phone number type";
         document.querySelectorAll("#phone")[0].labels[0].style.color = "red"
         document.querySelectorAll("#phone")[0].style.borderColor= "red"
      }
      if((name != "") && (message != "") && (phoneRegExp.test(phone))){
         console.log("jestem")
         alert("ok");
      }
   }
   var langague = props.match.params.lang;     
   return(
       <div class="container ">
         <h1>{contact.header[langague]} <a href="mailto:rmalenta@wp.pl">rmalenta@wp.pl</a></h1>
         <h2>{contact.nextheader[langague]}</h2>         
         <div class="row d-flex justify-content-center">
            <form class="row csc" >
               <div class="col-lg-6 text-center">                  
                  <input id="name" name="name" type="text" onBlur={()=>handleBlur("name")} />
                  <label for="name">{contact.nameLabel[langague]}</label>            
               </div>
               <div class="col-lg-6 text-center">
                  <input id="phone" name="phone" type="text" onBlur={()=>handleBlurp("phone")}/>
                  <label  for="phone">{contact.phoneLabel[langague]}</label>                              
               </div>
               <div class="col-lg-12 text-center">
                  <textarea  id="message" name="message" onBlur={()=>handleBlur("message")}/>
                  <label  for="message">{contact.messageLabel[langague]}</label>                          
               </div> 
               <div class="col-lg-12 text-center">
                  <button onClick={handleclick} class="col-sm-6 col-lg-3" >{contact.buttonValue[langague]}</button>
               </div> 
                         
            </form>
         </div>

       </div>
    )
  
}
