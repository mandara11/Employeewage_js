//Welcome to address book program

//UC2  Validate Entries
let validate = 
    {
        firstName : fName => new RegExp('^[A-Z][A-Za-z]{2,}$').test(fName),
        lastName : lName => new RegExp('^[A-Z][A-Za-z]{2,}$').test(lName),
        city : city => new RegExp('^[A-Za-z]{4,}$').test(city),
        state : state => new RegExp('^[A-Za-z]{2,}$').test(state),
        zip : zip => new RegExp('^[1-9][0-9]{5}$').test(zip),
        address : address => new RegExp('^[A-Za-z0-9]+[- A-Za-z0-9]*$').test(address),
        phone : phone => new RegExp('^[7-9][0-9]{9}$').test(phone),
        email : email => new RegExp('^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*[@][A-Za-z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$').test(email),
        validateAll : function(contact)
        {
            for(let key in contact)
                if(key != 'address' && !validate[key](contact[key]))
                    throw key + ' is not valid';
        }
    };

//UC1 Create Contact Object
function Contact(fName,lName,address,city,state,zip,phone,email){
    this.firstName = fName;
    this.lastName = lName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip  = zip;
    this.phone = phone;
    this.email = email;
    validate.validateAll(this);
}

let contact1= new Contact('Priya','Malik','Residency-1','Faridabad','DL','210003','9812345670','priyamalik@yahoomail.com');
let contact2= new Contact('Shriyanshu','Mehra','Residency-5','Faridnagar','DL','210003','7892134567','priyamalik@yahoomail.com');

//UC3 Add AddressBook Array to store Multiple Con tacts
let AddressBookArray = [contact1];
AddressBookArray.push(contact2);

   AddressBookArray.push(new Contact('Mohanee', 'Dammu','Avenue-A','Bhilai','CG','490006','9674879893','monee99@gmail.com'));
   AddressBookArray.push( new Contact('Shreya', 'Dammu','Topsia Hall','Ranchi','JK','498766','8765423487','somu002@gmail.com'));
   AddressBookArray.push(new Contact('Ritu', 'Mehra','Lajpat Colony','Faridabad','DL','234006','9234879893','mehraritu@gmail.com'));
   AddressBookArray.push(new Contact('Raghav', 'Lawrence','Madras Cafe','Chennai','TN','508766','8762343487','rahgav23@gmail.com'));
   AddressBookArray.push(new Contact('Ritviz', 'Roy','Khidipore','Kolkata','WB','790006','9723449893','ritviz@gmail.com'));
   AddressBookArray.push(new Contact('Preetam', 'Basu','Magenta Block','Kolkata','WB','900766','8769870487','basu002@gmail.com'));
   AddressBookArray.push(new Contact('Nishant', 'Mishra','Sector-8','Bhilai','CG','493206','9234679893','nishuram@gmail.com'));
   AddressBookArray.push(new Contact('Reshami', 'Verma','Block-A','Kochi','KR','499766','8123423487','shamiverma2@gmail.com'));
   AddressBookArray.push(new Contact('Rewant', 'Dammu','Avenue-A','Bhilai','CG','490006','9674898633','drewant@gmail.com'));
   AddressBookArray.push(new Contact('Shreya', 'Rastogi','TeaNagar','Kolkata','WB','900766','9876423487','rastogishreya@gmail.com'));


console.log(AddressBookArray); 


//UC4 Find Contact in AddressBookArray with firstName
let firstNameToFind= 'Mohanee';
let contact = AddressBookArray.find(person => person.firstName==firstNameToFind);
if(contact!=undefined)
{
    console.log("Following are the details of Contact with First Name : "+firstNameToFind);
    console.log(contact);
}
else{
    console.log("No Contact with First Name "+firstNameToFind);
}

//UC5 DeleteContact with firstNAme
let nameToDelete = 'Shriyanshu';
let index= AddressBookArray.findIndex(c=> c.firstName== nameToDelete);
AddressBookArray.splice(index,1);
console.log(AddressBookArray);

//UC6  Number Of Contacts in AddressBookArray
let count = 0;
let num = AddressBookArray.reduce((count) => count+1,0);
console.log('Number of Contacts : ',num); 

//UC7  Check for Duplicates
function checkDuplicate(contact){
    return AddressBookArray.filter(c => c.email==contact.email).length != 0;
}
console.log(checkDuplicate(contact1)); 

//UC8 Search By City
let city = 'Bhilai';
let nameToSearch = 'Mohanee';
let person = AddressBookArray.filter(c => c.city==city).find(c => c.firstName == nameToSearch);
console.log(person); 

//UC9 View By City
let cityToView = 'Bhilai';
let contacts = AddressBookArray.filter(c => c.city==cityToView);
console.log(contacts); 

//UC10 Count By City & State
console.log("Contacts by city :")
console.log("Bhilai - "+AddressBookArray.filter(contact => contact.city == "Bhilai").length);
console.log("Kolkata - "+AddressBookArray.filter(contact => contact.city == "Kolkata").length);

console.log("\nContacts by state :")
console.log("WB - "+AddressBookArray.filter(contact => contact.state == "WB").length);
console.log("CG - "+AddressBookArray.filter(contact => contact.state == "CG").length);


//UC11 Sort Alphabetically
AddressBookArray.sort((c1,c2) => c1.firstName == c2.firstName); 
console.log(AddressBookArray);

//UC12.1 Sort By City
 console.log("\nSorted by city");
 let sortedByCity = AddressBookArray.sort((c1,c2)=> c1.city.localeCompare(c2.city));
 console.log(sortedByCity);

 //UC12.2 Sort by state
 console.log("\nSorted by stae");
 let sortedByState = AddressBookArray.slice(0).sort((c1,c2)=> c1.state.localeCompare(c2.state));
 console.log(sortedByState);

 //UC12.3 Sort by zip
 console.log("\nSorted by zip");
 let sortedByZip = AddressBookArray.slice(0).sort((c1,c2)=> c1.zip.localeCompare(c2.zip));
 console.log(sortedByZip);