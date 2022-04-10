import { AddPostDataType } from "../../Components/Profile/MyPosts/MyPosts";

export {}
type GeneralValuesType = AddPostDataType;


export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if(value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    }
    return undefined;
}

export const requiredField = (value: string) => {
    if(value) {
        return undefined;
    }
        return "Field is required";
}

