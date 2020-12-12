import React, {useContext} from "react"
import {Card, Fade} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
const Arsikom = ()=>{

  return(
    <div className="w3-animate-bottom" style={{width:"65%",margin:"2% auto 3%",paddingBottom:"1%"}}>
    <div>
        <h1>Mata Kuliah Sistem dan Arsitektur Komputer</h1>
            <Card style={{width:"100%", margin:"1% auto", lineHeight:1.5}}>
            <ProgressBar variant="success" now={60} />
                <Card.Body style={{background:"#243140"}}>                        
                    <Card.Subtitle>
                        <p style={{padding:"0.5%",textAlign:"justify", fontSize:"1.05em", lineHeight:1.5}}>
                            Pada bagian ini, saya akan menjelaskan hal-hal yang telah saya pelajari pada mata kuliah Sistem dan Arsitektur Komputer.
                            Bagi saya, mata kuliah ini cukup unik, karena meskipun saya tertarik belajar mengenai teknologi, saya mengalami permasalahan
                            yang sama seperti yang saya alami sebelum memasuki jurusan ini, yakni saya tidak gemar belajar mata kuliah ini. Mata kuliah ini
                            menjelaskan mengenai struktur dari sebuah komputer dan cara kerjanya secara mendetail dan per komponen. Misalnya, apa itu RAM
                            dan mengapa RAM itu penting adanya dalam sebuah komputer. <br/><br/>
                            Sebenarnya, saya bisa melihat sikap saya terhadap kehidupan saya sendiri ketika saya sedang mempelajari materi-materi
                            yang diajarkan dalam mata kuliah ini. Saya hanya ingin memecahkan masalah dan belajar, tanpa benar-benar mengetahui
                            siapa diri saya, apa yang saya inginkan, dan apa tujuan yang saya ingin capai. Ketika saya belajar mengenai Sistem dan Arsitektur
                            Komputer, saya merasa bahwa saya tidak ingin mengetahui apa itu komputer dan mengapa komputer diciptakan, tetapi hanya ingin
                            mengetahui cara memrogram yang baik pada komputer.
                        </p>
                        <img src="https://img.pngio.com/understanding-computer-architecture-gambas-magazine-computer-architecture-png-460_259.png" style={{width:"50%",height:"50%"}}></img><br/><br/>                             
                    </Card.Subtitle>
                    <Card.Text style={{fontSize:"1em", lineHeight:1.5}}>
                        <p style={{textAlign:"justify"}}>
                            Dua Injil singkat ini kemudian menyadarkan saya mengenai pentingnya mengenal diri sendiri dan mempelajari mata kuliah ini: <br/>
                        </p>
                        <p style={{textAlign:"center"}}> 2 Korintus 13:5 - <i>"Ujilah dirimu sendiri, apakah kamu tetap tegak di dalam iman. Selidikilah dirimu!  
                            Apakah kamu tidak yakin akan dirimu, bahwa Kristus Yesus ada di dalam diri kamu?"</i><br/>

                            Kejadian 1:26 - <i>"Berfirmanlah Allah: "Baiklah Kita menjadikan manusia menurut gambar dan rupa Kita, supaya mereka berkuasa  
                            atas ikan-ikan di laut dan burung-burung di udara dan atas ternak dan atas seluruh bumi dan atas 
                            segala binatang melata yang merayap di bumi."</i><br/> 
                        </p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWHc56ZmIVk7U4-tdvJO2Ktsz31IRpfUSVw&usqp=CAU" style={{width:"40%",height:"40%"}}></img><br/><br/>
                        <p style={{textAlign:"justify"}}>
                            Mengapa 2 perikop Injil tersebut penting bagi saya? Pertama, pada surat kedua Rasul Paulus kepada Jemaat di Korintus, beliau mengatakan,
                            bahwa kita harus memastikan bahwa Tuhan Yesus ada dalam diri kita. Kita ingin supaya pilihan-pilihan dan keputusan yang kita ambil
                            didasarkan atas ajaran-Nya, dan kita tidak jauh-jauh dari-Nya. Lalu, pada Kitab Kejadian, Allah berfirman
                            bahwa manusia diciptakan secitra dengan Allah. Sehingga, Tuhan ingin bahwa manusia bertindak dan berperilaku seperti-Nya.
                            Ternyata, setelah berefleksi, mempelajari struktur dan arsitektur dari sebuah komputer bisa menjadi analogi yang baik untuk perikop ini.
                            Kita sebagai manusia menciptakan komputer untuk membantu kehidupan kita dan pekerjaan kita. Kita menciptakan komputer, terutama, dengan
                            kemampuan untuk berpikir dan menjalankan instruksi dengan baik, layaknya seperti seorang manusia, seperti diri kita sendiri. Sehingga,
                            karena komputer merupakan benda mati, kita harus memastikan, sebagai manusia yang mengontrol dan berada dalam "diri" sebuah komputer, 
                            apakah kita layak disebut sebagai "pengendali" yang benar? Apakah kita bisa mengendalikan komputer sesuai dengan keinginan kita?
                            Mindset ini akhirnya hadir pada diri saya setelah berefleksi mengenai pentingnya mempelajari mata kuliah ini. Kita harus bertanya,
                            apakah kita sudah mengendalikan alat-alat yang kita miliki dengan benar, alat-alat yang kita ciptakan untuk serupa dengan kita, penciptanya?
                        </p>
                        <p style={{textAlign:"justify"}}>
                            Sehingga, setelah merefleksikan hal ini, saya menjadi semakin nyaman mempelajari mata kuliah ini. Saya juga sangat berterima kasih kepada
                            Tuhan karena telah menyadarkan saya mengenai pentingnya mengenal diri saya sendiri, dan pentingnya menyadari dan memastikan dengan betul
                            bahwa di dalam diri saya, ada Tuhan Yesus, yang mengendalikan sikap dan keputusan saya supaya secitra dengan-Nya dan ajaran-ajarannya.
                        </p> 
                                                
                    </Card.Text>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <a href="/jurusan"><button class="btn btn-outline-warning">Back</button></a>
                        <a href="/ompi"><button class="btn btn-outline-warning">Next</button></a>
                    </div>
                    
                </Card.Body>
            </Card>
    </div>

</div>     

  )
}


export default Arsikom;
