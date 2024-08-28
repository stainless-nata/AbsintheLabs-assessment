import { FaDiscord, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import LogoButton from '../LogoButton';
import TabButton from '../TabButton';

const Footer = () => {
  return (
    <div className="mt-[20px] flex w-full min-w-[488px] justify-center bg-dark-ele2">
      <div className="flex w-full items-center justify-center max-lg:px-6 max-sm:p-6 sm:h-[50px] lg:w-[1020px] xl:w-[1250px]">
        <div className="flex w-full items-center justify-between max-sm:flex-col">
          <div className="grow-1 flex items-center justify-between  max-sm:mb-6 max-sm:w-full">
            <div className="hidden max-sm:block">
              <LogoButton />
            </div>
            <div className="inline-flex items-center">
              <div className="pr-4">
                <FaDiscord className="text-[24px] text-text-primary" />
              </div>
              <div className="pr-4">
                <FaXTwitter className="text-[24px] text-text-primary" />
              </div>
              <div className="hidden pr-4 max-sm:block">
                <FaInstagram className="text-[24px] text-text-primary" />
              </div>
              <div className="pr-4">
                <FaGithub className="text-[24px] text-text-primary" />
              </div>
            </div>
          </div>
          <div className="mb-6 hidden w-full max-sm:block">
            <ul className="flex w-full max-lg:flex-wrap max-lg:justify-between">
              <TabButton title="Docs" link="/" isActive={false} />
              <TabButton title="Blog" link="/" isActive={false} />
              <TabButton title="Support" link="/" isActive={false} />
              <TabButton title="Terms & Conditions" link="/" isActive={false} />
            </ul>
          </div>
          <div className="grow-3 inline-block h-[35px] w-[211px]">
            <img alt="alt" src="/Icons/9.png" className="rounded-[12px]"></img>
          </div>
          <div className="grow-1 w-[100px]"></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
