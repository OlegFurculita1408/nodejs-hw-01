import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
    try {
        const emptyContacts = [];// add array

        await writeContacts(emptyContacts);// input null array

        console.log("All contacts have been successfully removed.");
    } catch (error) {
        console.error("Error removing all contacts:", error);
        throw error;
    }
};

removeAllContacts();
