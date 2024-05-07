import { getCurrentUser } from "@/app/actions/getCurrentUser";
import WarningText from "@/app/components/WarningText";
import AuthContainer from "@/app/components/containers/AuthContainer";
import React from "react";

const Order = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="Buraya Girişin Yasaklı!!" />;
  }
  
  return <AuthContainer>Herhangi bir sipariş bulunmamaktadır...</AuthContainer>;
};

export default Order;
