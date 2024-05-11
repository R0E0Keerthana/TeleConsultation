import React, { useState } from 'react';
function TelehealthBooking() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [specialty, setSpecialty] = useState('general');
 const [preferDoctor, setPreferDoctor] = useState('no');
 const [doctor, setDoctor] = useState('');
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');
 const specializations = ["General Physician", "Dermatology", "Pediatrics", "Cardiology", 
"Neurology"];
 const doctors = {
 "General Physician": ["Dr. Dora", "Dr. Barbie", "Dr. Rosy"],
 Dermatology: ["Dr. Ariel", "Dr. Jackie Chan", "Dr. Julie"],
 Pediatrics: ["Dr. Boots", "Dr. Jasmine", "Dr. Cinderella"],
 Cardiology: ["Dr. Gloria", "Dr. Masha", "Dr. Mickie"],
 Neurology: ["Dr. Minnie", "Dr. Tom", "Dr. Jerry"],
 };
 const timeSlots = [
 { value: '09:00', label: '9:00 AM' },
 { value: '10:00', label: '10:00 AM' },
 { value: '11:00', label: '11:00 AM' },
 { value: '13:00', label: '01:00 PM' },
 { value: '14:00', label: '02:00 PM' },
 ];
 const handleSubmit = async (event) => {
 event.preventDefault();
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 setName('');
 setEmail('');
 setSpecialty('general');
 setPreferDoctor('no');
 setDoctor('');
 setDate('');
 setTime('');
 if (!name || !emailRegex.test(email) || !date || !time) {
 alert('Please fill in all required fields and ensure a valid email format.');
 return;
 }
 alert(`Thank you for your appointment request!
We will contact you shortly to confirm your booking details.
Your appointment is for ${specialty} with ${doctor || 'any available doctor'} on ${date} at 
${time}`);
 };
 return (
 <div className="booking-container">
 <h2>🩺 Book Your Teleconsultation</h2>
 <form onSubmit={handleSubmit}>
 <label htmlFor="name"> Name:</label>
 <input
 type="text"
 id="name"
 name="name"
 value={name}
 onChange={(e) => setName(e.target.value)}
 required
 className="cute-input"
 />
 <br />
 <label htmlFor="email"> Email:</label>
 <input
 type="email"
 id="email"
 name="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 required
 className="cute-input"
 />
 <br />
 <label htmlFor="specialty">✨ Specialty:</label>
 <select id="specialty" name="specialty" value={specialty} onChange={(e) => 
setSpecialty(e.target.value)} className="cute-select">
 <option value="">Choose Speciality</option>
 {specializations.map((spec) => (
 <option key={spec} value={spec}>
 {spec.charAt(0).toUpperCase() + spec.slice(1)}
 </option>
 ))}
 </select>
 <br />
 <label>Do you have a preferred doctor?</label><br /><br />
 <label><input
 type="radio"
 id="preferDoctorYes"
 name="preferDoctor"
 value="yes"
 checked={preferDoctor === 'yes'}
 onChange={(e) => setPreferDoctor(e.target.value)}
 />
 Yes</label>
 <label>
 <input
 type="radio"
 id="preferDoctorNo"
 name="preferDoctor"
 value="no"
 checked={preferDoctor === 'no'}
 onChange={(e) => setPreferDoctor(e.target.value)}
 />
 No
 </label><br />
{preferDoctor === 'yes' && (
 <label htmlFor="doctor">Choose a Doctor:</label>
)}
{preferDoctor === 'yes' && (
 <select id="doctor" name="doctor" value={doctor} onChange={(e) => 
setDoctor(e.target.value)} className="cute-select">
 <option value="">Choose Doctor</option>
 {specializations.includes(specialty) && doctors[specialty] && 
doctors[specialty].map((doctorName) => (
 <option key={doctorName} value={doctorName}>
 {doctorName}
 </option>
 ))}
 </select>
)}
 <br />
 <div id="doctor-tooltip" className="tooltip">
 </div>
 <br />
 <label htmlFor="date"> Date:</label>
 <input
 type="date"
 id="date"
 name="date"
 value={date}
 onChange={(e) => setDate(e.target.value)}
 required
 className="cute-input"
 min={new Date().toISOString().split('T')[0]}
 />
 <br />
 <label htmlFor="time">⏰ Time:</label>
 <select id="time" name="time" value={time} onChange={(e) => 
setTime(e.target.value)} className="cute-select">
 <option value="">Select Time Slot</option>
 {timeSlots.map((slot) => (
 <option key={slot.value} value={slot.value}>
 {slot.label}
 </option>
 ))}
 </select>
 <br />
 <button type="submit" className="cute-button">
 Book Appointment
 </button>
 </form>
 </div>
 );
}
export default TelehealthBooking;
