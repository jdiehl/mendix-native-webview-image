import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { WebView as RNWebView } from "react-native-webview";

import { Style } from "@mendix/pluggable-widgets-tools";

import { WebViewProps } from "../typings/WebViewProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function WebView({ uri, body }: WebViewProps<CustomStyle>): ReactElement {
    return <RNWebView source={{ uri, body }} />;
}
