import { useEffect, useState } from "react";
import { Get } from "../../Hooks/GET";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner"
import { HorizontalCategory } from "../../components/HorizontalCategory/HorizontalCategory"
import { MainCategory } from "../../components/MainCategory/MainCategory"

const Home = () => {

    const API = 'https://api.jsonbin.io/v3/b/66898de7e41b4d34e40e0fc5';
    const [outfitCategory, setOutfitCategory] = useState([]);
    const [newCollection, setNewCollection] = useState([]);
    const [topBestSeller, setTopBestSeller] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await Get(API);
            const outfitCategoryTemp = [];
            const newCollectionTemp = [];
            const topBestSellerTemp = [];

            responseData?.record?.Category?.forEach(item => {
                if (item.name === 'Category') {
                    outfitCategoryTemp.push(item.info);
                }else if (item.name === 'newCollectionData') {
                    newCollectionTemp.push(item.info);
                }else if (item.name === 'TopBestSeller') {
                    topBestSellerTemp.push(item.info);
                }
            });

            setOutfitCategory(outfitCategoryTemp);
            setNewCollection(newCollectionTemp);
            setTopBestSeller(topBestSellerTemp);
        };

        fetchData();
    }, []);

    console.log(topBestSeller);

    return (
        <>
            <HeroBanner/>
            <MainCategory outfitCategory={outfitCategory}/>
            <HorizontalCategory newCollection={newCollection}/>
            <HorizontalCategory topBestSeller={topBestSeller}/>
        </>
    )
}

export default Home