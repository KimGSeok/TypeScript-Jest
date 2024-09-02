import Chapter01Screen from "./Chapter01Screen";
import { render } from "@testing-library/react";

test("초기값 0 인지 확인", () => {
  const { getByTestId } = render(<Chapter01Screen />);
  const counter = getByTestId("counter");

  expect(counter.textContent).toBe("0");
})