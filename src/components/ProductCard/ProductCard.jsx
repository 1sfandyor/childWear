import { FaAnglesRight } from "react-icons/fa6"
import { RounedBlock } from "../RounedBlock/RounedBlock"
import { Link } from "react-router-dom"
import { MdOutlineAddShoppingCart } from "react-icons/md"

export const ProductCard = ({count, size, img, alt, heading, price, className, status, vertical}) => {

  const HorizontalCard = () => (
    size == 'big' 
    ? <Link className={`flex items-start bg-geno font-primary pt-[75px] pr-[23px] pb-[31px] pl-10 ${className}`}>
        <div className="flex flex-col items-start">
          <small className="text-black/50 text-base mb-1">{count} одежд</small>
          <h2 className="text-[32px] mb-3.5">{heading}</h2>
          <p className="text-pomo mb-[191px]">от {price} uzs</p>
        
          <RounedBlock 
            href={'/'}
            className={`flex items-center`}
            none={true}>

            <FaAnglesRight className='mr-2' fontSize={7}/>
            <span className="font-medium font-inter">Подробнее</span>
          </RounedBlock>
        </div>

        <img className="shrink-0" src={img} alt={heading}/>
      </Link>
    : size == "wide"
    ? <Link className={`flex justify-between items-start bg-geno font-primary pt-[14px] pr-[42px] pl-[46px] ${className}`}>
          <div className="flex flex-col items-start mt-[44px]">
            <small className="text-black/50 text-xs mb-0.5">{count} одежд</small>
            <h2 className="text-lg mb-3">{heading}</h2>
            <p className="text-green mb-[60px]">от {price} uzs</p>

            <RounedBlock 
              href={'/'}
              className={`flex items-center`}
              none={true}>

              <FaAnglesRight className='mr-2' fontSize={7}/>
              <span className="font-medium font-inter">Подробнее</span>
            </RounedBlock>
          </div>

        <img src={img} alt={heading} width={268}/>
      </Link>
    : size == 'small'
    ? <Link className={`flex w-[335px] items-start bg-geno font-primary pt-[46px] pr-[19px] pb-[26px] pl-[27px] ${className}`}>
        <div className="flex flex-col items-start">
          <small className="text-black/50 text-xs mb-0.5">{count} одежд</small>
          <h2 className="text-lg mb-3">{heading}</h2>
          <p className="text-green mb-[60px]">от {price} uzs</p>

          <RounedBlock 
            href={'/'}
            className={`flex items-center`}
            none={true}>

            <FaAnglesRight className='mr-2' fontSize={7}/>
            <span className="font-medium font-inter">Подробнее</span>
          </RounedBlock>
        </div>


        <img src={img} alt={heading} width={151} height={151}/>
      </Link>
    : null
  )

  const VerticalCard = () => (
    <div className={`flex flex-col items-start justify-center mr-5 last:mr-0 mb-[120px]`}>
      <div className="bg-geno px-10 py-[50px] w-full flex items-center justify-center">
        <img className="object-cover" src={img} alt={alt} />
      </div>

      {/* INFO */}
      <div className="font-primary font-medium">
        <small className="mb-2 text-xs text-red">{status}</small>
        <h2 className="text-xl mb-2">
          <Link>{heading}</Link>
        </h2>
        <p className="font-normal mb-6">{price}</p>
      </div>

      <RounedBlock 
        type="button"
        className={`flex items-center border-dark text-dark`} 
        py={'py-[9px]'} 
        px={'px-[12px]'}>
        <MdOutlineAddShoppingCart className="mr-2.5"/>
        <span className="font-medium font-primary">добавить в корзину</span>
      </RounedBlock>
    </div>
  )

  return vertical 
  ? VerticalCard()
  : HorizontalCard()
}
