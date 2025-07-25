import type { Meta, StoryObj } from "@storybook/react";
import { List, ListIcon, ListItem } from ".";
import { User_Outline } from "../icons/Users/User";

const meta = {
  subcomponents: { List, ListItem, ListIcon },
} satisfies Meta;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Default = {
  render() {
    return (
      <List>
        <ListItem>آیتم اول</ListItem>
        <ListItem>آیتم دوم</ListItem>
        <ListItem>آیتم سوم</ListItem>
      </List>
    );
  },
} satisfies Story;

export const WithIcon = {
  render() {
    return (
      <List>
        <ListItem>
          <ListIcon>
            <User_Outline />
          </ListIcon>
          <span>آیتم اول</span>
        </ListItem>
        <ListItem>
          <ListIcon>
            <User_Outline />
          </ListIcon>
          <span>آیتم دوم</span>
        </ListItem>
        <ListItem>
          <ListIcon>
            <User_Outline />
          </ListIcon>
          <span>آیتم سوم</span>
        </ListItem>
      </List>
    );
  },
} satisfies Story;
