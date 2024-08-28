type RoundBadgeProps = {
  children: React.ReactNode;
};

const RoundBadge = ({ children }: RoundBadgeProps) => {
  return (
    <div className="inline-flex h-[24px] items-center rounded-[24px] bg-states-success-ele1 px-2 text-[12px] text-states-success">
      {children}
    </div>
  );
};
export default RoundBadge;
