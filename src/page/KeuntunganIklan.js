import React from 'react';
import '../css/KeuntunganIklan.css';
import {Container} from "reactstrap";

export default class KeuntunganIklan extends React.Component {

    render() {
        return (
            <Container className="p-5">
                <p className="title text-center mb-4">Keuntungan Iklan & Membership</p>
                <div className="section-1 mb-2">
                    PT. JARKONS Indonesia, sebagai pencipta dan pengelola sistus informasi berbasis web www.jarkons.com
                    (Sistem informasi Kontraktor Proyek Konstruksi) senantiasa
                    melakukan sosialisasi secara luar kepada para pengguna informasi Jarkons , sehingga para perusahaan
                    pemasang iklan akan memperoleh keuntungan sebagai berikut :
                </div>

                <ol className="section-1 font-weight-bold">
                    <li>Perusahaan akan lebih dikenal oleh masyarakan luas, khususnya para pengguna jasa dan
                        konstruksi
                        (pengguna www.jarkons.com)</li>
                    <li>Perusahaan dapat menampilkan dan memperbaharui informasi data perusahaan setiap waktu</li>
                    <li>Situr www.jarkons.com di desain dengan tampilan yang dapat mempermudah pengguna dan pencari
                        informasi berdasarkan kategori/jenis perusahaan dan
                        spesifikasi produk material atau jasi pendukung pelaksana konstruksi</li>
                    <li>Informasi tentang produk material maupun jasa yang ditampilkan secara menarikakan menambah
                        daya
                        tarik calon mitra kerja atau pengguna jasa</li>
                    <li>Penyajian informasi yang valid dan update setiap waktu</li>
                </ol>
            </Container>
        )
    }
}
