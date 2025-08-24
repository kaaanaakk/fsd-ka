import React from 'react';
import { Link } from 'react-router-dom';

const MemberCard = ({ member }) => {
  return (
    <div className="member-card">
      <img 
        src={`http://localhost:5000/uploads/${member.profileImage}`} 
        alt={member.name} 
        className="member-image" 
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = '/placeholder.png';
        }}
      />
      <div className="member-name">{member.name}</div>
      <div className="member-role">Roll Number: {member.rollNumber}</div>
      <Link 
        to={`/members/${member._id}`} 
        className="button" 
        style={{ width: '100%', fontSize: '18px', padding: '10px' }}
      >
        VIEW DETAILS
      </Link>
    </div>
  );
};

export default MemberCard;