/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



"use client";
import React, { useState } from "react";

import { Flexbox } from "./layout";


interface FormFields {
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  amount: number | "";
}

const formFields: { name: keyof FormFields; label: string; type: string }[] = [
  { name: "firstName", label: "First name", type: "text" },
  { name: "surname", label: "Surname", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone", type: "text" },
  { name: "amount", label: "Amount", type: "number" },
];

export const CusDetailsForm: React.FC<{ onSubmit: (data: FormFields) => void }> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormFields>({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    amount: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
         <Flexbox
          direction="col"
          className="gap-[14px]"
        >
            <div>
      {formFields.map((field) => (
        <Flexbox
          direction="col"
          className="text-sm text-[#454545] gap-[2px]"
          key={field.name}
        >
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="bg-[#E6E6E6] rounded-lg p-1 py-[0.625rem] px-[0.75rem] "
            min={1}
          />
        </Flexbox>
      ))}
      </div>
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

