// Initialize the contact list with three users
const contactList = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" }
];

// Function to display the contact list
function displayContactList() {
    console.log("Contact List:");
    contactList.forEach((contact, index) => {
        console.log(`${index + 1}. ${contact.name} / ${contact.phone} / ${contact.email}`);
    });
}

// Function to add a new contact
function addNewContact(name, phone, email) {
    contactList.push({ name, phone, email });
    console.log(`\nAdded new contact: ${name} / ${phone} / ${email}`);
}

// Function to display the first and last contacts
function displayFirstAndLastContacts() {
    if (contactList.length > 0) {
        console.log("\nFirst Contact:");
        console.log(`${contactList[0].name} / ${contactList[0].phone} / ${contactList[0].email}`);
        
        console.log("\nLast Contact:");
        console.log(`${contactList[contactList.length - 1].name} / ${contactList[contactList.length - 1].phone} / ${contactList[contactList.length - 1].email}`);
    } else {
        console.log("The contact list is empty.");
    }
}

// Display the initial contact list
displayContactList();

// Add a new contact
addNewContact("Maisie Haley", "0913 531 3030", "risus.Quisque@urna.ca");

// Display the updated contact list
displayContactList();

// Show the first and last contacts
displayFirstAndLastContacts();
