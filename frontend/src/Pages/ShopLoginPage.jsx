// import React, { useEffect } from "react";
// import ShopLogin from "../Components/Shop/ShopLogin";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ShopLoginPage = () => {
//   const navigate = useNavigate();
//   const { isSeller, seller } = useSelector((state) => state.seller);

//   useEffect(() => {
//     if (isSeller === true) {
//       navigate(`/shop/${seller.id}`);
//     }
//   }, []);
//   return (
//     <div>
//       <ShopLogin />
//     </div>
//   );
// };

// export default ShopLoginPage;

import React, { useEffect } from "react";
import ShopLogin from "../Components/Shop/ShopLogin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useSelector((state) => state.seller);

  useEffect(() => {
    // Check if isSeller is true and seller object is defined with an id property
    if (isSeller === true && seller && seller.id) {
      navigate(`/shop/${seller.id}`);
    }
  }, [isSeller, seller]);

  return (
    <div>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
