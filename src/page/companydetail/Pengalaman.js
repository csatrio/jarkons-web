import React from 'react';
import {Table} from 'reactstrap';

export default function (props) {
    const {data} = props;
    if(typeof(data) === 'undefined') return null;
    return (
        <div>
            <Table>
                <thead>
                <th>No</th>
                <th>Proyek</th>
                <th>Lokasi</th>
                <th>Pemberi Kerja</th>
                <th>Tahun</th>
                </thead>

                <tbody>
                {data.map((p, i) => {
                    const {uraian_pekerjaan, pemberi_kerja, tahun_pelaksanaan, nilai_kontrak} = p;
                    return (
                        <React.Fragment key={'pengalaman-kerja-' + i}>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{uraian_pekerjaan}</td>
                                <td>{pemberi_kerja}</td>
                                <td>{tahun_pelaksanaan}</td>
                                <td>{nilai_kontrak}</td>
                            </tr>
                        </React.Fragment>
                    )
                })}
                </tbody>
            </Table>
        </div>
    )
}
