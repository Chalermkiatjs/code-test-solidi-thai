import Card from "components/Card/Card";
import React from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: JSX.Element;
  change?: string;
  changeType?: "increase" | "decrease";
  className?:string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
  change,
  changeType,
  className
}) => {
  return (
    <Card className={className}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-500">{title}</div>
        <div className="text-gray-400">{icon}</div>
      </div>
      <div className="text-2xl font-bold mb-2">{value}</div>
      {change && (
        <div
          className={`text-sm font-medium ${
            changeType === "increase" ? "text-green-500" : "text-red-500"
          }`}
        >
          {changeType === "increase" ? "↑" : "↓"} {change}
        </div>
      )}
    </Card>
  );
};

export default DashboardCard;
