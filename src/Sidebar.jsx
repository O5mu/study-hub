function Sidebar(){
    const sidebarOptions = [{name:"Home",href:""},{name:"Manage Accounts",href:""},{name:"Manage Courses",href:""}];
    
    return (
        <div className = "sidebar">
            <ul>
                {sidebarOptions.map((option,index) => (
                    <li key={index} className="sidebarOptions">
                        <a href={option.href}>{option.name}</a>
                    </li>))}
            </ul>
        </div>
    );
}
export default Sidebar;