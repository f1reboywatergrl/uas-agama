import React, {useContext} from "react"
import {Card, Fade} from 'react-bootstrap'

const Ompi = ()=>{

  return(
    <div className="w3-animate-bottom" style={{width:"65%",margin: "0 auto",paddingBottom:"1%"}}>
    <div>
        <h1>Mata Kuliah Organisasi Manajemen dan Perusahaan Industri</h1>
            <Card style={{width:"85%", margin:"1% auto"}}>
                <Card.Body style={{background:"#243140", lineHeight:1.5}}>                        
                    <Card.Subtitle>
                        <p style={{padding:"0.5%",textAlign:"justify", fontSize:"1.15em", lineHeight:1.5}}>
                            Pada bagian ini, saya akan menjelaskan hal-hal yang telah saya pelajari pada mata kuliah Organisasi Manajemen dan Perusahaan Industri.
                            Mata kuliah yang cukup menonjol bagi saya, mata kuliah ini tidak memfokuskan kami kepada teknologi maupun pemrograman,
                            namun struktur dari sebuah organisasi dan cara me-<i>manage</i> nya. Disini kami belajar hal-hal seperti sejarah perkembangan manajemen
                            dari sebuah organisasi, jenis-jenis struktur organisasi yang masih digunakan di dunia, dan hal-hal yang harus diperhatikan
                            ketika ingin memilih model/struktur organisasi sesuai dengan sumber daya dan tujuan yang dimiliki.
                            <br/><br/>
                            Beberapa poin, seperti mempelajari sesuatu dengan baik supaya kita, pengguna/pengendalinya, dapat mendapat hasil yang diinginkan, telah
                            saya bahas pada bagian sebelumnya. Disini, saya akan menambahkan perspektif baru yang saya dapatkan ketika mempelajari mata kuliah ini.
                        </p>     
                                                
                    </Card.Subtitle>
                    <Card.Text style={{fontSize:"1.1em"}}>
                        <p style={{textAlign:"justify"}}>
                            Kedua ayat ini menjadi sorotan ketika membicarakan hal-hal yang saya pelajari pada mata kuliah ini: <br/>
                        </p>
                        <p style={{textAlign:"center"}}> Titus 2:7 - <i>"Dalam segala hal, hendaklah engkau menjadi teladan kelakuan yang baik. 
                            Kalau engkau mengajar, engkau harus jujur dan bersungguh-sungguh."</i><br/>

                            Matius 7:12 - <i>"Segala sesuatu yang kamu kehendaki supaya orang perbuat kepadamu, 
                                perbuatlah demikian juga kepada mereka."</i><br/> 
                        </p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XfU2VmHh_lG9hOP8DBllHKgjIzsdJH9wBA&usqp=CAU"></img>
                        <p style={{textAlign:"justify"}}>
                            Dua ayat ini mengajarkan cara kita sebagai manusia bertindak terhadap manusia lainnya. Dalam mempelajari struktur organisasi,
                            saya mempelajari bahwa dulu, pekerja pada sebuah industri, sering diperlakukan secara tidak adil. Seringkali pemiliki pabrik/
                            perusahaan mempekerjakan karyawannya dan memperlakukan mereka secara semena-mena, tanpa mengetahui ataupun memikirkan perasaan mereka.
                            Saya merasa bahwa hal ini sangat menentang apa yang diajarkan pada injil Matius 7:12, bahwa kita harus memperlakukan terhadap orang lain
                            apa yang kita perlakukan kepada diri kita. Jika kita memperlakukan diri kita dengan baik, seharusnya kita juga memperlakukan orang lain
                            dengan baik. Tuhan mengajarkan kita cinta dan kasih sayang, dan sudah seharusnya kita sebagai manusia yang secitra dengannya menyebarluaskan
                            ajaran tersebut kepada sesama kita. Sehingga, sebagai seorang Katolik yang kelak akan mengepalai sebuah perusahaan industri, saya akan
                            memegang teguh ajaran Tuhan Yesus mengenai cinta kasih dan menyebarkannya, dan sejarah yang gelap ini supaya tidak terulang. 
                        </p>
                        <p style={{textAlign:"justify"}}>
                            Poin lain yang ingin saya sampaikan adalah dari Surat Rasul Paulus kepada Titus, dimana kita diajarkan untuk menjadi contoh yang baik
                            ketika kita menjadi seorang pemimpin. Sebagai seorang pemimpin organisasi yang baik, seharusnya kita menjadikan diri kita sebagai contoh
                            dan panutan bagi kolega-kolega kita. Misalnya, jika saya ingin sebuah pekerjaan selesai dengan cepat dan tepat, maka saya sebagai pemimpin
                            seharusnya memberikan contoh kedisiplinan dan ketelitian bagi kolega saya, supaya kelak mereka bisa mengikuti jejak saya, dan membentuk
                            kepribadian mereka sesuai dengan contoh yang telah saya berikan.  
                        </p> 
                                                
                    </Card.Text>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <a href="/arsikom"><button class="btn btn-outline-warning">Back</button></a>
                        <a href="/penutup"><button class="btn btn-outline-warning">Next</button></a>
                    </div>
                    
                </Card.Body>
            </Card>
    </div>

</div>     

  )
}


export default Ompi;
