import React from "react";
import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { CustomColor } from "src/theme";

interface SelectInputFormProp {
  registerKey: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  labelText?: string;
  option: string[];
  placeholder?: string;
  errorText?: string;
  style?: React.CSSProperties;
}

const useStyles = makeStyles((theme) => ({
  labelText: {
    marginBlock: "1px",
    color: CustomColor.input.label,
    marginBlockStart: "0.5rem",
  },
  selectContainer: {
    display: "flex",
    width: "100%",
    height: "3rem",
    marginBlockEnd: "0.75rem",
    "& > select": {
      fontFamily: "inherit",
      flexGrow: "1",
      border: `1px solid ${CustomColor.input.border}`,
      borderRadius: "0.75rem",
      textAlign: "center",
      "&:focus": {
        borderColor: CustomColor.input.borderFocus,
        outline: "none !important",
      },
    },
    "& > input": {
      fontFamily: "inherit",
      flexGrow: "6",
      border: `1px solid ${CustomColor.input.border}`,
      borderRadius: "0.75rem",
      marginInlineStart: "0.5rem",
      paddingInlineStart: "1rem",
      "&:focus": {
        borderColor: CustomColor.input.borderFocus,
        outline: "none !important",
      },
    },
  },
  errorMsg: {
    paddingLeft: "1rem",
    fontSize: "0.75rem",
    color: CustomColor.error.text,
  },
}));

const SelectInputForm = ({
  registerKey,
  register,
  errors,
  option,
  placeholder = "",
  labelText = undefined,
  errorText = undefined,
  style,
}: SelectInputFormProp) => {
  const classes = useStyles();
  return (
    <div style={style}>
      {labelText && <h5 className={classes.labelText}>{labelText}</h5>}
      <div className={classes.selectContainer}>
        <select {...register(registerKey)}>
          {option.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <input {...register(`${registerKey}-input`)} placeholder={placeholder} />
        {errorText && <div className={classes.errorMsg}>{errors[registerKey] && errorText}</div>}
      </div>
    </div>
  );
};

export default SelectInputForm;
