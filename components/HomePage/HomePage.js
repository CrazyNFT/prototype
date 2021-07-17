import React from "react";
import { Container } from "semantic-ui-react";
import Card1 from "@/components/LandingPageCards/Card_1";
import Card2 from "@/components/LandingPageCards/Card_2";


const HomePage = () => (
    <Container text style={{ marginTop: "10em", textAlign: "center" }}>
      <Card1 />
    </Container>
)
export default HomePage;