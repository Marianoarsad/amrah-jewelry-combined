export default function Dashboard ({}) {
    return (
        <>
            <div id="dashboard">
                <h1>Welcome back, Saherah!</h1>
                <p>Here is whats happening to your store today.</p>
                <div className="dashboard-cards-container">
                    <div className="dashboard-cards dashboard-cards-yellow">LOREM FKING IPSUM</div>
                    <div className="dashboard-cards dashboard-cards-violet">LOREM FKING IPSUM</div>
                    <div className="dashboard-cards dashboard-cards-green">LOREM FKING IPSUM</div>
                    <div className="dashboard-cards dashboard-cards-purple">LOREM FKING IPSUM</div>
                    <div className="dashboard-cards dashboard-cards-red">LOREM FKING IPSUM</div>
                </div>
                <div className="dashboard-visualization-container">
                    <div className="dashboard-summary">
                        <h3>Summary</h3>
                    </div>
                    <div className="dashboard-most-viewed-products">
                        <h3>Most viewed products</h3>
                    </div>
                </div>
            </div>
            
        </>
    )
}