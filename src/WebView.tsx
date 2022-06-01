import { ReactElement, createElement } from "react";
import { View } from "react-native";
import { WebView as RNWebView } from "react-native-webview";

import { WebViewProps } from "../typings/WebViewProps";
import { defaultWebViewStyle, WebViewStyle } from "./ui/Styles";
import { flattenStyles } from "./piw-native-utils-internal";

const images = {
    cat: require("./ui/image.webp")
};

const webViewStyle = {
    width: "100%",
    height: "100%"
};

export function WebView({ style, imageKey }: WebViewProps<WebViewStyle>): ReactElement {
    const styles = flattenStyles(defaultWebViewStyle, style);
    const imageSrc = images[imageKey];
    const html = `<html><body style="margin: 0"><img src="${imageSrc}" style="width: 100%; height: 100%; object-fit: contain"/></body></html>`;

    return (
        <View style={styles.container}>
            <RNWebView style={webViewStyle} source={{ html }} />
        </View>
    );
}
