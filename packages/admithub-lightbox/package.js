Package.describe({
  name: "admithub:admithub-lightbox",
  summary: "popup lightbox for admit hub forum to college email leads",
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.use([
    'stylus',
    'admithub:admithub-common',
    'telescope:core@0.24.0',
    'percolatestudio:segment.io@=2.0.0_1',
    'admithub:dot-get@1.0.1'
  ]);

  api.addFiles('segment.js');
  api.addFiles('client/lightbox.html', 'client');
  api.addFiles('client/lightbox.js', 'client');
  api.addFiles('client/lightbox.styl', 'client');
  api.addFiles('server/methods.js', 'server');
});
