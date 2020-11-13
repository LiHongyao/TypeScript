// ts -> .d.ts 翻译文件 -> js

import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import Analyzer from './analyzer'

export interface IAnalyzer {
  analyze: (html: String, filePath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, '../data/news.json');
  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }
  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);;
  }
  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }
  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }
}

const url = 'http://www.swcvc.net.cn/xyxw/xyxw.htm';


const analyzer = new Analyzer();
new Crowller(url, analyzer);