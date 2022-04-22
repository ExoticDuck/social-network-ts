import ProfileReducer, { addPostAC, deletePostAC } from "./ProfileReducer"

let startState = {
    postData: [
        { id: 1, message: "hi, how are you?", likesCount: 12 },
        { id: 2, message: "it is my firt post", likesCount: 15 },
        { id: 3, message: "aaaaaa", likesCount: 1 }
    ],
    profile: null,
    status: ""
}

test("New post should be added", () => {
    let action =  addPostAC("blabla")
    
    let newState = ProfileReducer(startState, action);

    expect(newState.postData[3].message).toBe("blabla");
    expect(newState.postData.length).toBe(4);
});

test("Post should be deleted", () => {
    let action = deletePostAC(3);

    let newState = ProfileReducer(startState, action);

    expect(newState.postData.length).toBe(2);
    expect(newState.postData[1].message).toBe("it is my firt post");
})