export default function getAvatarBgColor(indx){
    const obj = indx%3
    switch(obj){
        case 0:
            return 'rgba(38, 103, 255, 1)'
        case 1:
            return 'rgba(125, 37, 193, 1)'
        case 2:
            return 'rgba(255, 189, 0, 1)'
        default:
            return 'rgba(217, 217, 217, 0.76)'
    }
}