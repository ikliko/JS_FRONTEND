// https://judge.softuni.org/Contests/Practice/Index/3791#8
// Write a function that stores information about a person’s name and his address.
// The input comes as an array of strings. Each string contains the name and the address
// separated by a colon. If you receive the same name twice just replace the address.
// In the end, print the full list, sorted alphabetically by the person’s name.

function printAddressBook(addressBook) {
    return addressBook.map(row => row.split(':'))
        .reduce((_addressBook, contact, id) => {
            const contactId = _addressBook.findIndex(_contact => _contact[0] === contact[0]);
            if (contactId === -1) {
                _addressBook.push(contact);

                return _addressBook;
            }

            if (id !== contactId) {
                _addressBook[contactId] = contact;

                return _addressBook;
            }
        }, [])
        .map(contact => contact.join(' -> '))
        .sort((a,b) => a.localeCompare(b))
        .join('\n');
}
