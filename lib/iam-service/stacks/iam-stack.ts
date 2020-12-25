import * as cdk from "@aws-cdk/core";

import { CdkDeployUser } from "../users/cdk-deploy-user";

export class IamStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CdkDeployUser(this);
  }
}
