import React, { useEffect, useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">All Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((c, i) => (
            <li key={i} className="border p-3 rounded bg-gray-100 text-black">
              <p><strong>Name:</strong> {c.name}</p>
              <p><strong>Email:</strong> {c.email}</p>
              <p><strong>Phone:</strong> {c.phone}</p>
              <p><strong>Message:</strong> {c.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
