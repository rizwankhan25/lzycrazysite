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
// country and states

function populateStates() {
    const country = document.getElementById("country").value;
    const stateDropdown = document.getElementById("state");
    stateDropdown.innerHTML = "<option value=''>Select State</option>"; // Reset state dropdown

    if (country !== "India") return; // Exit if country other than India selected

    // States of India
    const indiaStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
        "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
        "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
        "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    indiaStates.forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateDropdown.appendChild(option);
    });
}

function populateCities() {
    const state = document.getElementById("state").value;
    const cityDropdown = document.getElementById("city");
    cityDropdown.innerHTML = "<option value=''>Select City</option>"; // Reset city dropdown

    if (!state) return; // Exit if no state selected

    // Cities for selected state (Hardcoded for demonstration purposes)
    const cities = {
        "Andhra Pradesh": ["Hyderabad", "Visakhapatnam", "Vijayawada"],
        "Arunachal Pradesh": ["Itanagar", "Naharlagun"],
        "Assam": ["Guwahati", "Silchar", "Dibrugarh"],
        "Bihar": ["Patna", "Gaya", "Bhagalpur","Bettiah","Muzaffarpur","Purnia","Darbhanga","Arrah","Begusarai","Katihar","Munger","Chhapra","Danapur","Saharsa","Sasaram","Hajipur","Dehri","Siwan","Motihari","Nawada"],
        "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur"],
        "Goa": ["Panaji", "Margao", "Vasco da Gama"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
        "Haryana": ["Faridabad", "Gurgaon", "Hisar"],
        "Himachal Pradesh": ["Shimla", "Dharamshala", "Kullu"],
        "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
        "Karnataka": ["Bangalore", "Mysore", "Hubli"],
        "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
        "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
        "Manipur": ["Imphal"],
        "Meghalaya": ["Shillong"],
        "Mizoram": ["Aizawl"],
        "Nagaland": ["Kohima", "Dimapur"],
        "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
        "Punjab": ["Chandigarh", "Ludhiana", "Amritsar"],
        "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
        "Sikkim": ["Gangtok"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
        "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
        "Tripura": ["Agartala"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
        "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh"],
        "West Bengal": ["Kolkata", "Howrah", "Durgapur"]
    };

    cities[state].forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        cityDropdown.appendChild(option);
    });
}
let close = document.querySelector(".ri-close-line");
close.addEventListener("click", () => {
    modal.style.display = "none"
})