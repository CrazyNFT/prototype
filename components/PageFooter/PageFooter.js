import {Container, Image, Grid, Segment, List, Header, Divider} from "semantic-ui-react";
import React from "react";

const PageFooter = () => (
<Segment
      inverted
      vertical
      style={{ margin: "2em 0em 0em", padding: "2em 0em" }}
    >
      <Container textAlign="center">
        <h1>CrazyNFT</h1>
        <h5>Beta version</h5>
      </Container>
    </Segment>
)
export default PageFooter;