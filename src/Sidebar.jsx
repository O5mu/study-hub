function Sidebar(){
    const sidebarOptions = ["Home","Manage Accounts","Manage Courses"];
    
    return (
        <div className = "sidebar">
            <ul>
                {sidebarOptions.map((option,index) => (
                    <li key={index} className="sidebarOptions">
                        <a href="">{option}</a>
                    </li>))}
            </ul>
        </div>
    );
}
export default Sidebar;