import Carousel from '../Carousel';
import Progress from '../Progress';

const Preview = () => {
  return (
    <div className="mt-[24px] w-full max-md:mx-4">
      <div className="mb-[16px] text-sm text-white">Badges</div>
      <div className="rounded-[24px] bg-dark-ele1 p-3">
        <Carousel></Carousel>
        <Progress></Progress>
      </div>
    </div>
  );
};

export default Preview;
