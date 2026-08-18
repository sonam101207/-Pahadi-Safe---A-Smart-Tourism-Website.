/* =========================================
   PAHADISAFAR
   Main JavaScript
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("open");

}


/* =========================================
   SCROLL TO PLANNER
========================================= */

function scrollToPlanner() {

    document
        .getElementById("planner")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   DESTINATION DATA
========================================= */

const destinations = {

    Kedarnath: {

        image:
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85",

        location: "Rudraprayag, Uttarakhand",

        description:
            "Kedarnath is one of India's most important Himalayan pilgrimage destinations, surrounded by dramatic snow-covered peaks.",

        bestTime: "April – November",

        duration: "4–6 Days",

        difficulty: "Moderate",

        attractions:
            "Kedarnath Temple, Bhairavnath Temple, Chorabari Glacier",

        budget: "₹8,000 – ₹18,000/person"

    },


    Rishikesh: {

        image:
            "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85",

        location: "Dehradun, Uttarakhand",

        description:
            "Rishikesh combines spirituality, yoga, adventure sports and the beauty of the Ganga.",

        bestTime: "September – June",

        duration: "2–4 Days",

        difficulty: "Easy",

        attractions:
            "Laxman Jhula, Ram Jhula, Ganga Aarti, River Rafting",

        budget: "₹4,000 – ₹12,000/person"

    },


    Auli: {

        image:
            "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=1200&q=85",

        location: "Chamoli, Uttarakhand",

        description:
            "Auli is famous for its snow-covered slopes, skiing and spectacular Himalayan views.",

        bestTime: "November – March",

        duration: "3–4 Days",

        difficulty: "Easy–Moderate",

        attractions:
            "Auli Ski Resort, Gurso Bugyal, Auli Lake",

        budget: "₹7,000 – ₹15,000/person"

    },


    Nainital: {

        image:
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=85",

        location: "Nainital, Uttarakhand",

        description:
            "A beautiful Himalayan lake town known for Naini Lake, viewpoints and peaceful mountain scenery.",

        bestTime: "March – June",

        duration: "2–3 Days",

        difficulty: "Easy",

        attractions:
            "Naini Lake, Snow View Point, Mall Road",

        budget: "₹4,000 – ₹10,000/person"

    },


    Mussoorie: {

        image:
            "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=85",

        location: "Dehradun, Uttarakhand",

        description:
            "Mussoorie is a popular hill station famous for mountain views, waterfalls and scenic walks.",

        bestTime: "March – June",

        duration: "2–3 Days",

        difficulty: "Easy",

        attractions:
            "Mall Road, Kempty Falls, Gun Hill, Landour",

        budget: "₹4,000 – ₹10,000/person"

    },


    Badrinath: {

        image:
            "https://images.unsplash.com/photo-1623059515307-1d3c7d0a2f12?auto=format&fit=crop&w=1200&q=85",

        location: "Chamoli, Uttarakhand",

        description:
            "Badrinath is a sacred Himalayan pilgrimage town situated between magnificent mountain ranges.",

        bestTime: "May – November",

        duration: "3–5 Days",

        difficulty: "Moderate",

        attractions:
            "Badrinath Temple, Mana Village, Vasudhara Falls",

        budget: "₹7,000 – ₹16,000/person"

    }

};


/* =========================================
   DESTINATION SEARCH
========================================= */

function searchDestinations() {

    const input =
        document
        .getElementById("destinationSearch")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(
            ".destination-card"
        );

    cards.forEach(card => {

        const name =
            card
            .dataset
            .name
            .toLowerCase();

        if (name.includes(input)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================================
   CATEGORY FILTER
========================================= */

function filterCategory(category, button) {

    const cards =
        document.querySelectorAll(
            ".destination-card"
        );

    document
        .querySelectorAll(".category")
        .forEach(btn => {

            btn.classList.remove("active");

        });

    button.classList.add("active");


    cards.forEach(card => {

        const cardCategories =
            card.dataset.category;

        if (
            category === "all" ||
            cardCategories.includes(category)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================================
   DESTINATION MODAL
========================================= */

function openDestination(name) {

    const destination =
        destinations[name];

    if (!destination) return;


    const modal =
        document.getElementById(
            "destinationModal"
        );

    const details =
        document.getElementById(
            "destinationDetails"
        );


    details.innerHTML = `

        <img
            class="detail-image"
            src="${destination.image}"
            alt="${name}"
        >

        <div class="detail-body">

            <span class="section-label">
                UTTARAKHAND DESTINATION
            </span>

            <h2>${name}</h2>

            <p>
                ${destination.description}
            </p>

            <div class="detail-info-grid">

                <div class="detail-info">

                    <span>Location</span>

                    <strong>
                        ${destination.location}
                    </strong>

                </div>

                <div class="detail-info">

                    <span>Best Time</span>

                    <strong>
                        ${destination.bestTime}
                    </strong>

                </div>

                <div class="detail-info">

                    <span>Duration</span>

                    <strong>
                        ${destination.duration}
                    </strong>

                </div>

                <div class="detail-info">

                    <span>Difficulty</span>

                    <strong>
                        ${destination.difficulty}
                    </strong>

                </div>

                <div class="detail-info">

                    <span>Popular Attractions</span>

                    <strong>
                        ${destination.attractions}
                    </strong>

                </div>

                <div class="detail-info">

                    <span>Estimated Budget</span>

                    <strong>
                        ${destination.budget}
                    </strong>

                </div>

            </div>

            <button
                class="primary-btn"
                onclick="selectDestination('${name}')">

                Plan Trip to ${name}

                <i class="fa-solid fa-arrow-right"></i>

            </button>

        </div>
    `;


    modal.classList.add("show");

}


function closeModal() {

    document
        .getElementById("destinationModal")
        .classList.remove("show");

}


function selectDestination(name) {

    document
        .getElementById("destination")
        .value = name;

    closeModal();

    scrollToPlanner();

}


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

document
    .getElementById("destinationModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeModal();

            }

        }
    );


/* =========================================
   TRIP PLANNER STEPS
========================================= */

function nextStep(step) {

    document
        .querySelectorAll(".form-step")
        .forEach(formStep => {

            formStep.classList.remove(
                "active"
            );

        });


    document
        .getElementById(
            "step" + step
        )
        .classList.add("active");


    const progressSteps =
        document.querySelectorAll(
            ".progress-step"
        );


    progressSteps.forEach(
        (progressStep, index) => {

            progressStep.classList.toggle(
                "active",
                index < step
            );

        }
    );

}


/* =========================================
   GENERATE TRIP
========================================= */

function generateTrip(event) {

    event.preventDefault();


    const name =
        document
        .getElementById("name")
        .value;

    const travellers =
        parseInt(
            document
            .getElementById("travellers")
            .value
        );


    const destination =
        document
        .getElementById("destination")
        .value;


    const start =
        document
        .getElementById("startLocation")
        .value;


    const travelDate =
        document
        .getElementById("travelDate")
        .value;


    const returnDate =
        document
        .getElementById("returnDate")
        .value;


    const travelType =
        document
        .getElementById("travelType")
        .value;


    const budget =
        document.querySelector(
            'input[name="budget"]:checked'
        ).value;


    /* ==========================
       BASIC BUDGET CALCULATION
    ========================== */

    let costPerPerson;


    if (budget === "budget") {

        costPerPerson = 7000;

    } else if (
        budget === "standard"
    ) {

        costPerPerson = 14000;

    } else {

        costPerPerson = 25000;

    }


    const total =
        costPerPerson *
        travellers;


    const transport =
        Math.round(total * .25);

    const accommodation =
        Math.round(total * .35);

    const food =
        Math.round(total * .15);

    const activities =
        Math.round(total * .15);

    const guide =
        Math.round(total * .10);


    const totalCost =
        transport +
        accommodation +
        food +
        activities +
        guide;


    /* ==========================
       SUMMARY
    ========================== */

    const summary =
        document.getElementById(
            "tripSummary"
        );


    summary.innerHTML = `

        <div class="summary-card">

            <div class="summary-top">

                <div class="summary-item">

                    <span>Traveller</span>

                    <strong>
                        ${name}
                    </strong>

                </div>

                <div class="summary-item">

                    <span>Destination</span>

                    <strong>
                        ${destination}
                    </strong>

                </div>

                <div class="summary-item">

                    <span>Travellers</span>

                    <strong>
                        ${travellers}
                    </strong>

                </div>

                <div class="summary-item">

                    <span>Travel Type</span>

                    <strong>
                        ${travelType}
                    </strong>

                </div>

            </div>


            <p>
                <strong>
                    Route:
                </strong>

                ${start}
                →
                ${destination}
            </p>

            <p>
                <strong>
                    Dates:
                </strong>

                ${travelDate}
                →
                ${returnDate}
            </p>


            <br>


            <div class="cost-box">

                <span>
                    ESTIMATED TOTAL TRIP COST
                </span>

                <h3>
                    ₹${totalCost.toLocaleString("en-IN")}
                </h3>

                <p>
                    Transportation:
                    ₹${transport.toLocaleString("en-IN")}
                </p>

                <p>
                    Accommodation:
                    ₹${accommodation.toLocaleString("en-IN")}
                </p>

                <p>
                    Food:
                    ₹${food.toLocaleString("en-IN")}
                </p>

                <p>
                    Activities:
                    ₹${activities.toLocaleString("en-IN")}
                </p>

                <p>
                    Guide:
                    ₹${guide.toLocaleString("en-IN")}
                </p>

            </div>

            <br>

            <p>
                <strong>
                    Note:
                </strong>

                This is an estimated demo calculation.
                Real prices will require live hotel,
                transport and activity APIs.
            </p>

        </div>
    `;


    const result =
        document.getElementById(
            "tripResult"
        );

    result.classList.add("show");


    result.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   GOOGLE MAPS
========================================= */

function openGoogleMaps() {

    const start =
        document
        .getElementById("startLocation")
        ?.value || "Dehradun";


    const destination =
        document
        .getElementById("destination")
        ?.value || "Kedarnath";


    const url =
        "https://www.google.com/maps/dir/" +
        encodeURIComponent(start) +
        "/" +
        encodeURIComponent(destination);


    window.open(
        url,
        "_blank"
    );

}


/* =========================================
   SOS DEMO
========================================= */

function triggerSOS() {

    const confirmed =
        confirm(
            "This is a DEMO SOS button. " +
            "No emergency call or message will actually be sent.\n\n" +
            "In the final IoT version, this action can trigger " +
            "an emergency alert through the connected device."
        );


    if (confirmed) {

        alert(
            "Demo SOS triggered.\n\n" +
            "Future version: GPS location + emergency contact alert."
        );

    }

}


/* =========================================
   DATE VALIDATION
========================================= */

const travelDate =
    document.getElementById(
        "travelDate"
    );

const returnDate =
    document.getElementById(
        "returnDate"
    );


travelDate.addEventListener(
    "change",
    function() {

        returnDate.min =
            this.value;

    }
);


/* =========================================
   PREVENT PAST TRAVEL DATES
========================================= */

const today =
    new Date()
    .toISOString()
    .split("T")[0];


travelDate.min = today;

returnDate.min = today;