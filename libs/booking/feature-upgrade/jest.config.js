module.exports = {
  name: 'booking-feature-upgrade',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/feature-upgrade',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
