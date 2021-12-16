/**
 * @format
 */
import {fireEvent, render} from "@testing-library/react-native";
import "react-native";
import React from "react";
import Greeting from "../src/Greeting";

describe("greetingTest", () => {
  const onPressMock = jest.fn();
  // 내가 greeting 콤퍼넌트에 넘겨줄 값을 정한다.
  const giveProps = {
    // 타이틀
    title: "Hello!",
    // 넘겨줄 함수
    onPress: onPressMock,
  };
  test("버튼이 눌린다.", () => {
    const rendered = render(<Greeting {...giveProps} />);

    for (let i = 0; i < 5; i++) {
      // 여기서 getBy이란 엘리먼트를 가져온다는 의미이다
      // 즉 내가넘겨준 props.title의 값을 가지고있는 엘리먼트를 가져오고 그엘리먼트를 onPress하겠다는뜻
      // 그리고 onPress는 props.OnPress를 받았다
      fireEvent(rendered.getByText(giveProps.title), "onPress");
    }
    // 위에 for문대로 5번 눌림을 확인
    expect(onPressMock).toBeCalledTimes(5);
    // 내가 props으로 던진 값이 정확히 나오는지확인 1을주면 1이 나와야한다
    let {getByText} = rendered;
    expect(getByText(giveProps.title).props.children).toEqual(giveProps.title);
  });
});

/**
엘리먼트 펑션 정리
Variant
    getBy* : 조건에 일치하는 엘리먼트를 하나 선택한다. 없다면 테스트 실패로 처리한다.
    getAllBy* : 조건에 일치하는 엘리먼트를 여러개 선택한다. 없다면 테스트 실패로 처리한다.
    queryBy* : 조건에 일치하는 엘리먼트를 하나 선택한다. 존재하지 않아도 실패는 하지 않는다.
    queryAllBy* : 조건에 일치하는 엘리먼트를 여러개 선택한다. 존재하지 않아도 실패는 하지 않는다.
    findBy* : 조건에 일치하는 엘리먼트를 하나 선택한다. 단 Promise 객체를 리턴하며 조건에 만족하는 엘리먼트가 나타날 때 까지 기다리고 만약 4500ms 내에 발견되지 않으면 테스트는 실패한다.
    findAllBy* : 조건에 일치하는 엘리먼트를 여러개 선택한다. 단 Promise 객체를 리턴하며 조건에 만족하는 엘리먼트가 나타날 때 까지 기다리고 만약 4500ms 내에 발견되지 않으면 테스트는 실패한다.
Queries( 주로 사용하는 것만 다룸 )
    ByText : 엘리먼트가 가진 텍스트 값으로 선택
    ByAltText : 엘리먼트가 가진 alt 속성으로 선택
    ByTestId : 엘리먼트가 가진 TestId 속성으로 선택
 */
