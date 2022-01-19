import React from 'react'
import Form from './Form'
import List from './List'
import { useSelector } from 'react-redux'
import {contactSelectors} from '../../redux/contactSlice'

function Contacts() {
    const total=useSelector(contactSelectors.selectTotal);
    return (
        <div>
            <h2>Contacts({total})</h2>
            <Form/>
            <List/>
        </div>
    )
}

export default Contacts
