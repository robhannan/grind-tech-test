import { Component } from "react";
import styled from "styled-components";
import { Subscription } from "@/types";
import SubscriptionDetails from "./SubscriptionDetails";

interface CardProps {
  portrait?: Boolean;
}

const Card = styled.div<CardProps>`
  ${props => !props.portrait && `
    width: 40.75rem;
    display: flex;
    flex-direction: column;
    background: var(--grind-white);
    border: 1px solid var(--grind-grey-2);
    border-radius: 8px;
    padding: 1.5rem;
    margin-right: 1.875rem;
  `}
`;

const SubscriptionsHeader = styled.h1<CardProps>`
  font-family: Argent CF;
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0rem;
  text-align: left;
  color: var(--grind-charcoal);
  ${props => props.portrait && `
    padding-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`;

const Description = styled.p<CardProps>`
  font-weight: 400;
  line-height: 1.375rem;
  color: var(--grind-grey-1);
  ${props => props.portrait && `
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`;

const SubscriptionCard = styled.div`
  border-radius: 8px;
`;

interface Props {
  subscriptions: Array<Subscription>;
  portrait?: Boolean;
}

const description =
  "View and update your Grind subscription, so you can make it work best for you, at home or wherever you are.";
class SubscriptionsCard extends Component<Props> {
  render() {
    return (
      <Card portrait={this.props.portrait}>
        <SubscriptionsHeader portrait={this.props.portrait}>Subscriptions</SubscriptionsHeader>
        <Description portrait={this.props.portrait}>{description}</Description>
        <SubscriptionCard>
          {this.props.subscriptions.map((subscription, index) => (
            <SubscriptionDetails subscription={subscription} key={index} />
          ))}
        </SubscriptionCard>
      </Card>
    );
  }
}

export default SubscriptionsCard;
