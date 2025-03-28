const PanelBar = () => {
    return (
        <header className="w-full h-16 bg-white shadow-md flex items-center px-6">
            <h1 className="text-lg font-semibold flex-1">Supply Tracker System</h1>
            <div className="flex items-center space-x-4">
                <span className="text-gray-600">RandomUser</span>
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
        </header>
    );
};

export default PanelBar;
