import { Subscription } from "@/types";
import React, { Component } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import Image from "next/image";

const Wrapper = styled.div`
  background-color: var(--grind-grey-4);
  padding:  1.25rem 1.25rem 1.25rem 1.25rem;
`;

const Status = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 0.25rem 0.5rem;
  margin-right: 0.625rem;
  height: 1.5rem;
  border-radius: 4px;
  background-color: var(--grind-green);
  color: var(--grind-white);
  font-size: 0.813rem;
  font-weight: 700;
  line-height: 1.063rem;
  letter-spacing: 0.03em;
  text-align: left;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 1.938rem;
  font-family: Apercu Pro;
  font-size: 0.813rem;
  font-weight: 700;
  line-height: 1.063rem;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
`;

const SubscriptionHeader = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.438rem;
`;

const SubscriptionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShippingInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ShippingHeader = styled.p`
  line-height: 1.375rem;
  margin-left: 0.625rem;
  margin-bottom: 0rem;
`;

const ShippingAddress = styled.p`
  color: var(--grind-grey-0);
  font-size: 0.938rem;
  font-weight: 400;
  margin-left: 0.635rem;
  margin-top: 0rem;
`;

const SubscriptionTotal = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 1.375rem;
  letter-spacing: -0.01em;
  text-align: left;
`;
interface Props {
  subscription: Subscription;
  portrait?: Boolean;
}

class SubscriptionDetails extends Component<Props> {
  render() {
    return (
      <Wrapper>
        <SubscriptionHeader>
          <span>
            <Status>ACTIVE</Status>Shipping on{" "}
            {this.props.subscription.next_dispatch.order_date}
          </span>
          <Button>Edit</Button>
        </SubscriptionHeader>
        {this.props.subscription.next_dispatch.products.map(
          (product, index) => (
            <ProductCard product={product} key={index}/>
          )
        )}
        <ShippingInfo>
          <span>
            <Image src="/truck.svg" alt="Grind Logo" width={32} height={32} />
          </span>
          <div>
            <ShippingHeader>Shipping address</ShippingHeader>
            <ShippingAddress>
              {this.props.subscription.next_dispatch.address.address1},{" "}
              {this.props.subscription.next_dispatch.address.zip},{" "}
              {this.props.subscription.next_dispatch.address.city}
            </ShippingAddress>
          </div>
        </ShippingInfo>
        <SubscriptionTotal>
          <span>TOTAL</span>
          <span>
            {this.props.subscription.next_dispatch.products[0].total.formatted}
          </span>
        </SubscriptionTotal>
      </Wrapper>
    );
  }
}

export default SubscriptionDetails;
