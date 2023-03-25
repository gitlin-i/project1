export interface Room {
    id:number;
    title:string;
    address: string;
    price:number;
    SelectCategory:string;

}

export interface Rooms{
    rooms :Room[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | undefined;
}

