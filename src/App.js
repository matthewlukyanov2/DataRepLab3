import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import NavigationBar from './components/navbar'; // Importing the NavigationBar component
import Header from './components/header'; // Importing the Header component
import Content from './components/content'; // Importing the Content component
import Footer from './components/footer'; // Importing the Footer component
import Read from './components/read'; // Importing the Read component
import Create from './components/create'; // Importing the Create component


function App() {
  return (
    <Router> {/* Enabling the app in Router to enable routing */}
      <NavigationBar /> 
      <Routes> 
        <Route path="/home" element={<Content />} /> 
        <Route path="/read" element={<Read />} /> 
        <Route path="/create" element={<Footer />} /> 
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App; // Exporting the App component for use in other parts of the app
