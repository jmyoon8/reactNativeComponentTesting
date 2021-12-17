/**
 * @format
 */

import "react-native";
import React from "react";
// Note: test renderer must be required after react-native.
// https://callstack.github.io/react-native-testing-library/ 여기서 콤포넌트 렌더러확인해보자
import App from "../App";
import {render} from "@testing-library/react-native";

function getTempComponent(props: any) {
  return <App {...props} />;
}
describe("renders correctly", () => {
  let props = {};
  let component = getTempComponent(props);

  test("app renderTest", () => {
    const renderd = render(component);
    // 스냅샷 : 해당 콤포넌트의 상태를 백업해놓는다(상태를 임시적으로 저장함)
    // 스냅샷을 찍게되면 테스파일 같은 레벨에 __snapshots__폴더안에 스냅샷 파일을 생성한다.
    // inline스냅샷 : 해당컴포넌트의 상태를 string화시켜서 자동으로 생성해준다(개꿀!)
    // npm run test -u 으로 스탭샷을 다시찍을수있다.(초기화였던가.,.?)
    expect(renderd).toMatchSnapshot();

    // 일단 app.tsx컴포넌트에 대한 스냅샷을 찍어둔다.
    expect(renderd).toBeTruthy();
  });
  // renderer.create(<App />);
});
