import React from "react";

import bodo_1 from "../../assets/bodo/serja-bodo.jpg"
import tiwa_1 from "../../assets/tiwa/tongtorong-tiwa.jpg"
import sonowal_kachari_1 from "../../assets/sonowal kachari/sonowal-kachari-kartal.jpg"
import sonowal_kachari_2 from "../../assets/sonowal kachari/flute-sonowal-kachari.webp"
import rabha_1 from "../../assets/rabha/badunduppa.webp"

import karbi_1 from "../../assets/karbi/Baghdhenu-karbi.jpeg" 
import karbi_2 from "../../assets/karbi/Cheng-karbi.png"
import karbi_3 from "../../assets/karbi/jurtang -karbi.jpg"
import karbi_4 from "../../assets/karbi/Kichokbenu-karbi.jpeg" 
import karbi_5 from "../../assets/karbi/mori tongpo + mori jangkek - karbi.jpg"

import "../../Css/Docs.css"
import EachItem from "./EachItem";


function DocsHeading(props){
    return (
        <div >
            <h1 className="text-center text-decoration-underline m-1 p-2">{props.name}</h1>
        </div>
    );
}

 

function Docs(){
    return (
        <>
            <div>
                <DocsHeading name="Docs"/>
                {/* <DocsHeading name="Bodo"/> */}
                <EachItem name="Serja" para1={`“Serja”: It is a harp like instrument having three strings
                    made of Alstonia scholaris and Artocarpus heterophyllus wood. The lower part of the body is hollow and a part of it is covered
                    with the skin of goat or Maphou (Iguana) skin.` }
                    
                    para2= {`It has four strings made of muga silk or barks of Sterculia vilosa. Its accessories
                    consist of four puthis or tuning knobs, one ghora or bridge, one
                    bow made of bamboo with its string made of horse tail hair or
                    Odal (Sterculia villosa) bark or fibres obtained from Sansevieria
                    roxburghiana leaves. This instrument is used in marriage
                    ceremony, Boisagu and Domashi festivals.`}                    
                    
                    img={bodo_1} 
                />


                <EachItem name="Tongtorong" 
                    para1={`The Tongtorong is a traditional musical instrument of the Tiwa tribe  of Assam. It is a type of percussion instrument made from bamboo and is played during festivals and cultural ceremonies.`} 
                    
                    para2={`The Tiwa community, residing in Assam and Meghalaya, uses the Tongtorong primarily in their traditional dances and celebrations like Jonbeel Mela and Wanshuwa Festival. This instrument is known for its rhythmic beats, which accompany folk music and storytelling performances.`} 
                
                    img={tiwa_1}
                />

                <EachItem name="Kartal" 
                    para1={`The Kartal is a traditional percussion instrument used by the Bodo tribe of Assam. It consists of a pair of wooden clappers or small metallic cymbals, played by striking them together to create rhythmic beats.`} 
                    
                    para2={`The instrument is commonly used in Bodo folk music, especially during festivals like Bwisagu and other cultural ceremonies. Kartal is an essential part of Bagurumba, the traditional Bodo dance, and is also used in religious and devotional music. Its sharp, rhythmic sound enhances the energy of performances, making it a vital part of Assam's rich tribal musical heritage.`} 
                
                    img={sonowal_kachari_1}
                />

                <EachItem name="Banhi" 
                    para1={`The Banhí is a traditional flute played by the Sonowal Kachari tribe of Assam. Made from bamboo, it has six or more finger holes and produces a melodious, soothing sound. The Banhí is used in folk music, rituals, and festivals, particularly during Kati Bihu and Magh Bihu celebrations. `}
                
                    para2={` It plays a significant role in tribal storytelling, dance, and spiritual ceremonies. The instrument is handcrafted by local artisans, ensuring its authenticity and cultural preservation. The Sonowal Kacharis believe the Banhí connects them with nature and their ancestors, making it an integral part of their musical and spiritual traditions.`}

                    img={sonowal_kachari_2}
                />

                <EachItem name="badunduppa" 
                    para1={`The Badungduppa is a traditional musical instrument of the Rabha community of Assam. Played with hands or sticks, it produces deep, rhythmic beats that accompany folk songs, dances, and rituals of the Rabha tribe`} 

                    para2={`The Badungduppa holds cultural significance, often used in festivals, ceremonies, and storytelling performances. Its beats create an energetic atmosphere, reflecting the tribal heritage and traditions of the Rabha people. This instrument plays a vital role in preserving their rich musical legacy.`} 

                    img={rabha_1}
                />
            </div>

           <div> 
                {/* <DocsHeading name="Karbi"/> */}
                {/* <EachItem name="Baghdhenu" img={karbi_1}/>  */}
                <EachItem name="Cheng" 
                    para1={`A large drum made from a type of wood called Phang, and the main instrument of the Karbis.It is usually played by a master drummer called Duihudi.`}

                    para2={` It is an essential part of Karbi cultural celebrations, used to maintain the rhythm in traditional songs and performances. The drum's beats symbolize unity and energy, making it a significant instrument in preserving Karbi heritage and identity through their rich musical traditions.`}

                    img={karbi_2}
                /> 

                {/* <EachItem name="jurtang" img={karbi_3}/>  */}
                {/* <EachItem name="Kichokbenu" img={karbi_4}/>  */}

                <EachItem name="mori tongpo and mori jangkek"
                    para1={`Mori Tongpo: It is a percussion instrument made from hollowed-out wood or bamboo. Played with hands or sticks, it produces rhythmic beats and is used in folk dances, festivals, and rituals.`}

                    para2={`Mori Jangkek: It is a wind instrument, similar to a flute, made from bamboo. It produces a soft, melodious tune and is played during cultural events, storytelling, and spiritual ceremonies.`}

                    img={karbi_5}
                /> 
             </div>
             <p style={{color:'gray'}} className="text-center" id="custom-para">The data here present may be not exactly correct,it is a protoype only</p>
            
        </>
    );
}

export default Docs;