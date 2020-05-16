import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

/**
 * @description: Button组件测试案例
 * @author: Ghost
 */

describe("test Button compontent", () => {
  it("测试默认按钮", () => {
    const wrapper = render(<Button>Ghost</Button>);
    const element = wrapper.getByText("Ghost");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
  });
});
