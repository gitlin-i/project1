//100개의 랜덤 데이터를 생성

const getRandom = (min,max) => {
    const range = max - min + 1;
    return parseInt(Math.random() * range + min, 10);
}

const getRandomAddr = () => {
    const kor = ["서울", "경기","강원", "인천","충청","전라","경상","제주"]
    const ind = getRandom(0,kor.length-1)
    return kor[ind]
}
const getRandomTitle = () => {
    const title = ["집","아파트","빌라","숙소","멋진 숙소", "호텔"]
    const ind = getRandom(0,title.length-1)
    return title[ind]
}
const getRandomTag = () => {
    const tag = ["beach","arctic","privateRoom"]
    const ind = getRandom(0,tag.length-1)
    return tag[ind]
}


const dummy = (num) => {
    
    const digit = String(num).length
    const newId = '0'.repeat( 5 - digit) + String(num)
    return {
        id: newId,
        title : getRandomTitle(),
        price: getRandom(10000,100000),
        address: getRandomAddr(),
        SelectCategory: getRandomTag()
    }

}




module.exports = function() {
    return {
        rooms : Array(1024).fill('').map((_ ,index) => dummy(index)),
    }
}