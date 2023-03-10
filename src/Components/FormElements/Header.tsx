import { Redberry } from 'Components';
import { useFormNavigation } from 'hooks';

const Header = () => {
  const { currentStep, isPathValid } = useFormNavigation();

  return (
    <div className='z-10 pt-24 border-b-2 border-app-black sticky top-0 bg-[#EAEAEA]'>
      <div className='flex justify-between pb-6 align-baseline'>
        <Redberry />
        {isPathValid && (
          <div className='text-2xl leading-5 font-bold'>{currentStep}/4</div>
        )}
      </div>
    </div>
  );
};

export default Header;
