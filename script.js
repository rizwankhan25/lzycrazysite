var modal = document.querySelector(".modal")

    // Get the button that opens the modal
    var btn = document.getElementById("create-account-btn");

    // Get the <span> element that closes the modal

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
        modal.style.display = "flex";

    }

    // When the user clicks on <span> (x), close the modal
    window.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Populate day dropdown
    var dayDropdown = document.getElementById("dob_day");
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        dayDropdown.appendChild(option);
    }

    // Populate month dropdown
    var monthDropdown = document.getElementById("dob_month");
    var months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    for (var i = 0; i < months.length; i++) {
        var option = document.createElement("option");
        option.text = months[i];
        option.value = i + 1;
        monthDropdown.appendChild(option);
    }

    // Populate year dropdown
    var yearDropdown = document.getElementById("dob_year");
    var currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= currentYear - 100; i--) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        yearDropdown.appendChild(option);
    }