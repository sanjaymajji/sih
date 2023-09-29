import './App.css';
import { Login } from './components/Login_pg';
import { Home } from './components/Home';
import { Reg } from './components/Reg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
  <div >
    
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/Forgot_password" element={<Forgot_password />} />
        <Route path="/site_engineer_home" element={<Site_home />} />
        <Route path="/purchase_manager_home" element={<Purchase_manager_home />} />
        <Route path="/project_manager_home" element={<Project_manger_home />} />
        <Route path="/owner_home" element={<Owner_home />} />
        <Route path="/upload_photos" element={<Upload_photos />} />
        <Route path="/track_materials" element={<Track_materials />} />
        <Route path="/purchase_entry" element={<Purchase_entry />} />
        <Route path="/materials_report" element={<Materials_report />} />
        <Route path="/Attendence" element={<Attendence />} />
        <Route path="/Task_manager" element={<Task_manager />} />
        <Route path="/Blueprint" element={<Blueprint />} />
        <Route path="/Budjet_status" element={<Budjet_status />} />
        <Route path="/Updata_profile" element={<Updata_profile />} />

        
      </Routes>

     
    </Router>
   
    </div>
  );
}

export default App;
