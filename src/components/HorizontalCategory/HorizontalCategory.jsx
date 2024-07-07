
import { Fragment } from "react";
import { ProductCard } from "../ProductCard/ProductCard";

export const HorizontalCategory = ({newCollection, topBestSeller}) => {

  return (
    <div>
      <h2 className="text-2xl font-medium mb-4 p-1">Топ бестселлеров</h2>
      <div className="flex items-center">
        {
          newCollection 
          ? newCollection.map(item => item.map(outfit => {
            return(
              <Fragment key={outfit.id}>
                <ProductCard 
                vertical={true}
                img={outfit.image}
                status={outfit.status}
                heading={outfit.title}
                price={outfit.price}
                />
              </Fragment>
            )
          })) 
          : topBestSeller.map(item => item.map(outfit => {
            return(
              <Fragment key={outfit.id}>
                <ProductCard 
                vertical={true}
                img={outfit.image}
                status={outfit.status}
                heading={outfit.title}
                price={outfit.price}
                />
              </Fragment>
            )
          })) 
        }
      </div>
    </div>
  )
}
