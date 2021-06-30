import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
import { useRouter } from 'next/router';
import HomePage from "@/components/HomePage/HomePage";


const FixedMenuLayoutFooter = () => {const router = useRouter(); return(
  <div>
    <HomePage />
    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 1" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 2" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 3" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as="h4" content="Footer Header" />
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Container textAlign="center">
        <h1>CrazyNFT</h1>
        <h5>
          <i class="youtube play link icon" onClick={()=>router.push("https://www.youtube.co.in")}></i>
          <i class="twitter link icon" onClick={()=>router.push("https://www.youtube.co.in")}></i>
          <i class="linkedin link icon" onClick={()=>router.push("https://www.youtube.co.in")}></i>
          <i class="github link icon" onClick={()=>router.push("https://www.youtube.co.in")}></i>
          <i class="medium link icon" onClick={()=>router.push("https://www.youtube.co.in")}></i>
        </h5>
      </Container>
      </Container>
    </Segment>
  </div>
);}

export default FixedMenuLayoutFooter;
