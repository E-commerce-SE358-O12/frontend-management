"use client";

import { ReactNodeChildren } from "@/types/ReactNodeChildren";
import {
    ButtonSizes,
    CustomFlowbiteTheme,
    Button as _Button,
    Spinner,
} from "flowbite-react";

import React from "react";

export default function Button({
    fill = true,
    size = "md",
    btnType = "primary",
    children = "Untitle",
    className,
    ref,
    isLoading = false,
    ...props
}) {
    return (
        <_Button
            theme={getTheme(fill)}
            color={btnType}
            className={`${className} transition-all duration-300`}
            size={size}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? <Spinner size={size} /> : children}
        </_Button>
    );
}

const getTheme = (isFill) => {
    if (isFill)
        return {
            color: {
                primary:
                    "bg-primary-300 hover:bg-primary-400 focus:ring-primary-100 text-white",
                secondary:
                    "bg-white hover:bg-secondary-50 focus:ring-secondary-100 text-secondary-900",
                error: "bg-color-error hover:bg-red-600 focus:ring-red-100 text-white",
            },
        };
    return {
        color: {
            primary:
                "bg-transparent hover:bg-primary-50 focus:ring-primary-100 text-primary-600",
            secondary:
                "bg-transparent hover:bg-secondary-50 focus:ring-secondary-100 text-secondary-900",
            error: "bg-transparent hover:bg-red-50 focus:ring-error-100 text-color-error",
        },
    };
};