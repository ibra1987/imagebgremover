import React from "react";

export type NavLink = {
  name: string;
  path: string;
};

export type Feature = {
  title: string;
  desc: string;
  icon?: string;
};

export type LabelProps = {
  labelText: string;
  labelFor: string;
  labelClass: string;
};
export type InputProps = {
  id?: string;
  type: string;
  name: string;
  cssClass: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
