window.config = {
  routerBasename: '/',
  extensions: [],
  modes: [],
  showStudyList: true,
  dataSources: [{
    namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
    sourceName: 'dicomweb',
    configuration: {
      friendlyName: 'Mi Orthanc',
      name: 'orthanc',
      wadoUriRoot: '/dicom-web',
      qidoRoot: '/dicom-web',
      wadoRoot: '/dicom-web',
      qidoSupportsIncludeField: false,
      supportsReject: false,
      imageRendering: 'wadors',
      thumbnailRendering: 'wadors',
      enableStudyLazyLoad: true,
      supportsFuzzyMatching: false,
    },
  }],
  defaultDataSourceName: 'dicomweb',
};
