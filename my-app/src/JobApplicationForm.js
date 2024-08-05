import React, { useState } from 'react';
import './JobApplicationForm.css';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    sillyQuestion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted! Thanks for applying to be our Videographer for Flying Rob Yoga!');
  };

  return (
    <div className="application-form-container">
      <h1>Apply to be our Videographer for Flying Rob Yoga!</h1>
      <img src="https://scontent-lhr6-1.xx.fbcdn.net/v/t1.6435-9/83866270_10156954904896301_5436646414471921664_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_ohc=03ntEU8XUckQ7kNvgHKrPGo&_nc_ht=scontent-lhr6-1.xx&oh=00_AYBDI05VnK1Q66tuT8boYyeJE1K6D2IuUNxT8LFe8X-PAQ&oe=66D8B9BE" alt="Flying Rob Yoga" className="form-image" />
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Tell us about your experience filming flying yogis:</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="sillyQuestion">Are you willing to accept being paid in Huel T-Shirts?</label>
          <select
            id="sillyQuestion"
            name="sillyQuestion"
            value={formData.sillyQuestion}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Maybe">Are you out of your freakin mind?</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
