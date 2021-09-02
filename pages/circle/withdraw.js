import React from "react";
import { Container, Form, Button, Icon } from "semantic-ui-react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { withdrawTransaction } from "@/components/CardChoose/Circle";
import CircleApiResponse from "@/components/CardChoose/CircleResponse";

export default function CardForm() {
  const { handleSubmit, control } = useForm();
  const [status, setStatus] = React.useState("Withdraw");
  const [response, setResponse] = React.useState("");
  const router = useRouter();

  const accTypes = [
    { key: "card", text: "card", value: "card" },
    { key: "ach", text: "ach", value: "ach" },
  ];

  async function submitHandler(data) {
    const res = await withdrawTransaction(data);
    setResponse(JSON.stringify(res, null, 2));
    setStatus("Amount Withdrawn");
  }

  return (
    <div
      style={{
        maxWidth: "768px",
        margin: "40px auto 20px",
        padding: "10px 20px 40px 20px",
        border: "1px solid #04827D",
        borderRadius: "6px",
      }}
    >
      <span
        onClick={() => router.back()}
        style={{
          marginBottom: "36px",
          marginLeft: "0px",
          display: "flex",
        }}
      >
        <Icon name="backward" />
        <span style={{ marginLeft: "8px" }}>
          <b>Back</b>
        </span>
      </span>
      <Container>
        <Form
          className="ui form"
          onSubmit={handleSubmit((data) => submitHandler(data))}
        >
          <h4 className="ui dividing header">Withdraw</h4>
          <div className="fields">
            <div className="six wide field">
              <Controller
                name="id"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Destination Account ID Required",
                  },
                  maxLength: {
                    value: 36,
                    message: "max: 36 numbers limit exceeded",
                  },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <label>Destination ID</label>
                    <Form.Input
                      placeholder="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
                      onChange={field.onChange}
                      error={
                        fieldState.error ? fieldState.error.message : false
                      }
                    />
                  </>
                )}
              />
            </div>
            <div className="four wide field">
              <Controller
                name="type"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Source Account type required",
                  },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <label>Account Type</label>
                    <Form.Select
                      placeholder="Select type"
                      options={accTypes}
                      onChange={(x) => {
                        field.onChange(x.target.innerText);
                      }}
                      error={
                        fieldState.error ? fieldState.error.message : false
                      }
                    />
                  </>
                )}
              />
            </div>

            <div className="six wide field">
              <label>Amount</label>
              <div className="field">
                <Controller
                  name="amount"
                  control={control}
                  rules={{
                    required: { value: true, message: "Amount Required" },
                  }}
                  render={({ field, fieldState }) => (
                    <Form.Input
                      placeholder="$ 00.00"
                      onChange={field.onChange}
                      error={
                        fieldState.error ? fieldState.error.message : false
                      }
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="three fields">
              <div className="field">
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: { value: true, message: "Name Required" },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <label>Name</label>
                      <Form.Input
                        placeholder="name"
                        onChange={field.onChange}
                        error={
                          fieldState.error ? fieldState.error.message : false
                        }
                      />
                    </>
                  )}
                />
              </div>
              {/* <div className="field">
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: { value: true, message: "Phone number Required" },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <label>Phone</label>
                      <Form.Input
                        placeholder="Phone Number"
                        onChange={field.onChange}
                        error={
                          fieldState.error ? fieldState.error.message : false
                        }
                      />
                    </>
                  )}
                />
              </div> */}
              <div className="field">
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: { value: true, message: "E-mail Required" },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <label>E-mail</label>
                      <Form.Input
                        placeholder="E-mail"
                        onChange={field.onChange}
                        error={
                          fieldState.error ? fieldState.error.message : false
                        }
                      />
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          <Button
            positive={status === "Amount Withdrawn"}
            disabled={status === "Amount Withdrawn"}
          >
            {status}
          </Button>
          <Button
            disabled={status === "Make Payment"}
            onClick={() => setStatus("Make Payment")}
          >
            Try Again
          </Button>
        </Form>
      </Container>
      <br />
      {response != "" && <CircleApiResponse res={response} />}
    </div>
  );
}
