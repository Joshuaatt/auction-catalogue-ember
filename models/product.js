Auction.Product = DS.Model.extend({
  productName: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
