import { Dimensions } from "react-native";
import * as Colors from "./colors";
import * as Typography from "./typography";
import * as Spacing from "./spacing";
import * as Position from "./position";

const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

export {
  Colors, Typography, Spacing, Position, dimensions
};
export const model = {
  Title: {
    fontSize: Typography.size.lg,
    fontColor: "#000",
    fontFamily: Typography.fonts.primary
  }
};
