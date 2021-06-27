import React from "react";
import {
  Container,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
import PageHeader from "./PageHeader/PageHeader"
import PageFooter from "./PageFooter/PageFooter"

const FixedMenuLayout = () => (
  <div>
    <PageHeader />
    <Container text style={{ marginTop: "7em", textAlign: "center" }}>
      <Header as="h1">Semantic UI React Fixed Template</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        A text container is used for the main container, which is useful for
        single column layouts.
      </p>

      <Image
        src="https://source.unsplash.com/random"
        style={{ marginTop: "2em" }}
      />
    </Container>
    <PageFooter />
  </div>
);

export default FixedMenuLayout;
