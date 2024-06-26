"use client";

import useCart from "@/hooks/useCart";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Button from "../general/Button";
import { CardProductProps } from "../detail/DetailClient";
import Counter from "../general/Counter";

const CartClient = () => {
  const {
    cartPrdcts,
    removeFromCart,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
  } = useCart();

  console.log(cartPrdcts);
  if (!cartPrdcts || cartPrdcts.length == 0) {
    return <div>Sepoetinizde Ürün Bulunmamaktadır..</div>;
  }

  let cartPrdctsTotal = cartPrdcts.reduce(
    (acc: any, item: CardProductProps) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="my-3 md:my-10">
      <PageContainer>
        <div className="flex items-center gap-3 text-center border-b py-3">
          <div className="w-1/5">Ürün Resmi</div>
          <div className="w-1/5">Ürün Adı</div>
          <div className="w-1/5">Ürün Miktarı</div>
          <div className="w-1/5">Ürün Fiyatı</div>
          <div className="w-1/5"></div>
        </div>
        <div>
          {cartPrdcts.map((cart) => (
            <div
              className="flex items-center justify-between text-center"
              key={cart.id}
            >
              <div className="w-1/5 flex items-center justify-center my-5">
                <Image src={cart.image} alt="" width={50} height={50} />
              </div>
              <div className="w-1/5">{cart.name}</div>
              <div className="w-1/5 flex items-center justify-center">
                <Counter
                  cardProduct={cart}
                  decreaseFunc={() => addToBasketDecrease(cart)}
                  increaseFunc={() => addToBasketIncrease(cart)}
                />
              </div>
              <div className="w-1/5 text-orange-600 text-lg font-bold">
                {cart.price}₺
              </div>
              <div className="w-1/5">
                <Button text="Ürünü Sil" onClick={() => removeFromCart(cart)} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between my-5  py-5 border-t">
          <button
            onClick={() => removeCart()}
            className="w-1/5 underline text-sm"
          >
            Sepeti Sil
          </button>
          <div className="text-lg md:text-2xl text-orange-600 font-bold">
            {cartPrdctsTotal}₺
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;
