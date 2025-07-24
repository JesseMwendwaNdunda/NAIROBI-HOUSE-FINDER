
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


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? Number(value) : value,
    });
  }


    const newApartment = {
      ...formData,
      photos: [formData.images],
      interested: false,
    };

    addApartment(newApartment);
    setFormData(emptyForm);

  }

  return (
    <form className="add-apartment-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Add New Apartment</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="url"
          name="images"
          placeholder="Image URL"
          value={formData.images}
          onChange={handleChange}
        />
      </div>

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        rows="3"
      />

      <button type="submit">Add Apartment</button>
    </form>
  );
}

export default AddApartmentForm;

