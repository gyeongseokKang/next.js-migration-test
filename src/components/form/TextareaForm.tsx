import React, { useState } from "react";
import { FieldErrors, UseFormRegister, UseFormWatch, ValidationRule } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { CustomColor } from "src/theme";

interface TextareaFormProp {
  registerKey: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  watch: UseFormWatch<any>;
  defaultValue?: string;
  limit?: number;
  labelText?: string;
  placeholder?: string;
  errorText?: string;
  style?: React.CSSProperties;
  pattern?: ValidationRule<RegExp> | undefined;
  required?: boolean;
}

const useStyles = makeStyles((theme) => ({
  labelText: {
    marginBlock: "1px",
    color: CustomColor.input.label,
    marginBlockStart: "0.5rem",
  },
  textarea: {
    height: "15vh",
    resize: "none",
    padding: "1rem",
    borderRadius: "10px",
    borderColor: CustomColor.input.border,
    "&:focus": {
      borderColor: CustomColor.input.borderFocus,
      outline: "none !important",
    },
    fontFamily: "inherit",
  },
  errorMsg: {
    paddingLeft: "1rem",
    fontSize: "0.75rem",
    color: CustomColor.error.text,
  },
  textLength: {
    position: "relative",
    top: "-2rem",
    display: "flex",
    justifyContent: "flex-end",
    paddingInlineEnd: "1rem",
    fontSize: "0.75rem",
    color: "#848496",
  },
  textLengthError: {
    color: CustomColor.error.text,
  },
}));

const TextareaForm = ({
  registerKey,
  register,
  errors,
  watch,
  defaultValue = undefined,
  limit = undefined,
  labelText = undefined,
  placeholder = undefined,
  errorText = undefined,
  pattern = undefined,
  required = false,
  style,
}: TextareaFormProp) => {
  const classes = useStyles();
  const watchTextarea = watch(registerKey, true);

  return (
    <>
      {labelText && <h5 className={classes.labelText}>{labelText}</h5>}
      <textarea
        className={classes.textarea}
        {...register(registerKey, {
          required: required,
          ...(limit && { maxLength: limit }),
        })}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      {limit && watchTextarea && (
        <div className={clsx(classes.textLength, { [classes.textLengthError]: watchTextarea.length > limit })}>
          {`${watchTextarea.length ? watchTextarea.length : 0}/${limit}`}
        </div>
      )}
      {errorText && <div className={classes.errorMsg}>{errors[registerKey] && errorText}</div>}
    </>
  );
};

export default TextareaForm;
