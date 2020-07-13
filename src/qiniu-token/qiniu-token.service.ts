import { Injectable } from '@nestjs/common';
import qiniu from 'qiniu';
const accessKey = 'c6QQOQZDD7gdwCEfv7emWIIpZjcBnh6-Gk5x7XKL';
const secretKey = '31wo3Pj4xjFbbHl_eloWyKAAneq_2qP-EQb56TNg';
const bucket = 'our-photo';

@Injectable()
export class QiniuTokenService {

  async getToken() {
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const options = {
      scope: bucket,
      expires: 3600,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    return { token: uploadToken }
  }
}
