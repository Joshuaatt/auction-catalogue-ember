Auction.Lot = DS.Model.extend({
  title: DS.attr(),
  products: DS.hasMany('product', {async: true})
});
