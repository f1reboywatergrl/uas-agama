import React, {useContext} from "react"
import {Card, Fade} from 'react-bootstrap'

const STI = ()=>{

  return(
    <div className="w3-animate-bottom" style={{width:"65%",margin: "0 auto",paddingBottom:"1%"}}>
    <div>
        <h1>Overview Program Studi</h1>
            <Card style={{width:"85%", margin:"1% auto", lineHeight:1.5}}>
                <Card.Body style={{background:"#243140"}}>                        
                    <Card.Subtitle>
                        <p style={{padding:"0.5%",textAlign:"justify", fontSize:"1.15em", lineHeight:1.5}}>
                            Setelah memilih program studi yang cocok untuk saya, saya kemudian memulai pembelajaran saya dalam program studi saya dengan giat.
                            Saya memilih program studi Sistem dan Teknologi Informasi, dan bukan Teknik Informatika, karena program studi ini menawarkan ilmu
                            yang lebih luas dibandingkan Teknik Informatika. Dalam jurusan ini, kami diberi kesempatan untuk belajar tidak hanya bidang teknikal
                            dan teknologi seperti pemrograman, tetapi juga ilmu bisnis dan manajemen, seperti bagaimana cara kita mem-<i>manage</i> sebuah perusahaan
                            atau organisasi.
                        </p>                             
                    </Card.Subtitle>
                    <Card.Text style={{fontSize:"1.1em", lineHeight:1.5}}>
                        <p style={{textAlign:"justify"}}>
                            Selain perumpamaan tentang Talenta yang telah saya bahas sebelumnya, keputusan saya juga didukung oleh injil Lukas 8:1-11 : <br/>
                        </p>
                        <p style={{textAlign:"center"}}><i>"Adalah seorang penabur keluar untuk menaburkan benihnya. Pada waktu ia menabur, sebagian benih itu jatuh di pinggir jalan, 
                            lalu diinjak orang dan burung-burung di udara memakannya sampai habis. Sebagian jatuh di tanah yang berbatu-batu, dan setelah tumbuh
                             ia menjadi kering karena tidak mendapat air. Sebagian lagi jatuh di tengah semak duri, dan semak itu tumbuh bersama-sama dan 
                             menghimpitnya sampai mati. Dan sebagian jatuh di tanah yang baik, dan setelah tumbuh berbuah seratus kali lipat." Setelah berkata 
                             demikian Yesus berseru: "Siapa mempunyai telinga untuk mendengar, hendaklah ia mendengar! " Murid-murid-Nya bertanya kepada-Nya, 
                             apa maksud perumpamaan itu. Lalu Ia menjawab: "Kepadamu diberi karunia untuk mengetahui rahasia Kerajaan Allah, tetapi kepada 
                             orang-orang lain hal itu diberitakan dalam perumpamaan, supaya sekalipun memandang, mereka tidak melihat dan sekalipun mendengar, mereka 
                             tidak mengerti. Inilah arti perumpamaan itu: Benih itu ialah firman Allah."</i><br/> 
                        </p>
                        <img src="https://sangsabda.files.wordpress.com/2015/01/n80.jpg"></img>
                        <p style={{textAlign:"justify"}}>
                            Perikop Injil ini memiliki 2 makna bagi saya. Pertama, dengan "menebar" diri saya dalam berbagai "ladang", saya berharap untuk bisa
                            mewartakan Kerajaan Allah dengan sarana yang lebih beragam. Jika saya membatasi diri saya hanya ke dalam satu disiplin, saya merasa 
                            bahwa kemampuan saya untuk mewartakan Kerajaan-Nya lebih sulit, dan lingkup saya lebih sempit. Selain itu, makna kedua dari Injil
                            ini adalah untuk tidak membatasi perjalanan belajar saya hanya ke dalam satu "ladang". Sebagai umat Katolik, saya seharusnya tidak
                            selektif dalam menuntut ilmu, namun menyebarkan diri saya ke dalam semua kesempatan yang saya bisa dapatkan, sebab terkadang, biji-biji
                            tersebut kelak bisa berkembang menjadi sesuatu yang indah. Sehingga, saya merasa bahwa perpaduan yang tepat antara bidang yang saya gemari
                            dengan Injil-injil yang diajarkan oleh Tuhan, adalah program studi Sistem dan Teknologi Informasi. 
                        </p>
                        <img src="https://pbs.twimg.com/profile_images/1258982865380896768/75hSx09s_400x400.jpg"></img>
                        <p style={{textAlign:"justify"}}>
                            Di dalam program studi ini, karena saya masih dalam semester 3, saya baru mengalami 6 mata kuliah program studi. Mata kuliah tersebut yakni
                            Sistem dan Arsitektur Komputer, Matematika STI, Probabilitas dan Statistik, Organisasi Manajemen dan Perusahaan Industri, Pemodelan Basis Data,
                            dan Algoritma dan Struktur Data. Saya akan menekankan penjelasan saya dengan hal-hal yang saya pelajari pada mata kuliah Sistem dan Arsitektur Komputer
                            dan Organisasi Manajemen dan Perusahan Industri. Hal ini bukan berarti saya tidak
                            merasakan hadirnya Tuhan pada 4 mata kuliah lainnya, namun saya ingin lebih menitikberatkan kedua mata kuliah ini karena saya merasakan adanya 
                            Tuhan dan ajaran-ajaranNya yang paling kuat dalam kedua mata kuliah ini.
                        </p> 
                                                
                    </Card.Text>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <a href="/passion"><button class="btn btn-outline-warning">Back</button></a>
                        <a href="/arsikom"><button class="btn btn-outline-warning">Next</button></a>
                    </div>
                    
                </Card.Body>
            </Card>
    </div>

</div>     

  )
}


export default STI;
