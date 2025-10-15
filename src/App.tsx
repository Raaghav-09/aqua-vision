import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Identify from './pages/Identify'
import CatchLog from './pages/CatchLog'
import LocationPage from './pages/Location'
import Blogs from './pages/Blogs'
import Search from './pages/Search'
import FAQs from './pages/FAQs'
import { Login, Signup } from './pages/Auth'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/identify" element={<Identify />} />
        <Route path="/catch-log" element={<CatchLog />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/search" element={<Search />} />
        <Route path="/faqs" element={<FAQs />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
