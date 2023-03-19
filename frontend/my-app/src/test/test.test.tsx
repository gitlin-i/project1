import {data,getArrayData,CardComponet} from "../page/MainPage"
import Api from "../Api"


const testCase1 = [{
    "id": 0,
    "title": "멋진 숙소",
    "price": 83288,
    "addres": "경기"
  }]

test("ffff",async () => {
    const da = (await Api("/rooms?_limit=1")).data;
    expect(da).toEqual(testCase1)
})