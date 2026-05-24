// Centralized club configuration
// Update these values here and they will reflect across the entire site

export const clubConfig = {
  // Basic Info
  name: "Founders Toastmasters Club",
  shortName: "Founders Toastmasters",
  tagline: "Where Leaders Are Made",
  foundedYear: 2019,

  // Toastmasters Organization
  clubNumber: "07246483",
  division: "C",
  area: "C1",
  district: 41,
  toastmastersUrl: "https://www.toastmasters.org/find-a-club/07246483",

  // Meeting Schedule
  meeting: {
    day: "Wednesday",
    startTime: "6:00 PM",
    endTime: "7:30 PM",
    duration: "90",
  },

  // Location
  location: {
    venue: "Rooster Logic Pvt. Ltd.",
    address: "Gairidhara, Kathmandu",
    fullAddress: "Gairidhara, Naxal, Kathmandu",
    city: "Kathmandu",
    country: "Nepal",
    mapUrl: "https://maps.app.goo.gl/iZQYvNpjPX4ZdtAf6",
  },

  // Stats (update these as they change)
  stats: {
    members: 15,
    meetingsHeld: 200,
    yearsActive: new Date().getFullYear() - 2019,
    leadershipRoles: 8,
  },

  // Social Links
  social: {
    instagram: "https://www.instagram.com/founderstoastmastersclub",
    facebook: "https://www.facebook.com/FoundersToastmastersClub",
    linkedin: "https://www.linkedin.com/company/founders-toastmasters-club",
  },
// Contact
  contact: {
    email: "founderstoastmastersclub@gmail.com",
    phone: "", // Add if needed
    guestFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeXfdYqIs8xPBoIKLhJF5vTxY_FYskLM0MVX4d6NTgMeKqiSQ/viewform",
  },
};

// Helper formatters
export const formatMeetingTime = () =>
  `${clubConfig.meeting.startTime} - ${clubConfig.meeting.endTime}`;

export const formatMeetingSchedule = () =>
  `Every ${clubConfig.meeting.day}`;

export const formatDivisionArea = () =>
  `Division ${clubConfig.division}, Area ${clubConfig.area}`;

export const formatDistrict = () =>
  `District ${clubConfig.district}`;

export const formatFullLocation = () =>
  `${clubConfig.location.venue}, ${clubConfig.location.address}`;
