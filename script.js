'use strict';

const quotes = [
  {
    text: "Whitewashed cliffs, blue-domed churches, and sunsets that stop time.",
    city: "Santorini",
    country: "Greece",
    image: "images/santorini.jpg"
  },
  {
    text: "Where ancient temples meet terraced rice fields and the ocean never sleeps.",
    city: "Bali",
    country: "Indonesia",
    image: "images/bali.jpg"
  },
  {
    text:     "A city where every season feels like a painting and every street holds a shrine.",
    city: "Kyoto",
    country: "Japan",
    image: "images/kyoto.jpg"
  },
  {
    text: "The quiet gateway to Thailand's southern islands, where the real journey begins.",
    city: "Surat Thani",
    country: "Thailand",
    image: "images/surat_thani.jpg"
  },
  {
    text: "Three thousand years of history you can touch, taste, and walk through in a single afternoon.",
    city: "Rome",
    country: "Italy",
    image: "images/rome.jpg"
  },
  {
    text: "Neon lights, ramen at midnight, and a pace of life that never lets you stand still.",
    city: "Tokyo",
    country: "Japan",
    image: "images/tokyo.jpg"
  }
];




const TRIP_DATA = [
  {
    name:        "Bali",
    country:     "Indonesia",
    travelTypes: ["adventure", "relaxation", "nature", "cultural"],
    budgets:     ["low", "medium"],
    description: "Bali blends volcanic mountains, surf beaches, and ancient Hindu temples into one endlessly rewarding island. Whether you want to meditate in Ubud's rice terraces, surf Uluwatu's reef breaks, or party in Seminyak — Bali adapts to everyone."
  },
  {
    name:        "Kyoto",
    country:     "Japan",
    travelTypes: ["cultural", "relaxation", "nature"],
    budgets:     ["medium", "high"],
    description: "A thousand years of imperial history compressed into one achingly beautiful city. Walk through 10,000 torii gates at Fushimi Inari, watch geisha glide through the stone lanes of Gion, and find stillness in a centuries-old Zen garden."
  },
  {
    name:        "Tokyo",
    country:     "Japan",
    travelTypes: ["cultural", "adventure"],
    budgets:     ["medium", "high"],
    description: "The world's most electrifying metropolis pulses 24 hours a day. Skyscrapers, samurai museums, robot restaurants, and the finest ramen on the planet all coexist in a city that never stops reinventing itself."
  },
  {
    name:        "Surat Thani",
    country:     "Thailand",
    travelTypes: ["adventure", "nature", "relaxation"],
    budgets:     ["low", "medium"],
    description: "The quiet launching pad for Thailand's greatest islands, Surat Thani itself rewards the curious — ancient rainforests, dramatic limestone lakes, and an authentic Thai pace of life far from the tourist trail."
  },
  {
    name:        "Santorini",
    country:     "Greece",
    travelTypes: ["relaxation", "cultural"],
    budgets:     ["high"],
    description: "Perched above a volcanic caldera, Santorini is the definitive Mediterranean escape. Blue-domed churches, wine tasting on cliff edges, and the world's most photographed sunset make every moment feel cinematic."
  },
  {
    name:        "Rome",
    country:     "Italy",
    travelTypes: ["cultural"],
    budgets:     ["medium", "high"],
    description: "Three thousand years of empire, art, and pasta in a single city. The Colosseum, Vatican, and Trevi Fountain are just the headliners — Rome's real magic lives in a corner trattoria with a glass of house wine."
  },
  {
    name:        "Cape Town",
    country:     "South Africa",
    travelTypes: ["adventure", "nature", "cultural"],
    budgets:     ["medium", "high"],
    description: "Two oceans, one mountain, and a city unlike any other in Africa. Hike Table Mountain in the morning, visit Robben Island in the afternoon, and watch the sun set over the Cape Peninsula with a Stellenbosch wine in hand."
  },
  {
    name:        "Machu Picchu",
    country:     "Peru",
    travelTypes: ["adventure", "nature", "cultural"],
    budgets:     ["medium", "high"],
    description: "An Incan citadel rising from the Andean cloud forest at 2,430 metres. Walking through its terraces and temples, it's impossible not to feel the weight of a civilisation that built this — and then simply walked away."
  },
  {
    name:        "Sydney",
    country:     "Australia",
    travelTypes: ["adventure", "relaxation", "nature"],
    budgets:     ["high"],
    description: "Opera House sails, golden harbour light, and Bondi's surf culture — Sydney is where urban sophistication meets the great outdoors. The Blue Mountains and dozens of national parks begin less than an hour from the city centre."
  }
];


const DESTINATIONS_DATA = [
  {
    id:          1,
    name:        "Bali",
    country:     "Indonesia",
    continent:   "asia",
    highlight:   "Where ancient temples meet terraced rice fields and the ocean never sleeps.",
    description: "Bali is Indonesia's most celebrated island — a place where Hindu spirituality, volcanic landscapes, and world-class surf collide. From the artistic streets of Ubud to the dramatic sea temple of Tanah Lot, every corner holds something extraordinary. The island's rich culture is woven into daily life through offerings, ceremonies, and dance performances that happen year-round.",
    image:       "images/bali.jpg",
    attractions: [
      "Tanah Lot Sea Temple",
      "Ubud Sacred Monkey Forest",
      "Tegalalang Rice Terraces",
      "Mount Batur Sunrise Trek",
      "Seminyak Beach",
      "Uluwatu Cliff Temple"
    ],
    costs: [
    { type: "Accommodation",   budget: "LKR 4,500-12,000 / night",  premium: "LKR 60,000+ / night"  },
    { type: "Meals",           budget: "LKR 900-2,400 / meal",      premium: "LKR 9,000+ / meal"    },
    { type: "Local Transport", budget: "LKR 600-1,500 / day",       premium: "LKR 12,000+ / day"    },
    { type: "Activities",      budget: "LKR 1,500-6,000 each",      premium: "LKR 24,000+ each"     }
  ]
  },
  {
    id:          2,
    name:        "Kyoto",
    country:     "Japan",
    continent:   "asia",
    highlight:   "A city where every season feels like a painting and every street holds a shrine.",
    description: "Kyoto served as Japan's imperial capital for over a thousand years and remains the country's cultural heart. Wander through thousands of vermilion torii gates at Fushimi Inari, stroll bamboo groves in Arashiyama, or sip matcha in a 400-year-old teahouse. Kyoto's 17 UNESCO World Heritage sites make it one of the most historically dense cities on Earth.",
    image:       "images/kyoto.jpg",
    attractions: [
      "Fushimi Inari Taisha (10,000 Torii Gates)",
      "Arashiyama Bamboo Grove",
      "Kinkaku-ji (Golden Pavilion)",
      "Gion District & Geisha Streets",
      "Nishiki Market",
      "Philosopher's Path"
    ],
    costs: [
    { type: "Accommodation",   budget: "LKR 12,000-24,000 /night", premium: "LKR 90,000+ /night"  },
    { type: "Meals",           budget: "LKR 2,400-4,500 /meal",    premium: "LKR 24,000+ /meal"   },
    { type: "Local Transport", budget: "LKR 1,500-3,000 /day",     premium: "LKR 18,000+ /day"    },
    { type: "Activities",      budget: "LKR 1,500-4,500 each",      premium: "LKR 30,000+ each"     }
  ]
  },
  {
    id:          3,
    name:        "Tokyo",
    country:     "Japan",
    continent:   "asia",
    highlight:   "Neon lights, ramen at midnight, and a pace of life that never lets you stand still.",
    description: "Tokyo is the world's most populous metropolis and arguably its most fascinating. It is simultaneously the global capital of technology, fashion, food, and pop culture, yet ancient temples and zen gardens sit quietly between the skyscrapers. The city rewards exploration at every level — from the buzzing alleys of Shinjuku to the serene grounds of Meiji Shrine.",
    image:       "images/tokyo2.jpg",
    attractions: [
      "Shibuya Scramble Crossing",
      "Senso-ji Temple, Asakusa",
      "teamLab Planets Digital Art Museum",
      "Tsukiji Outer Market",
      "Akihabara Electric Town",
      "Shinjuku Golden Gai"
    ],
    costs: [
    { type: "Accommodation",   budget: "LKR 18,000-36,000 / night", premium: "LKR 120,000+ /night" },
    { type: "Meals",           budget: "LKR 3,600-7,500 / meal",    premium: "LKR 24,000+ /meal"   },
    { type: "Local Transport", budget: "LKR 2,400-4,500 / day",     premium: "LKR 18,000+ /day"    },
    { type: "Activities",      budget: "LKR 6,000-15,000 each",     premium: "LKR 45,000+ each"    }
  ]
  },
  {
    id:          4,
    name:        "Surat Thani",
    country:     "Thailand",
    continent:   "asia",
    highlight:   "The quiet gateway to Thailand's southern islands, where the real journey begins.",
    description: "Surat Thani is the main embarkation point for the legendary Gulf of Thailand islands — Koh Samui, Koh Phangan, and Koh Tao. Beyond island hopping, the province is home to Khao Sok National Park, one of the world's oldest rainforests with dramatic limestone karsts rising from an emerald lake. It's Thailand for people who've already done Bangkok.",
    image:       "images/surat_thani.jpg",
    attractions: [
      "Khao Sok National Park",
      "Cheow Lan Lake (Ratchaprapha Dam)",
      "Koh Samui Ferry Gateway",
      "Monkey Theatre",
      "Tapee River Night Market",
      "Don Sak Pier Mangroves"
    ],
    costs: [
    { type: "Accommodation",   budget: "LKR 3,000-7,500 /night",   premium: "LKR 30,000+ /night"  },
    { type: "Meals",           budget: "LKR 600-1,800 /meal",      premium: "LKR 6,000+ /meal"    },
    { type: "Local Transport", budget: "LKR 900-2,400 /day",       premium: "LKR 9,000+ /day"     },
    { type: "Activities",      budget: "LKR 3,000-9,000 each",      premium: "LKR 24,000+ each"     }
  ]
  },
  {
    id:          5,
    name:        "Santorini",
    country:     "Greece",
    continent:   "europe",
    highlight:   "Whitewashed cliffs, blue-domed churches, and sunsets that stop time.",
    description: "Santorini is the remnant of a massive volcanic caldera whose eruption 3,600 years ago may have triggered the decline of the Minoan civilisation. Today the crescent-shaped island draws visitors with its iconic blue-domed churches in Oia, volcanic black-sand beaches, and sunsets over the caldera that are considered among the most beautiful in the world.",
    image:       "images/santorini.jpg",
    attractions: [
      "Oia Village & Famous Sunset Spot",
      "Red Beach (Kokkini Paralia)",
      "Ancient Akrotiri Ruins",
      "Fira Cable Car & Caldera Walk",
      "Santo Wines Winery",
      "Perissa Black Sand Beach"
    ],
    costs: [
    { type: "Accommodation",   budget: "LKR 18,000 – 36,000 / night", premium: "LKR 150,000+ / night" },
    { type: "Meals",           budget: "LKR 3,600 – 7,500 / meal",    premium: "LKR 24,000+ / meal"   },
    { type: "Local Transport", budget: "LKR 1,500 – 4,500 / day",     premium: "LKR 24,000+ / day"    },
    { type: "Activities",      budget: "LKR 4,500 – 12,000 each",     premium: "LKR 45,000+ each"     }
  ]
  },
  {
    id:          6,
    name:        "Rome",
    country:     "Italy",
    continent:   "europe",
    highlight:   "Three thousand years of history you can touch, taste, and walk through in one afternoon.",
    description: "Rome is the city that built Western civilisation and never let anyone forget it. The Colosseum, the Forum, the Pantheon, and the Vatican are not just tourist attractions — they are the original blueprints of architecture, governance, and art that shaped the modern world. Between monuments, Rome's trattorias serve some of the finest pasta on the planet.",
    image:       "images/rome.jpg",
    attractions: [
      "The Colosseum & Roman Forum",
      "Vatican Museums & Sistine Chapel",
      "Trevi Fountain",
      "Pantheon",
      "Piazza Navona",
      "Borghese Gallery"
    ],
    costs: [
    { type: "Accommodation",   budget: "LKR 15,000-30,000 / night", premium: "LKR 105,000+ /night" },
    { type: "Meals",           budget: "LKR 3,000-6,000 / meal",    premium: "LKR 21,000+ /meal"   },
    { type: "Local Transport", budget: "LKR 1,500-3,000 / day",     premium: "LKR 15,000+ /day"    },
    { type: "Activities",      budget: "LKR 4,500-9,000 each",      premium: "LKR 36,000+ each"     }
  ]
  },
  {
    id:          7,
    name:        "Cape Town",
    country:     "South Africa",
    continent:   "africa",
    highlight:   "Mountains, vineyards, and two oceans meet at the southern tip of the world.",
    description: "Cape Town sits at the meeting point of the Atlantic and Indian Oceans, flanked by the iconic Table Mountain and some of the most dramatic coastline in Africa. The city blends a vibrant food and arts scene with world-class wine regions in Stellenbosch, penguin colonies at Boulders Beach, and the poignant history of Robben Island.",
    image:       "images/capetown.webp",
    attractions: [
      "Table Mountain National Park",
      "Cape of Good Hope",
      "Robben Island",
      "Boulders Beach Penguin Colony",
      "V&A Waterfront",
      "Stellenbosch Wine Route"
    ],
    costs: [
    { type: "Accommodation",   budget: "LKR 6,000 – 18,000 / night",  premium: "LKR 75,000+ / night"  },
    { type: "Meals",           budget: "LKR 1,500 – 4,500 / meal",    premium: "LKR 15,000+ / meal"   },
    { type: "Local Transport", budget: "LKR 1,500 – 3,600 / day",     premium: "LKR 18,000+ / day"    },
    { type: "Activities",      budget: "LKR 3,000 – 9,000 each",      premium: "LKR 30,000+ each"     }
  ]
  },
  {
    id:          8,
    name:        "Machu Picchu",
    country:     "Peru",
    continent:   "americas",
    highlight:   "An Incan citadel in the clouds that defies explanation even when you're standing in it.",
    description: "Machu Picchu sits 2,430 metres above sea level in the Peruvian Andes and is the best-preserved Incan citadel in existence. Built around 1450 CE and abandoned less than 100 years later, it was unknown to the outside world until 1911. The site's agricultural terraces, temples, and astronomical alignments reveal a civilisation of astonishing sophistication.",
    image:       "images/machupichu.jpg",
    attractions: [
      "Sun Gate (Inti Punku)",
      "Temple of the Sun",
      "Huayna Picchu Mountain Hike",
      "Inca Bridge",
      "Aguas Calientes Hot Springs",
      "The Inca Trail Trek"
    ],
    costs: [
    { type: "Accommodation",   budget: "LKR 6,000-15,000 / night",  premium: "LKR 60,000+ /night"  },
    { type: "Meals",           budget: "LKR 1,500-3,600 / meal",    premium: "LKR 12,000+ /meal"   },
    { type: "Local Transport", budget: "LKR 3,000-9,000 / day",     premium: "LKR 24,000+ /day"    },
    { type: "Activities",      budget: "LKR 9,000-18,000 each",     premium: "LKR 45,000+ each"     }
  ]
  },
  {
    id:          9,
    name:        "Sydney",
    country:     "Australia",
    continent:   "oceania",
    highlight:   "Opera House sails, harbour sunsets, and beaches within a bus ride of the CBD.",
    description: "Sydney is Australia's largest city and one of the most beautiful harbour cities on Earth. The Sydney Opera House and Harbour Bridge are two of the most recognisable structures in the world, but the city's appeal runs much deeper — from the surf culture of Bondi Beach to the culinary scene of Surry Hills and the ancient Aboriginal heritage of the Blue Mountains.",
    image:       "images/sydney.jpg",
    attractions: [
      "Sydney Opera House",
      "Sydney Harbour Bridge Climb",
      "Bondi Beach & Coastal Walk",
      "Blue Mountains National Park",
      "Taronga Zoo",
      "The Rocks Historic Precinct"
    ],
    costs: [
    { type: "Accommodation",   budget: "LKR 18,000-36,000 / night", premium: "LKR 120,000+ /night" },
    { type: "Meals",           budget: "LKR 3,600-7,500 / meal",    premium: "LKR 24,000+ /meal"   },
    { type: "Local Transport", budget: "LKR 2,400-4,500 / day",     premium: "LKR 18,000+ /day"    },
    { type: "Activities",      budget: "LKR 6,000-15,000 each",     premium: "LKR 45,000+ each"    }
  ]
  }
];



function storeEmail() {
  var emailAddress = document.getElementById("emailInput").value;
  const btnEmailSubmit = document.getElementById("btnSubscribe");

  if (btnEmailSubmit) {
    btnEmailSubmit.addEventListener("click", () => {
      var email = localStorage.setItem("emailAddress", emailAddress);
    });
  }
}


function initNav() {
  const navbar = document.getElementById("navbar");
  const btnHamburger = document.getElementById("hamburger");
  const NavLinks = document.getElementById("navLinks")

  if (!navbar || !btnHamburger || !NavLinks) return;

  btnHamburger.addEventListener('click', openMenu)

  function openMenu() {
    const isOpen = NavLinks.classList.toggle('open');
    btnHamburger.classList.toggle('active', isOpen);
  }

  [...NavLinks.querySelectorAll('.nav-link')].forEach(link => {link.addEventListener('click', closeMenu)});

  document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
      closeMenu();
    }
  })

  function closeMenu() {
    NavLinks.classList.remove('open');
    btnHamburger.classList.remove('active');
  }
}


let currentIndex = 0;


function rotateQuote() {
  const titletxt = document.getElementById("heroTitle");
  const quotetxt = document.getElementById("quoteText");
  const heroImg = document.getElementById("heroImage");

  setTimeout(() => {

    if (titletxt) {
      titletxt.innerHTML = `${quotes[currentIndex].city}<span class="title-tn" id="titleTn">${quotes[currentIndex].country}</span>`;
      quotetxt.innerText = quotes[currentIndex].text;
      heroImg.src = quotes[currentIndex].image;
    }
    else {
      return;
    }
    

    currentIndex = (currentIndex + 1) % quotes.length;
  }, 500);
}




function faqSection() {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });
};




function updateDailyDestination() {
  const imageElement = document.getElementById("dotdImage");
  const contentElement = document.getElementById("dotdContent");

  // Safety check to ensure target DOM elements exist on the current page
  if (!imageElement || !contentElement) return;

  // Get current day of the week integer (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const currentDayOfWeek = new Date().getDay();
  
  // Extract the specific day's object matching the index safely
  const todayData = DESTINATIONS_DATA[currentDayOfWeek];

  // 1. Assign framing parameters to the main image element
  imageElement.src = todayData.image;
  imageElement.alt = `Scenic overview highlighting ${todayData.name}`;

  // 2. Safely parse and inject layout strings tied directly to your CSS styling variables
  contentElement.innerHTML = `
    <span class="section-eyebrow" style="margin-bottom: 0;">${todayData.tag}</span>
    <h3 style="font-family: var(--font-display); font-size: var(--text-3xl); color: var(--clr-dark); font-weight: 700; line-height: 1.2;">
      ${todayData.name}
    </h3>
    <p style="font-size: var(--text-sm); color: var(--clr-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-top: -5px;">
      ${todayData.region}
    </p>
    <p style="color: var(--clr-text); font-size: var(--text-base); line-height: 1.6; margin: var(--sp-2) 0;">
      ${todayData.description}
    </p>
    <div class="dotd-meta">
      <span>${todayData.rating}</span>
      <span style="color: var(--clr-border);">|</span>
      <span><strong>Best For:</strong> ${todayData.bestFor}</span>
    </div>
  `;
}


document.addEventListener("DOMContentLoaded", () => {
  const budgetForm = document.getElementById("budgetForm");
  const resultsPanel = document.getElementById("resultsPanel");
  const totalCostDisplay = document.getElementById("totalCostDisplay");
  const resultHeading = document.getElementById("resultHeading");
  const budgetBadge = document.getElementById("budgetBadge");
  const progressBarFill = document.getElementById("progressBarFill");
  const progressPercent = document.getElementById("progressPercent");
  const tierCaption = document.getElementById("tierCaption");

  // Maximum benchmark ceiling matching progress tracking (100% fill level at Rs. 100,000/day)
  const LKR_LUXURY_DAILY_CEILING = 100000; 

  if (budgetForm) {
     budgetForm.addEventListener("submit", (e) => {
    e.preventDefault()
    });

    const destination = document.getElementById("destination").value.trim();
    const duration = parseInt(document.getElementById("duration").value, 10);
    const dailyBudget = parseFloat(document.getElementById("dailyBudget").value);

    // 1. Calculate Estimated Total Costs in LKR
    const totalCost = duration * dailyBudget;

    // 2. Classify tier status logic tailored for Sri Lankan Rupees (LKR)
    let status = { tier: "Moderate", color: "var(--clr-gold)", caption: "A balanced plan utilizing standard comfort tiers." };
    if (dailyBudget < 15000) {
      status = { tier: "Low Budget", color: "var(--clr-secondary)", caption: "Thrifty, cost-conscious, and backpacking-centered choices." };
    } else if (dailyBudget > 60000) {
      status = { tier: "Luxury Tier", color: "var(--clr-primary)", caption: "Premium luxury accommodations, fine dining, and elite tracking parameters." };
    }

    // Reveal results panel component module
    resultsPanel.classList.remove("hidden");

    // Modify dynamic context labels cleanly
    resultHeading.textContent = `Trip to ${destination}`;
    budgetBadge.textContent = status.tier;
    budgetBadge.style.backgroundColor = status.color;
    tierCaption.textContent = `${status.caption} Averaging Rs. ${dailyBudget.toLocaleString()} per day across ${duration} days.`;

    // 3. Trigger fluid animation profiles: Numeric counter & Scale filling bars
    animateCostCounter(0, totalCost, 1000);
    
    const visualPercentage = Math.min(Math.round((dailyBudget / LKR_LUXURY_DAILY_CEILING) * 100), 100);
    progressBarFill.style.width = `${visualPercentage}%`;
    progressBarFill.style.backgroundColor = status.color;
    progressPercent.textContent = `${visualPercentage}%`;

    // Snap view down smoothly on mobile viewports
    resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  // Animated text text generation counting transitions via requestAnimationFrame API 
  function animateCostCounter(start, end, duration) {
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function outQuad for natural declaration deceleration profiles
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(start + easeProgress * (end - start));
      
      totalCostDisplay.textContent = `Rs. ${currentVal.toLocaleString()}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        totalCostDisplay.textContent = `Rs. ${end.toLocaleString()}`;
      }
    }
    requestAnimationFrame(updateCounter);
  }
});


function feedbackForm() {
  const feedbackForm = document.getElementById("feedbackForm");
  const successBanner = document.getElementById("submissionSuccessBanner");

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameField = document.getElementById("fbName");
      const emailField = document.getElementById("fbEmail");
      const messageField = document.getElementById("fbMessage");

      // Validate tracking states before recording information
      let isFormValid = true;

      // A. Full Name Verification
      if (nameField.value.trim().length < 2) {
        showFieldError(nameField, true);
        isFormValid = false;
      } else {
        showFieldError(nameField, false);
      }

      // B. Standard Email Regex Check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailField.value.trim())) {
        showFieldError(emailField, true);
        isFormValid = false;
      } else {
        showFieldError(emailField, false);
      }

      // C. Text Message Length Check
      if (messageField.value.trim().length < 10) {
        showFieldError(messageField, true);
        isFormValid = false;
      } else {
        showFieldError(messageField, false);
      }

      // Prohibit calculations if field compliance flags trace false
      if (!isFormValid) return;

      // Build structured payload snapshot
      const feedbackPayload = {
        id: Date.now(),
        name: nameField.value.trim(),
        email: emailField.value.trim(),
        message: messageField.value.trim(),
        timestamp: new Date().toISOString()
      };

      // Extract existing entries from local storage and append new record
      const existingFeedback = JSON.parse(localStorage.getItem("customerFeedbackLogs")) || [];
      existingFeedback.push(feedbackPayload);
      localStorage.setItem("customerFeedbackLogs", JSON.stringify(existingFeedback));

      // Reveal absolute completion alerts and clear input structures smoothly
      successBanner.classList.remove("hidden");
      feedbackForm.reset();

      // Clear input flags on form reset
      [nameField, emailField, messageField].forEach(field => {
        field.parentElement.classList.remove("invalid-entry");
      });

      // Automatically hide the success banner after 8 seconds
      setTimeout(() => {
        successBanner.classList.add("hidden");
      }, 8000);
    });

    // Attach immediate dynamic listeners to clear warning fields when user re-types
    const inputs = feedbackForm.querySelectorAll("input, textarea");
    inputs.forEach(input => {
      input.addEventListener("input", () => {
        if (input.parentElement.classList.contains("invalid-entry")) {
          input.parentElement.classList.remove("invalid-entry");
        }
      });
    });
  }

  // Helper utility managing class updates on validation frames
  function showFieldError(inputElement, hasError) {
    const fieldContainer = inputElement.parentElement;
    if (hasError) {
      fieldContainer.classList.add("invalid-entry");
    } else {
      fieldContainer.classList.remove("invalid-entry");
    }
  };
};


function faqAccordion() {
  const faqTriggers = document.querySelectorAll(".faq-trigger");

  faqTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const currentItem = trigger.closest(".faq-item");
      const isCurrentlyOpen = currentItem.classList.contains("is-open");

      // OPTIONAL HIGH-QUALITY BEHAVIOR: Collapse other open FAQ cards to create a single-open accordion effect
      document.querySelectorAll(".faq-item").forEach(item => {
        if (item !== currentItem) {
          item.classList.remove("is-open");
          item.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
        }
      });

      // Toggle state positions on the clicked element
      if (isCurrentlyOpen) {
        currentItem.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      } else {
        currentItem.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
};


// for the random trip generator
function getMatches(travelType, budget) {
  return TRIP_DATA.filter(dest =>
    dest.travelTypes.includes(travelType) &&
    dest.budgets.includes(budget)
  );
}
 
let lastShownName = null;
 
function showResult() {
  const traveltxt = document.getElementById('travelType');
  const budgetRangetxt     = document.getElementById('budgetRange');

  if (traveltxt && budgetRangetxt) {
    const travelType = travel.value;
    const budget = budgetRange.value;
  }

  let matches = getMatches(travelType, budget);
 
  // No matches
  if (matches.length === 0) {
    populateResultCard({
      name:        "No match found",
      country:     "",
      travelTypes: [],
      budgets:     [],
      description: "We couldn't find a destination matching that exact combination. Try a different travel style or budget tier!"
    }, travelType, budget);
    document.getElementById('addToWishlistBtn').style.display = 'none';
    return;
  }
 
  document.getElementById('addToWishlistBtn').style.display = '';
 
  // ── Avoid repeating the same destination twice in a row ──
  // Only filter out the last result if there's more than one match
  let pool = matches.length > 1
    ? matches.filter(d => d.name !== lastShownName)
    : matches;
 
  // Pick a random destination from the pool
  const pick = pool[Math.floor(Math.random() * pool.length)];
  lastShownName = pick.name;
 
  populateResultCard(pick, travelType, budget);
}

function populateResultCard(dest, travelType, budget) {
  const resultCard = document.getElementById('resultCard');
 
  // Populate fields
  document.getElementById('resultBadge').textContent =
    `${capitaliseFirst(travelType)} · ${capitaliseFirst(budget)} budget`;
  document.getElementById('resultName').textContent  = dest.name;
  document.getElementById('resultDesc').textContent  = dest.description;
 
  // Store current pick on the button so the wishlist handler can read it
  const wishlistBtn = document.getElementById('addToWishlistBtn');
  wishlistBtn.dataset.name        = dest.name;
  wishlistBtn.dataset.country     = dest.country;
  wishlistBtn.dataset.travelType  = travelType;
  wishlistBtn.dataset.budget      = budget;
 
  // Update button label in case it was previously "Added ✓"
  updateWishlistBtnLabel(dest.name);
 
  // ── Show the card ────────────────────────────────────────
  resultCard.classList.remove('hidden');
 
  // ── Trigger pop animation ────────────────────────────────
  // Remove the class first so re-clicking the button replays the animation.
  // A tiny setTimeout lets the browser process the class removal before
  // adding it back — without this, the browser might skip the animation.
  resultCard.classList.remove('animate-pop');
  setTimeout(() => resultCard.classList.add('animate-pop'), 10);
}


function randomTrip() {
  document.getElementById('surpriseBtn')
    ?.addEventListener('click', showResult);
 
  // ── Add to Wishlist button ─────────────────────────────
  document.getElementById('addToWishlistBtn')
    ?.addEventListener('click', () => {
      const btn = document.getElementById('addToWishlistBtn');
      addToWishlist({
        name:       btn.dataset.name,
        country:    btn.dataset.country,
        travelType: btn.dataset.travelType,
        budget:     btn.dataset.budget
      });
    });
 
  // ── Re-run suggestion when either dropdown changes ─────
  // This way the result card immediately refreshes if you
  // change your mind about travel style or budget.
  document.getElementById('travelType')
    ?.addEventListener('change', () => {
      if (!document.getElementById('resultCard').classList.contains('hidden')) {
        showResult();
      }
    });
 
  document.getElementById('budgetRange')
    ?.addEventListener('change', () => {
      if (!document.getElementById('resultCard').classList.contains('hidden')) {
        showResult();
      }
    });
 
  // ── Show a result immediately on load ─────────────────
  showResult();
}



function renderCards(list) {
  const grid       = document.getElementById('explorerGrid');
  const emptyState = document.getElementById('emptyGridState');

  if (!grid) return;

  // Clear the grid before re-rendering
  grid.innerHTML = '';

  // Show empty state message if nothing matched
  if (list.length === 0) {
    emptyState?.classList.remove('hidden');
    return;
  }

  emptyState?.classList.add('hidden');

  list.forEach(dest => {
    const card = document.createElement('article');
    card.className = 'explorer-card reveal-on-scroll';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View details for ${dest.name}, ${dest.country}`);
    card.dataset.id = dest.id;

    card.innerHTML = `
      <div class="explorer-card-img-wrapper">
        <img
          src="${dest.image}"
          alt="${dest.name}, ${dest.country}"
          class="explorer-card-img"
          loading="lazy"
        />
        <span class="explorer-card-continent">${capitalise(dest.continent)}</span>
      </div>
      <div class="explorer-card-body">
        <h3 class="explorer-card-name">${dest.name}</h3>
        <p  class="explorer-card-country">${dest.country}</p>
        <p  class="explorer-card-highlight">${dest.highlight}</p>
        <span class="explorer-card-cta">View destination →</span>
      </div>
    `;

    // Click opens the modal
    card.addEventListener('click', () => openModal(dest));

    // Keyboard: Enter or Space also opens modal (accessibility)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(dest);
      }
    });

    grid.appendChild(card);
  });

  // re-run scroll reveal so newly added cards animate in
  if (typeof initScrollReveal === 'function') initScrollReveal();
}


function filterDestinations() {
  const searchVal    = document.getElementById('destSearchInput')?.value.trim().toLowerCase() || '';
  const continentVal = document.getElementById('continentFilter')?.value || 'all';

  const filtered = DESTINATIONS_DATA.filter(dest => {
    //check all passes everything
    const matchesContinent = continentVal === 'all' || dest.continent === continentVal;

    // search match on name or country
    const matchesSearch = !searchVal
      || dest.name.toLowerCase().includes(searchVal)
      || dest.country.toLowerCase().includes(searchVal);

    // Both conditions must be true
    return matchesContinent && matchesSearch;
  });

  renderCards(filtered);
}


function openModal(dest) {

  setModalField('modalImg', null, dest.image, 'src');
  setModalField('modalImg', null, `${dest.name}, ${dest.country}`, 'alt');
  setModalField('modalMetaBadge', dest.continent ? capitalise(dest.continent) : '');
  setModalField('modalTitle', dest.name);
  setModalField('modalSubtitle', dest.country);
  setModalField('modalDescription', dest.description);

  // attractions list
  const ul = document.getElementById('modalAttractionsList');
  if (ul) {
    ul.innerHTML = '';
    dest.attractions.forEach(attraction => {
      const li = document.createElement('li');
      li.textContent = attraction;
      ul.appendChild(li);
    });
  }

  // cost table body
  const tbody = document.getElementById('modalCostTableBody');
  if (tbody) {
    tbody.innerHTML = dest.costs.map(row => `
      <tr>
        <td>${row.type}</td>
        <td class="cost-budget">${row.budget}</td>
        <td class="cost-premium">${row.premium}</td>
      </tr>
    `).join('');
  }

  // show modal
  const modal = document.getElementById('destinationModal');
  if (modal) {
    modal.classList.remove('hidden');

    //screen reader users
    document.getElementById('modalCloseBtn')?.focus();

    // Prevent the page from scrolling while modal is open
    document.body.style.overflow = 'hidden';
  }
}


function setModalField(id, text, value, attr) {
  const el = document.getElementById(id);
  if (!el) return;
  if (attr) {
    el.setAttribute(attr, value);
  } else {
    el.textContent = text;
  }
}


function closeModal() {
  const modal = document.getElementById('destinationModal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';  // restore page scroll
}



function capitalise(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function initDestinationOfDay() {
  const today = new Date();

  // getDate() returns the day of the month (1–31).
  // % DESTINATIONS_DATA.length wraps it so it never
  // goes out of bounds — same logic as in app.js.
  const index = today.getDate() % DESTINATIONS_DATA.length;
  const dest  = DESTINATIONS_DATA[index];

  // Set the image
  const img = document.getElementById('dotdImage');
  if (img) {
    img.src = dest.image;
    img.alt = `${dest.name}, ${dest.country}`;
  }

  // Build the content block
  const content = document.getElementById('dotdContent');
  if (content) {
    content.innerHTML = `
      <div class="dotd-tag">${dest.continent}</div>
      <h3 class="dotd-name">${dest.name}</h3>
      <p  class="dotd-country">${dest.country}</p>
      <p  class="dotd-desc">${dest.highlight}</p>
      <a  href="#" class="btn-primary">Explore ${dest.name} →</a>
    `;
  }
}


document.addEventListener('DOMContentLoaded', () => {

  renderCards(DESTINATIONS_DATA);
  document.getElementById('destSearchInput')
    ?.addEventListener('input', filterDestinations);
  document.getElementById('continentFilter')
    ?.addEventListener('change', filterDestinations);
  document.getElementById('modalCloseBtn')
    ?.addEventListener('click', closeModal);
  document.getElementById('destinationModal')
    ?.addEventListener('click', (e) => {
      if (e.target.id === 'destinationModal') closeModal();
    });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
  renderCards(DESTINATIONS_DATA);
  initDestinationOfDay();
  randomTrip();
  
});




function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-on-scroll');

  // Guard: if browser doesn't support IntersectionObserver, show all
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);  // stop watching once revealed
      }
    });
  }, {
    threshold:   0.15,              // trigger when 15% visible
    rootMargin: '0px 0px -40px 0px' // slightly before the very bottom edge
  });

  revealEls.forEach(el => observer.observe(el));
};


document.addEventListener('DOMContentLoaded', () => {
  initNav();
  rotateQuote();
  setInterval(rotateQuote, 6500);
  storeEmail();
  faqSection();
  updateDailyDestination();
  feedbackForm();
  faqAccordion();
  randomTrip();
  initScrollReveal();          // must come AFTER grid (cards have .reveal-on-scroll)
  //initNewsletter();

  console.log('Loaded successfully');
});
