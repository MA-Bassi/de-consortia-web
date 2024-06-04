import Image from 'next/image';
import { ImageSet } from '@/app/shared/constants/image-set';
import { FontSet } from '@/app/shared/constants/font-set';

interface IServiceProps {
  title: string;
  description: string;
  image: string;
}

const boldFont = FontSet['bold'];
const regularFont = FontSet['regular'];

function Service({ title, image, description }: IServiceProps) {
  return (
    <div
      className={'mb-[64px] flex w-[32%] flex-col items-center justify-evenly'}
    >
      <div
        className={'mb-[24px] rounded-[50%] border-[8px] border-black p-[30px]'}
      >
        <Image
          src={image}
          alt={'Service Image'}
          width={64}
          height={64}
          className={'h-[64px]'}
          priority
        />
      </div>
      <span className={`${boldFont.className} text-[24px]`}>{title}</span>
      <span className={`${regularFont.className} text-center text-[18px]`}>
        {description}
      </span>
    </div>
  );
}

export default function PageServicesSection() {
  return (
    <div
      className={
        'mt-[96px] flex flex-col items-center justify-center gap-[64px]'
      }
    >
      <div
        className={
          'flex flex-col items-center justify-center gap-[32px] px-[25%]'
        }
      >
        <span className={`${boldFont.className} text-[40px]`}>
          How We Can Assist You
        </span>
        <span className={`${regularFont.className} text-[18px]`}>
          eque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit. there is no one who loves pain itself,
          who seeks after it and wants to have it, simply because it is pain
        </span>
      </div>
      <div className={'flex flex-wrap px-[128px]'}>
        <Service
          title={'Innovative Solutions'}
          description={
            'Crafting effective legal methodologies tailored to your unique needs.'
          }
          image={ImageSet['serviceInnovation']}
        />
        <Service
          title={'Excellence Assurance'}
          description={
            'Ensuring the highest standards of legal service and client satisfaction.'
          }
          image={ImageSet['serviceBadge']}
        />
        <Service
          title={'Talent Management'}
          description={
            'Managing employee relations and legal compliance within the workplace.'
          }
          image={ImageSet['serviceProfile']}
        />
        <Service
          title={'Regulatory Compliance'}
          description={
            'Advising on and ensuring adherence to legal and regulatory requirements.'
          }
          image={ImageSet['serviceClipboard']}
        />
        <Service
          title={'Strategic Planning'}
          description={
            'Providing strategic legal advice to enhance business growth and efficiency.'
          }
          image={ImageSet['servicePlan']}
        />
        <Service
          title={'Operational Systems'}
          description={
            'Implementing robust management systems for effective organizational operations.'
          }
          image={ImageSet['serviceOperations']}
        />
      </div>
    </div>
  );
}
