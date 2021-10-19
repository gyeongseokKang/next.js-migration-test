const base = { textAlign: "center", borderRadius: "0.75rem !important" };

export const presets = {
  default: { ...base },

  confirm: {
    ...base,
    width: "20rem",
    height: "18rem",
    paddingTop: "2.5rem",
    justifyContent: "space-between",
  },
  dichotomous: {
    ...base,
    width: "20rem",
    height: "11rem",
    padding: "1rem",
    paddingTop: 0,
  },
};

/**
 * A list of preset names.
 */
export type DialogPresets = keyof typeof presets;
