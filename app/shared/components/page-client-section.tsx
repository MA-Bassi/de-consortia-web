'use client';
import { ImageSet } from '@/app/shared/constants/image-set';
import { FontSet } from '@/app/shared/constants/font-set';
import Image from 'next/image';

interface ClientCardProps {
  title: string;
  description: string;
  image: string;
  subtitle: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

const boldFont = FontSet['bold'];
const regularFont = FontSet['regular'];

function ClientCard({
  title,
  description,
  subtitle,
  image,
  rating,
}: ClientCardProps) {
  let ratingStars = [];
  for (let i = 1; i <= 5; i++) {
    ratingStars.push(
      <Image
        key={i}
        src={
          i <= rating ? ImageSet['homeStarGolden'] : ImageSet['homeStarGrey']
        }
        alt={'Rating Star'}
        width={18}
        height={18}
      />,
    );
  }
  return (
    <div className={'flex w-[25%] flex-col items-center drop-shadow-2xl'}>
      <Image
        className={'h-[140px] w-[140px]'}
        src={image}
        alt={'Client Image'}
        width={140}
        height={140}
      />
      <div className={'mt-[12px] flex'}>{ratingStars.map(star => star)}</div>
      <span
        className={`${regularFont.className} mt-[24px] text-center text-[14px]`}
      >
        {description}
      </span>
      <div
        className={
          'mt-[64px] flex h-[150px] w-full flex-col items-center justify-center rounded-b-[16px] bg-[#FB403F]'
        }
      >
        <span
          className={`${boldFont.className} text-center text-[28px] text-white`}
        >
          {title}
        </span>
        <span
          className={`${regularFont.className} text-center text-[14px] text-white`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export default function PageClientSection() {
  return (
    <div className={'mt-[64px] flex flex-col gap-[64px] px-[10%]'}>
      <div className={'flex flex-col items-center justify-center gap-[16px]'}>
        <span className={`${boldFont.className} text-[40px]`}>
          Testimonials From Our Clients
        </span>
        <span className={`${regularFont.className} text-center text-[18px]`}>
          Discover a rich array of articles offering unique perspectives and
          expert insights on various topics. These resources provide valuable
          information that you can leverage in discussions with us.
        </span>
      </div>
      <div className={'flex flex-wrap justify-evenly gap-[64px]'}>
        <ClientCard
          title={'Sophia'}
          subtitle={'Lorem Ipsum is simply dummy text of'}
          description={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
          }
          image={ImageSet['homeClientOne']}
          rating={3}
        />
        <ClientCard
          title={'James'}
          subtitle={'Lorem Ipsum is simply dummy text of'}
          description={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
          }
          image={ImageSet['homeClientTwo']}
          rating={4}
        />
        <ClientCard
          title={'Sarah'}
          subtitle={'Lorem Ipsum is simply dummy text of'}
          description={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
          }
          image={ImageSet['homeClientThree']}
          rating={5}
        />
      </div>
    </div>
  );
}
