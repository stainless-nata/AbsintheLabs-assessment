import cx from 'classnames';
import './style.css';

type BadgeProps = {
  title: string;
  icon: number;
  isActive: boolean;
  value: string;
};

const Badge = ({ title, icon, isActive, value }: BadgeProps) => {
  return (
    <div
      className={cx(
        'badge mx-1 mb-4 inline-flex flex-col justify-between rounded-[12px] border-[2px]',
        isActive ? 'border-states-success' : 'border-none',
      )}
    >
      <div className="flex h-[32px] items-center justify-between rounded-t-[12px] bg-dark-ele2 px-1">
        <div className="text-xs text-white">{title}</div>
        <div className="text-xs text-text-secondary">3 Actions</div>
      </div>
      <div className="flex h-[112px] items-center justify-center bg-dark-ele3">
        <img
          className="h-[64px] w-[64px] rounded-[32px]"
          alt="icon"
          src={`/Icons/${icon}.png`}
        />
      </div>
      <div className="flex h-[32px] items-center justify-center rounded-b-[12px] bg-states-success-ele1 text-center text-[12px] text-states-success">
        <div>{value}</div>
      </div>
    </div>
  );
};

export default Badge;
