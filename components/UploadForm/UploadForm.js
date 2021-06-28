import React from "react";
import {
  Container,
  Grid,
  Segment,
  Header,
  Icon,
  Form,
  Message,
  Image,
} from "semantic-ui-react";
import { useForm, Controller } from "react-hook-form";
import styles from "@/styles/UploadForm.module.css";

// Dummy user data
const user = {
  uid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  userName: "johnDoe",
  userEmail: "john.doe@gmail.com",
};

export default function UploadForm() {
  const { handleSubmit, control } = useForm();
  const [file, setFile] = React.useState({
    obj: "",
    error: false,
    errorMessage: "",
  });
  const [success, setSuccess] = React.useState(false);
  const validFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  const handleFile = (event) => {
    if (event.target.files.length === 0) {
      setFile({ obj: "", error: true, errorMessage: "Media required" });
    } else if (!validFileTypes.includes(event.target.files[0].type)) {
      setFile({
        obj: "",
        error: true,
        errorMessage: "Only Jpg, Jpeg, Png and GIF allowed",
      });
    } else if (event.target.files[0].size > 8388608) {
      setFile({
        obj: "",
        error: true,
        errorMessage: "max: 8Mb size exceeded",
      });
    } else {
      var reader = new FileReader();
      reader.onload = function (e) {
        let imgNode = document.getElementById("preview-img");
        imgNode.src = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      setFile({
        obj: event.target.files[0],
        error: false,
        errorMessage: "",
      });
    }
  };

  return (
    <Container>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column className={styles.formGridCol}>
          <Form
            onSubmit={handleSubmit((data) => {
              const NFT = {
                ...data,
                nftFile: file.obj,
                author: user.userName,
                authorId: user.uid,
              };
              console.log(NFT);
              setSuccess(true);
            })}
            size="large"
            success={success}
          >
            <Segment raised style={{ maxWidth: "inherit" }}>
              <Segment
                placeholder
                style={{ maxWidth: "inherit", maxHeight: "18em" }}
              >
                {!!file.obj ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    id="preview-img"
                    src=""
                    alt={"NFT image"}
                    className={styles.preview}
                  />
                ) : (
                  <Header icon>
                    <Icon name="image file" style={{ height: 70 }} />
                    NFT Preview will be shown on Upload
                  </Header>
                )}
              </Segment>
              <Form.Input
                type="file"
                onChange={handleFile}
                error={!!file.error ? file.errorMessage : false}
              >
                <input />
                <div className={styles.fileInpLabel}>
                  Jpg / Jpeg / Png / GIF
                </div>
              </Form.Input>
              <Controller
                name="nftName"
                control={control}
                rules={{
                  required: { value: true, message: "NFT name required" },
                  maxLength: {
                    value: 100,
                    message: "max: 100 character limit exceeded",
                  },
                }}
                render={({ field, fieldState }) => (
                  <Form.Input
                    placeholder="NFT Name"
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : false}
                  />
                )}
              />
              <Controller
                name="nftDescription"
                control={control}
                rules={{
                  maxLength: {
                    value: 300,
                    message: "max: 300 character limit exceeded",
                  },
                }}
                render={({ field, fieldState }) => (
                  <Form.TextArea
                    placeholder="NFT Description (Max: 300 characters)"
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : false}
                  ></Form.TextArea>
                )}
              />
              <Controller
                name="nftPrice"
                control={control}
                rules={{
                  required: { value: true, message: "NFT price required" },
                  min: { value: 0, message: "negative values not allowed" },
                }}
                render={({ field, fieldState }) => (
                  <Form.Input
                    placeholder="NFT Price"
                    min={0}
                    type="number"
                    step="any"
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : false}
                  ></Form.Input>
                )}
              />
              <Form.Button primary type="submit" fluid disabled={!file.obj}>
                Approve
              </Form.Button>
              <Message
                success
                header="Success"
                content={"Your NFT has been submitted for Approval"}
              />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
}