import { FC } from "react";
import { Button } from "./ui/Button";
import { Progress } from "./ui/progress";

interface CourseDashboardProps {}

// TODO: Implement with table component
const CourseDashboard: FC<CourseDashboardProps> = ({}) => {
  return (
    <>
      <div className="flex items-center justify-around rounded-lg px-10 py-8 bg-secondary-button">
        <h2 className="text-[#222] text-lg font-semibold">
          C# & .NET Fundamentals
        </h2>
        <Progress value={2} />
        <h2 className="text-[#222]">Jun 19, 2023</h2>
        <Button className="text-[#222] bg-[#fff]">Review</Button>
      </div>
    </>
  );
};

export default CourseDashboard;
