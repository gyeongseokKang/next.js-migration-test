import React, { CSSProperties } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wavyTextLayout: {
    position: "relative",
    // WebkitBoxReflect: "below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2))",
  },
  textWavy: {
    animationName: `$textwavy`,
    animationDuration: "infinite",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
  "@keyframes textwavy": {
    "0%": {
      transform: "translateY(0px)",
    },
    "20%": {
      transform: "translateY(-10px)",
    },
    "40%": {
      transform: "translateY(0px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },
}));

interface WavyTextProp {
  text: string;
  wavy?: boolean;
  addPeroid?: number;
}

interface WavyTextCustomCSS extends CSSProperties {
  "--i": number;
}

const WavyText = ({ text, wavy = true, addPeroid = 0 }: WavyTextProp) => {
  const classes = useStyles();
  const wavyTargetText = [...text];
  const period = (wavyTargetText.length + addPeroid) / 10;

  return (
    <div className={classes.wavyTextLayout}>
      {wavyTargetText.map((letter, index) => {
        const display = letter === " " ? "inline" : "inline-block";
        return (
          <span
            className={wavy ? classes.textWavy : undefined}
            key={`${index}_${letter}`}
            style={
              ({
                "--i": `${index + 1}`,
                animationDuration: `${period}s`,
                animationDelay: "calc(0.1s * var(--i))",
                display: display,
              } as unknown) as WavyTextCustomCSS
            }
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default WavyText;
