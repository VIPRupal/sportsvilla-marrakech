// ==========================================
// VILLA CONTENT CONFIGURATION
// ==========================================
// Edit this file to customize all text, images, and videos for your landing page

// Import SEO content (auto-syncs with meta tags)
import { seoContent } from "./seo-content";

// Import your own images here - replace these with your actual villa photos
// To add your own images: Place them in the 'attached_assets' folder and import like this:
// import myImage from "@assets/my-image.jpg";

import heroVideo from "@assets/generated_images/hero_video_optimized.mp4";
import heroPoster from "@assets/generated_images/hero_video_poster_new.jpg";
import poolImage from "@assets/ChatGPT_Image_Jul_23,_2026,_03_46_01_PM_1784818014625.png";
import poolImageMobile from "@assets/ChatGPT_Image_Jul_23,_2026,_03_46_01_PM_1784818014625.png";
import padelImage from "@assets/generated_images/Bali_stone_pool.webp";
import padelImageMobile from "@assets/generated_images/Bali_stone_pool_mobile.webp";
import basketballImage from "@assets/generated_images/Padel_court.webp";
import basketballImageMobile from "@assets/generated_images/Padel_court_mobile.webp";
import outdoorTvImage from "@assets/generated_images/Football_Pitch.webp";
import outdoorTvImageMobile from "@assets/generated_images/Football_Pitch_mobile.webp";
import chefImage from "@assets/generated_images/Basketball_Court.webp";
import chefImageMobile from "@assets/generated_images/Basketball_Court_mobile.webp";
import gymImage from "@assets/generated_images/Living_Area.webp";
import gymImageMobile from "@assets/generated_images/Living_Area_mobile.webp";
import spaImage from "@assets/generated_images/Kitchen.webp";
import spaImageMobile from "@assets/generated_images/Kitchen_mobile.webp";
import diningImage from "@assets/generated_images/Bedroom_3.webp";
import diningImageMobile from "@assets/generated_images/Bedroom_3_mobile.webp";
import loungeImage from "@assets/generated_images/Gym.webp";
import loungeImageMobile from "@assets/generated_images/Gym_mobile.webp";
import rooftopImage from "@assets/generated_images/Garden_3.webp";
import rooftopImageMobile from "@assets/generated_images/Garden_3_mobile.webp";

// ==========================================
// HERO SECTION
// ==========================================
export const heroContent = {
  // VIDEO OPTION: Set this to your video URL to use video instead of image
  // Example: videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID" or "/path/to/your/video.mp4"
  videoUrl: heroVideo, // Leave empty to use image instead
  videoPoster: heroPoster, // Poster image shown before video loads
  
  // IMAGE OPTION: Used when videoUrl is empty (not used when video is set)
  backgroundImage: "",
  
  // NOTE: Title and subtitle are now synced from seo-content.ts
  // This ensures meta tags automatically update when you change the hero text
  title: seoContent.heroTitle,
  subtitle: seoContent.heroSubtitle,
  description: "",
  
  badges: [
    { text: "🚗 Free Airport Transfer on Arrival 🚗", icon: "" }
  ],
  
  ctaText: "Get Live Quote"
};

// ==========================================
// GALLERY / VISUAL TOUR
// ==========================================
// Add, remove, or reorder images as needed
export const galleryImages = [
  {
    src: poolImage,
    srcMobile: poolImageMobile,
    caption: "Enjoy your own private Bali stone pool",
    width: 3200,
    height: 2344
  },
  {
    src: padelImage,
    srcMobile: padelImageMobile,
    caption: "Relax in the heated pool after a padel match",
    width: 3200,
    height: 2344
  },
  {
    src: basketballImage,
    srcMobile: basketballImageMobile,
    caption: "Play Padel under the Moroccan sun",
    width: 3200,
    height: 2344
  },
  {
    src: outdoorTvImage,
    srcMobile: outdoorTvImageMobile,
    caption: "Train on your own football pitch",
    width: 3200,
    height: 2344
  },
  {
    src: chefImage,
    srcMobile: chefImageMobile,
    caption: "Shoot hoops on the half basketball court",
    width: 3200,
    height: 2344
  },
  {
    src: gymImage,
    srcMobile: gymImageMobile,
    caption: "Unwind in the spacious living area",
    width: 3200,
    height: 2344
  },
  {
    src: spaImage,
    srcMobile: spaImageMobile,
    caption: "Modern kitchen with all appliances",
    width: 3200,
    height: 2344
  },
  {
    src: diningImage,
    srcMobile: diningImageMobile,
    caption: "6 stunning double bedrooms for families and groups",
    width: 3200,
    height: 2344
  },
  {
    src: loungeImage,
    srcMobile: loungeImageMobile,
    caption: "Workout in your home gym before a sunset pool session",
    width: 3200,
    height: 2344
  },
  {
    src: rooftopImage,
    srcMobile: rooftopImageMobile,
    caption: "Enjoy the stunning grounds",
    width: 3200,
    height: 2344
  }
];

// ==========================================
// TESTIMONIALS
// ==========================================
// Edit, add, or remove testimonials as needed
export const testimonials = [
  {
    quote: "Best Crew and best service.",
    name: "Raj S.",
    location: "USA",
    initials: "RS"
  },
  {
    quote: "The VIP Group were brillant at organising everything for us.",
    name: "Gary K.",
    location: "UK",
    initials: "GK"
  },
  {
    quote: "Friendly and attentive service from start to finish!.",
    name: "Sophie S",
    location: "UK",
    initials: "SS"
  }
];

// ==========================================
// WHY THIS VILLA SECTION
// ==========================================
export const whoThisIsForContent = {
  sectionTitle: "Why this is our No.1 Villa",
  sectionSubtitle: "Everything you need for an unforgettable Marrakech experience",
  
  audiences: [
    {
      title: "5 star sports facilities",
      description: "Padel & basketball court, football pitch & home gym.",
      icon: "Trophy"
    },
    {
      title: "Only 20/25mins from Medina",
      description: "Close to Marrakech's souks and culture, far enough for privacy.",
      icon: "MapPin"
    },
    {
      title: "Maid & Cook Included",
      description: "No stress - let the staff take care of you.",
      icon: "Shield"
    },
    {
      title: "Spacious Living Area",
      description: "6 double bedrooms for families or groups up to 12 guests.",
      icon: "Home"
    }
  ]
};

// ==========================================
// EXPERIENCE SECTION
// ==========================================
export const experienceContent = {
  sectionTitle: "The Experience",
  
  experiences: [
    "Wake up to <strong>fresh mint tea by the pool</strong>.",
    "Play a padel match before your <strong>cook-prepared breakfast</strong>.",
    "Train in your private gym while your friends shoot hoops.",
    "Watch the <strong>sunset over the Atlas Mountains</strong> — from your heated pool."
  ],
  
  closingStatement: ""
};

// ==========================================
// OUR TEAM SECTION
// ==========================================
export const ourTeamContent = {
  sectionTitle: "Why Book With Us?",
  sectionSubtitle: "Trusted by 150+ UK groups each year",
  
  benefits: [
    {
      title: "Marrakech Specialists",
      description: "10+ years experience in luxury villa rentals.",
      icon: "Award"
    },
    {
      title: "Personal Concierge",
      description: "Our team can plan the perfect trip.",
      icon: "Headphones"
    },
    {
      title: "Instant WhatsApp Response",
      description: "No waiting days for replies.",
      icon: "MessageCircle"
    },
    {
      title: "UK & Marrakech Teams",
      description: "High service all the way through.",
      icon: "Users"
    },
    {
      title: "Best Price Guarantee",
      description: "Found it cheaper online? We'll match the price.",
      icon: "BadgeCheck"
    },
    {
      title: "Trusted by 1000+ Guests",
      description: "5-star reviews and repeat bookings.",
      icon: "Star"
    }
  ]
};

// ==========================================
// PORTFOLIO VILLAS SECTION
// ==========================================
// Add your 5 other villas here.
// photos: array of image paths (import them at the top of this file, or use URLs)
// highlights: short feature tags shown as pills on each card
import portfolioPool from "@assets/generated_images/swimming_pool.webp";
import portfolioPadel from "@assets/generated_images/Padel_court.webp";
import portfolioGarden from "@assets/generated_images/Garden_3.webp";
import portfolioLiving from "@assets/generated_images/Living_Area.webp";
import portfolioBedroom from "@assets/generated_images/Bedroom_3.webp";
import portfolioKitchen from "@assets/generated_images/Kitchen.webp";
import portfolioGym from "@assets/generated_images/Gym.webp";
import portfolioBasketball from "@assets/generated_images/Basketball_Court.webp";
import portfolioFootball from "@assets/generated_images/Football_Pitch.webp";
import portfolioBaliPool from "@assets/generated_images/Bali_stone_pool.webp";

// Villa 1 photos
import villa1Photo1 from "@assets/1_1785234978164.png";
import villa1Photo2 from "@assets/2_1785234978166.png";
import villa1Photo3 from "@assets/3_1785234978167.png";
import villa1Photo4 from "@assets/4_1785234978168.png";

// Villa A photos (card 1)
import villaAPhoto1 from "@assets/0_WhatsApp_Image_2024-07-17_at_10.27.20_(43)_1785248041030.jpeg";
import villaAPhoto2 from "@assets/1_WhatsApp_Image_2024-07-17_at_10.27.20_(13)_1785248041035.jpeg";
import villaAPhoto3 from "@assets/2_WhatsApp_Image_2024-07-17_at_10.27.20_(17)_1785248041036.jpeg";
import villaAPhoto4 from "@assets/3_WhatsApp_Image_2024-07-17_at_10.27.20_(27)_1785248041038.jpeg";

// Villa B photos (card 2)
import villaBPhoto1 from "@assets/0_WhatsApp_Image_2025-08-03_at_13.45.50_1785248604055.jpeg";
import villaBPhoto2 from "@assets/1_WhatsApp_Image_2025-08-03_at_13.45.51_1785248604057.jpeg";
import villaBPhoto3 from "@assets/2_WhatsApp_Image_2025-08-03_at_13.45.53_1785248604058.jpeg";
import villaBPhoto4 from "@assets/3_WhatsApp_Image_2025-08-03_at_13.45.59_(2)_1785248604059.jpeg";

// Villa 2 photos
import villa2Photo1 from "@assets/0_4_1785235502769.png";
import villa2Photo2 from "@assets/1_3_1785235502770.png";
import villa2Photo3 from "@assets/2_2_1785235502771.png";
import villa2Photo4 from "@assets/3_1_1785235502771.png";

export const portfolioVillas = [
  {
    name: "Luxury 5 Bed villa (Ultra-Modern)",
    location: "Marrakech, Morocco",
    guests: 10,
    bedrooms: 5,
    priceFrom: "£1250 per night",
    highlights: ["Infinity Edge Pool", "Maid and Cook Included"],
    photos: [villaAPhoto3, villaAPhoto2, villaAPhoto1, villaAPhoto4],
  },
  {
    name: "Luxury 6 Bed Villa (Ultra-Modern)",
    location: "Marrakech, Morocco",
    guests: 12,
    bedrooms: 6,
    priceFrom: "£1250 per night",
    highlights: ["Private Pool", "Jacuzzi", "Games/TV Room", "Maid & Cook Included"],
    photos: [villaBPhoto1, villaBPhoto4, villaBPhoto2, villaBPhoto3],
  },
  {
    name: "Luxury 7 bed Villa (with Padel Court)",
    location: "Marrakech, Morocco",
    guests: 14,
    bedrooms: 7,
    priceFrom: "from £795/Night",
    highlights: ["Private Pool", "Maid & Cook Included", "Padel Court"],
    photos: [villa1Photo1, villa1Photo2, villa1Photo3, villa1Photo4],
  },
  {
    name: "Luxury 8 bed Villa (with Padel Court)",
    location: "Marrakech, Morocco",
    guests: 18,
    bedrooms: 8,
    priceFrom: "from £1250 per night",
    highlights: ["Private Indoor & Outdoor Pool", "Maid & Breakfast Included", "Padel Court"],
    photos: [villa2Photo4, villa2Photo3, villa2Photo2, villa2Photo1],
  },
  {
    name: "Villa Three — Add Name Here",
    location: "Marrakech, Morocco",
    guests: 8,
    bedrooms: 4,
    priceFrom: "£600/night",
    highlights: ["Rooftop Terrace", "Chef Included", "City Views"],
    photos: [portfolioLiving, portfolioKitchen, portfolioBedroom],
  },
  {
    name: "Villa Four — Add Name Here",
    location: "Marrakech, Morocco",
    guests: 20,
    bedrooms: 10,
    priceFrom: "£1,100/night",
    highlights: ["2 Pools", "Basketball Court", "Gym & Spa"],
    photos: [portfolioBasketball, portfolioPool, portfolioGym],
  },
  {
    name: "Villa Five — Add Name Here",
    location: "Marrakech, Morocco",
    guests: 10,
    bedrooms: 5,
    priceFrom: "£700/night",
    highlights: ["Bali Pool", "Maid Service", "Gardens"],
    photos: [portfolioBaliPool, portfolioGarden, portfolioBedroom],
  },
];

// ==========================================
// SOCIAL MEDIA LINKS
// ==========================================
export const socialLinks = {
  instagram: "https://www.instagram.com/thevipgroups",
  website: "https://www.vipatmarrakech.com"
};

// ==========================================
// PRICING SECTION
// ==========================================
export const pricingContent = {
  sectionTitle: "Pricing & Availability",
  
  guestCount: 12,
  
  seasons: [
    {
      name: "Low Season",
      regularPrice: "£750",
      onlinePrice: "£750",
      savings: ""
    },
    {
      name: "Mid Season",
      regularPrice: "£850",
      onlinePrice: "£850",
      savings: ""
    },
    {
      name: "High Season",
      regularPrice: "£950",
      onlinePrice: "£950",
      savings: ""
    }
  ],
  
  features: [
    "Sleep 12 across 6 double bedrooms",
    "Padel & basketball Court",
    "Bali stone pool (heating optional)",
    "Football Pitch, Gym & Outdoor TV",
    "20-25mins from city centre",
    "Cook & Maid service (included)",
  ],
  
  badges: [
    { text: "Dates are going quickly", icon: "Calendar" }
  ],
  
  bonusText: ""
};

// ==========================================
// VISUAL TOUR SECTION
// ==========================================
export const visualTourContent = {
  sectionTitle: "Play. Relax. Repeat.",
  sectionSubtitle: "Sunrise workouts. Sunset swims. Marrakech's Only sport villa for 12 guests - with a private padel court, heated pool, and pure luxury at every turn."
};

// ==========================================
// TESTIMONIALS SECTION
// ==========================================
export const testimonialsContent = {
  sectionTitle: "What Our Guests Say",
  sectionSubtitle: "Real experiences from families, couples, and groups who've stayed with us"
};

// ==========================================
// WHATSAPP CONFIGURATION
// ==========================================
export const whatsappConfig = {
  phoneNumber: "+447454454984",
  defaultMessage: "Hi! I saw the Sports Villa online — can I get a quote?"
};

// ==========================================
// EMAIL CONFIGURATION
// ==========================================
export const emailConfig = {
  emailAddress: "enquiry@vipatmarrakech.com",
  subject: "Sports Villa Inquiry",
  defaultMessage: "Hi! I'm interested in booking the Sports Villa. Could you please send me more information and availability?"
};
