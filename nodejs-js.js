const request = require('request-promise');
const cheerio = require('cheerio');

const URL = 'https://ptax.bcb.gov.br/ptax_internet/consultarUltimaCotacaoDolar.do';

async function access() {
  const response = await request(URL);
  let $ = cheerio.load(response);
  let data = $('td[align=CENTER]').text();
  let dolar = $('td[align=right]').first().text();
  // console.log(response);

  console.log(data);
  console.log(dolar);
}
access();
