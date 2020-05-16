module.exports = {
  name: 'flights-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/flights-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
