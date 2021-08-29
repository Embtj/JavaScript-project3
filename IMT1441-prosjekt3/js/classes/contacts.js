class Contacts {

  constructor(contactListSelector) { // finds the list for contacts
    this.selector = contactListSelector;
    this.contacts = [];
    this.storeId = "Rainbow_Dash";
    this.serverFetch();  // fetching list from server
  }

  get contactList() {
    return this.contacts;  //Return the list
  }
  addContact(firstname, lastname, tel, email, address, zipcode, place) { // Defining the parts of the form to add the contacts
    const contact = {
      firstname: firstname,
      lastname: lastname,
      tel: tel,
      email: email,
      address: address,
      zipcode: zipcode,
      place: place,
    }
    this.contacts.push(contact); // Adds the contact to the list

    const formData = new FormData(); //Adding the contacts the right way
    formData.append('store', `${this.storeId}`);
    formData.append('data', JSON.stringify(contact)); // turning contact into a a string to be able to send the data to the server
    fetch('http://folk.ntnu.no/oeivindk/imt1441/storage/add.php', { // Fetching server and sending data to the server
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  // Fetching the list in the server and updates the list and adding the new contacts that are added
  serverFetch() {
    fetch(`http://folk.ntnu.no/oeivindk/imt1441/storage/getAll.php?store=${this.storeId}`)
      .then(res => res.json())
      .then(data => {
        if (data.data == null) {
          console.log('whatever');
        }
        else {
          data.data.forEach(data => {
            const contact = {
              firstname: data.firstname,
              lastname: data.lastname,
              tel: data.tel,
              email: data.email,
              address: data.address,
              zipcode: data.zipcode,
              place: data.place,
            }
            this.contacts.push(contact); // Adds the contact to the list
          });
        }
        console.log(this.contacts);

      })
  }
}  
