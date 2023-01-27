import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import SubscriptionsCard from "@/components/SubscriptionsCard";
import SurveyCard from "@/components/SurveyCard";
import { useMediaQuery } from "react-responsive";
import Router from "next/router";

const PageTemplate = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.875rem;
  position: relative;
  z-index: 2;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Greeting = styled.h1`
  font-family: Argent CF;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: 0em;
  text-align: left;
  color: var(--grind-charcoal);
`;

interface Props {
  portrait?: Boolean;
};

const PinkHeader = styled.div<Props>`
  position: absolute;
  width: 100%;
  height:  ${props => props.portrait ? '4.75rem' : '14.875rem'};
  left: 0px;
  top: -1px;
  z-index: 1;

  background: var(--grind-pink);
`;

const SubscriptionPage = () => {
  const isPortrait = useMediaQuery({
    query: "(orientation: portrait)",
  });

  const [data, setData] = useState([] as any[]);

  const getSubscriptionData = async () => {
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
    if (!localStorage.getItem("token")) {
      Router.push('/login')
    }
    else {
      getSubscriptionData();
    }
  }, []);

  if (data[0]) {
    if (!isPortrait) {
      return (
        <>
          <PinkHeader/>
          <PageTemplate>
            <RowWrapper>
              <ColumnWrapper>
              {/* Obviously this isn't the actual name but it'll do */}
                <Navbar user={data[0].shipping_address.first_name} />
                <Greeting>
                  Fancy seeing you here {data[0].shipping_address.first_name}
                </Greeting>
                <RowWrapper>
                  <SubscriptionsCard subscriptions={data} />
                  <SurveyCard />
                </RowWrapper>
              </ColumnWrapper>
            </RowWrapper>
          </PageTemplate>
        </>
      );
    } else {
      return (
        <>
          <PinkHeader portrait/>
          <PageTemplate>
            <Navbar user={data[0].shipping_address.first_name} portrait />
            <SubscriptionsCard subscriptions={data} portrait />
          </PageTemplate>
        </>
      );
    }
  } else {
    return <div>Loading...</div>;
  }
};

export default SubscriptionPage;
