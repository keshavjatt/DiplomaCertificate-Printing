import React, { useState, useEffect } from 'react';
import './certificate.css';
import { useParams, useLocation } from 'react-router-dom';

function Certificate() {
    const { id } = useParams();
    const location = useLocation();
    const formData = location.state?.formD || {};
    const [qdata, setQdata] = useState("");

    // Get current date in DD-MM-YYYY format
    const getCurrentDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = today.getFullYear();
        return `${day}-${month}-${year}`;
    };

    useEffect(() => {
    }, [formData]);

    return (
        <div className="certificate-container">
            <div className="certificate">
                <div className="certificate-header">
                    <h1>{formData.company_name}</h1>
                </div>
                
                <div className="certificate-body">
                    
                    <h2 style={{ textDecoration: 'underline' }}>DIPLOMA</h2>
                        
                    
                    <div className='profile-img'>
                        <img src={formData.image} alt="Logo" className="logo-right" />
                    </div>

                    <p><strong>This is to Certify that</strong></p>
                    <p className='mk'>{formData.stu_name} S/O {formData.fathers_name}</p>
                    
                    <p><strong>Attended the</strong></p>
                    <p className='mk'>{formData.attended}</p>
                    <p><strong>During the Period</strong></p>
                    <p className='mk'>{formData.periods}</p>
                    <p><strong>Conducted by</strong></p>
                    <p className='mk'>{formData.conducted_by}</p>
                    <p><strong>Obtained</strong></p>
                    <p className='mk'>{formData.obtained}</p>
                </div>
                
                <div className="footer">
                    <p><b>Roll No:</b> {formData.roll_no}</p>
                    <p><b>ASC Name:</b> {formData.asc_name}</p>
                    <p><b>Date of Birth:</b> {formData.dob}</p>
                    <p><b>Date of Issue:</b> {getCurrentDate()}</p> {/* Here we set the current date */}
                </div>
            </div>
        </div>
    );
}

export default Certificate;