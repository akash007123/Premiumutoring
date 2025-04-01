import { useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  location: string;
  picture: string;
}

const RandomUser = () => {
  const [user, setUser] = useState<User | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchRandomUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        const userData = data.results[0];

        setUser({
          name: `${userData.name.first} ${userData.name.last}`,
          email: userData.email,
          location: `${userData.location.city}, ${userData.location.country}`,
          picture: userData.picture.large,
        });
        setLoading(false);
      } catch (error) {
        setError('Error fetching random user');
        setLoading(false);
      }
    };

    fetchRandomUser();
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    
    <> <br /><br /><br /><br /><br />
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
  <h2 className="text-2xl font-semibold text-gray-700">User Info:</h2>
  {user && (
    <div className="space-y-3">
      <p className="text-lg text-gray-600"><strong>Name:</strong> {user.name}</p>
      <p className="text-lg text-gray-600"><strong>Email:</strong> {user.email}</p>
      <p className="text-lg text-gray-600"><strong>Location:</strong> {user.location}</p>
      <img 
        src={user.picture} 
        alt="User" 
        className="w-32 h-32 object-cover rounded-full mx-auto border-2 border-gray-300"
      />
    </div>
  )}
</div>
    </>

  );
};

export default RandomUser;
