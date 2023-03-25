/**
 * @jest-environment jsdom
 */
import { isChecked } from "../component/Category";


test("is Input Checked?",() => {
  let checkedInput = document.createElement("input");
  checkedInput.type="radio"
  checkedInput.checked=true;
  const val = isChecked(checkedInput )
  expect(val).toBe(true)
})