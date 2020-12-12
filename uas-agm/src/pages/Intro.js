import React, {useContext} from "react"

const Intro = ()=>{

  return(
    <div className="w3-animate-bottom" style={{width:"75%",margin: "0 auto",padding:"1%"}}>
        <div className="jumbotron">
            <h2 class="display-3">Finding God in All Things</h2>
            <p class="lead">Menemukan Tuhan dan Ajaran-ajaranNya dalam Studiku</p>
            <hr class="my-4"/>
            <p>Sebuah Refleksi oleh Samuel Gondokusumo dari Program Studi Sistem dan Teknologi Informasi - 18219024<br/>
            
            </p>
            <p class="lead">
                <div style={{display:"flex",justifyContent:"center"}}>
                    <a class="btn btn-primary btn-lg" href="/passion" role="button" style={{marginRight:"1%"}}>Start Reading</a>  
                    <a class="btn btn-primary btn-lg" href="/about" role="button">About Me</a>                    
                </div>

            </p>
            <p>
                Ujian Akhir Semester KU2063 Agama dan Etika Katolik <br/>
                Kelas 02 <br/>
                Fakultas Seni Rupa dan Desain                
            </p>
            <p style={{fontSize:"0.9rem"}}>
                *Best viewed on a laptop or a wide screen
            </p>
        </div>     
    </div>

  )
}


export default Intro;
