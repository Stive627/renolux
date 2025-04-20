import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import useWriter from '@/hook/useWriter';

function ClientDevis({title}) {
    // const [content, setContent] = useState(title)
    // switch(title){
    //     case 'Placoplatre':
    //         setContent("2 pieces of Vices Placo at 8,000 FCFA each, totaling 16,000 FCFA|2 rolls of Bandes Armées at 8,000 FCFA each, totaling 16,000 FCFA|1 roll of Bandes à Joints at 8,000 FCFA, totaling 8,000 FCFA.|1 bucket of Enduit Colle at 19,000 FCFA, totaling 19,000 FCFA|15 units of Cornières de Bois at 2,000 FCFA each, totaling 30,000 FCFA|1 bucket of Enduit de Lissage at 3,000 FCFA, totaling 3,000 FCFA|23 sheets of Plaque de Placoplâtre at 12,500 FCFA each, totaling 287,500 FCFA|34 pieces of Montant at 3,500 FCFA each, totaling 119,000 FCFA.")
    //         break;
    //     case 'Peinture':
    //         setContent("18 pots d'enduit|7 pots de peinture d'impression|7 pots de peinture de finition|9 sacs de ciment,ainsi qu'1 rouleau de papier vert d'une valeur de 25 000 FCFA.")
    //         break
    //     default:
    //         setContent("Svp, veuillez contacter l'agence directement pour un devis plus detaillé")
    //         break
    // }
    const content = title === 'Placoplatre'?
    "2 pieces of Vices Placo at 8,000 FCFA each, totaling 16,000 FCFA|2 rolls of Bandes Armées at 8,000 FCFA each, totaling 16,000 FCFA|1 roll of Bandes à Joints at 8,000 FCFA, totaling 8,000 FCFA.|1 bucket of Enduit Colle at 19,000 FCFA, totaling 19,000 FCFA|15 units of Cornières de Bois at 2,000 FCFA each, totaling 30,000 FCFA|1 bucket of Enduit de Lissage at 3,000 FCFA, totaling 3,000 FCFA|23 sheets of Plaque de Placoplâtre at 12,500 FCFA each, totaling 287,500 FCFA|34 pieces of Montant at 3,500 FCFA each, totaling 119,000 FCFA."
    :(title === 'Peinture' ? "18 pots d'enduit|7 pots de peinture d'impression|7 pots de peinture de finition|9 sacs de ciment,ainsi qu'1 rouleau de papier vert d'une valeur de 25 000 FCFA.":"Svp, veuillez contacter l'agence directement pour un devis plus detaillé")
      const writer = useWriter(content)
      const writerArr = writer.split('|')
  return (
    <div className=' flex justify-center'>
        <div>
        <p className=' text-[18px] font-bold'>Devis - {title}</p>
      <p>Nous prévoyons l&#39;utilisation des matériaux suivants :</p>
      <div>
        {writerArr.map((elt, indx) => <div className=' flex flex-row gap-2  items-center' key={indx}><div><CheckIcon/></div><p>{elt}</p></div>)}
      </div>
        </div>
    </div>
  )
}

export default ClientDevis
