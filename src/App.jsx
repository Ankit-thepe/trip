// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Import Cart Provider and Component
import { CartProvider } from './components/AutoParts/CartContext'; // Correct: Assuming CartProvider is in context/CartContext.jsx


// Import Pages
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import PartnerForm from './pages/PartnerForm';
import Profile from './pages/ProfilePage';
import OwnerDashboard from './pages/Dashboards/OwnerDashboard';
import WorkInProgress from "./pages/WorkInProgress";
import SellerDashboard from './pages/Dashboards/SellerDashboard';
import SlotBooking2 from './pages/ServiceCenterPage/SlotBooking2';;

import SpecificServiceCentre from './pages/SpecificServiceCentre';
import ServiceCenterDetailsPage from './pages/ServiceCenterPage/ServiceCenterDetailsPage';
import AutoPartsHomePage from './pages/AutoParts/AutoPartsHomePage';
import ProductDetailsPage from './pages/AutoParts/ProductDetailsPage';
// import CheckoutPage from './pages/AutoParts/CheckoutPage'; // Assuming CheckoutPage for auto parts

// Import Components
import NavbarAuto from './components/AutoParts/NavbarAuto';
import NavbarSlot from './components/BookSlot/NavbarSlot';

import PartnerPage from './pages/Partner/PartnerPage';
import GarageRegistrationPage from './pages/Partner/GarageRegistrationPage';
import SellerRegistrationPage from './pages/Partner/SellerRegistrationPage';

import GalleryOwner from './pages/Dashboards/OwnerOthers/GalleryOwner';
import PasswordOwner from './pages/Dashboards/OwnerOthers/PasswordOwner';
import FeedbackOwner from './pages/Dashboards/OwnerOthers/FeedbackOwner';
import StatisticsOwner from './pages/Dashboards/OwnerOthers/StatisticsOwner';
import HistoryOwner from './pages/Dashboards/OwnerOthers/HistoryOwner';
import UpcomingOwner from './pages/Dashboards/OwnerOthers/UpcomingOwner';

import GallerySeller from './pages/Dashboards/SellerOthers/GallerySeller';
import PasswordSeller from './pages/Dashboards/SellerOthers/PasswordSeller';
import FeedbackSeller from './pages/Dashboards/SellerOthers/FeedbackSeller';
import StatisticsSeller from './pages/Dashboards/SellerOthers/StatisticsSeller';
import HistorySeller from './pages/Dashboards/SellerOthers/HistorySeller';
import UpcomingSeller from './pages/Dashboards/SellerOthers/UpcomingSeller';

import CartSummaryAuto from './components/AutoParts/CartSummaryAuto';
import ProfilePage from './pages/ProfilePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

// --- Layout Component for Auto Parts Pages ---
const AutoPartsLayout = () => {
  return (
    <>
      <NavbarAuto />
      <CartSummaryAuto />
      <Outlet />
    </>
  );
};
const BookSlotLayout = () => {
  return (
    <>
      <NavbarSlot />
      
      <Outlet />
    </>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router>
          <Routes>
            {/* --- Routes WITHOUT the AutoParts Navbar and Cart --- */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path="/partner-form" element={<PartnerForm />} />
            <Route path="/owner-dashboard" element={<OwnerDashboard />} />
            <Route path="/work-in-progress" element={<WorkInProgress />} />
            <Route path="/seller-dashboard" element={<SellerDashboard />} />
            <Route path="/user" element={<ProfilePage />} />
            

            {/* --- Routes WITH the AutoParts Navbar and Cart (using AutoPartsLayout) --- */}
            <Route element={<AutoPartsLayout />}>
              <Route path="/autoparts" element={<AutoPartsHomePage />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
              {/* <Route path="/autoparts/checkout" element={<CheckoutPage />} /> */}
            </Route>
            <Route element={<BookSlotLayout />}>
              <Route path="/slot-booking-2" element={<SlotBooking2 />} />
              <Route path="/service-center/:id" element={<ServiceCenterDetailsPage />} />
              {/* <Route path="/autoparts/checkout" element={<CheckoutPage />} /> */}
            </Route>

            
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/garageregistrationpage" element={<GarageRegistrationPage />} />
            <Route path="/sellerregistrationpage" element={<SellerRegistrationPage />} />


            <Route path="/galleryowner" element={<GalleryOwner />} />
            <Route path="/passwordowner" element={<PasswordOwner />} />
            <Route path="/feedbackowner" element={<FeedbackOwner />} />
            <Route path="/statisticsowner" element={<StatisticsOwner />} />
            <Route path="/historyowner" element={<HistoryOwner />} />
            <Route path="/upcomingowner" element={<UpcomingOwner />} />

             <Route path="/galleryseller" element={<GallerySeller />} />
            <Route path="/passwordseller" element={<PasswordSeller />} />
            <Route path="/feedbackseller" element={<FeedbackSeller />} />
            <Route path="/statisticseller" element={<StatisticsSeller />} />
            <Route path="/historyseller" element={<HistorySeller />} />
            <Route path="/upcomingseller" element={<UpcomingSeller />} />

          </Routes>
        </Router>
      </CartProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;