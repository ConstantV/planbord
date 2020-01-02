var respons;
//info afspraken Table  = planning
app.get('/api/afspraken', (req, res) => {
  console.log('Afspraken opgevraagd');
  respons = '';
  var qry =
    'SELECT `p`.`start` AS `van` , `p`.`end` AS `tot`, `k`.`name` AS `klant`, `r`.`name` AS `werknemer` FROM `planning` AS `p` LEFT JOIN `customers` AS `k` ON `p`.`customer` = `k`.`ID` LEFT JOIN `resources` AS `r` ON `p`.`resource` = `r`.`ID` ORDER BY `van`;';

  cn.query(qry, function(err, results, fields) {
    results.forEach(element => {
      var datum = format(element.van, 'dd MMM yyyy');
      var start = format(element.van, 'HH:mm', locale);
      var end = format(element.tot, 'HH:mm', locale);
      var klant = element.klant;
      var werknemer = element.werknemer;

      respons += `Op ${datum} heeft ${klant} een afspraak van ${start} tot ${end} met ${werknemer}`;
      respons += '</br>';
    });

    res.send(respons);
  });
});
