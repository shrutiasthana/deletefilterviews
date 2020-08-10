function deleteAllFilterViews() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var id = ss.getId();
 
  var myFilterViews = Sheets.Spreadsheets.get(id, {
    ranges: '</>',
    fields: 'sheets/filterViews/filterViewId',
  }).sheets[0].filterViews;
 
  Sheets.Spreadsheets.batchUpdate({
    requests: myFilterViews.map(function(e) {
      return { deleteFilterView: { filterId: e['filterViewId'] } };
    }),
  },id);
};
