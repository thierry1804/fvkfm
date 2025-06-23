import { FaClock } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface ScheduleItemProps {
  item: {
    day: string;
    time: string;
    service: string;
    icon: IconType;
  };
}

const ScheduleItem = ({ item }: ScheduleItemProps) => {
  return (
    <div 
      className="flex items-center p-5 rounded-2xl bg-gradient-to-r from-secondary-50 to-primary-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mr-5">
        <item.icon className="text-primary-600 text-3xl" />
      </div>
      <div className="flex-1">
        <span className="font-bold text-lg text-secondary-800">{item.day}</span>
        <div className="flex items-center text-secondary-600 mt-1">
          <FaClock className="mr-2" />
          <span>{item.time}</span>
        </div>
      </div>
      <span className="text-primary-600 font-semibold text-right">{item.service}</span>
    </div>
  );
};

export default ScheduleItem; 