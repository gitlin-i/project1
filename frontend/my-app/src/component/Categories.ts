import { faBed, faSnowflake, faUmbrellaBeach, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CategoryProps{
    icondef: IconDefinition;
    presentText: string;
    value: string;
    
}


const beach : CategoryProps = {
    icondef : faUmbrellaBeach,
    presentText: "해변",
    value: "beach",
}

const arctic : CategoryProps = {
    icondef : faSnowflake,
    presentText: "북극",
    value: "arctic",
}

const privateRoom : CategoryProps = {
    icondef : faBed,
    presentText: "개인실",
    value: "privateRoom",
}

export const AllCategories :Array<CategoryProps> = [beach,arctic,privateRoom]
export {beach, arctic,privateRoom}