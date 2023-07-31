import React, { useEffect } from "react";
import ShopCreate from "../Components/Shop/ShopCreate";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopCreatePage = () => {
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
      <ShopCreate />
    </div>
  );
};

export default ShopCreatePage;
