import React from "react";
import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { CustomColor } from "src/theme";

interface InputFormProp {
  registerKey: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  defaultValue?: string;
  labelText?: string;
  placeholder?: string;
  errorText?: string;
  style?: React.CSSProperties;
  required?: boolean;
  pattern?: ValidationRule<RegExp> | undefined;
}

const useStyles = makeStyles((theme) => ({
  labelText: {
    marginBlock: "1px",
    color: CustomColor.input.label,
    marginBlockStart: "0.5rem",
  },
  input: {
    height: "1rem",
    resize: "none",
    padding: "1rem",
    borderRadius: "10px",
    border: `1px solid ${CustomColor.input.border}`,
    fontFamily: "inherit",
    "&:focus": {
      borderColor: CustomColor.input.borderFocus,
      outline: "none !important",
    },
  },
  errorMsg: {
    paddingLeft: "1rem",
    fontSize: "0.75rem",
    color: CustomColor.error.text,
  },
}));

const InputForm = ({
  registerKey,
  register,
  errors,
  placeholder = "",
  defaultValue = undefined,
  labelText = undefined,
  errorText = undefined,
  pattern = undefined,
  required = false,
  style,
}: InputFormProp) => {
  const classes = useStyles();
  return (
    <>
      {labelText && <h5 className={classes.labelText}>{labelText}</h5>}
      <input
        className={classes.input}
        {...register(registerKey, {
          required: required,
          pattern: pattern,
        })}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      {errorText && <div className={classes.errorMsg}>{errors[registerKey] && errorText}</div>}
    </>
  );
};

export default InputForm;
