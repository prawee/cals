import { expect, test } from "vitest";
import { hello } from "./index";

test("hello function", () => {   
    expect(hello("Pod")).toBe("hello Pod");
});