/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/

import React from "react";
import { useForm } from "react-hook-form";

import { Flexbox } from "./layout";

interface FormFields {
  "full_name": string;
  password: string;
  email: string;
  mobile: string;
  "Confirm Password": string;
  "Nationality": string;
}

interface CusDetailsFormProps {
  onSubmit: (data: FormFields) => void;
}


export const CusDetailsForm: React.FC<CusDetailsFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormFields>();
  const password = watch("password")
  const formFields: { name: keyof FormFields; label: string; type: string , validation?: object }[] = [
    { name: "full_name", label: "Your name", type: "text" , validation: { required: "your name is required", maxLength: {value:20, message:"20 char is max"} }},
    { name: "email", label: "Email", type: "email" , validation: { required: "email is required" }},
    { name: "mobile", label: "mobile", type: "tel" , validation: { required: "mobile is required"}},
    { name: "password", label: "Password", type: "password" , validation: { required: "Password is required", minLength: {value:8, message:"password should be at least 8 characters long"} } },
    { name: "Confirm Password", label: "Confirm Password", type: "password" , validation: { required: "This field is required", minLength: {value:8, message:"password should be at least 8 characters long"} , validate: (value: string) => value === password || "Passwords do not match"},},
    { name: "Nationality", label: "Nationality", type: "text" , validation: { required: "Nationality is required"} },
  ];



  const handleFormSubmit = (data: FormFields) => {
    const updateData = {...data ,  emirates_id: '', country_code: ""}
    onSubmit(updateData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Flexbox direction="col" className="gap-[14px]">
        {formFields.map((field) => (
          <Flexbox
            direction="col"
            className="text-sm text-[#454545] gap-[2px]"
            key={field.name}
          >
            <label htmlFor={field.name}>{field.label}</label>
            <input
              {...register(field.name, field.validation)}
              type={field.type}
              className={`bg-[#E6E6E6] rounded-lg p-1 py-[0.625rem] px-[0.75rem] ${errors[field.name] ? 'border-red-500' : ''}`}
              min={1}
            />
            {errors[field.name] && <p className="text-red-500">{errors[field.name]?.message}</p>}
          </Flexbox>
        ))}
        <button
          className="self-end w-[126px] h-9 py-[7px] flex items-center justify-center px-[12px] rounded-full  text-white font-medium border border-transparent bg-primary hover:border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
          type="submit"
        >
          Continue
        </button>
      </Flexbox>
    </form>
  );
};



