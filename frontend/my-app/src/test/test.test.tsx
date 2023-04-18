/**
 * @jest-environment jsdom
 */
import Category, { isChecked } from "../component/Category";
import { AllCategories, CategoryProps } from "../component/Categories";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faSnowflake, faUmbrellaBeach, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { createPageSetting } from "../func/func";
import { PageSetting } from "../type";
import { calcViewItem } from "../component/withCarousel";
import { baseURL, getRandomUrl } from "../aws/awsApi";
test("is Input Checked?",() => {
  let checkedInput = document.createElement("input");
  checkedInput.type="radio"
  checkedInput.checked=true;
  const val = isChecked(checkedInput )
  expect(val).toBe(true)
})


test('first checked element', () => {
  
  let firstCheck = false;
  

  const ConvertCategory = <T extends string>({icondef , presentText ,value} : CategoryProps<T>,checkindex:number) : React.ReactNode => {
    const isDefault = checkindex === 0;
    if(isDefault&& checkindex === 0){
      firstCheck = true;
    }
    if(checkindex!== 0 && isDefault){
      firstCheck = false;
    }
    if (value == null){
      return
    }
    else{
      return (
        <Category value={value} key={value} defaultchecked={isDefault}>
          <FontAwesomeIcon icon={icondef} />
          
        </Category>
      )
    }
    
  }
  
  const ConvertArrayCategory  = (Categories : Array<CategoryProps<any>>) :Array<React.ReactNode> => {
  
    return Categories.map(ConvertCategory);
  }
  const data = ConvertArrayCategory(AllCategories);

  expect(firstCheck).toBe(true);
})


test('createPageSetting', ()=>{

  const testing1 =createPageSetting(0,12,12,'beach')
  const test1:PageSetting = {
    requestCategory:'beach',
    requestSize:12,
    requestPageEnd:12,
    requestPageStart:0
  }
  expect(testing1).toStrictEqual(test1)



})
// test('viewItems',()=>{
//   const answer = calcViewItem(280,61.6,32)
//   expect(answer).toBe(3)
// })

test('testID', ()=> {
  const dummy = (num:number) => {
    
    const digit = String(num).length
    const string1 = '0'.repeat( 5 - digit) + String(num)

    return {
        id: string1,
    }
  }
  const a = dummy(1)
  const b = dummy(123)
  expect(a).toStrictEqual({id:'00001'})
  expect(b).toStrictEqual({id:'00123'})
})



test('getRandomUrl', ()=> {
  const randomUrl = getRandomUrl(1,3,baseURL,'jpg')

  const url = ["https://dev-my-app.s3.ap-northeast-2.amazonaws.com/ex/1.jpg",
  "https://dev-my-app.s3.ap-northeast-2.amazonaws.com/ex/2.jpg",
  "https://dev-my-app.s3.ap-northeast-2.amazonaws.com/ex/3.jpg"]

  console.log(randomUrl)
  expect(url).toContain(randomUrl);
  
})