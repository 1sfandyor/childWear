import React from 'react'
import { Link } from 'react-router-dom';

export const RounedBlock = ({className, px, py, pl, pr, children, type, href, none}) => {

  const classes = `flex items-center justify-center ${none ? 'border-none' : "border rounded-full border-solid"} ${className} ${px} ${py} ${pl} ${pr}`;

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
        {children}
    </Link>
)

  return href 
          ? renderLink()
          : type
          ? renderBtn()
          : renderBlock()
}
