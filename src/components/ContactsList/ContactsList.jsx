import { ContactItem } from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';


export const ContactsList = ({ contacts, onDeleteContact }) => (
    <>
        <ul>
            {contacts.map(({ id, name, number }) =>
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onClick={onDeleteContact}
            />)}
        </ul>
    </>
)

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};