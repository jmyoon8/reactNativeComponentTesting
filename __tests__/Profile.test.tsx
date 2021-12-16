import {render} from "@testing-library/react-native";
import React from "react";
import Profile from "../src/Profile";

describe("ProfileComponent recived Props well?", () => {
  test("is print UserName of props?", () => {
    const willGiveProps = {
      userName: "jammie",
      name: "윤재진",
    };
    const rendered = render(<Profile {...willGiveProps} />);
    let userNameHasElement = rendered.getByText(
      `${willGiveProps.userName}(${willGiveProps.name})`,
    );
    // 어떤값이 있는지 확인
    console.log(userNameHasElement.props.children);
    //  [ 'jammie', '(', '윤재진', ')' ]
    expect(userNameHasElement.props.children[0]).toEqual(
      willGiveProps.userName,
    );
    expect(userNameHasElement.props.children[2]).toEqual(willGiveProps.name);
  });
});
