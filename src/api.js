export const submitContact = async (contact) => {
  const res = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact), // use the correct parameter
  });
  return res.json();
};
