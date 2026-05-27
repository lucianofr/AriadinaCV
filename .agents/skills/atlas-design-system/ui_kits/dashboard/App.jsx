/* @jsx React.createElement */
function App() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div className="shell">
      <Sidebar active="monitoramento"/>
      <div className="main" data-screen-label="Dashboard">
        <ProgramHeader/>
        <div className="main__body">
          <KpiGrid/>
          <div className="two-col">
            <IndicatorTable/>
            <MilestonesPanel/>
          </div>
          <BudgetChart/>
        </div>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
