// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.getElementById("submit_btn").addEventListener='click',{} 
  if (document.getElementById("fname_input").value == "") { 
    alert("Please fill in the form."); 
  } else { 
    document.body.innerHTML = "Thank you! <a href='index.html'>Back to Home</a>"; 
  }; 