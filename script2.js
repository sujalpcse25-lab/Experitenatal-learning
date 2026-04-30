<script>
  function handlePaymentSubmit(event) {
    event.preventDefault();
    alert("Payment successful! Redirecting to support page...");
    window.location.href = "support.html";
  }

  document.addEventListener("DOMContentLoaded", function() {
    const payForm = document.querySelector("form");
    if (payForm) {
      payForm.addEventListener("submit", handlePaymentSubmit);
    }

    const creditRadio = document.getElementById("credit");
    const netbankingRadio = document.getElementById("netbanking");
    const creditFields = document.getElementById("credit-fields");
    const netbankingFields = document.getElementById("netbanking-fields");

    function toggleFields() {
      if (creditRadio.checked) {
        creditFields.style.display = "block";
        netbankingFields.style.display = "none";
      } else if (netbankingRadio.checked) {
        creditFields.style.display = "none";
        netbankingFields.style.display = "block";
      }
    }

    // Run once on page load
    toggleFields();

    // Add event listeners
    creditRadio.addEventListener("change", toggleFields);
    netbankingRadio.addEventListener("change", toggleFields);
  });
</script>
