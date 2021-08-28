import React from "react";
import { Container, Form, Button, Icon } from "semantic-ui-react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { createCard } from "@/components/CardChoose/Circle";

export default function CardForm() {
  const { handleSubmit, control } = useForm();
  const [status, setStatus] = React.useState("Save Card");
  const router = useRouter();

  const months = [
    { key: "Jan", text: "January", value: "01" },
    { key: "Feb", text: "February", value: "02" },
    { key: "Mar", text: "March", value: "03" },
    { key: "Apr", text: "April", value: "04" },
    { key: "May", text: "May", value: "05" },
    { key: "Jun", text: "June", value: "06" },
    { key: "Jul", text: "July", value: "07" },
    { key: "Aug", text: "August", value: "08" },
    { key: "Sep", text: "September", value: "09" },
    { key: "Oct", text: "October", value: "10" },
    { key: "Nov", text: "November", value: "11" },
    { key: "Dec", text: "December", value: "12" },
  ];
  const states = [
    {
      key: "AN",
      text: "Andaman and Nicobar Islands",
      value: "Andaman and Nicobar Islands",
    },
    {
      key: "AP",
      text: "Andhra Pradesh",
      value: "Andhra Pradesh",
    },
    {
      key: "AR",
      text: "Arunachal Pradesh",
      value: "Arunachal Pradesh",
    },
    {
      key: "AS",
      text: "Assam",
      value: "Assam",
    },
    {
      key: "BR",
      text: "Bihar",
      value: "Bihar",
    },
    {
      key: "CG",
      text: "Chandigarh",
      value: "Chandigarh",
    },
    {
      key: "CH",
      text: "Chhattisgarh",
      value: "Chhattisgarh",
    },
    {
      key: "DH",
      text: "Dadra and Nagar Haveli",
      value: "Dadra and Nagar Haveli",
    },
    {
      key: "DD",
      text: "Daman and Diu",
      value: "Daman and Diu",
    },
    {
      key: "DL",
      text: "Delhi",
      value: "Delhi",
    },
    {
      key: "GA",
      text: "Goa",
      value: "Goa",
    },
    {
      key: "GJ",
      text: "Gujarat",
      value: "Gujarat",
    },
    {
      key: "HR",
      text: "Haryana",
      value: "Haryana",
    },
    {
      key: "HP",
      text: "Himachal Pradesh",
      value: "Himachal Pradesh",
    },
    {
      key: "JK",
      text: "Jammu and Kashmir",
      value: "Jammu and Kashmir",
    },
    {
      key: "JH",
      text: "Jharkhand",
      value: "Jharkhand",
    },
    {
      key: "KA",
      text: "Karnataka",
      value: "Karnataka",
    },
    {
      key: "KL",
      text: "Kerala",
      value: "Kerala",
    },
    {
      key: "LD",
      text: "Lakshadweep",
      value: "Lakshadweep",
    },
    {
      key: "MP",
      text: "Madhya Pradesh",
      value: "Madhya Pradesh",
    },
    {
      key: "MH",
      text: "Maharashtra",
      value: "Maharashtra",
    },
    {
      key: "MN",
      text: "Manipur",
      value: "Manipur",
    },
    {
      key: "ML",
      text: "Meghalaya",
      value: "Meghalaya",
    },
    {
      key: "MZ",
      text: "Mizoram",
      value: "Mizoram",
    },
    {
      key: "NL",
      text: "Nagaland",
      value: "Nagaland",
    },
    {
      key: "OR",
      text: "Odisha",
      value: "Odisha",
    },
    {
      key: "PY",
      text: "Puducherry",
      value: "Puducherry",
    },
    {
      key: "PB",
      text: "Punjab",
      value: "Punjab",
    },
    {
      key: "RJ",
      text: "Rajasthan",
      value: "Rajasthan",
    },
    {
      key: "SK",
      text: "Sikkim",
      value: "Sikkim",
    },
    {
      key: "TN",
      text: "Tamil Nadu",
      value: "Tamil Nadu",
    },
    {
      key: "TS",
      text: "Telangana",
      value: "Telangana",
    },
    {
      key: "TR",
      text: "Tripura",
      value: "Tripura",
    },
    {
      key: "UP",
      text: "Uttar Pradesh",
      value: "Uttar Pradesh",
    },
    {
      key: "UK",
      text: "Uttarakhand",
      value: "Uttarakhand",
    },
    {
      key: "WB",
      text: "West Bengal",
      value: "West Bengal",
    },
  ];

  const cities = [
    { key: "DEL", text: "Delhi", value: "Delhi" },
    { key: "MUM", text: "Mumbai", value: "Mumbai" },
    { key: "KOL", text: "Kolkata", value: "Kolkata" },
    { key: "CHN", text: "Chennai", value: "Chennai" },
    { key: "BLU", text: "Bangalore", value: "Bangalore" },
    { key: "HYD", text: "Hyderabad", value: "Hyderabad" },
    { key: "AHD", text: "Ahmedabad", value: "Ahmedabad" },
    { key: "PUN", text: "Pune", value: "Pune" },
    { key: "VIS", text: "Visakhapatnam", value: "Visakhapatnam" },
    { key: "KAN", text: "Kanpur", value: "Kanpur" },
    { key: "PAT", text: "Patna", value: "Patna" },
    { key: "JAI", text: "Jaipur", value: "Jaipur" },
    { key: "CMB", text: "Coimbatore", value: "Coimbatore" },
    { key: "NAG", text: "Nagpur", value: "Nagpur" },
    { key: "KOC", text: "Kochi", value: "Kochi" },
    { key: "KOZ", text: "Kozhikode", value: "Kozhikode" },
    { key: "TRV", text: "Thiruvananthapuram", value: "Thiruvananthapuram" },
    { key: "MAD", text: "Madurai", value: "Madurai" },
    { key: "JOD", text: "Jodhpur", value: "Jodhpur" },
    { key: "SAL", text: "Salem", value: "Salem" },
  ];

  const countries = [{ key: "IND", text: "India", value: "India" }];

  // SUBMITTED DATA IS SENT HERE
  function submitHandler(data) {
    setStatus("Card Saved");
    console.log(data);
    createCard(data);
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
          alignItems: "center",
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
          <h4 className="ui dividing header">Add New Card</h4>
          <div className="fields">
            <div className="seven wide field">
              <Controller
                name="card"
                control={control}
                rules={{
                  required: { value: true, message: "Card Number Required" },
                  maxLength: {
                    value: 16,
                    message: "max: 16 numbers limit exceeded",
                  },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <label>Card Number</label>
                    <Form.Input
                      placeholder="Enter Card Number here..."
                      onChange={field.onChange}
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
              <label>Expiration</label>
              <div className="two fields">
                <div className="field">
                  <Controller
                    name="expYear"
                    control={control}
                    rules={{
                      required: { value: true, message: "Year Required" },
                      maxLength: {
                        value: 4,
                        message: "Please enter a valid year",
                      },
                      minLength: {
                        value: 4,
                        message: "Please enter a valid year",
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <Form.Input
                        placeholder="yyyy"
                        onChange={field.onChange}
                        error={
                          fieldState.error ? fieldState.error.message : false
                        }
                      />
                    )}
                  />
                </div>
                <div className="field">
                  <Controller
                    name="expMonth"
                    control={control}
                    rules={{
                      required: { value: true, message: "Month required" },
                    }}
                    render={({ field, fieldState }) => (
                      <Form.Select
                        placeholder="Month"
                        options={months}
                        onChange={(x) => {
                          field.onChange(x.target.innerText);
                        }}
                        error={
                          fieldState.error ? fieldState.error.message : false
                        }
                      />
                    )}
                  />
                </div>
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
                        placeholder="Name"
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
                  name="phoneNumber"
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
          <div className="field">
            <div className="fields">
              <div className="twelve wide field">
                <Controller
                  name="line1"
                  control={control}
                  rules={{
                    required: { value: true, message: "Address Required" },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <label>Address</label>
                      <Form.Input
                        placeholder="Address here..."
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
                  name="postalCode"
                  control={control}
                  rules={{
                    required: { value: true, message: "Pin code Required" },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <label>Pin code</label>
                      <Form.Input
                        placeholder="Pin code"
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
          <div className="three fields">
            <div className="field">
              <Controller
                name="city"
                control={control}
                rules={{
                  required: { value: true, message: "City required" },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <label>City</label>
                    <Form.Select
                      className="ui fluid"
                      placeholder="City"
                      options={cities}
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
            <div className="field">
              <Controller
                name="district"
                control={control}
                rules={{
                  required: { value: true, message: "State required" },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <label>State</label>
                    <Form.Select
                      className="ui fluid"
                      placeholder="State"
                      options={states}
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
            <div className="field">
              <Controller
                name="country"
                control={control}
                rules={{
                  required: { value: true, message: "Country required" },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <label>Country</label>
                    <Form.Select
                      className="ui fluid"
                      placeholder="Country"
                      options={countries}
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
          </div>
          <Button
            positive={status === "Card Saved"}
            disabled={status === "Card Saved"}
          >
            {status}
          </Button>
        </Form>
      </Container>
    </div>
  );
}
