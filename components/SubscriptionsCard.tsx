import { Component } from "react";
import styled from "styled-components";
import { Subscription } from "@/types";
import SubscriptionDetails from "./SubscriptionDetails";

const Card = styled.div`
  width: 40.75rem;
  display: flex;
  flex-direction: column;
  background: var(--grind-white);
  border: 1px solid var(--grind-grey-2);
  border-radius: 8px;
  padding: 1.5rem;
  margin-right: 1.875rem;
`;

const SubscriptionsHeader = styled.h1`
  font-family: Argent CF;
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0rem;
  text-align: left;
  color: var(--grind-charcoal);
`;

const Description = styled.p`
  font-weight: 400;
  line-height: 1.375rem;
  color: var(--grind-grey-1);
`;

const SubscriptionCard = styled.div`
  border-radius: 8px;
`;

const PortraitSpacing = styled.div`
  padding-top: 2rem;
  padding-left: 5%;
  padding-right: 5%;
`;

interface Props {
  subscriptions: Array<Subscription>;
  portrait?: Boolean;
}

const description =
  "View and update your Grind subscription, so you can make it work best for you, at home or wherever you are.";
class SubscriptionsCard extends Component<Props> {
  render() {
    if (!this.props.portrait) {
      return (
        <Card>
          <SubscriptionsHeader>Subscriptions</SubscriptionsHeader>
          <Description>{description}</Description>
          <SubscriptionCard>
            {this.props.subscriptions.map((subscription, index) => (
              <SubscriptionDetails subscription={subscription} key={index} />
            ))}
          </SubscriptionCard>
        </Card>
      );
    } else {
      return (
        <div>
          <PortraitSpacing>
            <SubscriptionsHeader>Subscriptions</SubscriptionsHeader>
            <Description>{description}</Description>
          </PortraitSpacing>
          {this.props.subscriptions.map((subscription, index) => (
            <SubscriptionDetails
              subscription={subscription}
              key={index}
              portrait
            />
          ))}
        </div>
      );
    }
  }
}

export default SubscriptionsCard;
