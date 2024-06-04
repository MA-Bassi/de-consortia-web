import { ImageSet } from '@/app/shared/constants/image-set';
import { FontSet } from '@/app/shared/constants/font-set';

const lawContactBG = ImageSet['lawContactBG'];
const boldFont = FontSet['bold'];

export default function PageContactSection() {
  return (
    <div
      className={`relative mt-[128px] flex h-[838px] w-full items-center justify-center bg-cover`}
      style={{
        backgroundImage: `url(${lawContactBG})`,
      }}
    >
      <div className={'absolute left-0 top-0 h-full w-full bg-black/75'} />
      <div
        className={'z-10 flex flex-col items-center justify-center gap-[64px]'}
      >
        <span className={`${boldFont.className} text-[48px] text-white`}>
          Lets Work Together
        </span>
        <button className={'h-[80px] w-[420px] rounded-[15px] bg-[#FB403F]'}>
          <span className={`${boldFont.className} text-[36px] text-white`}>
            Contact Us
          </span>
        </button>
      </div>
    </div>
  );
}
