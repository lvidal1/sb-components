/// <reference types="react" />
import './mylabel.css';
export interface MyProps {
    /**
     * The text to display in the label.
     */
    label: string;
    /**
     * The size of the label.
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * The size of the label.
    */
    allCaps: boolean;
    /**
     * The color of the label.
     */
    color: 'normal' | 'primary' | 'secondary' | 'tertiary';
    /**
     * The custom color of the label.
     */
    fontColor?: string;
    /**
     * The custom background color of the label.
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, }: MyProps) => JSX.Element;
