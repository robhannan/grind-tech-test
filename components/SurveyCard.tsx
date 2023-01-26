import Image from 'next/image';
import { Component } from 'react';
import styled from "styled-components";

const Card = styled.div`
  height: 191px;
  width: 371px;
  border-radius: 8px;
  background-color: var(--grind-grey-4);
  padding-left: 28px;
  padding-right: 28px;
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
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 8px;
`

const Body15Regular = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`

const PrimaryButton = styled.button`
  padding: 15px 20px 12px;
  width: 124px;
  height: 47px;
  background: var(--grind-charcoal);
  color: var(--grind-white);
  border-radius: 4px;
  margin-right: 16px;
`

const SecondaryButton = styled.button`
  padding: 15px 20px 12px;
  width: 124px;
  height: 47px;
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
            <Body15Regular>
              Let us know and get 15% off your next subscription order!
            </Body15Regular>
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