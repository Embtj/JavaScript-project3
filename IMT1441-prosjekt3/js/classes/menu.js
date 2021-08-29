class Menu {
  constructor(menuSelector, sectionSelector, jsonFile) {
    fetch(jsonFile)                                   // Fetching the menu from the json file
      .then(res => res.json())
      .then(data => {
        let menu = document.querySelector(menuSelector);
        data.forEach((menuItem, idx) => {                 // Going through all the menu elements in the JSON data
          let li = document.createElement('LI');        // Creating a new menu element
          // Adding the link as innerHTML in the menu element.
          li.innerHTML = `<a data-scriptsrc="${menuItem.scriptsrc}" data-id="${menuItem.id}" href="">${menuItem.menuText}</a>`;
          menu.appendChild(li);                     // Adding the menu element to the menu.
        });

        // Going through all the menu elements
        document.querySelectorAll(`${menuSelector} a`).forEach(a => {
          a.addEventListener('click', e => {
            // Saving the menu option in sessionStorage.
            sessionStorage.setItem('activePage', e.target.dataset.id);
            e.preventDefault(); // Prevents the browser to read the page over again.

            if (e.target.dataset.scriptsrc != "") {
              if (document.querySelector(`[src="${e.target.dataset.scriptsrc}"]`) == null) {
                const script = document.createElement('SCRIPT'); // Makes a script tag
                script.src = e.target.dataset.scriptsrc;         // Adds src in the script
                document.querySelector('head').appendChild(script); // Adds the script tag in the head
              }
            }

            document.querySelectorAll(`${menuSelector} a`).forEach(a => { // Goes through the links in the menu
              if (a == e.target) {                      // If this is the chosen one
                a.parentNode.classList.add('active'); // Adds the class active
              } else {                                // If it's not chosen
                a.parentNode.classList.remove('active'); // Remove the class active
              }
            });

            document.querySelectorAll(sectionSelector).forEach(section => { // Goes through the sections
              if (section.id == e.target.dataset.id) { // If this is the chosen one
                section.classList.add('active');    // Add the class active
              } else {                              // If not
                section.classList.remove('active'); //Remove the class active
              }
            });
          })
        })

        if (sessionStorage.getItem('activePage') != null) { // The active page that the user has chosen
          // Click on the menu element that is equal to the last menu element that the user clicked on
          document.querySelector(`${menuSelector} a[data-id="${sessionStorage.getItem('activePage')}"]`).click();
        } else {  // If no menu option is made this session, click on the first menu option.
          document.querySelector(`${menuSelector} a`).click();
        }
      });
  }
}
