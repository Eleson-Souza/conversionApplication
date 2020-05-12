const Reader = require('./Classes/Reader');
const Writer = require('./Classes/Writer');
const Processor = require('./Classes/Processor');
const Table = require('./Classes/Table');
const HtmlParser = require('./Classes/HtmlParser');
const PDFWriter = require('./Classes/PDFWriter');

var leitor = new Reader();
var escritor = new Writer();

async function main() {
    var dados = await leitor.Read('./users.csv');
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios);

    escritor.Write(`${Date.now()}.html`, html);
    PDFWriter.WritePDF(`${Date.now()}.pdf`, html);
} 

main();

