import { Fragment} from "react";
import { ProductCard } from "../ProductCard/ProductCard";

export const MainCategory = ({outfitCategory}) => {  

  return (
    <div className="grid grid-cols-2 mb-[119px]">
      {
        outfitCategory.map(item => item.map(outfit => {
          return(
            <Fragment key={outfit.id}>
              <ProductCard className={''}
                          size={outfit.size}
                          count={outfit.count}
                          heading={outfit.title}
                          price={outfit.price}
                          img={outfit.image}
            />
            </Fragment>
          )
        }))
      }
    </div>
  );
};