document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // stop the refresh

    const btn = document.getElementById("sendMessageButton");
    btn.innerText = "Sending...";
    btn.disabled = true;

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_dshc2fd", "template_wai7aeg", params)
        .then(function(res) {
            alert("Your message has been sent successfully! " +
                "We will get back to you as soon as we can.");
            document.getElementById('contactForm').reset();
            btn.innerText = "Send Message";
            btn.disabled = false;
        },
        function(error) {
            alert("Failed to send message. Error: " + JSON.stringify(error));
            btn.innerText = "Send Message";
            btn.disabled = false;
        });
});