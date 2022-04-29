import React from "react";
import { create, ReactTestInstance } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Status component", () => {
    test("Status from props should be in state", () => {
        const component = create(<ProfileStatus status="AAAA" updateUserStatus={() => {}}/>);
        let instance:any = component.getInstance();
        expect(instance.state).toBe("AAAA")
    })
    test("d", () => {
        const component = create(<ProfileStatus status="AAAA" updateUserStatus={() => {}}/>);
        const instance:any = component.getInstance();
        let span = instance.findByType("span");
        expect(span.length).toBe("AAAA")
    })
})