import Image from 'next/image';
import { Component } from 'react';
import styled from "styled-components";

const Card = styled.div`
  height: 11.938rem;
  width: 23.188;
  border-radius: 8px;
  background-color: var(--grind-grey-4);
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const SurveyText = styled.div`
  display: flex;
  flex-direction: column;
`

const SurveyHeader = styled.h2`
  font-family: Apercu Pro;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.563rem;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 0.5rem;
`

const SurveyDescription = styled.p`
  font-size: 0.938rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0rem;
  text-align: left;
`

const PrimaryButton = styled.button`
  padding: 0.938rem 1.25rem 0.75rem;
  width: 7.75rem;
  height: 2.938rem;
  background: var(--grind-charcoal);
  color: var(--grind-white);
  border-radius: 4px;
  margin-right: 1rem;
`

const SecondaryButton = styled.button`
  padding: 0.938rem 1.25rem 0.75rem;
  width: 7.75rem;
  height: 2.938rem;
  background: var(--grind-white);
  color: var(--grind-charcoal);
  border-radius: 4px;
`

class SurveyCard extends Component {
  render(){
    return (
      <Card>
        <ContentWrapper>
          <SurveyText>
            <SurveyHeader>
              How’s your coffee?
            </SurveyHeader>
            <SurveyDescription>
              Let us know and get 15% off your next subscription order!
            </SurveyDescription>
          </SurveyText>
          <Image
            src="/gift.png"
            alt="Survey icon"
            width={80}
            height={80}
          />
        </ContentWrapper>
        <ContentWrapper>
          <PrimaryButton>Start Survey</PrimaryButton>
          <SecondaryButton>Maybe later</SecondaryButton>
        </ContentWrapper>
      </Card>
  )}
};
 
export default SurveyCard;