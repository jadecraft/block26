import { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (!selectedContactId) return;

    const fetchContact = async () => {
      try {
        const response = await fetch(
          'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users'
        );
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    fetchContact();
  }, [selectedContactId])

  if (!contact) return <p>Loading contact details...</p>;

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{contact.name}</h2>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Name:</strong> {contact.name}</p>
      
      <button
        onClick={() => setSelectedContactId(null)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Back to Contact List
      </button>
    </div>
  );
};

export default SelectedContact;
