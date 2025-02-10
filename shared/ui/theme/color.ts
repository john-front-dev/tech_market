export type Color =
  | "alabaster100"
  | "alabaster200"
  | "alabaster300"
  | "white"
  | "main"
  | "black"
  | "blue"
  | "secondary";

export const textColors: Partial<Record<Color, string>> = {
  alabaster100: "text-alabaster-100",
  alabaster200: "text-alabaster-200",
  alabaster300: "text-alabaster-300",
  white: "text-white",
  main: "text-main",
  black: "text-black",
  blue: "text-blue",
};

export const bgColors: Partial<Record<Color, string>> = {
  alabaster100: "bg-alabaster-100",
  alabaster200: "bg-alabaster-200",
  secondary: "bg-secondary",
  main: "bg-main",
};
