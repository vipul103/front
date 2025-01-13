'use client';
import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// internal
import ErrorMessage from "@components/error-message/error";

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(11).label("Phone"),
  company: Yup.string().required().label("Company"),
  message: Yup.string().required().min(20).label("Message"),
  house: Yup.string().required().label("House"),
  inquiry: Yup.string().required().label("Inquiry for"),
  bestTime: Yup.string().required().label("Best Time to Call"),
});

const ContactForm = () => {
  // react hook form
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="name"
              {...register("name", { required: `Name is required!` })}
              type="text"
              placeholder="Enter your name"
              id="name"
            />
            <ErrorMessage message={errors.name?.message} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="email"
              {...register("email", { required: `Email is required!` })}
              type="email"
              placeholder="Enter your email"
              id="email"
            />
            <ErrorMessage message={errors.email?.message} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="phone"
              {...register("phone", { required: `Phone is required!` })}
              type="text"
              placeholder="Mobile no"
              id="phone"
            />
            <ErrorMessage message={errors.phone?.message} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="company"
              {...register("company", { required: `Company is required!` })}
              type="text"
              placeholder="Company"
              id="company"
            />
            <ErrorMessage message={errors.company?.message} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <select name="house" {...register("house")} id="house">
              <option value="">Select House Type</option>
              <option value="Double Storey">Double Storey</option>
              <option value="Single Storey">Single Storey</option>
              <option value="Owned">Owned</option>
              <option value="Rented">Rented</option>
            </select>
            <ErrorMessage message={errors.house?.message} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <select name="inquiry" {...register("inquiry")} id="inquiry">
              <option value="">Select Inquiry Type</option>
              <option value="Air Conditioning">Air Conditioning</option>
              <option value="Hot Water System">Hot Water System</option>
            </select>
            <ErrorMessage message={errors.inquiry?.message} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <select name="bestTime" {...register("bestTime")} id="bestTime">
              <option value="">Select Best Time to Call</option>
              <option value="9am-11am">9am-11am</option>
              <option value="11am-1pm">11am-1pm</option>
              <option value="1pm-3pm">1pm-3pm</option>
              <option value="3pm-5pm">3pm-5pm</option>
              <option value="5pm-8pm">5pm-8pm</option>
            </select>
            <ErrorMessage message={errors.bestTime?.message} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__input-2">
            <textarea
              name="message"
              {...register("message", { required: `Message is required!` })}
              id="message"
              placeholder="Your message"
            ></textarea>
            <ErrorMessage message={errors.message?.message} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__agree d-flex align-items-start mb-25">
            <input className="e-check-input" type="checkbox" id="e-agree" />
            <label className="e-check-label" htmlFor="e-agree">
              I am bound by the terms of the Service I accept Privacy Policy.
            </label>
          </div>
        </div>
        <div className="col-md-5">
          <div className="contact__btn-2">
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
