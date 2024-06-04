import Image from 'next/image';
import { ImageSet } from '@/app/shared/constants/image-set';
import { FontSet } from '@/app/shared/constants/font-set';

const regularFont = FontSet['regular'];
const boldFont = FontSet['bold'];

export default function PageFooter() {
  return (
    <div className={'flex flex-col bg-black p-[5%] text-white'}>
      <div className={'flex justify-between'}>
        <div className={'flex w-[45%] flex-col gap-[32px]'}>
          <Image
            src={ImageSet['brandLight']}
            alt={'Brand Logo'}
            width={200}
            height={200}
          />
          <span className={`${regularFont.className} text-[24px]`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum is simply dummy text of the printing and
            typesetting industry Lorem Ipsum is simply dummy text of the
            printing and typesetting industry
          </span>
        </div>
        <div className={'flex flex-col items-center justify-center gap-[32px]'}>
          <span className={`${boldFont.className} text-[64px]`}>
            Get in Touch
          </span>
          <div className={'flex w-full justify-evenly gap-[80px]'}>
            <Image
              src={ImageSet['contactPhone']}
              alt={'Contact Phone'}
              width={70}
              height={70}
            />
            <Image
              src={ImageSet['contactFB']}
              alt={'Contact Facebook'}
              width={70}
              height={70}
            />
            <Image
              src={ImageSet['contactWeb']}
              alt={'Contact Web'}
              width={70}
              height={70}
            />
            <Image
              src={ImageSet['contactEmail']}
              alt={'Contact Email'}
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>
      <div className={'mt-[128px] h-1 w-full border-2 border-[#FB403F]'} />
      <div className={'mt-[32px] flex justify-between'}>
        <span>Developed by Stellar Corp</span>
        <span>Designed by Memoona Batool</span>
      </div>
    </div>
  );
}
