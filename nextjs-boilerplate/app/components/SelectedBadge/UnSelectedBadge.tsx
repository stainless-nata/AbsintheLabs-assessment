type UnSelectedBadgeProps = {
  icon: number;
};

const UnSelectedbadge = ({ icon }: UnSelectedBadgeProps) => {
  return (
    <div className="mx-1 inline-flex flex-col justify-between rounded-[12px]">
      <div className="flex h-[178px] w-[178px] items-center justify-center rounded-[12px] bg-dark-ele3">
        <img
          className="h-[64px] w-[64px] rounded-[32px]"
          alt="image"
          src={`/Icons/${icon}.png`}
        />
      </div>
      <div className="mt-2 flex h-[50px] w-full flex-col rounded-[32px] bg-dark-ele2 px-5 py-2">
        <div className="flex w-full">
          <div className="h-[15px] w-full rounded-[32px] bg-text-secondary"></div>
          <div className="h-[15px] w-full rounded-[32px] bg-text-secondary"></div>
          <div className="h-[15px] w-full rounded-[32px] bg-text-secondary"></div>
        </div>
        <div className="mt-1 h-[15px] w-full rounded-[32px] bg-text-secondary"></div>
      </div>
    </div>
  );
};

export default UnSelectedbadge;
