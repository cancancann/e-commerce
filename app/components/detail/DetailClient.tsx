"use client";

import PageContainer from "../containers/PageContainer";

const DetailClient = ({ product }: { product: any }) => {
  return (
    <div className="mt-10 mb-10">
      <PageContainer>{product?.name}</PageContainer>
    </div>
  );
};

export default DetailClient;
