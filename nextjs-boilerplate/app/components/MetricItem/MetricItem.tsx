import RoundBadge from '../RoundBadge';

type MetricItemProps = {
  value: string;
  isCompleted: boolean;
};

const MetricItem = ({ value, isCompleted }: MetricItemProps) => {
  return (
    <div className="height-[70px] w-[384px] rounded-[12px]">
      <div className="flex h-[35px] items-center justify-between rounded-t-[12px] border-b-[1px] border-dark bg-dark-ele3 px-3">
        <div className="text-[14px] text-text-secondary">Action</div>
        {isCompleted && <RoundBadge>Completed</RoundBadge>}
      </div>
      <div className="flex h-[35px] items-center rounded-b-[12px] bg-dark-ele2 px-3 text-[14px] text-text-secondary">
        {value}
      </div>
    </div>
  );
};

export default MetricItem;
