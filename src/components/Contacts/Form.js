import {useState} from 'react'
import {nanoid} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import {addContacts} from '../../redux/contactSlice'

function Form() {
    const dispatch = useDispatch();
const [name,SetName]=useState('');
const [number,SetNumber]=useState('');

const handleSubmit=(e)=> {
    e.preventDefault();
    if(!name || !number) return false;

const names=name.split(',');
 dispatch(addContacts(names.map((name)=>({id:nanoid(),name, phone_number:number}))));
 SetName('');
 SetNumber('');
};

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='name' value={name} onChange={(e) => SetName(e.target.value)} />
                <input placeholder='phone' value={number} onChange={(e) => SetNumber(e.target.value)} />
                <button type='submit'>Ekle</button>
            </form>
        </div>
    )
}

export default Form
