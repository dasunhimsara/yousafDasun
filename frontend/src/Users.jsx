import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([{ Name: "dasun", email: "dd@gmail.com", Age: 200 }]);

  return (
    <div className="p-4 bg-blue-400  flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <Link to="/create">ADD+</Link>
        
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-bold uppercase text-sm">Name</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-bold uppercase text-sm">Email</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-bold uppercase text-sm">Age</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((dasun, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{dasun.Name}</td>
                  <td className="py-2 px-4">{dasun.email}</td>
                  <td className="py-2 px-4">{dasun.Age}</td>
                </tr>
              ))
            }
            <Link to="/update">Update</Link>
          </tbody>
        </table>
      </div>
    </div>
  );
}
