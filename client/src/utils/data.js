import { DevicePhoneMobileIcon, DeviceTabletIcon, ComputerDesktopIcon, TvIcon, RocketLaunchIcon, CameraIcon } from "@heroicons/react/24/outline"

// Facilities of landing page.
export const facilities = [
  { id: 1, icon: DevicePhoneMobileIcon, title: "Smartphones", description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" },
  { id: 2, icon: DeviceTabletIcon, title: "Tablet", description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" },
  { id: 3, icon: TvIcon, title: "Smart TV", description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" },
  { id: 4, icon: ComputerDesktopIcon, title: "Laptop", description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" },
  { id: 5, icon: RocketLaunchIcon, title: "Gaming Consoles", description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" },
  { id: 6, icon: CameraIcon, title: "VR Headsets", description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" },

];

// Faqs on landing page.
export const faqs = [
  { id: 1, question: "What is HawksMovies?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
  { id: 2, question: "How much does StreamVibe cost?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
  { id: 3, question: "What content is available on StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
  { id: 4, question: "How do I sign up for StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
  { id: 5, question: "How can I watch StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
  { id: 6, question: "What is the StreamVibe free trial?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
  { id: 7, question: "How do I contact StreamVibe customer support?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
  { id: 8, question: "What are the StreamVibe payment methods?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
];

// carousel data for movies in movies-shows route
export const moviesCarousels = [
  // { id: 1, endpoint: "movies/our-genres", carouselId: "movies-our-genres", cardsType: "cards-sm mb-14 lg:mb-20", title: "Now Playing", component: "title-arrow" },
  { id: 2, endpoint: "movies/popular", carouselId: "movies-popular", cardsType: "cards-md mb-14 lg:mb-20", title: "Popular Movies", component: "release-date" },
  { id: 3, endpoint: "movies/trending", carouselId: "movies-trending", cardsType: "cards-sm mb-14 lg:mb-20", title: "Trending", component: "release-date" },
  { id: 4, endpoint: "movies/new-releases", carouselId: "movies-new-releases1", cardsType: "cards-sm mb-14 lg:mb-20", title: "New Releases", component: "release-date" },
  { id: 5, endpoint: "movies/must-watch", carouselId: "movies-must-watch", cardsType: "cards-lg", title: "Must Watch", component: "duration-seasons" },
];

// carousel data for shows in movies-shows route
export const showsCarousels = [
  // { id: 1, endpoint: "shows/our-genres", carouselId: "shows-our-genres", cardsType: "cards-sm mb-14 lg:mb-20", title: "Airing Today", component: "release-date" },
  { id: 2, endpoint: "shows/popular", carouselId: "shows-popular", cardsType: "cards-md mb-14 lg:mb-20", title: "Popular Shows", component: "duration-seasons" },
  { id: 3, endpoint: "shows/trending", carouselId: "shows-trending", cardsType: "cards-lg mb-14 lg:mb-20", title: "Going To Be Released", component: "duration-seasons" },
  { id: 4, endpoint: "shows/new-releases", carouselId: "shows-new-releases", cardsType: "cards-lg mb-14 lg:mb-20", title: "New Released Shows", component: "duration-seasons" },
  { id: 5, endpoint: "shows/must-watch", carouselId: "shows-must-watch", cardsType: "cards-sm", title: "Must - Watch Shows", component: "duration-seasons" },
];