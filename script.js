const openModalBtn = document.getElementById('openModalBtn');
const openModalBtn2 = document.getElementById('openModalBtn2');
const openModalBtn3 = document.getElementById('openModalBtn3');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('agentModal');  

  openModalBtn.onclick = () => modal.style.display = 'block';
  openModalBtn2.onclick = () => modal.style.display = 'block';
  openModalBtn3.onclick = () => modal.style.display = 'block';
  closeModalBtn.onclick = () => modal.style.display = 'none';
  window.onclick = (event) => {
    if (event.target == modal) modal.style.display = 'none';
};
document.querySelector(".agent-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = {
      name: form.name.value.trim(),
      age: form.age.value.trim(),
      qualification: form.qualification.value.trim(),
      mobile: form.mobile.value.trim()
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxRiLE_t5bs0Ei4rw3M-Y0iLF8P6gMhYN1UPluBZfKNmn06ylMUTZTgFCEX9W_IohiCJg/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      alert("Something went wrong. Try again later.");
    }
  });
const hamburger = document.getElementById("hamburger");
      const navRight = document.getElementById("nav-right");

      hamburger.addEventListener("click", () => {
        navRight.classList.toggle("show");
});