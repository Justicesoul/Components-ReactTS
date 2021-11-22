import { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Accordion from './Accordion';
import Popover from './Popover';
import Tabs from './Tabs';
import Rating from './Rating';
import ToggleButtons from './ToggleButtons';
import Switch from './Switch';
import Editable from './Editable';
import Dropdown from './Dropdown';
import Carousel from './Carousel';

const Form = () => {
  const [inputFullname, setInputFullname] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputPhone, setInputPhone] = useState<string>('');
  const [toDisabledCheckbox, setToDisabledCheckbox] = useState(false);
  const [toDisabledRadio, setToDisabledRadio] = useState(false);
  const [disabledForm, setDisabledForm] = useState('flex');
  const [errorsCheck, setErrorsCheck] = useState(true);
  const inputEl = useRef<HTMLInputElement>(null);

  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{2})/;

  const inputs = [
    {
      className: 'form__format',
      ref: inputEl,
      type: 'text',
      iName: 'Fullname',
      value: inputFullname,
      placeholder: 'Fullname',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputFullname(e.target.value);
      },
      validator: inputFullname.length < 4 || inputFullname.length > 12,
      error: 'Minimum 4 charechters required',
    },
    {
      className: 'form__format',
      type: 'email',
      iName: 'email',
      value: inputEmail,
      placeholder: 'E-mail',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputEmail(e.target.value);
      },
      validator: !regexEmail.test(inputEmail),
      error: 'Valid e-mail required',
    },
    {
      className: 'form__format',
      type: 'tel',
      iName: 'phone',
      value: inputPhone,
      placeholder: 'Phone number',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPhone(e.target.value);
      },
      validator: !regexPhone.test(inputPhone),
      error: 'Valid phone number required',
    },
    {
      className: 'form__radio',
      type: 'radio',
      iName: 'radio',
      text: 'Male',
      onChange: (e: React.ChangeEvent<HTMLFormElement>) => {
        setToDisabledRadio(e.target.checked);
      },
      validator: toDisabledRadio === false,
    },
    {
      className: 'form__radio',
      type: 'radio',
      iName: 'radio',
      text: 'Female',
      onChange: (e: React.ChangeEvent<HTMLFormElement>) => {
        setToDisabledRadio(e.target.checked);
      },
      validator: toDisabledRadio === false,
      error: 'Please choose your gender',
    },
    {
      className: 'form__checkbox',
      type: 'checkbox',
      iName: 'checkbox',
      checked: toDisabledCheckbox,
      onChange: (e: React.ChangeEvent<HTMLFormElement>) => {
        setToDisabledCheckbox(e.target.checked);
      },
      validator: toDisabledCheckbox === false,
      error: 'Please confirm you are not a robot',
      text: 'I am not a robot',
    },
  ];

  const notifySuccess = () => toast.success(`Form submited 😲👌`);
  const notifyError = () => toast.error(`Something went wrong. Try again`);

  const submit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errors = false;
    setErrorsCheck(false);

    inputs.forEach(({ validator }) => {
      if (validator) {
        errors = true;
      }
      return errors;
    });

    if (!errors) {
      notifySuccess();
      setTimeout(() => {
        setDisabledForm('none');
      }, 2000);
    } else {
      notifyError();
    }
  };

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <form
          className="form"
          onSubmit={submit}
          noValidate
          style={{ display: disabledForm }}
        >
          {inputs.map(
            ({
              className,
              ref,
              type,
              iName,
              value,
              placeholder,
              onChange,
              validator,
              error,
              text,
              checked,
            }) => {
              return (
                <label>
                  <input
                    className={className}
                    ref={ref}
                    type={type}
                    name={iName}
                    value={value}
                    placeholder={placeholder}
                    //@ts-ignore
                    onChange={onChange}
                    //@ts-ignore
                    checked={checked}
                    style={{
                      borderColor:
                        validator && errorsCheck === false ? 'red' : 'black',
                    }}
                  />
                  {text}
                  {validator && errorsCheck === false && (
                    <span className="form__error">{error}</span>
                  )}
                </label>
              );
            }
          )}

          <button className="button center">Submit</button>
        </form>
      </div>

      <div
        className="components"
        style={{ display: disabledForm === 'flex' ? 'none' : 'block' }}
      >
        <Accordion />
        <Popover />
        <Tabs />
        <Rating />
        <ToggleButtons />
        <Switch />
        <Editable />
        <Dropdown />
        <Carousel />
      </div>
    </>
  );
};

export default Form;
