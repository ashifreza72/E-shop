import React, { useEffect } from "react";
import ShopLogin from "../Components/Shop/ShopLogin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, isLoading, seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      // navigate(`/shop/${seller._id}`);
      navigate(`/dashboard`);
    }
  }, [isSeller, isLoading]);
  return (
    <div>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
