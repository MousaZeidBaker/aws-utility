import * as iam from "@aws-cdk/aws-iam";
import * as cdk from "@aws-cdk/core";

export class CdkDeployUser {
  constructor(stack: cdk.Stack) {
    // Create user
    const user = new iam.User(stack, "CdkDeployUser");

    // Add policy statements to the user
    // AWS STS AssumeRole access to CDK related roles. The roles are created on bootstrapping.
    const qualifier = "hnb659fds";
    user.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ["sts:AssumeRole"],
        resources: [
          `arn:aws:iam::${stack.account}:role/cdk-${qualifier}-cfn-exec-role-${stack.account}-${stack.region}`,
          `arn:aws:iam::${stack.account}:role/cdk-${qualifier}-deploy-role-${stack.account}-${stack.region}`,
          `arn:aws:iam::${stack.account}:role/cdk-${qualifier}-file-publishing-role-${stack.account}-${stack.region}`,
          `arn:aws:iam::${stack.account}:role/cdk-${qualifier}-image-publishing-role-${stack.account}-${stack.region}`,
        ],
      })
    );
  }
}
