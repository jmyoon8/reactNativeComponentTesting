import {fireEvent, render} from "@testing-library/react-native";
import React from "react";
import Profile from "../src/Profile";

describe("ProfileComponent recived Props well?", () => {
  const willGiveProps = {
    userName: "jammie",
    name: "윤재진",
  };
  test("is print UserName and name of props?", () => {
    const rendered = render(<Profile {...willGiveProps} />);
    let userNameHasElement = rendered.getByText(
      `${willGiveProps.userName}(${willGiveProps.name})`,
    );
    // 어떤값이 있는지 확인
    console.log(userNameHasElement.props.children);
    // [ 'jammie', '(', '윤재진', ')' ]

    expect(userNameHasElement.props.children).toContain(willGiveProps.name);
    expect(userNameHasElement.props.children).toContain(willGiveProps.userName);
  });
  test("is onPress Button changed message?", () => {
    const rendered = render(<Profile {...willGiveProps} />);
    const byeButton = rendered.getByText("Bye!");
    const helloButton = rendered.getByText("Hello!");
    fireEvent(byeButton, "onPress");
    rendered.getByText("Seeya!");
    fireEvent(helloButton, "onPress");
    rendered.getByText("Welcome!");
  });
});
