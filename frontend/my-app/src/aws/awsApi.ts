

export const baseURL = "https://dev-my-app.s3.ap-northeast-2.amazonaws.com/ex"

const getRandom = (min:number,max:number) => {
    const range = max - min + 1;
    const num = Math.random() * range + min;
    return Math.floor(num)
}

export const getRandomUrl = (min:number, max:number, baseURL:string, fileNameExtension: string) :string => {

    return baseURL +'/'+ getRandom(min,max).toString() + '.' + fileNameExtension
}