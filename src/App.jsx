import "./App.css";
import NavBar from "./components/Header";
import Footer from "./components/Footer";
import Billboard from "./components/Billiboard";
import  ProductContainer from "./components/ProductContainer";
import { useState } from "react";

function App() {
  const Products = [
    {
      "id": 1,
      "name": "Mens Jacket",
      "rating": 5,
      "normalCost": 20,
      "actualCost": 18,
      "category": "fashion",
      "subCategory": "mens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/sand_brown_solid_urban_shirt_for_men_base_15_11_2023_400x533.jpg"
    },
    {
      "id": 2,
      "name": "Mens Green Tees",
      "rating": 2,
      "normalCost": 20,
      "actualCost": 16,
      "category": "fashion",
      "subCategory": "mens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/new_full_sleeves_14_10_2022/dusky_green_mock_neck_full_sleeves_t_shirt_base_03_11_2023_700x933.jpg"
    },
    {
      "id": 3,
      "name": "Ash grey oversized full sleeve tshirt for men",
      "rating": 5,
      "normalCost": 20,
      "actualCost": 14,
      "category": "fashion",
      "subCategory": "mens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/new_full_sleeves_14_10_2022/ash_grey_oversized_full_sleeves_t-shirt_for_men_base_14_12_2023_700x933.jpg"
    },
    {
      "id": 4,
      "name": "Pitch black mock nexk full sleeve t-shirt",
      "rating": 5,
      "normalCost": 20,
      "actualCost": 14,
      "category": "fashion",
      "subCategory": "mens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/new_full_sleeves_14_10_2022/pitch_black_mock_neck_full_sleeves_t_shirt_base_03_11_2023_700x933.jpg"
    },
    {
      "id": 5,
      "name": "Women Floral Print Anarkali Kurta with Pant and Dupatta",
      "rating": 5,
      "normalCost": 20,
      "actualCost": 14,
      "category": "fashion",
      "subCategory": "womens",
      "image": "https://m.media-amazon.com/images/I/619AvISJtaL._SY741_.jpg"
    },
    {
      "id": 6,
      "name": "GRECIILOOKS Kurta Set with Dupatta for Women",
      "rating": 4,
      "normalCost": 20,
      "actualCost": 14,
      "category": "fashion",
      "subCategory": "womens",
      "image": "https://m.media-amazon.com/images/I/71UVfLcPEML._SX679_.jpg"
    },
    {
      "id": 7,
      "name": "Pink Floral A-Line Kurta",
      "rating": 4,
      "normalCost": 15,
      "actualCost": 13,
      "category": "fashion",
      "subCategory": "womens",
      "image": "https://beyoung.in/api/cache/catalog/products/11_New_kurti_26_3_2022/pink_floral_a-line_kurta_base_28_06_2023_700x933.jpg"
    },
    {
      "id": 8,
      "name": "Light Blue Floral A-Line Kurta",
      "rating": 3,
      "normalCost": 19,
      "actualCost": 14,
      "category": "fashion",
      "subCategory": "womens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/11_New_kurti_26_3_2022/light_blue_floral_a-line_kurta_base_28_06_2023_700x933.jpg"
    },
    {
      "id": 9,
      "name": "Sliced Watermelon Casual Shirts for Women",
      "rating": 5,
      "normalCost": 11,
      "actualCost": 9,
      "category": "fashion",
      "subCategory": "womens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/half_sleeve_shirt_for_women/sliced_watermelon_half_sleeve_shirt_for_women_base_700x933.jpg"
    },
    {
      "id": 10,
      "name": "Lavender Collar Flare Kurta",
      "rating": 4,
      "normalCost": 16,
      "actualCost": 14,
      "category": "fashion",
      "subCategory": "womens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/11_New_kurti_26_3_2022/lavender_collar_flare_kurta_base_28_06_2023_700x933.jpg"
    },
    {
      "id": 11,
      "name": "Navy Blue Women Plain T-Shirt",
      "rating": 2,
      "normalCost": 11,
      "actualCost": 9,
      "category": "fashion",
      "subCategory": "womens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/plain_new_update_images/navy_blue_womens_plain_t-shirt_women_base_700x933.jpg"
    },
    {
      "id": 12,
      "name": "https://www.beyoung.in/striped-front-tie-half-sleeve-women-shirts",
      "rating": 4,
      "normalCost": 18,
      "actualCost": 15,
      "category": "fashion",
      "subCategory": "womens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/half_sleeve_shirt_for_women/striped_front_tie_half_sleeve_shirt_for_women_base_700x933.jpg"
    },
    {
      "id": 13,
      "name": "Men full sleeve  Printed hooded",
      "rating": 4,
      "normalCost": 170,
      "actualCost": 140,
      "category": "fashion",
      "subCategory": "men",
      "image": "https://rukminim2.flixcart.com/image/832/832/ktketu80/sweatshirt/b/3/a/m-67029201-puma-original-imag6wygzhubhpzp.jpeg?q=70"
    },
    {
      "id": 14,
      "name": "Solid Brown Men Sweatshirts",
      "rating": 3,
      "normalCost": 25,
      "actualCost": 17,
      "category": "fashion",
      "subCategory": "mens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/new_winter_bb_2023/solid_brown_men_sweatshirts_base_07_11_2023_700x933.jpg"
    },
    {
      "id": 15,
      "name": "Navy Blue Sulphur twill Tshirt",
      "rating": 4,
      "normalCost": 20,
      "actualCost": 12,
      "category": "fashion",
      "subCategory": "mens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/navy_blue_sulphur_twill_shirt_for_men_base_18_11_2023_700x933.jpg"
    },
    {
      "id": 16,
      "name": "Dark Blue Denim Jacket",
      "rating": 5,
      "normalCost": 40,
      "actualCost": 23,
      "category": "fashion",
      "subCategory": "mens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/new_winter_wear_5_10_2022/dark_blue_denim_jacket_for_men_base_02_12_2023_700x933.jpg"
    },
    {
      "id": 17,
      "name": "Color Block Flat Knit Sweater for Men",
      "rating": 4.8,
      "normalCost": 25,
      "actualCost": 12,
      "category": "fashion",
      "subCategory": "mens",
      "image": "https://www.beyoung.in/api/cache/catalog/products/new_winter_bb_2023/color_block_flat_knit_sweater_for_men_base_19_10_2023_700x933.jpg"
    },
    {
      "id": 18,
      "name": "Ash Grey Oversized Full Sleeves T-shirt For Men",
      "rating": 4,
      "normalCost": 27,
      "actualCost": 16,
      "category": "fashion",
      "subCategory": "men",
      "image": "https://www.beyoung.in/api/cache/catalog/products/new_full_sleeves_14_10_2022/ash_grey_oversized_full_sleeves_t-shirt_for_men_base_14_12_2023_700x933.jpg"
    },
    {
      "id": 19,
      "name": "Cider Brown Printed Varsity Jacket for Men",
      "rating": 5,
      "normalCost": 29,
      "actualCost": 16,
      "category": "fashion",
      "subCategory": "men",
      "image": "https://www.beyoung.in/api/cache/catalog/products/new_winter_wear_5_10_2022/cider_brown_printed_varsity_jacket_for_men_base_11_12_2023_700x933.jpg"
    },
    {
      "id": 20,
      "name": "Block Print Straight Double Layer Kurti",
      "rating": 4.5,
      "normalCost": 20,
      "actualCost": 17,
      "category": "fashion",
      "subCategory": "womens",
      "image": "https://assets.ajio.com/medias/sys_master/root/20230906/dpEC/64f882dbafa4cf41f5c12884/-473Wx593H-461191248-yellow-MODEL.jpg"
    },
    {
      "id": 21,
      "name": "Printed Straight Kurta Set",
      "rating": 4,
      "normalCost": 25,
      "actualCost": 20,
      "category": "fashion",
      "subCategory": "womens",
      "image": "https://assets.ajio.com/medias/sys_master/root/20231211/GuWj/6576f928afa4cf41f5c3853c/-473Wx593H-466869105-green-MODEL.jpg"
    },
    {
      "id": 22,
      "name": "Embellished Kurta Set with Dupatta",
      "rating": 4,
      "normalCost": 30,
      "actualCost": 21,
      "category": "fashion",
      "subCategory": "womens",
      "image": "https://assets.ajio.com/medias/sys_master/root/20230717/TJ8c/64b55bcea9b42d15c95a9685/-473Wx593H-466319950-multi-MODEL2.jpg"
    },
    {
      "id": 23,
      "name": "Casual Maroon Shirt",
      "rating": 4.3,
      "normalCost": 15,
      "actualCost": 11,
      "category": "fashion",
      "subCategory": "men",
      "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/x/u/h/m-st2-vebnor-original-imagpw7w3ha4tv2h.jpeg?q=70"
    }    
  ];


  let [Cart, setCart] = useState([]);

  
  function handleCartitems(data = {}) {
    let CartCopyMaster  = [...Cart]
    CartCopyMaster.push(data)
    setCart(CartCopyMaster)
  
  }
  

  return (
    <div>
      <NavBar Cart={Cart} />
      <Billboard  />
      <ProductContainer Products={Products} handleCartitems={handleCartitems} Cart={Cart} />
      <Footer />
    </div>
  );
}

export default App;