/**
 * This file was generated from WebView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";

export type ImageKeyEnum = "cat";

export interface WebViewProps<Style> {
    name: string;
    style: Style[];
    imageKey: ImageKeyEnum;
}

export interface WebViewPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    imageKey: ImageKeyEnum;
}
