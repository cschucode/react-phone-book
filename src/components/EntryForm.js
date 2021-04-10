import { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    width: 50%;
`;

const Button = styled.button`
    padding: 6px 12px;
    width: 50%;
`;

const EntryForm = ({ addPhonebookEntry }) => {
    const [newNumber, setNewNumber] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setNewNumber({
            ...newNumber,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPhonebookEntry(newNumber);
        setNewNumber({
            firstName: '',
            lastName: '',
            phoneNumber: ''
        });
    }

    return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <Input
            type='text'
            name='firstName'
            value={newNumber.firstName}
            placeholder='John'
            onChange={(e) => handleChange(e)}
        />
        <Input
            type='text'
            name='lastName'
            value={newNumber.lastName}
            placeholder='Doe'
            onChange={(e) => handleChange(e)}
        />
        <Input
            type='tel'
            name='phoneNumber'
            value={newNumber.phoneNumber}
            placeholder="123-456-7890"
            onChange={(e) => handleChange(e)}
        />
        <Button>Submit</Button>
    </StyledForm>);
    
}

export default EntryForm;