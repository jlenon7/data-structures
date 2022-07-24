import { assert } from '@japa/assert'
import { TestSuite } from '@athenna/test'
import { specReporter } from '@japa/spec-reporter'
import { runFailedTests } from '@japa/run-failed-tests'
import { processCliArgs, configure, run } from '@japa/runner'

/*
|--------------------------------------------------------------------------
| Configure tests
|--------------------------------------------------------------------------
|
| The configure method accepts the configuration to configure the Japa
| tests runner.
|
| The first method call "processCliArgs" process the command line arguments
| and turns them into a config object. Using this method is not mandatory.
|
| Please consult japa.dev/runner-config for the config docs.
*/
configure({
  ...processCliArgs(process.argv.slice(2)),
  ...{
    suites: [
      {
        name: 'Unit',
        files: ['tests/Unit/**/*Test.js'],
        configure: suite => TestSuite.unitSuite(suite),
      },
    ],
    plugins: [assert(), runFailedTests()],
    reporters: [specReporter()],
    importer: filePath => TestSuite.importer(filePath),
  },
})

/*
|--------------------------------------------------------------------------
| Run tests
|--------------------------------------------------------------------------
|
| The following "run" method is required to execute all the tests.
|
*/
run()
