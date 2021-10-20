import React from "react";
import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { CustomColor, CustomPalette } from "src/theme";
import { Text } from "src/components";

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
    marginTop: "0.5rem",
    width: "-webkit-fill-available",
    height: "3rem",
    paddingLeft: "1rem",
    resize: "none",
    borderRadius: "0.75rem",
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
    <div style={style}>
      {labelText && (
        <Text preset="small_400" color={CustomPalette.grey7}>
          {labelText}
        </Text>
      )}
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
    </div>
  );
};

export default InputForm;
