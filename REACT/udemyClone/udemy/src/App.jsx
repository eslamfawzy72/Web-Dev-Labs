import './App.css'
import TopBar from './Components/topBar'
import TopNav from './Components/TopNav'
import Skills from './Components/Skills'
import AiEra from './Components/AiEra'
import SkillsHeader from './Components/SkillsHeader'
import CompanyLogo from './Components/CompanyLogo'
function App() {
  return (
    <>
      <TopBar />
      <br></br>
      <TopNav />
      <div className="page-content">
    <img src="/salesImg.png" id='first-image'/>
        </div>
    <Skills />
    <AiEra/>
    <SkillsHeader/>
    <CompanyLogo/>
    </>
  )
}

export default App
