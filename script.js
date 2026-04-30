<script>
  function handleRegistrationSubmit(event) {
    event.preventDefault(); // stop default form submission
    alert("Thank you for registration in our course");
    window.location.href = "payment.html"; // redirect to payment page
  }

  document.addEventListener("DOMContentLoaded", function() {
    const regForm = document.querySelector("form");
    if (regForm) {
      regForm.addEventListener("submit", handleRegistrationSubmit);
    }
  });
</script>
