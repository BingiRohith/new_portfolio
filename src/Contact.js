import React from 'react'

const Contact = ( ) => {
    return (
    
    <div>
        
           <h1 className="headings">CONTACT ME</h1>

           <form action="" className="form">
             <input type="text" name="name" className="input" placeholder="Enter your name"></input>
             <input type="email" name="email" className="input" placeholder="Enter your Email"></input>
             <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Enter your message"></textarea>
             <input type="submit" value="SEND" id="send"></input>
           </form>
          
    </div>

        
         
    

    )
}     
export default Contact