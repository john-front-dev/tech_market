import React, { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import { Color, FontSize, fontSizes, FontWeight, fontWeights, textColors } from "@/shared";

type Props = PropsWithChildren<{
  className?: string;
  color?: Color;
  isCenter?: boolean;
  size?: FontSize;
  showTitle?: boolean;
  tagName?: string;
  weight?: FontWeight;
}>;

export const Typography: FC<Props> = ({
  children,
  className,
  color = "black",
  isCenter,
  showTitle,
  size = "text-m",
  tagName = "p",
  weight = "regular",
}) => {
  const fontSize = fontSizes[size];
  const fontWeight = fontWeights[weight];
  const textColor = textColors[color];

  const typographyClasses = classNames(
    textColor,
    className,
    fontSize,
    fontWeight,
    isCenter ? "text-center" : "",
  );

  return React.createElement(
    tagName,
    {
      className: typographyClasses,
      title: showTitle ? String(children) : undefined,
    },
    children,
  );
};
