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
                  <input id="name" name="name" type="text" />
                  <label for="name">{contact.nameLabel[langague]}</label>            
               </div>
               <div class="col-lg-6 text-center">
                  <input id="phone" name="phone" type="text" />
                  <label  for="phone">{contact.phoneLabel[langague]}</label>                              
               </div>
               <div class="col-lg-12 text-center">
                  <textarea  id="message" name="message" />
                  <label  for="message">{contact.messageLabel[langague]}</label>                          
               </div>  
                         
            </form>
         </div>

       </div>
    )
  
}
