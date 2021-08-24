import { Container, Form } from "semantic-ui-react";
import { useForm, Controller } from "react-hook-form";

export default function CardForm() {
  const { handleSubmit, control } = useForm();
  const options = [
    { key: "Jan", text: "January", value: "01" },
    { key: "Feb", text: "February", value: "02" },
  ];

  return (
    <div style={{ maxWidth: "960px", margin: "auto", padding: "40px 20px" }}>
      <Container>
        <Form
          className="ui form"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <h4 className="ui dividing header">Add New Card</h4>
          <div className="fields">
            <div className="seven wide field">
              <Controller
                name="cardNumber"
                control={control}
                rules={{
                  required: { value: true, message: "Card Number Required" },
                  maxLength: {
                    value: 16,
                    message: "max: 20 numbers limit exceeded",
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
                name="CVV"
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
                    name="expireMonth"
                    control={control}
                    rules={{
                      required: { value: true, message: "Month required" },
                    }}
                    render={({ field, fieldState }) => (
                      <Form.Select
                        className="ui fluid"
                        placeholder="Month"
                        options={options}
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
                    name="expireYear"
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
                      <>
                        <Form.Input
                          placeholder="yyyy"
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
          </div>
          <div className="field">
            <div className="three fields">
              <div className="field">
                <label>Name</label>
                <input type="text" name="shipping[name]" placeholder="Name" />
              </div>
              <div className="field">
                <label>Phone</label>
                <input
                  type="text"
                  name="shipping[Phone]"
                  placeholder="Phone Number"
                />
              </div>
              <div className="field">
                <label>E-mail</label>
                <input
                  type="email"
                  name="shipping[email]"
                  placeholder="E-mail"
                />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Billing Address</label>
            <div className="fields">
              <div className="twelve wide field">
                <input
                  type="text"
                  name="shipping[address]"
                  placeholder="Street Address"
                />
              </div>
              <div className="four wide field">
                <input
                  type="text"
                  name="shipping[address-2]"
                  placeholder="Pin Code"
                />
              </div>
            </div>
          </div>
          <div className="three fields">
            <div className="field">
              <label>City</label>
              <select className="ui fluid dropdown">
                <option value="">City</option>
                <option value="XYZ">XYZ</option>
              </select>
            </div>
            <div className="field">
              <label>State/District</label>
              <select className="ui fluid dropdown">
                <option value="">State</option>
                <option value="XYZ">XYZ</option>
              </select>
            </div>
            <div className="field">
              <label>Country</label>
              <select className="ui fluid dropdown">
                <option value="">Country</option>
                <option value="XYZ">XYZ</option>
              </select>
            </div>
          </div>
          {/* 
        <div className="ui segment">
          <div className="field">
            <div className="ui toggle checkbox">
              <input
                type="checkbox"
                name="acknowledge"
                tabIndex="0"
                className="hidden"
              />
              <label>I agree to the data policy and terms of CrazyNFT</label>
            </div>
          </div>
        </div> */}
          <div className="ui button" tabIndex="0">
            Save Card
          </div>
        </Form>
      </Container>
    </div>
  );
}
