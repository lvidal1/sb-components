import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select', options: ['normal', 'h1', 'h2', 'h3'] },
        color: { control: 'select' },
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    color: 'primary'
};

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
};

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary' // 'primary' | 'secondary' | 'tertiary' 
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};

export const CustomFont = Template.bind({});
CustomFont.args = {
    fontColor: '#222',
    size: 'h1',
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    fontColor: '#fff',
    backgroundColor: '#222',
    size: 'h1',
};