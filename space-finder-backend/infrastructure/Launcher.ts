import { SpaceStack } from "./SpaceStack";
import { App } from 'aws-cdk-lib';


const app = new App();

new SpaceStack(app, 'Space-finder', {
    stackName: 'SpaceFinder',
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    }
})