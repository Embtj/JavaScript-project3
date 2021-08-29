document.getElementById('search').addEventListener('input', e => { // Getting search from index.html and listens for input
    if (e.target.value == ' ') { //If the search field is empty, nothing will be shown.
        e.target.value == "";
    }
    if (document.getElementById('search').value != "") {  //If something is written in the search field the contact list will show
        showContacts(contacts.contactList.filter(filter));
    }
    else {
        document.querySelector('tbody').innerHTML = "";  //Adds the result in tbody
    }
});

function filter(contacts) {
    const contactFilter = `${contacts.firstname.toLowerCase()} ${contacts.lastname.toLowerCase()} ${contacts.tel.toLowerCase()} ${contacts.email.toLowerCase()} ${contacts.address.toLowerCase()} ${contacts.zipcode.toLowerCase()} ${contacts.place.toLowerCase()}`.indexOf(document.getElementById('search').value.toLowerCase()) > -1;
    return contactFilter;
}

function showContacts(filterList) { //Creating a function to show the contacts that are added
    const tbody = document.querySelector('#searchcontact tbody');  // Getting the tbody from searchcontact in index.html
    tbody.innerHTML = "";
    filterList.sort(sorting).forEach(contact => {
        let tr = document.createElement('TR');
        // Adding the data to the table
        tr.innerHTML = `<td>${contact.firstname}</td><td>${contact.lastname}</td><td>${contact.tel}</td><td>${contact.email}</td><td>${contact.address}</td><td>${contact.zipcode}</td><td>${contact.place}</td>`;
        tbody.appendChild(tr);
    });
}

function sorting(a, b) { // defining the sorting function
    if (a.firstname.toLowerCase() < b.firstname.toLowerCase()) { // Sorting the names so they appear alphabetically 
        return -1;
    }
    else if (a.firstname.toLowerCase() > b.firstname.toLowerCase()) {
        return 1;
    }
    else {
        return 0;
    }


}

//Adding a click event to hide the "vindu" element
document.querySelector('#vindu>header>div').addEventListener('click', e => {
    document.getElementById('vindu').style.display = "none";
    e.stopPropagation();        // Do not send the event further
});

document.querySelector('table').addEventListener('click', e => { //When you click on the table show the window "vindu".
    document.getElementById('vindu').style.display = "block";
    // Move the "vindu" element a little bit further down than the main part of the page
    document.getElementById('vindu').style.top = document.querySelector('html').clientHeight / 5 + document.querySelector('html').scrollTop + "px";
})
