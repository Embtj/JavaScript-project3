document.querySelectorAll('form').forEach(form=>{  // Selecting the form
    form.addEventListener('submit', e=>{           // Adding the "submit" event
      e.preventDefault(); 
      return false;       
    })
  })

/* This code is used instead of adding "onsubmit='javascript: return false'"
in all the forms. It's used to add a "submit" event to all the forms.*/
  