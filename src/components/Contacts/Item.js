import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteContact} from '../../redux/contactSlice'
import { Link } from "react-router-dom";

function Item({item}) {
    const dispatch=useDispatch();
    const handleDelete=(id)=>{
        if(window.confirm("Eminsen?")){
            dispatch(deleteContact(id));
        }
    };
    return (
        <div>
            <h4>{item.name}</h4>
            <h4>{item.phone_number}</h4>
            <span><Link to={`/edit/${item.id}`}>Edit</Link></span>
            <span onClick={()=>handleDelete(item.id)}>X</span>
        </div>
    )
}

export default Item
