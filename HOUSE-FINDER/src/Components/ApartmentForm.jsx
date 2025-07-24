import React,{useState} from 'react';

function AddApartmentForm({addApartment}){
    const emptyForm = {
        name: "",
        location: "",
        price: "",
        image: "",
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

    

    const newApartment={
        ...formData,
        photos:[formData.image],
        interested: false,
    };
    addApartment(newApartment);
    setFormData(emptyForm);



    }
    return(
        <form className="add apartment form" onSubmit={handleSubmit}>
            <h2>Add new Apartment</h2>
            {/* Adds inputs */}
            <input type="text"name="name"placeholder="Apartment name" value={formData.name}onChange={handleChange}/>
            <input type="text"name="location"placeholder="Location"value={formData.location}onChange={handleChange}/>
            <input type="number"name="price"placeholder="Price"value={formData.price}onChange={handleChange}/>
            <input type="url"name="image"placeholder="Photos URL"value={formData.image}onChange={handleChange}/>
            <textarea name="description"placeholder="Description" value={formData.description}onChange={handleChange}/>
            <button type ="submit">Add new Apartment</button>            
          

        </form>
    )  
}
export default AddApartmentForm;



