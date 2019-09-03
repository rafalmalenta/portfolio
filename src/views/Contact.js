import React from "react";

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
      invalidPhoneLabel:{
         pl:"nieprawidłowy format numeru, prawidłowy składa się z 9 cyfr",
         en:"invalid phone number, valid number contains exact 9 digits"
      },
      invalidTextLabel:{
         pl:"Zdanie składa się conajmniej z 4 znaków",
         en:"Sentence contains at least 4 characters"
      },
      buttonValue:{
         pl:"Wyślij",
         en:"Submit"
      }
   }
   const phoneRegExp = /^[0-9]{9}$/;
   const regExp = /[A-Za-z1-9,;'\"\\s]{4,}/

   function validateInput(id,regExpToMatch, validateLabel){ 
      var DomElement = document.querySelectorAll(`#${id}`)[0];    
      var value = DomElement.value;
      
      if(!regExpToMatch.test(value)){         
         DomElement.labels[0].innerHTML = validateLabel;
         DomElement.labels[0].style.color = "red";
         DomElement.style.borderColor= "red";
      }
      else{
         DomElement.labels[0].innerHTML = "ok";
         DomElement.labels[0].style.color = "green";
         DomElement.style.borderColor= "green";
         return true;
      }
   };
  
   function handleclick(e){
      e.preventDefault();   
      validateInput("name",regExp, contact.invalidTextLabel[langague] )   
      validateInput("phone",phoneRegExp, contact.invalidPhoneLabel[langague])
      validateInput("message",regExp, contact.invalidTextLabel[langague] )
      if(
         (validateInput("name",regExp, contact.invalidTextLabel[langague] )) && 
         (validateInput("phone",phoneRegExp, contact.invalidPhoneLabel[langague])) && 
         (validateInput("message",regExp, contact.invalidTextLabel[langague] ))
      ){
         console.log("jestem")
         alert("Its an fake form");
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
                  <input id="name" name="name" type="text" onBlur={()=>validateInput("name",regExp, contact.invalidTextLabel[langague] )} />
                  <label for="name">{contact.nameLabel[langague]}</label>            
               </div>
               <div class="col-lg-6 text-center">
                  <input id="phone" name="phone" type="text" onBlur={()=>validateInput("phone",phoneRegExp, contact.invalidPhoneLabel[langague])}/>
                  <label  for="phone">{contact.phoneLabel[langague]}</label>                              
               </div>
               <div class="col-lg-12 text-center">
                  <textarea  id="message" name="message" onBlur={()=>validateInput("message",regExp, contact.invalidTextLabel[langague])}/>
                  <label  for="message">{contact.messageLabel[langague]}</label>                          
               </div> 
               <div class="col-lg-12 text-center">
                  <button onClick={handleclick} class="col-sm-12 col-lg-6 btn-primary" >{contact.buttonValue[langague]}</button>
               </div> 
                         
            </form>
         </div>

       </div>
    )
  
}
