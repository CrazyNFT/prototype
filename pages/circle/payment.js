import React from "react";
import { Container, Form, Button, Icon } from "semantic-ui-react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { sendTransaction } from "@/components/CardChoose/Circle";
import CircleApiResponse from "@/components/CardChoose/CircleResponse";

export default function CardForm() {
  const { handleSubmit, control } = useForm();
  const [status, setStatus] = React.useState("Make Payment");
  const [response, setResponse] = React.useState("");
  const router = useRouter();

  const accTypes = [
    { key: "card", text: "card", value: "card" },
    { key: "ach", text: "ach", value: "ach" },
  ];

  const vMethods = [
    { key: "cvv", text: "cvv", value: "cvv" },
    { key: "threed", text: "Three_d", value: "three_d_secure" },
  ];

  async function submitHandler(data) {
    const res = await sendTransaction(data);
    setResponse(JSON.stringify(res, null, 2));
    setStatus("Payment Made");
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
          <h4 className="ui dividing header">Make Payment</h4>
          <div className="fields">
            <div className="six wide field">
              <Controller
                name="id"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Source Account ID Required",
                  },
                  maxLength: {
                    value: 36,
                    message: "max: 36 numbers limit exceeded",
                  },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <label>Source Account ID</label>
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
                    <label>Source Account Type</label>
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
          <div className="fields">
            <div className="three wide field">
              <Controller
                name="verification"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please select a Method",
                  },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <label>Method</label>
                    <Form.Select
                      placeholder="Select"
                      options={vMethods}
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
            <div className="three wide field">
              <Controller
                name="cvv"
                control={control}
                rules={{
                  required: { value: true, message: "CVV Required" },
                  maxLength: {
                    value: 3,
                    message: "Please enter a valid CVV",
                  },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <label>CVV</label>
                    <Form.Input
                      placeholder="Enter CVV"
                      onChange={field.onChange}
                      error={
                        fieldState.error ? fieldState.error.message : false
                      }
                    />
                  </>
                )}
              />
            </div>
            <div className="six wide field">
              <Controller
                name="verificationSuccessUrl"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <label>Verification Success URL</label>
                    <Form.Input
                      placeholder="Success URL here..."
                      onChange={field.onChange}
                      error={
                        fieldState.error ? fieldState.error.message : false
                      }
                    />
                  </>
                )}
              />
            </div>
            <div className="six wide field">
              <Controller
                name="verificationFailureUrl"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <label>Verification Failure URL</label>
                    <Form.Input
                      placeholder="Failure URL here..."
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
          <div className="field">
            <div className="fields">
              <div className="twelve wide field">
                <Controller
                  name="description"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <label>Description</label>
                      <Form.Input
                        placeholder="Describe here..."
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
                  name="channel"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <label>Channel</label>
                      <Form.Input
                        placeholder="Channel"
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
          <div className="field">
            <div className="three fields">
              <div className="field">
                <Controller
                  name="name"
                  control={control}
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
              <div className="field">
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
              </div>
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
            positive={status === "Payment Made"}
            disabled={status === "Payment Made"}
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
