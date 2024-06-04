import Image from 'next/image';
import { ImageSet } from '@/app/shared/constants/image-set';
import { FontSet } from '@/app/shared/constants/font-set';

const jumbotronImage = ImageSet['homeJumbotron'];

const regularFont = FontSet['regular'];
const boldFont = FontSet['bold'];

export default function PageJumbotronSection() {
  return (
    <div className={'flex gap-[128px] bg-black px-[64px] py-[128px]'}>
      <div>
        <Image
          src={jumbotronImage}
          alt={'Law Firm Image'}
          width={700}
          height={510}
        />
      </div>
      <div className={'flex flex-col gap-[64px] text-white'}>
        <span className={`${boldFont.className} text-[64px]`}>
          Masterminds to your Positive Goal
        </span>
        <span className={`${regularFont.className} text-[18px] text-[#E2DEDC]`}>
          Experience a rise in your pursuits with our expert consulting. We
          excel in tailoring success strategies to your unique goals, covering
          diverse fields for maximum impact, professionally and delightfully
        </span>
        <div className={'flex gap-[32px]'}>
          <button className={'h-[96px] w-[355px] rounded-[12px] bg-[#FB403F]'}>
            <span className={`${boldFont} text-[28px]`}>
              Collaborate with Us
            </span>
          </button>
          <button
            className={
              'h-[96px] w-[355px] rounded-[12px] border-2 border-[#FB403F]'
            }
          >
            <span className={`${boldFont} text-[#FB403Fjkl;jk] text-[28px]`}>
              Learn More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
