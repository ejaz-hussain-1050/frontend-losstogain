import { WorkoutPlanCardProps } from "../utils/interfaces";

const WorkoutPlanCard: React.FC<WorkoutPlanCardProps> = ({ plan }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  overflow-hidden">
      {/* First Column: Image */}
      <img
        src={plan.imageUrl}
        alt={plan.name}
        className="w-30 col-span-1 h-30 object-cover rounded-full mt-5"
      />

      {/* Second Column: Workout Details */}
      <div className="p-4 col-span-3 flex flex-col justify-center">
        <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
        <p className="text-gray-600 mb-1">{plan.description}</p>
        <p className="text-sm text-gray-500">
          Duration: <span className="font-semibold">{plan.duration} days</span>
        </p>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;
