import React, {Component} from "react"
import {Card, Fade} from 'react-bootstrap'
import Photo from '../developer.jpg'

const About = () =>{

    return(
        <> 
        
            <div className="w3-animate-bottom" style={{width:"65%",margin: "0 auto",paddingBottom:"1%"}}>
                <div>
                    <h1>Tentang Saya</h1>
                        <Card style={{width:"85%", margin:"1% auto"}}>
                            <Card.Header style={{background:"#1F2833"}}>
                                <Card.Img variant="top" style={{width: "512px", height: "550px", objectFit: "cover",margin:"auto",display:"block"}} src={Photo} />
                                <Card.Title style={{marginTop:"2%",textAlign:"center",fontSize:"2.5em"}}><strong>Samuel Gondokusumo</strong></Card.Title>
                                                
                            </Card.Header>
                            <Card.Body>                        
                                <Card.Subtitle>
                                    <p style={{textAlign:"justify", fontSize:"1.25em"}}>Selamat datang! Saya Samuel Gondokusumo, mahasiswa tingkat dua dari jurusan
                                    Sistem dan Teknologi Informasi ITB angkatan 2019. Saya memiliki passion yang sangat kuat dalam bidang pemrograman, terutama
                                    dalam pemrograman aplikasi web dan ilmu data. <br/>
                                    "Give your 110% in everything" - Anonim</p>                             
                                </Card.Subtitle>
                                <Card.Text style={{textAlign:"justify"}}>
                                    <p style={{fontSize:"1.15em"}}>
                                        <strong>Tentang projek ini</strong>:<br/>
                                        Website ini memaparkan kisah saya menempuh pendidikan pada program studi Sistem dan Teknologi Informasi di ITB.
                                        Saya memfokuskan cerita penglaman-pengalaman saya pada sisi religius, menitikberatkan pada pentingnya refleksi
                                        dan kesadaran akan ajaran-ajaran Tuhan dalam pengambilan keputusan.<br/><br/>

                                        Untuk navigasi, Anda dapat memulai cerita secara kronologis dari halaman utama,
                                        atau langsung memilih halaman yang diinginkan dari opsi Menu di bagian kanan atas. Selamat membaca, dan
                                        terima kasih telah mengunjungi halaman ini!
                                    </p> 
                                                            
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </div>
 
            </div>            


        </>
    )
}

export default About;