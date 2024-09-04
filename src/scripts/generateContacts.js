import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
    try {
        const existingContacts = await readContacts();// scan contacts
        
        const newContacts = Array.from({ length: number }, () => createFakeContact());// generic new contacts
        
        const updatedContacts = [...existingContacts, ...newContacts];// concat..
        
        await writeContacts(updatedContacts);// add new contacts in array
            console.log(`${number} contacts have been successfully added.`);
        }catch (error) {
            console.error("Error generating contacts:", error);
    }
};
generateContacts(5);
