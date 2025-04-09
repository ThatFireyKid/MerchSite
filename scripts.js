document.addEventListener("DOMContentLoaded", function() {
    const orderButtons = document.querySelectorAll('.order-btn');
    const errorCodeDiv = document.getElementById('error-code');

    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Simulating the error code reveal when ordering a product
            errorCodeDiv.classList.remove('hidden');
        });
    });
});
