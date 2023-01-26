import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import SubscriptionsCard from "@/components/SubscriptionsCard";
import SurveyCard from "@/components/SurveyCard";

const PageTemplate = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  padding-top: 30px;
  position: relative;
  z-index: 2;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Greeting = styled.h1`
  font-family: Argent CF;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--grind-charcoal);
`;

const PinkHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 238px;
  left: 0px;
  top: -1px;
  z-index: 1;

  background: var(--grind-pink);
`

const SubscriptionPage = () => {
  const [data, setData] = useState([] as any[]);

  const handleLogin = async () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    try {
      const response = await axios.get(
        "https://web-api.dev.grind.co.uk/v1/shop/subscriptions",
        config
      );
      if (response.data.data) {
        setData(response.data.data);
      } else {
        console.log("Request failure");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  if (data[0]) {
    return (
      <>
      <PinkHeader/>
        <PageTemplate>
          <CardWrapper>
            <PageContent>
            <Navbar user={data[0].shipping_address.first_name} />
              <Greeting>
                Fancy seeing you here {data[0].shipping_address.first_name}
              </Greeting>
              <CardWrapper>
                <SubscriptionsCard subscriptions={data} />
                <SurveyCard/>
              </CardWrapper>
            </PageContent>
          </CardWrapper>
        </PageTemplate>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default SubscriptionPage;
