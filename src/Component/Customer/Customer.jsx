import './customer.css'

const Customer = ({ customer}) => {
    
    const {title,description,id,priority,status,createdAt} = customer;

    const formattedDate = new Date(createdAt).toLocaleDateString("en-Us",
        {
            year:"numeric",
            day:"numeric",
            month:"numeric"

        });

        const cleanStatus =  status.toLowerCase().trim();
        const isInStatus = cleanStatus === "in progress";
        const cleanHighPriority = priority.toLowerCase();
        const highPriority = cleanHighPriority === "high";
        const cleanMediumPriority = priority.toLowerCase();
        const mediumPriority = cleanMediumPriority === "medium";
        const cleanLowPriority = priority.toLowerCase();
        const lowPriority = cleanLowPriority === "low";
        
       
    return (
        <div className="rounded-2xl shadow-4xl bg-white p-4 space-y-3">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full ">
                <p className="font-semibold ">{title}</p>
                <div className={`flex gap-1 items-center rounded-4xl 
                    bg-[#B9F8CF] py-1 px-3 
                    ${isInStatus? "in-progress":""}`}>
                    <img src={isInStatus?
                    "https://i.ibb.co.com/cXC1fFZy/Ellipse-22-1.png":
                     "https://i.ibb.co.com/fd0bShB1/Ellipse-22.png"}
                        alt="" className={`h-3 w-3  rounded-4xl
                            ${isInStatus?"in-progress-image":""}`} />
                    <p className={`font-semibold text-[#0B5E06] 
                    ${isInStatus?"description":""} `}>{
                   isInStatus?"In Progress":"Open"
                    }</p>
                </div>
            </div>

            <div className="text-center md:text-left">
                <p className="text-gray-500">{description}</p>
            </div>

            <div className="flex flex-col space-y-3 place-items-center md:space-y-0  md:flex-row  justify-between md:place-items-none">
                <div className="flex flex-col text-center space-y-3 md:space-y-0   md:flex-row md:text-left  items-center  w-[50%] space-x-5">
                    <p className="text-gray-500"><span>#</span> {id}</p>
                    <p className={`${highPriority?"text-red-500":""} 
                        ${mediumPriority?"text-[#FEBB0C]":""}
                        ${lowPriority?"text-fuchsia-800":""}`}><span>{priority.toUpperCase()} </span>PRIORITY</p>
                </div>
                <div className="flex flex-col text-center space-y-3 md:space-y-0 md:flex-row md:text-left  items-center w-[50%] space-x-5 text-gray-500 px-6">
                    <p className="">{customer.customer.toUpperCase()}</p>
                    <div className="flex items-center gap-1">
                        <img src="https://i.ibb.co.com/FPt9PVF/ri-calendar-line.png" alt="" />
                        <p className="">{formattedDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;