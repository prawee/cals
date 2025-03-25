import { expect, test } from "vitest";
import { hello, add } from "./index";

test("hello function", () => {   
    expect(hello("Pod")).toBe("hello Pod");
});

test("test add func with 1+2 = 3", () => {
    expect(add(1, 2)).toBe(3);
});