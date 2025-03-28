function sanitizeUrl(url){
    return url.replaceAll('\\', '/')
}
export default function sanitizeMedias(medias){
    return medias.map((elt, indx) =>({...elt, url:sanitizeUrl(elt.url)}))
}