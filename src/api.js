// src/api.js
export const submitContact = async (formData) => {
  const response = await fetch(
    "https://react-portfolio-production-87de.up.railway.app/api/contact", // ✅ same domain as backend
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }

  return response.json();
};
