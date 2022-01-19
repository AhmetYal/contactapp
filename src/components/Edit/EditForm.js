import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {updateContact} from '../../redux/contactSlice'


function EditForm({contact}) {
    const [name,SetName]=useState(contact);
    const [number,SetNumber]=useState(contact.phone_number);
 
    const dispatch=useDispatch();

    const handleSubmit=(e)=> {
        e.preventDefault()
        if(!name || !number )return false;
        dispatch(updateContact({
            id:contact.id,
            changes: {
                name,
                phone_number:number,
            },
        }),
        );

        
    };
        
    return (
        
         <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='name' value={name} 
                onChange={(e) => SetName(e.target.value)} />
                <input placeholder='phone' value={number} 
                onChange={(e) => SetNumber(e.target.value)} />
                <button type='submit'>Güncelle</button>
            </form>
        </div>
        
    )
}

export default EditForm
 