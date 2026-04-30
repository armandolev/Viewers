window.config = {
  routerBasename: '/',
  dataSources: [{
    namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
    sourceName: 'dicomweb',
    configuration: {
      friendlyName: 'Mi Orthanc',
      name: 'orthanc',
      wadoUriRoot: 'https://orthanc-skpg.onrender.com/dicom-web',
      qidoRoot: 'https://orthanc-skpg.onrender.com/dicom-web',
      wadoRoot: 'https://orthanc-skpg.onrender.com/dicom-web',
      qidoSupportsIncludeField: false,
      supportsReject: false,
      imageRendering: 'wadors',
      thumbnailRendering: 'wadors',
      enableStudyLazyLoad: true,
    },
  }],
  defaultDataSourceName: 'dicomweb',
};
