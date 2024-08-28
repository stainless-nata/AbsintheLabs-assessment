import { carouselData } from '@/app/utils/consts';
import Badge from '../Badge/Badge';
import './style.css';

const BadgeLayout = () => {
  return (
    <div className="mt-[24px] w-full">
      <div className="rounded-t-[12px] border-b-[2px] border-b-dark bg-dark-ele3 p-2 text-white">
        Community Badge
      </div>
      <div className="hide-scroll bg-dark-ele1 max-sm:max-h-[400px] max-sm:rounded-b-[12px]">
        <div className="inline-block w-max p-4 max-sm:flex max-sm:w-full max-sm:flex-wrap max-sm:justify-between max-sm:px-8">
          {carouselData.map((item, index) => (
            <Badge
              title={item.title}
              icon={item.icon}
              isActive={item.isActive}
              value={item.value}
              key={`${index}${item.title}${item.icon}${item.isActive}${item.value}`}
            ></Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BadgeLayout;
