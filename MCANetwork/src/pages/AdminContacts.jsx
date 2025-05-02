import { useEffect, useState } from "react";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin-contact");
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Failed to fetch contacts:", error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Admin Contact List
      </h1>

      {contacts.length === 0 ? (
        <p className="text-center text-gray-500">No contact entries found.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className="bg-white shadow-md rounded-lg p-5 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {contact.name}
                  </h2>
                  <p className="text-gray-600">{contact.email}</p>
                </div>
                <p className="mt-2 md:mt-0 text-sm text-gray-500">
                  {new Date(contact.createdAt).toLocaleString()}
                </p>
              </div>
              <p className="mt-4 text-gray-700">{contact.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
