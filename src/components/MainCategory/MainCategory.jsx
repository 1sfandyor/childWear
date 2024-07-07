import { useEffect, useState } from "react";
import { Get } from "../../Hooks/GET";
import { ProductCard } from "../ProductCard/ProductCard";

export const MainCategory = () => {  
  const API = 'https://api.jsonbin.io/v3/b/66898de7e41b4d34e40e0fc5';
  const [data, setData] = useState([]);
  const [outfitCategory, setOutfitCategory] = useState([]);
  const [newCollection, setNewCollection] = useState([]);
  const [topBestSeller, setTopBestSeller] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await Get(API, setData);
      const outfitCategoryTemp = [];
      const newCollectionTemp = [];
      const topBestSellerTemp = [];

      responseData?.record?.Category?.forEach(item => {
        if (item.name === 'Category') {
          outfitCategoryTemp.push(item.info);
        } else if (item.name === 'newCollectionData') {
          newCollectionTemp.push(item.info);
        } else if (item.name === 'TopBestSeller') {
          topBestSellerTemp.push(item.info);
        }
      });

      setOutfitCategory(outfitCategoryTemp);
      setNewCollection(newCollectionTemp);
      setTopBestSeller(topBestSellerTemp);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 mb-[119px]">
      {
        outfitCategory.map(item => item.map(outfit => {
          return(
            <ProductCard className={''}
                          size={outfit.size}
                          count={outfit.count}
                          heading={outfit.title}
                          price={outfit.price}
                          img={outfit.image}
            />
          )
        }))
      }
    </div>
  );
};

{/* 

*/}