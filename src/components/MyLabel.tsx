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

export const MyLabel = ( {
        label = 'No label',
        size = 'normal',
        color = 'normal',
        allCaps = false,
        fontColor,
        backgroundColor = 'transparent',
    }: MyProps) => {
    return (
        <span className={`label ${size} text-${color}`}  style={{ color:fontColor, backgroundColor }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
