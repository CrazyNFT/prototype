import React from "react";
import { Comment } from "semantic-ui-react";

const CircleApiResponse = ({ res }) => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar
        as="a"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyhqRlqIGldvER6o0c42m1mcb8JNQkHeFW_CH7Bm7B2EzNsgZ0OHdA42A6l-kPo9bFJY&usqp=CAU"
      />
      <Comment.Content>
        <Comment.Author>Circle API</Comment.Author>
        <Comment.Metadata>
          <div>Just Now</div>
        </Comment.Metadata>
        <Comment.Text>
          <pre style={{ textOverflow: "ellipsis", wordBreak: "break-word" }}>
            {res}
          </pre>
        </Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);

export default CircleApiResponse;
