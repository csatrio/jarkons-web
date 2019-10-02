import React from 'react';
import '../css/KeuntunganIklan.css';
import {Container} from "reactstrap";

export default class TentangJarkons extends React.Component {

    render() {
        return (
            <Container className="p-5">
                <p className="title text-center mb-4">Tentang Jarkons</p>
                <p className="section-1">
                    JarKons adalah media informasi berbasis WEB yang dikembangkan secara valid dan update setiap waktu
                    dalam rangka penyediaan dan pengelolaan data profil perusahaan
                    di bidang Industri Jasa Konstruksi (kontraktor, konsultan, developer dan lerevansir). JarKons dapat
                    diakses oleh berbagai pihak untuk mencari referensi bahan
                    material dan mitra kerja dalam persiapan maupun pelaksanaan suatu pekerjaan konstruksi, di mana pun
                    dan kapan pun. Dengan karakteristik data yang terverifikasi dan
                    mencakup seluruh Indonesia. Kami juga mempunyai keunggulan dalam konvergensi konten dari berbagai
                    media platform antara lain website, advetorial, serta media cetak
                    seperti buku
                </p>

                <p className="section-1 mb-3">
                    Dalam rangka memperluas penggunaan/pemanfaatan informasi yang tersedia pada JarKons, kami menjalin
                    kerjasama dalam rangka mensosialisasikan kepada
                    berbagai instansi (kementerian/lembaga) dan perusahaan-perusahaan dibidang industri jasa konstruksi,
                    diantaranya :
                </p>

                <ol className="section-1 font-weight-bold">
                    <li>Kementerian Pekerjaan Umum Republik Indonesia</li>
                    <li>Perusahaan Industri Konstruksi</li>
                    <li>Asosiasi Perusahaan Bidang Jasa/Industri Konstruksi</li>
                    <li>Asosiasi Profesi Bidang Jasa Konstruksi</li>
                </ol>
            </Container>
        )
    }
}
