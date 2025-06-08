'use client';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddPetForm = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    breed: '',
    detailedDescription: '',
    imageFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, imageFile: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.imageFile) return toast.error("Please upload a pet image!");

    try {
      // Upload to Cloudinary first

    // formData.append('file', file);
    //     formData.append('upload_preset', 'myPreset');
    //     formData.append('cloud_name','dakgppwkh');

    //     const res = await axios.post('https://api.cloudinary.com/v1_1/dakgppwkh/image/upload', formData);

      const data = new FormData();
      data.append('file', form.imageFile);
      data.append('upload_preset', 'myPreset'); // replace with your preset

      const cloudinaryRes = await axios.post('https://api.cloudinary.com/v1_1/dakgppwkh/image/upload', data);
      const imageUrl = cloudinaryRes.data.secure_url;

      // Now send pet data to your backend
      const petData = {
        title: form.title,
        description: form.description,
        breed: form.breed,
        detailedDescription: form.detailedDescription,
        imageUrl: imageUrl
      };

      await axios.post('http://localhost:5001/pets/add', petData);
      toast.success("Pet added successfully!");

      setForm({
        title: '',
        description: '',
        breed: '',
        detailedDescription: '',
        imageFile: null,
      });

    } catch (err) {
      console.log(err);
      toast.error("Failed to add pet!");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Pet</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Pet Title"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Short Description"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="breed"
          value={form.breed}
          onChange={handleChange}
          placeholder="Breed (optional)"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="detailedDescription"
          value={form.detailedDescription}
          onChange={handleChange}
          placeholder="Detailed Description (optional)"
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
          required
        />
        <button type="submit" className="w-full bg-lime-500 text-black py-2 rounded hover:bg-lime-600">
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default AddPetForm;
