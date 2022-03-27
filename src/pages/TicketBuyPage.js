import React, {useState} from 'react'
import styled from 'styled-components'

const WrapperDiv = styled.div`
  box-sizing: border-box;
  font-family: 'Montserrat Light';
`;
const TicketHeader = styled.div`
  font-family: 'Montserrat Light';
  box-sizing: border-box;
  background-color: #BE26C9;
  height: 460px;
  padding: 150px 0 190px;
`;
const FormSubmitDiv = styled(WrapperDiv)`
  margin-top: 30px;
  align-self: center;
`;
const InputBlockDiv = styled(WrapperDiv)`
  margin-bottom: 30px;
`;
const WarningDiv = styled.div`
  color: red;
  font-family: 'Montserrat Regular';
  margin-top: 4px;
  font-size: 13px;
  display: block;
`;

const WarningBlock = styled.div`
  background-color: #F95D51;
  color: white;
  text-align: center;
  font-family: 'Montserrat Regular';
  font-size: 20px;
  padding: 20px;
  display: block;
`;


const TicketFormDiv = styled.div`
  box-sizing: border-box;
  margin: 105px 0 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TicketForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 766px;
  width: 760px;

  text-align: start;
`;

const TextInput = styled.input`
  font-family: 'Montserrat Regular';
  font-size: 16px;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid black;
  outline: none;

  //outline: 1px solid red;
  border: ${props => props.isError && "none"};;
  outline: ${props => props.isError && "1px solid red"};
  width: 100%;
  //margin-bottom: 30px;
  display: block;

`;
const TextLabel = styled.label`
  font-size: 20px;
  margin-bottom: 7px;
  display: inline-block;
`;
const CheckLabel = styled(TextLabel)`
  font-size: 15px;
  outline: none;
  //padding: 10px 0;
  margin: 0;
  display: block;
  border: ${props => props.isError && "none"};
  padding: ${props => props.isError && "10px"};

  outline: ${props => props.isError && "1px solid red"};



`;

const BuyInput = styled.input`
  box-sizing: border-box;
  padding: 0 60px;
  border: none;
  font-family: 'Montserrat Bold';
  font-size: 16px;
  color: white;
  border-radius: 30px;
  outline: none;
  background-color: #AD2F94;
  width: 180px;
  height: 60px;
  cursor: pointer;


`;


const LVTitle = styled.h3`
  margin: 0;

  font-size: 52px;
  line-height: 1.23;
  font-family: 'Montserrat Semi-Bold';
  font-weight: normal;
  color: #ffffff;
`;

const LVParagraph = styled.p`
  margin: 0;
  padding-top: 41px;
  font-size: 26px;
  line-height: 1.45;
  font-family: 'Montserrat Light';

  font-weight: 400;
  color: #ffffff;
`;

const TicketInput = styled(TextInput)`
  width: 70px;
  text-align: center;
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }


`;
const CounterButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 8px;
  font-size: 26px;
  font-family: 'Times New Roman', sans-serif;
`;


export const TicketBuyPage = () => {
    const [error, setError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [firstCheck, setFirstCheck] = useState(false);
    const [secondCheck, setSecondCheck] = useState(false);
    const [total, setTotal] = useState(1);
    const [errors, setErrors] = useState({
        emailError: false,
        nameError: false,
        phoneError: false,
        firstCheckError: false,
        secondCheckError: false
    });

    const emailCheck = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)
    //const emailCheck = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)
    const phoneCheck = new RegExp(/^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/)

    //const phoneCheck = new RegExp(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/)


    function handleFormSubmit(event) {
        event.preventDefault();


        if (!phoneCheck.test(phone) && phone) {
            // setErrors({...errors, phoneError: true})
            setPhoneError(_ => true)
            console.log("phone error: spotted", phoneError)
        } else if (phoneCheck.test(phone)) {
            // setErrors({...errors, phoneError: false})
            setPhoneError(_ => false)

        }


        if (!emailCheck.test(email) && email) {
            // setErrors({...errors, emailError: true})
            setEmailError(_ => true)

            console.log("email error: spotted", emailError)
        } else if (emailCheck.test(email)) {
            // setErrors({...errors, emailError: false})
            setEmailError(_ => false)

        }


        if (!firstCheck || !secondCheck || !email || !phone || !name) {
            setError(true)
            console.log("empty error: spotted", error)
        } else if (firstCheck && secondCheck) {
            setError(false)
        }
    }

    // if (!secondCheck) {
    //     setErrors(() => ({...errors, secondCheckError: true}))
    //     console.log("2 tick error: spotted", errors.secondCheckError)
    // }


    // (!phoneCheck.test(phone)) ? setErrors({...errors, phoneError: true}) : setErrors({...errors, phoneError: false})


    // if (!name || !email) {
    //     // setError( true);
    //     console.log("empty error: spotted")
    // }

    // if (!name) {
    //     setErrors({...errors, nameError: true})
    // } else if (name) {
    //     setErrors({...errors, nameError: false})
    //
    // }


    // console.log(errors)


    function handleAddClick(e) {
        e.preventDefault()
        setTotal(total - -1);
    }

    function handleNameChange(e) {
        setName(_ => e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(_ => e.target.value);

    }

    function handlePhoneChange(e) {
        setPhone(_ => e.target.value);
    }

    function handleFirstCheck(e) {
        setFirstCheck(it => !it);
    }

    function handleSecondCheck(e) {
        setSecondCheck(it => !it);
    }

    function handleTicketsChange(e) {
        const reg = new RegExp(/^\d+$/);
        if ((e.target.value >= 0 && reg.test(e.target.value)) || e.target.value === "") {

            setTotal(_ => e.target.value)
        }
    }


    function handleRemoveClick(e) {
        e.preventDefault()

        if (total > 0) {
            setTotal(total - 1);
        }
    }

    return (
        <WrapperDiv>
            <TicketHeader className="ticket-header">
                <LVTitle>LV party</LVTitle>
                <LVParagraph>
                    Standard Ticket <br/>
                    June 19 at 7 PM, 1500 rubles
                </LVParagraph>
            </TicketHeader>
            <TicketFormDiv className="ticket-buy-form-div">
                <TicketForm action="" className="ticket-buy-form" onSubmit={handleFormSubmit}>
                    <InputBlockDiv>
                        <TextLabel htmlFor="">Name</TextLabel>
                        <TextInput
                            type="text"
                            placeholder="Paul Smith"
                            isError={error && !name}
                            onChange={handleNameChange}
                            value={name}
                        />
                        {error && !name && <WarningDiv>Пожалуйста, заполните все обязательные поля</WarningDiv>}
                    </InputBlockDiv>

                    <InputBlockDiv>
                        <TextLabel htmlFor="">Email</TextLabel>
                        <TextInput
                            type="email"
                            placeholder="example@site.com"
                            onChange={handleEmailChange}
                            value={email}
                            isError={(error && !email) || emailError}

                        />
                        {error && !email && <WarningDiv>Пожалуйста, заполните все обязательные поля</WarningDiv>}
                        {emailError && <WarningDiv>Пожалуйста, введите корректный email</WarningDiv>}

                    </InputBlockDiv>

                    <InputBlockDiv>
                        <TextLabel htmlFor="">Your phone</TextLabel>
                        <TextInput
                            type="tel"
                            placeholder="+7 900 000 0000"
                            onChange={handlePhoneChange}
                            isError={(error && !phone) || phoneError}

                            value={phone}/>
                        {error && !phone && <WarningDiv>Пожалуйста, заполните все обязательные поля</WarningDiv>}
                        {phoneError && <WarningDiv>Пожалуйста, введите корректный номер</WarningDiv>}
                    </InputBlockDiv>


                    <InputBlockDiv>
                        <TextLabel htmlFor="">Number of tickets</TextLabel>
                        <div>
                            <CounterButton
                                className="item-less"
                                disabled={total === 0}
                                onClick={handleRemoveClick}
                            >
                                &#8211;
                            </CounterButton>
                            <TicketInput
                                type="number"
                                value={total}
                                onChange={handleTicketsChange}
                                placeholder="1"/>
                            <CounterButton className="item-more" onClick={handleAddClick}>
                                +
                            </CounterButton>
                        </div>
                    </InputBlockDiv>


                    <InputBlockDiv>
                        <CheckLabel htmlFor="" isError={!firstCheck && error}>
                            <input
                                type="checkbox"
                                onChange={handleFirstCheck}
                                checked={firstCheck}
                            />
                            Я согласен с политикой обработки персональных
                            данных и конфиденциальности персональной информации и публичной офертой.
                        </CheckLabel>
                        {error && !firstCheck && <WarningDiv>Пожалуйста, заполните все обязательные поля</WarningDiv>}
                    </InputBlockDiv>


                    <InputBlockDiv>
                        <CheckLabel htmlFor="" isError={!secondCheck && error}>
                            <input type="checkbox"
                                   onChange={handleSecondCheck}
                                   checked={secondCheck}
                            />
                            Мне есть 18 лет (на входе потребуется
                            предъявить
                            оригинал документа)</CheckLabel>
                        {error && !secondCheck && <WarningDiv>Пожалуйста, заполните все обязательные поля</WarningDiv>}
                    </InputBlockDiv>

                    {(error || errors.emailError || errors.phoneError) && <WarningBlock>
                        <p>{error && "Пожалуйста, заполните все обязательные поля"}</p>
                        <p>{emailError && "Укажите, пожалуйста, корректный email"}</p>
                        <p>{phoneError && "Укажите, пожалуйста, корректный номер телефона"}</p>
                    </WarningBlock>}
                    <FormSubmitDiv className="form-submit">
                        <BuyInput type="submit" value="Купить"/>
                    </FormSubmitDiv>


                </TicketForm>
            </TicketFormDiv>

        </WrapperDiv>
    )
}

