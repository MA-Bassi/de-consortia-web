import Image from 'next/image';
import { ImageSet } from '@/app/shared/constants/image-set';
import { FontSet } from '@/app/shared/constants/font-set';

const BrandLogo = ImageSet['brandDark'];
const regularFont = FontSet['regular'];
const mediumFont = FontSet['medium'];

export default function PageHeader() {
  return (
    <nav className={'flex px-[8%] py-[8px]'}>
      {/*  brand logo image */}
      <div>
        <Image
          alt={'Brand Logo'}
          src={BrandLogo}
          width={150}
          height={126}
          priority
        />
      </div>
      <div className={'ml-auto flex items-center justify-end gap-[64px]'}>
        {/* nav list */}
        <ul className={`flex gap-[32px] text-[32px] ${regularFont.className}`}>
          <li>Home</li>
          <li>About</li>
          <li>People</li>
        </ul>
        {/* booking button */}
        <button
          className={`flex h-[80px] w-[420px] items-center justify-center rounded-[15px] bg-[#FB403F]`}
        >
          <span className={`${mediumFont.className} text-[28px] text-white`}>
            Book an Appointment
          </span>
        </button>
      </div>
    </nav>
  );
}
