import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class FileService {
  getHello(): string {
    return 'this is hello router get';
  }
  postHello(): string {
    return 'this is hello router post';
  }
  /**
   * 
   * @param path 传入的父级路径
   * @returns 列出父级路径下所有的文件和文件夹
   */
  listByPath(pathString: string): string[] {
    const ls = fs.readdirSync(path.normalize(pathString))
    return ls
  }
  delete(pathString: string): string {
    console.log('111')
    console.log(path.normalize(pathString))
    if (fs.existsSync(path.normalize(pathString))) {
      const fs = require('fs');
      
      fs.stat(path.normalize(pathString), function(err, stats) {
        if (err) {
          // 处理错误
        } else {
          if (stats.isDirectory()) {
            console.log('目标路径是文件夹');
            fs.rmdir(path.normalize(pathString), ()=>{});
          } else {
            console.log('目标路径不是文件夹');
            fs.unlinkSync(path.normalize(pathString))
          }
        }
      });

    }
    return ''
  }


}
