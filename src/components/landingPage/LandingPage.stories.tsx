import React from "react";
import LandingPage from "./LandingPage";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Common/page/LandingPage",
  component: LandingPage,
  argTypes: {},
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = (args) => <LandingPage {...args} />;

export const basic = Template.bind({});
basic.args = {};

export const wavyOn = Template.bind({});
wavyOn.args = {
  wavtText: true,
  landingTitle: "이 랜딩 페이지는 wavy 중",
};
