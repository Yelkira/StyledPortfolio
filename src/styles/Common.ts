import {theme} from "./Theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    fMax?: number
    fMin?: number
}
export const font = ({
                         family = 'Poppins',
                         weight = 400,
                         lineHeight = 1.2,
                         color,
                         fMax = 50,
                         fMin = 36
                     }: FontPropsType) => `
 font-family: ${family};
 font-weight: ${weight};
 color: ${color || theme.colors.font};
 line-height: ${lineHeight};
 font-size: calc((100vw - 360px) / (1440 - 360) * (${fMax} - ${fMin}) + ${fMin}px);
`;
//calc((100vw - 360px) / (1440 - 360) * (${fMax} - ${fMin}) + ${fMin}px);