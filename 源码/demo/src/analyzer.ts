import cheerio from 'cheerio';
import { IAnalyzer } from './crowller';

interface INews {
  title: string,
  desc: string
}
interface IResponse {
  time: number,
  data: INews[]
}


export default class Analyzer {
  // 解析数据
  private parseData(html: string) {
    const $ = cheerio.load(html);
    const datas: INews[] = [];
    const plates = $('.plate');
    plates.map((index, element) => {
      const title  = $(element).find('.data2-p p').text();
      const desc   = $(element).find('.news-foot p').text();
      datas.push({ title, desc });
    })
    return {
      time: Date.now(),
      data: datas
    }
  }
   generateJsonContent(data: IResponse, filePath: string) {
    return JSON.stringify(data);
  }

   public analyze(html: string, filePath: string) {
    const infos = this.parseData(html);
    const fileContent = this.generateJsonContent(infos, filePath);
    return JSON.stringify(fileContent);
  }
}