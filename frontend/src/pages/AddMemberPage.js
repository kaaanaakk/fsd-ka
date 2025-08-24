import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddMemberPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    year: '',
    degree: '',
    aboutProject: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aboutAim: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    
    // Clear error when user selects a file
    if (errors.profileImage) {
      setErrors({
        ...errors,
        profileImage: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = 'Roll Number is required';
    }
    
    if (!formData.year.trim()) {
      newErrors.year = 'Year is required';
    }
    
    if (!formData.degree.trim()) {
      newErrors.degree = 'Degree is required';
    }
    
    if (!selectedFile) {
      newErrors.profileImage = 'Profile image is required';
    } else {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(selectedFile.type)) {
        newErrors.profileImage = 'Please upload an image (JPEG, PNG, or GIF)';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create form data object to send file and form data
      const submitData = new FormData();
      
      // Append all form fields
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });
      
      // Append file
      if (selectedFile) {
        submitData.append('profileImage', selectedFile);
      }
      
      // Send to backend API
      await axios.post('http://localhost:5000/api/members', submitData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      // Redirect to members page after successful submission
      navigate('/members');
    } catch (error) {
      console.error('Error adding member:', error);
      setErrors({
        ...errors,
        submit: 'Failed to add member. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="middle-box" style={{ height: 'auto', marginTop: '30px', marginBottom: '30px' }}>
      <div className="box-header">
        <div className="box-title">Add Team Member</div>
      </div>
      
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text" style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number</label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
          />
          {errors.rollNumber && <p className="error-text" style={{ color: 'red' }}>{errors.rollNumber}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
          {errors.year && <p className="error-text" style={{ color: 'red' }}>{errors.year}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
          />
          {errors.degree && <p className="error-text" style={{ color: 'red' }}>{errors.degree}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="aboutProject">About Project</label>
          <textarea
            id="aboutProject"
            name="aboutProject"
            value={formData.aboutProject}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="hobbies">Hobbies (comma separated)</label>
          <input
            type="text"
            id="hobbies"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="certificate">Certificate</label>
          <input
            type="text"
            id="certificate"
            name="certificate"
            value={formData.certificate}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="internship">Internship</label>
          <input
            type="text"
            id="internship"
            name="internship"
            value={formData.internship}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="aboutAim">About Your Aim</label>
          <textarea
            id="aboutAim"
            name="aboutAim"
            value={formData.aboutAim}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="profileImage">Profile Image</label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleFileChange}
            style={{ border: 'none', paddingLeft: 0 }}
          />
          {errors.profileImage && <p className="error-text" style={{ color: 'red' }}>{errors.profileImage}</p>}
        </div>
        
        {errors.submit && <p className="error-text" style={{ color: 'red' }}>{errors.submit}</p>}
        
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AddMemberPage;