/**
 * This file was generated from WebView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";

export interface WebViewProps<Style> {
    name: string;
    style: Style[];
    uri: string;
    body: string;
}

export interface WebViewPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    uri: string;
    body: string;
}
