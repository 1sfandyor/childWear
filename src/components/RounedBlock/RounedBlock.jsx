import React from 'react'

export const RounedBlock = ({className, px, py, pl, pr, children, type, href, text}) => {

  const classes = `flex items-center justify-center border rounded-full border-solid ${className} ${px} ${py} ${pl} ${pr}`;
  const spanClass = `relative text-nowrap flex item-center justify-center`;


  const renderBlock = () => (
        <div className={`${classes} ${px} ${py} ${pl} ${pr}`}>
          {children}
        </div>
    )

  const renderBtn = () => (
        <button type={type} className={`${classes} `}>
          {children}
        </button>
  )

  const renderLink = () => (
    <Link className={classes} to={href}>
        <span className={`${spanClass}`}>{text}</span>
    </Link>
)

  return href 
          ? renderLink()
          : type
          ? renderBtn()
          : renderBlock()
}
