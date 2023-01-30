//Trắc Nghiệm
//1. False; 2. True; 3. True; 4. {foo: 1, bar: 2}; 5. SyntaxError; 6. undefined; 7. error; 8. [1, 23, 4]; 9. 3; 10. a = 3, b = 12; 11. Error; 12.[1, 2, 3, 4, 5]; 13. 16
//Thực hành
function reverseString(str) {
    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}
const string = 'abcdef';
const result = reverseString(string);
console.log(result);

const array = [1, 2, 3, 5, 4, 2, 6, 4];
let newArray = array.filter((n, index) => {
    return array.indexOf(n) === index;
});
console.log(newArray);


const myArray = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
var mf = 1;
var m = 0;
var item;
		for (var i = 0; i < myArray.length; i++)
		{
				for (var j = i; j < myArray.length; j++)
				{
						if (myArray[i] == myArray[j])
						 m++;
						if (mf < m)
						{
						  mf = m; 
						  item = myArray[i];
						}
				}
				m = 0;
		}
		console.log ("value: " + item + ", count: " + mf) ;
        
        const contactListElement = document.getElementById("contact-list");
        const addButtonElement = document.getElementById("btn-add");
        const searchButtonElement = document.getElementById("search-button");
        const deleteButtonElement = document.getElementById("delete-button");
        const searchInputElement = document.getElementById("search-input");
        const nameInputElement = document.getElementById("input-name");
        const phoneInputElement = document.getElementById("input-phone");
        
        function renderContactList(contactsData) {
          contactsData.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        
          const contactsListHtml = contactsData.map((contact) => {
            return `
            <div class="card my-2">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div class="fw">${contact.name}</div>
                <div class="fw">${contact.phone}</div>
              </div>
            </div>
          `;
          });
        
          contactListElement.innerHTML = contactsListHtml.join("");
        }
        
        function addContact() {
          if (!nameInputElement.value.trim()) {
            alert("Please enter name");
            return;
          }
          if (!phoneInputElement.value.trim()) {
            alert("Please enter phone number");
            return;
          }
        
          const contact = {
            name: nameInputElement.value.trim(),
            phone: phoneInputElement.value.trim(),
          };
        
          contacts.push(contact);
          renderContactList(contacts);
        
          nameInputElement.value = "";
          phoneInputElement.value = "";
        }
        
        function searchContacts() {
          const searchString = searchInputElement.value.toLocaleLowerCase();
        
          const filteredContacts = contacts.filter((contact) => {
            return (
              contact.name.toLocaleLowerCase().includes(searchString) ||
              contact.phone.toLocaleLowerCase().includes(searchString)
            );
          });
        
          renderContactList(filteredContacts);
        }
        
        function removeDuplicate() {
          let contactMap = contacts.reduce((preValue, contact) => {
            if (!preValue[contact.phone]) {
              preValue[contact.phone] = contact;
            }
        
            return preValue;
          }, {});
        
          contacts = Object.keys(contactMap).map((key) => {
            return contactMap[key];
          });
        
          renderContactList(contacts);
        }
        
        let contacts = [
          {
            name: "John",
            phone: "0772474747",
          },
        ];
        
        function main() {
          renderContactList(contacts);
        
          addButtonElement.addEventListener("click", addContact);
          searchButtonElement.addEventListener("click", searchContacts);
          deleteButtonElement.addEventListener("click", removeDuplicate);
        }
        
        main();