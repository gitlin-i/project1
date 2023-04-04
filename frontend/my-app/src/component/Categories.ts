import { faBed, faFireFlameCurved, faFireFlameSimple, faGolfBallTee, faHouse, faMountain, faPalette, faRocket, faSkiing, faSnowflake, faSwimmingPool, faTents, faUmbrellaBeach, IconDefinition } from "@fortawesome/free-solid-svg-icons";


export interface CategoryProps<T extends string>{
    icondef: IconDefinition;
    presentText: string;
    value: T | null;
};


const beach : CategoryProps<"beach"> = {
    icondef : faUmbrellaBeach,
    presentText: "해변",
    value: "beach"
} 

const arctic : CategoryProps<"arctic"> = {
    icondef : faSnowflake,
    presentText: "북극",
    value: "arctic"
}

const swim : CategoryProps<"swim"> = {
    icondef : faSwimmingPool,
    presentText: "수영장",
    value: "swim"

}
const privateRoom : CategoryProps<"privateRoom"> = {
    icondef : faBed,
    presentText: "개인실",
    value: "privateRoom"
}
const ski : CategoryProps<"ski"> = {
    icondef : faSkiing,
    presentText: "스키장",
    value: "ski"
}
const golf : CategoryProps<"golf"> = {
    icondef : faGolfBallTee,
    presentText: "골프장",
    value: "golf"
}
const camp : CategoryProps<"camp"> = {
    icondef : faTents,
    presentText: "캠핑장",
    value: "camp"
}

const creativeSpace : CategoryProps<"creativeSpace"> = {
    icondef : faPalette,
    presentText: "창작공간",
    value: "creativeSpace"
}
const mountain : CategoryProps<"mountain"> = {
    icondef : faMountain,
    presentText: "산악",
    value: "mountain"
}
const space : CategoryProps<"space"> = {
    icondef : faRocket,
    presentText: "우주여행",
    value: "space"
}
const hotPalce : CategoryProps<"hotPlace"> = {
    icondef : faFireFlameCurved,
    presentText: "인기 급상승",
    value: "hotPlace"
}

const somePlace1 : CategoryProps<"somePlace1"> = {
    icondef : faHouse,
    presentText: "어떤주제1",
    value: "somePlace1"
}
const somePlace2 : CategoryProps<"somePlace2"> = {
    icondef : faHouse,
    presentText: "어떤주제2",
    value: "somePlace2"
}
const somePlace3 : CategoryProps<"somePlace3"> = {
    icondef : faHouse,
    presentText: "어떤주제3",
    value: "somePlace3"
}

const somePlace4 : CategoryProps<"somePlace4"> = {
    icondef : faHouse,
    presentText: "어떤주제4",
    value: "somePlace4"
}
export const AllCategories = [beach, arctic, privateRoom, swim,camp,ski,golf,creativeSpace,mountain,space,hotPalce,
    somePlace1,somePlace2,somePlace3,somePlace4];
export type AllCategoriesValue = typeof AllCategories[number]['value'] 
export {beach, arctic,privateRoom}