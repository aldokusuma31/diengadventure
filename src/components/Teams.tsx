// components/Teams.tsx
"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  picture: string;
}

const Teams: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=6'); // Mengambil 6 anggota tim
        const members = response.data.results.map((member: any) => ({
          name: `${member.name.first} ${member.name.last}`,
          email: member.email,
          phone: member.phone,
          picture: member.picture.large,
        }));
        setTeamMembers(members);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch team members');
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="teams" className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black text-center">Our Teams</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={member.picture}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="mt-2 text-gray-600">{member.email}</p>
              <p className="mt-1 text-gray-600">{member.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
