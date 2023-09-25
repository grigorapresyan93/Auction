import * as yup from "yup";
import { MESSAGE_REQUIRED } from "./constants/schema.constants";

export const signInSchema = yup.object().shape({
  password: yup.string().required(MESSAGE_REQUIRED.password),
  full_name: yup.string().required(MESSAGE_REQUIRED.full_name)
});
