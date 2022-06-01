import { Style } from "@mendix/pluggable-widgets-tools";
import { ViewStyle } from "react-native";

export interface WebViewStyle extends Style {
    container: ViewStyle;
}

export const defaultWebViewStyle: WebViewStyle = {
    container: {
        flex: 1,
        height: "100%",
        minHeight: 300
    },
    errorContainer: {},
    errorText: {
        color: "red",
        fontWeight: "bold"
    }
};
