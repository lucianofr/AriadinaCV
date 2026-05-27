/* @jsx React.createElement */
function App() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Hero/>
        <AboutSection/>
        <ExperienceSection/>
        <EducationSection/>
        <SkillsSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
