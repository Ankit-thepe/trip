import IndexOneCard from "./IndexOneCard";

const pendingItems = [
  { description: "Repair Scheduled", color: "bg-orange-500" },
  { description: "Washing", color: "bg-orange-500" },
];

const completedItems = [
  { description: "Repair Done", color: "bg-green-600" },
];

function Dashboard() {
  return (
    <div className="gap-6 justify-center mt-0 bg-white rounded-b-xl">
      <div className="">
        <div className="flex">
          <div className="flex-grow h-px bg-black mt-5 w-40"></div>
           <IndexOneCard title="Pending" items={pendingItems} description="Jobs waiting to be completed" />
        <div className="flex-grow h-px bg-black mt-5 w-40"></div>
      </div>

      <div className="flex">
        <div className="flex-grow h-px bg-black mt-5 w-40"></div>
           <IndexOneCard title="Completed" items={completedItems} description="Recently finished tasks" />
        <div className="flex-grow h-px bg-black mt-5 w-40"></div>

      </div> 
        
           
      </div>
      
      
    </div>
  );
}

export default Dashboard;
