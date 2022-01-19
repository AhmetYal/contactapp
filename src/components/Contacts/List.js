import React from 'react'
import {contactSelectors,deleteContacts} from '../../redux/contactSlice'
import { useSelector,useDispatch } from 'react-redux'
import Item from './Item'

function List() {
    const dispatch=useDispatch();
const contacts=useSelector(contactSelectors.selectAll);
const total=useSelector(contactSelectors.selectTotal);

const handleDeleteAll=()=>{
    if(window.confirm('??????????'))
    dispatch(deleteContacts());
};

    return (
        <div>
            {total>0 && <div onClick={handleDeleteAll}>Clear All</div>}
            
            {contacts.map(contact=>(<Item key={contact.id} item={contact}/>))}
        </div>
    )
}

export default List
