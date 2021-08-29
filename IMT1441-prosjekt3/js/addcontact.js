// Adding a click event on the button in the form to add contacts
document.querySelector('#addcontact button').addEventListener('click', e => {
  const form = e.target.form;

  if (form.firstname.value == '' || form.lastname.value == '') { // if the input for first and last name is empty an alert will show.
    alert("Vennligst skriv inn fornavn/etternavn.")
  }
  else if (isNaN(form.tel.value)) {            // if something other than numbers is written the input for the phone number, it will tell you to write a number.
    form.tel.value = "Vennligst skriv inn tall";
  }
  else {  // if the contact is put in correctly it will be added and you will get a message when it'a added. 
    contacts.addContact(form.firstname.value, form.lastname.value, form.tel.value, form.email.value, form.address.value, form.zipcode.value, form.place.value);
    document.getElementById('feedback').innerHTML = `Kontakten er blitt lagt til`; //The message doesn't show. Not sure why.
    form.firstname.value = '';
    form.lastname.value = '';
    form.tel.value = '';
    form.email.value = '';
    form.address.value = '';
    form.zipcode.value = '';
    form.place.value = '';
    form.firstname.focus();
  }
})
