let settings;

if (BUILD_MODE === 'debug') {
  settings = {
    mode: 'debug',
    GA: 'UA-XXXXX-X',
    social: {
      fb: {appID: 0},
      vk: {appID: 0},
      ok: {
        appID: 0,
        appKey: 'CBAHGDCOABABABABA',
      },
    },
  };
}

if (BUILD_MODE === 'dist') {
  settings = {
    mode: 'testing',
    GA: 'UA-XXXXX-X',
    social: {
      fb: {appID: 0},
      vk: {appID: 0},
      ok: {
        appID: 0,
        appKey: 'CBAHGDCOABABABABA',
      },
    },
  };
}

if (BUILD_MODE === 'prod') {
  settings = {
    mode: 'production',
    GA: 'UA-XXXXX-X',
    social: {
      fb: {appID: 0},
      vk: {appID: 0},
      ok: {
        appID: 0,
        appKey: 'CBAHGDCOABABABABA',
      },
    },
  };
}

export default settings;
