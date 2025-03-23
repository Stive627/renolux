import React from 'react'
import FilesUI from './FilesUI';

function MediaContent({active, content, handleManage}) {

    switch(active){
        case 1:
            return <FilesUI handleManage={handleManage} content={content?.Decoration}/>
        case 2:
            return <FilesUI handleManage={handleManage} content={content?.Peinture}/>
        default:
            return <FilesUI handleManage={handleManage} content={content?.Placoplatre}/>
    }
}

export default MediaContent