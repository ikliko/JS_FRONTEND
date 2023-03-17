function printPhoneBook(phoneBook) {
    return phoneBook.map(row => row.split(' '))
        .reduce((_phoneBook, contact, id) => {
            const contactId = _phoneBook.findIndex(_contact => _contact[0] === contact[0]);
            if (contactId === -1) {
                _phoneBook.push(contact);

                return _phoneBook;
            }

            if (id !== contactId) {
                _phoneBook[contactId] = contact;

                return _phoneBook;
            }
        }, [])
        .map(contact => contact.join(' -> '))
        .join('\n');
}
