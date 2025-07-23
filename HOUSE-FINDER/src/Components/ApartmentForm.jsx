import React,{useState} from 'react';

function addApartmentForm(ApartmentForm){
    const emptyForm = {
        name: "",
        location: "",
        price: "",
        images: "",
        description: "",

        };

    const [formData, setFormData] =useState(emptyForm);
    //handles changes
    function handleChange(e){
        const{name,value}= e.target;

        setFormData({
            ...formData,[name]:name ==="price"? Number(value):value
        });
    }
    //handles form submission
    function handleSubmit(e) {
        e.preventDefault()

        for(const key in formData){
            if(!formData[key]){
                alert("Please in fill all fields");
                return;
            }
        }

    }
{

}

    return(
        <form className="add-apartment-form">
            <h2>Add new Apartment</h2>
            //form inputs
            <input type="text"placeholder="apartment-name" value={formData.name}onChange={handleChange}/>
            <input type="text"placeholder="location"value={formData.location}onChange={handleChange}/>
            <input type="number"placeholder="price"value={formData.price}onChange={handleChange}/>
            <input type="url"placeholder="photos"value={formData.images}onChange={handleChange}/>
            <textarea placeholder="description" value={formData.description}onChange={handleChange}/>
            <button type="Submit">Add new Apartment</button>            
          

        </form>
    )
       

    
}