import { App, GitHubSourceCodeProvider, RedirectStatus } from '@aws-cdk/aws-amplify-alpha';
import { Stack, StackProps, SecretValue } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class AmplifyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const amplifyApp = new App(this, 'av-converter-cra', {
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: 'CrypticSignal',
        repository: 'av-converter-amplify',
        oauthToken: SecretValue.secretsManager('CDK_Amplify_Token', {
          jsonField: 'CDK_Amplify_Token',
        }),
      }),
      autoBranchDeletion: true,
      customRules: [
        {
          source: '/<*>',
          target: '/index.html',
          status: RedirectStatus.NOT_FOUND_REWRITE,
        },
      ],
      customResponseHeaders: [
        {
          headers: {
            'Cdk-Stack': 'abc',
            'Cross-Origin-Embedder-Policy': 'require-corp',
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Test-Header': 'CDK-Stack',
            'X-Frame-Options': 'SAMEORIGIN',
          },
          pattern: '/*',
        },
      ],
    });

    amplifyApp.addBranch('main');
  }
}
