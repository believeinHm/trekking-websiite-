/* =========================
      TRIP DETAILS DATA
========================= */

const trips = {

  rajgad: {
    title: "Rajgad Trek",
    image: "rajgad.jpg",
    duration: "1 Day",
    price: "₹1,299",
    location: "Pune, Maharashtra",

    description:
      "Explore the historic Rajgad Fort and enjoy beautiful mountain views. This trek is perfect for beginners and adventure lovers.",

    includes: [
      "Experienced Trek Guide",
      "Breakfast",
      "Travel Assistance",
      "Basic First Aid",
      "Trek Coordination"
    ]
  },


  raigad: {
    title: "Raigad Trek",
    image: "raigad.jpg",
    duration: "1 Day",
    price: "₹1,499",
    location: "Raigad, Maharashtra",

    description:
      "Visit the historic Raigad Fort and experience the beauty of the Sahyadri mountains while exploring its rich history.",

    includes: [
      "Experienced Trek Guide",
      "Breakfast",
      "Travel Assistance",
      "Basic First Aid",
      "Trek Coordination"
    ]
  },


  sinhagad: {
    title: "Sinhagad Trek",
    image: "sinhagad.jpg",
    duration: "1 Day",
    price: "₹999",
    location: "Pune, Maharashtra",

    description:
      "A perfect one-day adventure near Pune. Enjoy the scenic route, mountain views and historic surroundings of Sinhagad.",

    includes: [
      "Trek Guide",
      "Breakfast",
      "Travel Assistance",
      "First Aid Support",
      "Trip Coordination"
    ]
  },


  lohagad: {
    title: "Lohagad Trek",
    image: "lohagad.jpg",
    duration: "1 Day",
    price: "₹1,099",
    location: "Lonavala, Maharashtra",

    description:
      "Experience the beauty of Lohagad Fort surrounded by the Western Ghats. A great trek for beginners and nature lovers.",

    includes: [
      "Experienced Guide",
      "Breakfast",
      "Travel Assistance",
      "First Aid",
      "Trek Coordination"
    ]
  },


  visapur: {
    title: "Visapur Trek",
    image: "visapur.jpg",
    duration: "1 Day",
    price: "₹1,199",
    location: "Lonavala, Maharashtra",

    description:
      "Enjoy an exciting trek to Visapur Fort with beautiful mountain landscapes and an adventurous trail.",

    includes: [
      "Trek Guide",
      "Breakfast",
      "Travel Assistance",
      "First Aid Support",
      "Trip Coordination"
    ]
  },


  torna: {
    title: "Torna Fort Trek",
    image: "torna.jpg",
    duration: "1 Day",
    price: "₹1,399",
    location: "Pune, Maharashtra",

    description:
      "Take on the historic Torna Fort and enjoy an adventurous trek through the beautiful Sahyadri mountains.",

    includes: [
      "Experienced Trek Guide",
      "Breakfast",
      "Travel Assistance",
      "Basic First Aid",
      "Trek Coordination"
    ]
  },


  harishchandragad: {
    title: "Harishchandragad Trek",
    image: "harishchandragad.jpg",
    duration: "2 Days / 1 Night",
    price: "₹1,999",
    location: "Ahmednagar, Maharashtra",

    description:
      "Experience an exciting overnight trek with beautiful landscapes, mountain trails and the famous Konkan Kada viewpoint.",

    includes: [
      "Experienced Trek Guide",
      "Camping",
      "Dinner",
      "Breakfast",
      "Basic First Aid"
    ]
  },


  kalsubai: {
    title: "Kalsubai Trek",
    image: "kalsubai.jpg",
    duration: "1 Day",
    price: "₹1,499",
    location: "Nashik, Maharashtra",

    description:
      "Challenge yourself on the Kalsubai trek and enjoy spectacular views from the highest peak of Maharashtra.",

    includes: [
      "Experienced Trek Guide",
      "Breakfast",
      "Travel Assistance",
      "First Aid Support",
      "Trek Coordination"
    ]
  },


  pratapgad: {
    title: "Pratapgad Trek",
    image: "pratapgad.jpg",
    duration: "1 Day",
    price: "₹1,299",
    location: "Satara, Maharashtra",

    description:
      "Explore the historic Pratapgad Fort while enjoying scenic views of the surrounding Western Ghats.",

    includes: [
      "Trek Guide",
      "Breakfast",
      "Travel Assistance",
      "Basic First Aid",
      "Trip Coordination"
    ]
  },


  sandhan: {
    title: "Sandhan Valley",
    image: "sandhan.jpg",
    duration: "2 Days / 1 Night",
    price: "₹2,499",
    location: "Ahmednagar, Maharashtra",

    description:
      "Experience an exciting adventure through the famous Sandhan Valley with rock patches, water crossings and camping.",

    includes: [
      "Experienced Trek Guide",
      "Camping",
      "Dinner",
      "Breakfast",
      "Safety Equipment"
    ]
  },


  gokarna: {
    title: "Gokarna Trip",
    image: "gokharna.jpg",
    duration: "2 Days / 3 Nights",
    price: "₹5,499",
    location: "Gokarna, Karnataka",

    description:
      "Enjoy the beaches, peaceful surroundings and beautiful coastal views of Gokarna with Trek Me.",

    includes: [
      "Travel Assistance",
      "Accommodation",
      "Breakfast",
      "Trip Coordination",
      "Local Assistance"
    ]
  },


  ujjain: {
    title: "Ujjain Trip",
    image: "ujjain.jpg",
    duration: "2 Days / 3 Nights",
    price: "₹5,499",
    location: "Ujjain, Madhya Pradesh",

    description:
      "Explore the cultural and spiritual attractions of Ujjain with a comfortable and well-planned trip.",

    includes: [
      "Travel Assistance",
      "Accommodation",
      "Breakfast",
      "Trip Coordination",
      "Local Assistance"
    ]
  }

};


/* =========================
       SHOW DETAILS
========================= */

function showDetails(tripName) {

  const trip = trips[tripName];

  if (!trip) {
    return;
  }


  document.getElementById("modalImage").src =
    trip.image;

  document.getElementById("modalTitle").textContent =
    trip.title;

  document.getElementById("modalDescription").textContent =
    trip.description;

  document.getElementById("modalDuration").textContent =
    trip.duration;

  document.getElementById("modalPrice").textContent =
    trip.price;

  document.getElementById("modalLocation").textContent =
    trip.location;


  const includes =
    document.getElementById("modalIncludes");

  includes.innerHTML = "";


  trip.includes.forEach(function(item) {

    const li = document.createElement("li");

    li.textContent = item;

    includes.appendChild(li);

  });


  document.getElementById("detailsModal").style.display =
    "flex";
}


/* =========================
       CLOSE DETAILS
========================= */

function closeDetails() {

  document.getElementById("detailsModal").style.display =
    "none";
}


/* =========================
      CLOSE ON BACKGROUND
========================= */

window.onclick = function(event) {

  const modal =
    document.getElementById("detailsModal");

  if (event.target === modal) {

    modal.style.display = "none";

  }

};


/* =========================
       ESC KEY
========================= */

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

    closeDetails();

  }

});