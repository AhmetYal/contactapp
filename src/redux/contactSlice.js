import {createSlice,createEntityAdapter} from '@reduxjs/toolkit'

export const contactAdapter=createEntityAdapter();
export const contactSelectors=contactAdapter.getSelectors(state=>state.contacts);

const contactSlice=createSlice({
    name:'contacts',
    initialState:contactAdapter.getInitialState(),
    reducers:{
        addContact:contactAdapter.addOne,
        addContacts:contactAdapter.addMany,
        deleteContact:contactAdapter.removeOne,
        deleteContacts:contactAdapter.removeAll,
        updateContact:contactAdapter.updateOne,
    },
});

export const {addContact,addContacts,deleteContact,deleteContacts,updateContact} =contactSlice.actions;
export default contactSlice.reducer; 