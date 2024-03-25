import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import { TbBrandUpwork } from 'react-icons/tb';
import { PiPhone, PiAt } from 'react-icons/pi';
import { CiLocationOn } from 'react-icons/ci';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { ToastComponent, ToasterComponent } from '../../components/Toast';

const Contact = () => {
  const form = useRef();

  const [messageForm, setMessageForm] = useState({
    from_name: '',
    from_email: '',
    institution: '',
    message: '',
  });

  const [submitLoading, setSubmitLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    control,
  } = useForm();

  const notify = (type, message) => {
    ToastComponent({
      message: message,
      type: type,
    });
  };

  const handleFullName = (e) => {
    const { value } = e.target;
    setMessageForm((prevData) => {
      return {
        ...prevData,
        from_name: value,
      };
    });
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setMessageForm((prevData) => {
      return {
        ...prevData,
        from_email: value,
      };
    });
  };

  const handleWhoYouAre = (e) => {
    const { value } = e.target;
    setMessageForm((prevData) => {
      return {
        ...prevData,
        institution: value,
      };
    });
  };

  const handleMessage = (e) => {
    const { value } = e.target;
    setMessageForm((prevData) => {
      return {
        ...prevData,
        message: value,
      };
    });
  };

  const onSubmit = () => {
    setSubmitLoading(true);
    axios
      .get(
        `https://api.hunter.io/v2/email-verifier?email=${messageForm.from_email}&api_key=9889e60f43a8ae0d71c2eab1c92b8b98a9cc330d`
      )
      .then((response) => {
        if (response.data.data.status == 'invalid') {
          setSubmitLoading(false);
          notify('error', 'Please enter a valid email');
        } else {
          emailjs
            .sendForm(
              'service_8k3a33e',
              'template_2uu1zso',
              form.current,
              'xtJsnZ-BYIoIE9JZD'
            )
            .then(
              (response) => {
                reset();
                setSubmitLoading(false);
                notify('success', 'Email sent successfully');
              },
              (error) => {
                setSubmitLoading(false);
                console.log(error);
                notify('error', error.response.data.message);
                console.log(error, 'there was an error');
              }
            );
        }
      })
      .catch((error) => {
        setSubmitLoading(false);
        notify('error', error.response.data.message);
        console.log(error);
      });
  };

  return (
    <div className="w-full py-12">
      <div className="flex flex-row items-center gap-4 mb-6">
        <div
          className="
      flex items-center gap-2"
        >
          <div className="h-[6px] bg-primary rounded-full w-[58px]"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-primary"></div>
          <div className="w-[3px] h-[3px] rounded-full bg-primary"></div>
        </div>
        <h1 className="font-rubik text-2xl text-black/75 font-bold">
          Contact Us
        </h1>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 justify-between">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="mt-4 lg:w-[40%] mb-6">
            <p>
              We would like to hear from you. Let's build something together!
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary p-2 rounded-full">
              <PiPhone size={25} color="#FFEB3B" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Phone</p>
              <p className="">+250789810670</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary p-2 rounded-full">
              <TbBrandUpwork size={25} color="#FFEB3B" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Upwork</p>
              <p className="">kiglance@upwork.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary p-2 rounded-full">
              <PiAt size={25} color="#FFEB3B" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Email</p>
              <p className="">kiglance.rw@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary p-2 rounded-full">
              <CiLocationOn size={25} color="#FFEB3B" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Location</p>
              <p className="">KK 509 St, Rwamagana,Muyumbu.</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <form
            ref={form}
            className="flex flex-col gap-6 font-rubik"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-6">
              <Input
                labelText={'Full Name'}
                labelFor={'fullName'}
                name={'fullName'}
                type={'text'}
                isRequired={true}
                placeholder={'Enter your Full Name'}
                customClass="w-full "
                inputStyle={'rounded-lg'}
                value={messageForm.from_name}
                onChange={(e) => {
                  handleFullName(e);
                }}
                register={register}
                errors={errors}
              />

              <Input
                labelText={'Email'}
                labelFor={'email'}
                name={'email'}
                type={'email'}
                isRequired={true}
                placeholder={'Enter your email'}
                customClass="w-full "
                inputStyle={'rounded-lg'}
                value={messageForm.from_email}
                onChange={(e) => {
                  handleEmail(e);
                }}
                register={register}
                errors={errors}
              />
            </div>

            <div className="flex flex-row gap-12">
              <p className="text-rubik">Who are you?</p>
              <div className="flex flex-row gap-8">
                <label
                  htmlFor="company"
                  className="flex items-center text-base"
                >
                  <input
                    id="company"
                    type="radio"
                    value="company"
                    name="remember"
                    className="mr-2 dark:text-dark-text-fill dark:border-white dark:bg-dark-frame-bg"
                    checked={messageForm.institution === 'company'}
                    onChange={handleWhoYouAre}
                  />
                  <p className="text-rubik">Company</p>
                </label>

                <label
                  htmlFor="private"
                  className="flex items-center text-base"
                >
                  <input
                    id="private"
                    type="radio"
                    value="private"
                    name="remember"
                    className="mr-2 dark:text-dark-text-fill dark:border-white dark:bg-dark-frame-bg"
                    checked={messageForm.institution === 'private'}
                    onChange={handleWhoYouAre}
                  />
                  <p className="text-rubik">Private</p>
                </label>
              </div>
            </div>

            <TextArea
              labelText={'Message'}
              labelFor={'message'}
              name={'message'}
              type={'text'}
              isRequired={true}
              placeholder={'Enter your Message'}
              customClass="w-full"
              inputStyle={'h-[100px] rounded-lg'}
              value={messageForm.message}
              onChange={(e) => {
                handleMessage(e);
              }}
              register={register}
              errors={errors}
            />

            <Button
              type="submit"
              content={
                <div className="flex items-center justify-center px-6">
                  <h1 className="text-white font-nunito text-base font-bold">
                    Send
                  </h1>
                </div>
              }
              loading={submitLoading}
              btnColor="primary"
              Style={'text-white w-max h-[40px] mt-4'}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
