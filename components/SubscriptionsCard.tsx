import { Component } from "react";
import Image from 'next/image'
import styled from "styled-components";
import { Subscription } from "@/types";
import ProductCard from "./ProductCard";

const Card = styled.div`
  width: 653px;
  display: flex;
  flex-direction: column;
  background: var(--grind-white);
  border: 1px solid var(--grind-grey-2);
  border-radius: 8px;
  padding: 24px;
  margin-right: 30px;
`;

const Description = styled.p`
  font-weight: 400;
  line-height: 22px;
  color: var(--grind-grey-1);
`;

const SubscriptionCard = styled.div`
  border-radius: 8px;
  padding: 20px 20px 20px 20px;
  background-color: var(--grind-grey-4);
`

const Status = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
  margin-right: 10px;
  gap: 10px;
  height: 24px;
  border-radius: 4px;
  background-color: var(--grind-green);
  color: var(--grind-white);
  font-size: 13;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.03em;
  text-align: left;
`

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 31px;
  font-family: Apercu Pro;
  font-size: 13;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
`

const SubscriptionHeader = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 23px;
`

const SubscriptionInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const ShippingInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ShippingHeader = styled.p`
  line-height: 22px;
  margin-left: 10px;
  margin-bottom: 0px;
`

const ShippingAddress = styled.p`
  color: var(--grind-grey-0);
  font-size: 15px;
  font-weight: 400;
  margin-left: 10px;
  margin-top: 0px;
`

const SubscriptionTotal = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: left;
`

interface Props {
  subscriptions: Array<Subscription>;
}

class SubscriptionsCard extends Component<Props> {
  render() {
    console.log(this.props.subscriptions);
    return (
      <Card>
        <h2>Subscriptions</h2>
        <Description>
          View and update your Grind subscription, so you can make it work best
          for you, at home or wherever you are.
        </Description>
        <SubscriptionCard>
          {this.props.subscriptions.map((subscription, index) => 
            <SubscriptionInfo key={index}>
              <SubscriptionHeader>
                <span><Status>ACTIVE</Status>Shipping on {subscription.next_dispatch.order_date}</span>
                <Button>Edit</Button>
              </SubscriptionHeader>
              {subscription.next_dispatch.products.map((product, index) => 
                <ProductCard product={product} key={index}/>
              )}
              <ShippingInfo>
                <span>
                  <Image
                      src="/truck.svg"
                      alt="Grind Logo"
                      width={32}
                      height={32}
                    />
                </span>
                <div>
                  <ShippingHeader>Shipping address</ShippingHeader>
                  <ShippingAddress>
                    {subscription.next_dispatch.address.address1}, {subscription.next_dispatch.address.zip}, {subscription.next_dispatch.address.city}
                  </ShippingAddress>
                </div>
              </ShippingInfo>
              <SubscriptionTotal>
                <span>TOTAL</span>
                <span>{subscription.next_dispatch.products[0].total.formatted}</span>
              </SubscriptionTotal>
            </SubscriptionInfo>
          )}
        </SubscriptionCard>
      </Card>
    );
  }
}

export default SubscriptionsCard;
