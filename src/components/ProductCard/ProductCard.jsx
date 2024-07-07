export const ProductCard = ({children, img, alt, heading, price, className, status, px, py}) => {

  const HorizontalCard = () => (
    <div className={`bg-geno ${className}`}>
        {children}
    </div>
  )

  const VerticalCard = () => (
    <div className={``}>
      <div className="bg-geno">
        <img src={img} alt={alt} />
      </div>

      {/* INFO */}
      <div>
        <small>{status}</small>
        <h2>{heading}</h2>
        <p>{price}</p>
      </div>
    </div>
  )

  return vertical 
  ? VerticalCard()
  : HorizontalCard()
}
