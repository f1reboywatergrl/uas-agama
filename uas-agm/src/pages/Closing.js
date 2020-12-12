import React, {useContext} from "react"
import {Card, Fade} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Penutup = ()=>{

  return(
    <div className="w3-animate-bottom" style={{width:"65%",margin:"2% auto 3%",paddingBottom:"1%"}}>
    <div>
        <h1>Penutup dan Kesimpulan</h1>
            <Card style={{width:"100%", margin:"1% auto"}}>
            <ProgressBar variant="success" now={100} />
                <Card.Body style={{background:"#243140", lineHeight:1.5}}>                        
                    <Card.Subtitle>
                        <p style={{padding:"0.5%",textAlign:"justify", fontSize:"1.05em", lineHeight:1.5}}>
                            Akhir kata, saya sangat bersyukur telah diberikan kesempatan oleh Tuhan untuk gagal dan belajar dari kesalahan saya.
                            Dari pemilihan jurusan yang telah didukung oleh ajaran-Nya mengenai talenta yang harus digunakan dan tidak dipendam,
                            serta ajaran-Nya mengenai menebar benih di banyak tempat dan tidak membatasi diri hanya pada satu "ladang", ajaran-Nya
                            mengenai manusia yang secitra dengan-Nya dan kita sebagai manusia harus mengenal diri kita sendiri dan memastikan bahwa
                            Tuhan ada dalam diri kita, sampai ajaran-Nya mengenai memperlakukan orang lain sama seperti kita memperlakukan diri sendiri.<br/><br/>
                            Kesempatan ini tidak saya sia-siakan, dan saya akan terus berefleksi dan memikirkan konsekuensi pilihan-pilihan hidup saya secara 
                            religius setiap kali saya dihadang dengan sebuah pilihan yang sulit. Saya juga berterima kasih kepada Romo-romo yang telah
                            memberikan saya kesempatan untuk merefleksikan perjalanan saya secara menyeluruh, dan atas pelajaran-pelajaran yang telah diberikan
                            di kelas. Terima kasih juga kepada para pembaca yang telah membaca sampai akhir. Semoga Tuhan selalu memberkati kita semua
                            dalam kehidupan kita, dan terus berada pada diri kita masing-masing. Salam sejahtera, dan tetap semangat.
                        </p>     
                                                
                    </Card.Subtitle>
                    <Card.Text style={{fontSize:"1em"}}>
                        <img src="https://www.amyrogers.com/wp-content/uploads/2020/03/st-ignatius.jpg" style={{width:"40%",height:"40%"}}></img>
                        <p style={{textAlign:"center",fontSize:"0.85em"}}>
                            <i>Pergilah, dan Kobarkanlah Dunia. - St. Ignatius Loyola</i>
                        </p>
                                                
                    </Card.Text>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <a href="/ompi"><button class="btn btn-outline-warning">Back</button></a>
                        <a href="/"><button class="btn btn-outline-warning">Return to Home</button></a>
                    </div>
                    
                </Card.Body>
            </Card>
    </div>

</div>     

  )
}


export default Penutup;
