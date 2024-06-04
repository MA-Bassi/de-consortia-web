import { ImageSet } from '@/app/shared/constants/image-set';
import { FontSet } from '@/app/shared/constants/font-set';

const lawAboutBG = ImageSet['lawAboutBG'];
const boldFont = FontSet['bold'];

export default function PageAboutSection() {
  return (
    <div
      className={`relative mt-[128px] flex h-[1000px] w-full items-center justify-center bg-cover`}
      style={{
        backgroundImage: `url(${lawAboutBG})`,
      }}
    >
      <div className={'absolute left-0 top-0 h-full w-full bg-black/75'} />
      <div
        className={'z-10 flex flex-col items-center justify-center gap-[64px]'}
      >
        <span
          className={`${boldFont.className} border-b-8 border-[#FB403F] pb-[32px] text-[64px] text-white`}
        >
          Our Journey
        </span>
        <span
          className={`${boldFont.className} mx-[10%] rounded-[34px] border border-[#FB403F] px-[2%] py-[5%] text-[20px] text-white`}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Let reset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.orem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Let reset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </span>
        <button className={'h-[70px] w-[300px] rounded-[15px] bg-[#FB403F]'}>
          <span className={`${boldFont.className} text-[24px] text-white`}>
            Learn More
          </span>
        </button>
      </div>
    </div>
  );
}
