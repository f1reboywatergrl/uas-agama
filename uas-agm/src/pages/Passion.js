import React, {useContext} from "react"
import {Card, Fade} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
const Passion = ()=>{

  return(
    <div className="w3-animate-bottom" style={{width:"65%",margin:"2% auto 3%",paddingBottom:"1%"}}>
    <div>
        <h1>Pemilihan Jurusan</h1>
            <Card style={{width:"85%", margin:"1% auto", lineHeight:1.5}}>
            <ProgressBar variant="success" now={20} />
                <Card.Body style={{background:"#243140"}}>                        
                    <Card.Subtitle>
                        <p style={{padding:"0.5%",textAlign:"justify", fontSize:"1.15em", lineHeight:1.5}}>
                            Saya ingin memulai refleksi saya dengan bercerita mengenai pemilihan jurusan saya.
                            Saya pertama-tama memasuki Sekolah Teknik Elektro dan Informatika karena saya memang ingin masuk ITB, tapi tidak tahu ingin masuk fakultas mana.
                            Awalnya, saya ingin memilih program studi Teknik Informatika atau Sistem dan Teknologi Informasi. Akan tetapi,
                            setelah lulus tahun pertama ITB, saya berencana memilih program studi Teknik Elektro atau Teknik Biomedis, karena saya menyadari bahwa pemrograman
                            itu sulit, meskipun teman-teman dan keluarga saya mengatakan bahwa saya memiliki talenta di bidang tersebut. Pada waktu itu, saya berusaha melarikan diri
                            dari hal yang sulit, bukan menyelesaikannya secara perlahan namun pasti.
                        </p>                             
                    </Card.Subtitle>
                    <Card.Text style={{fontSize:"1.1em"}}>
                        <p style={{textAlign:"justify"}}>
                            Saya kemudian teringat akan sabda Yesus dalam injil Matius 25:14-30, mengenai perumpamaan tentang Talenta: <br/>
                        </p>
                        <p style={{textAlign:"center"}}><i>"Baik sekali perbuatanmu itu, hai hambaku yang baik dan setia; engkau telah setia dalam perkara kecil, 
                                aku akan memberikan kepadamu tanggung jawab dalam perkara yang besar."<br/>
                                "Karena setiap orang yang mempunyai , kepadanya akan diberi, sehingga ia berkelimpahan. 
                                Tetapi siapa yang tidak mempunyai, apapun juga yang ada padanya akan diambil dari padanya."</i><br/> 
                        </p>
                        <img src="https://1.bp.blogspot.com/_mZ-Be57zY1I/SvcczXlWlZI/AAAAAAAAADQ/ci0vEOx4go0/s320/Talenta.jpg" style={{width:"40%",height:"40%"}}></img><br/><br/>
                        <p style={{textAlign:"justify"}}>
                            Tuan dalam perumpamaan ini memuji sikap hambanya yang menerima 5 talenta dan 2 talenta, karena mereka pergi mengembangkan talenta-talenta tersebut.
                            Akan tetapi, ia merasa kesal pada hamba yang menerima 1 talenta, karena hamba tersebut tidak menanamkannya untuk mengembalikan laba,
                            tetapi memendamnya. Injil ini sangat berpengaruh bagi saya, karena menyadarkan saya bahwa saya tidak boleh menyia-nyiakan talenta saya
                            yang sudah dianugerahi oleh Tuhan, dan harus menanamkannya supaya saya bisa menuai hasilnya kelak nanti.
                        </p>
                        <p style={{textAlign:"justify"}}>
                            Akhirnya, setelah benar-benar merefleksikannya dan memikirkan tentang kemampuan saya selama liburan kenaikan tingkat,
                            saya memutuskan untuk benar-benar mendalami ilmu keinformatikaan ini. Ternyata, setelah saya benar-benar menyerapkan diri
                            saya ke dalam bidang keilmuan ini, saya baru menemukan passion baru saya. Dan pada akhirnya, saya memutuskan untuk tidak takut
                            dengan dunia pemrograman, dan memilih jurusan memang saya ingini, yaitu Sistem dan Teknologi Informasi. Dengan kata
                            lain, saya memutuskan untuk <i>menanam talenta saya</i>. Dari titik ini, saya 
                            mulai merefleksikan pilihan-pilihan hidup saya dan hal-hal yang saya pelajari dengan dasar agama Katolik, untuk
                            membantu saya mengambil keputusan dan informasi yang tepat bagi saya, yang sejalan dengan ajaran Tuhan Yesus.
                        </p> 
                                                
                    </Card.Text>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <a href="/"><button class="btn btn-outline-warning">Back</button></a>
                        <a href="/jurusan"><button class="btn btn-outline-warning">Next</button></a>
                    </div>
                    
                </Card.Body>
            </Card>
    </div>

</div>     

  )
}


export default Passion;
