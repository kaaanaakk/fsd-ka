import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MemberCard from '../components/MemberCard';

const ViewMembersPage = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/members');
        setMembers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching members:', err);
        setError('Failed to load members. Please try again later.');
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="middle-box" style={{ height: 'auto' }}>
        <div className="box-title">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="middle-box" style={{ height: 'auto' }}>
        <div className="box-title">Error</div>
        <div className="box-subtitle">{error}</div>
        <Link to="/" className="button" style={{ width: '100%', marginTop: '20px' }}>
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '20px auto', padding: '20px' }}>
      <div className="box-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        MEET OUR AMAZING TEAM
      </div>

      {members.length === 0 ? (
        <div className="middle-box" style={{ height: 'auto' }}>
          <div className="box-subtitle">No team members found.</div>
          <Link to="/add" className="button" style={{ width: '100%', marginTop: '20px' }}>
            Add New Member
          </Link>
        </div>
      ) : (
        <div className="members-grid">
          {members.map((member) => (
            <MemberCard key={member._id} member={member} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewMembersPage;