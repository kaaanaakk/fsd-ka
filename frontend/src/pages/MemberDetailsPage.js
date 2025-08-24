import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MemberDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/members/${id}`);
        setMember(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching member details:', err);
        setError('Failed to load member details. Please try again later.');
        setLoading(false);
      }
    };

    fetchMemberDetails();
  }, [id]);

  const formatHobbies = (hobbiesString) => {
    if (!hobbiesString) return [];
    return hobbiesString.split(',').map(hobby => hobby.trim());
  };

  if (loading) {
    return (
      <div className="middle-box" style={{ height: 'auto' }}>
        <div className="box-title">Loading...</div>
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="middle-box" style={{ height: 'auto' }}>
        <div className="box-title">Error</div>
        <div className="box-subtitle">{error || 'Member not found'}</div>
        <Link to="/members" className="button" style={{ width: '100%', marginTop: '20px' }}>
          Go Back to Members
        </Link>
      </div>
    );
  }

  return (
    <div className="member-details-container">
      <div className="box-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        MEMBER DETAILS
      </div>
      
      <div className="middle-box" style={{ width: '100%', height: 'auto', maxWidth: '800px' }}>
        <div className="member-profile">
          <img 
            src={`http://localhost:5000/uploads/${member.profileImage}`} 
            alt={member.name} 
            className="member-image" 
            style={{ width: '200px', height: '200px' }}
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = '/placeholder.png';
            }}
          />
          <h1 className="member-name" style={{ fontSize: '36px', marginTop: '15px' }}>{member.name}</h1>
          <p className="member-role" style={{ fontSize: '24px' }}>{member.year} - {member.degree}</p>
        </div>
        
        <div className="member-info">
          <div className="info-item">
            <div className="info-label">Roll Number:</div>
            <div className="info-value">{member.rollNumber}</div>
          </div>
          
          {member.aboutProject && (
            <div className="info-item">
              <div className="info-label">Project:</div>
              <div className="info-value">{member.aboutProject}</div>
            </div>
          )}
          
          {member.certificate && (
            <div className="info-item">
              <div className="info-label">Certificate:</div>
              <div className="info-value">{member.certificate}</div>
            </div>
          )}
          
          {member.internship && (
            <div className="info-item">
              <div className="info-label">Internship:</div>
              <div className="info-value">{member.internship}</div>
            </div>
          )}
          
          {member.aboutAim && (
            <div className="info-item">
              <div className="info-label">About Your Aim:</div>
              <div className="info-value">{member.aboutAim}</div>
            </div>
          )}
          
          {member.hobbies && (
            <div className="info-item">
              <div className="info-label">Hobbies:</div>
              <div className="info-value">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {formatHobbies(member.hobbies).map((hobby, index) => (
                    <span 
                      key={index}
                      style={{ 
                        background: 'rgba(255, 0, 0, 0.2)',
                        padding: '5px 10px',
                        borderRadius: '3px',
                        border: '1px solid rgba(255, 0, 0, 0.3)'
                      }}
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
          <Link 
            to="/members" 
            className="button" 
            style={{ width: '45%', fontSize: '20px' }}
          >
            Back to Members
          </Link>
          <Link 
            to="/" 
            className="button" 
            style={{ width: '45%', fontSize: '20px' }}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberDetailsPage;