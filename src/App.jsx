import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from './pages/Home'
import AuthPage from './pages/AuthPage'
import PartnerForm from './pages/PartnerForm'
import Profile from './pages/Profile'
import OwnerDashboard from './pages/OwnerDashboard'
import WorkInProgress from "./pages/WorkInProgress";
import SellerDashboard from './pages/SellerDashboard';
import SlotBooking from './pages/SlotBooking'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, 
      retry: 1,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path="/partner-form" element={<PartnerForm />} />
          <Route path="/owner-dashboard" element={<OwnerDashboard />} />
          <Route path="/work-in-progress" element={<WorkInProgress />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/slot-booking" element={<SlotBooking />} />

          
          {/* Add more routes as needed */}
        
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App