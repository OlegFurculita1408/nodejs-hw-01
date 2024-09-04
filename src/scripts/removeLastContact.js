import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        
        if (contacts.length === 0) {
            console.log("No contacts to remove.");// array contacts = 0?
            return;
        }

        contacts.pop();// dellite last contact

        
        await writeContacts(contacts);// added new array

        console.log("Last contact has been successfully removed.");
    } catch (error) {
        console.error("Error removing last contact:", error);
        throw error;
    }
};

removeLastContact();
