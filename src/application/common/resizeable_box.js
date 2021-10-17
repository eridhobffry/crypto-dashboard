import React from "react";
import { ResizableBox as ReactResizableBox } from "react-resizable";

import "react-resizable/css/styles.css";
import { useMediaQuery } from "react-responsive";
import { withTheme } from "styled-components";

const ResizableBox = ({
    children,
    width = 1000,
    height = 500,
    resizable = true,
    style = {},
    className = "",
    theme,
}) => {
    const useMobile = useMediaQuery({ maxWidth: 767 })
    const adaptedWidth = useMobile ? Math.round(width / 2.8) : width;
    const adaptedHeight = useMobile ? Math.round(height - 20) : height;
    return (
        <div style={{ margin: `0 auto` }}>
            {resizable ? (
                <ReactResizableBox width={adaptedWidth} height={adaptedHeight}>
                    <div
                        style={{
                            boxShadow: "0 20px 40px rgba(0,0,0,.1)",
                            ...style,
                            width: "100%",
                            height: "100%",
                            borderRadius: '10px',
                            background: theme.color.text10,
                            color: theme.color.white,
                        }}
                        className={className}
                    >
                        {children}
                    </div>
                </ReactResizableBox>
            ) : (
                <div
                    style={{
                        width: `${width}px`,
                            height: `${height}px`,
                            borderRadius: '10px',
                            boxShadow: "0 20px 40px rgba(0,0,0,.1)",
                            background: theme.color.text10,
                            color: theme.color.white,
                        ...style,
                    }}
                    className={className}
                >
                    {children}
                </div>
            )}
        </div>
    );
}


export default withTheme(ResizableBox)