import { AllCategoriesValue } from "../component/Categories";


export interface Room {
    id:number;
    title:string;
    address: string;
    price:number;
    SelectCategory:string;

}
export function isRoom (content: Room | unknown) : content is Room {
    return ((content as Room).id !== undefined && (content as Room).title !== undefined && (content as Room).address !== undefined ); 
}
export interface Rooms{
    rooms :Room[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface PageSetting {

    requestSize: number;
    requestCategory:AllCategoriesValue;
    requestPageStart:number;
    requestPageEnd:number;
    
}