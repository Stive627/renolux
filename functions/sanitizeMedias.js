function sanitizeUrl(url){
    return url.replaceAll('\\', '/')
}
export default function sanitizeMedias(medias){
    const sanitizedData =  medias.map((elt, indx) =>({...elt, url:sanitizeUrl(elt.url)}))
    const placoplatre = sanitizedData.filter(elt => elt.category === 'Placoplâtre')
    const decoration = sanitizedData.filter(elt => elt.category === 'Decoration')
    const peinture = sanitizedData.filter(elt => elt.category === 'Peinture')
    return [...placoplatre, ...decoration, ...peinture]
}