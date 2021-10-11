import React from 'react';


const AddRowForm = (props) => {

    const [id, setId] = React.useState();
    const [name, setName] = React.useState();
    const [artikul, setArtikul] = React.useState();
    const [typeId, setType] = React.useState();
    const [date, setDate] = React.useState();
    const [price, setPrice] = React.useState();
    const [quantity, setQuantity] = React.useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRow = {
            id,
            name,
            artikul,
            typeId,
            date,
            price,
            quantity
        }
        props.onAddNewRow(newRow);
    }

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;
        if (fieldName === 'id') {
            setId(value);
        } else if (fieldName === 'name') {
            setName(value);
        } else if (fieldName === 'artikul') {
            setArtikul(value);
        } else if (fieldName === 'typeId') {
            setType(value)
        } else if (fieldName === 'date') {
            setDate(value);
        } else if (fieldName === 'price') {
            setPrice(value);
        } else if (fieldName === 'quantity') {
            setQuantity(value);
        }
    }

return (
    <div>
        <button className="addButton">Новый элемент</button>
            <form className="addForm" onSubmit={handleSubmit}>
                <input type="number" name='id' placeholder='id' onChange={handleChange}/>
                <input type="text" name='name' placeholder='name' onChange={handleChange}/>
                <input type="text" name='artikul' placeholder='artikul' onChange={handleChange}/>
                <input type="text" name='typeId' placeholder='type' onChange={handleChange}/>
                <input type="date" name='date' placeholder='date' onChange={handleChange}/>
                <input type="number" name='price' placeholder='price' onChange={handleChange}/>
                <input type="number" name='quantity' placeholder='quantity' onChange={handleChange}/>
                <button classeName="saveButton" type='submit'>Сохранить</button>
            </form>
    </div>
)
}


export default AddRowForm;