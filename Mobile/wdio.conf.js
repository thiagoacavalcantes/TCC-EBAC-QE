exports.config = {

    runner: 'local',
    framework: 'mocha',
    user: "",
    key: "",
    app: "bs://ed9a0aba7d2b508f5bc68a3c7ad1808d48cd6ff6",
    sync: true,
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'localhost',
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 1,
    reporters: ['spec'],
    services: ['browserstack'],
    specs: [
        './tests/specs/e2eCadastro.spec.js'
    ],
    mochaOpts: {

        timeout: 300000
    },
    capabilities: [
        {
            'app': 'bs://ed9a0aba7d2b508f5bc68a3c7ad1808d48cd6ff6',
            'device': 'Samsung Galaxy S22 Ultra',
            'os_version': '12.0',
            'project': 'First NodeJS project',
            'build': 'browserstack-build-1',
            'name': 'first_test',
            'browserstack.local': false,
            'browserstack.debug': true
        },
    ]
};

